import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { sanitizeProfile } from "@/lib/matchmaker-profile";
import { BUDGET_BANDS } from "@/lib/trip-matching";
import { trips } from "@/lib/trips";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const log = new Map<string, number[]>();

function limited(ip: string): boolean {
  const now = Date.now();
  const hits = (log.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  log.set(ip, hits);
  return hits.length > MAX_REQUESTS;
}

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const NAME = /^[\p{L}\p{M}\s'.-]{2,80}$/u;
const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;
const PHONE = /^[+\d][\d\s().-]{7,19}$/;
const INSTA = /^@?[A-Za-z0-9._]{1,30}$/;

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) return NextResponse.json({ error: "too many requests" }, { status: 429 });

  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid request" }, { status: 400 });
  }

  if (typeof b.honeypot === "string" && b.honeypot.length > 0) return NextResponse.json({ ok: true });

  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim().toLowerCase() : "";
  const whatsapp = typeof b.whatsapp === "string" ? b.whatsapp.trim() : "";
  const instagram = typeof b.instagram === "string" ? b.instagram.trim() : "";
  const profile = sanitizeProfile(b.profile);

  if (
    b.consent !== true ||
    !NAME.test(name) ||
    !EMAIL.test(email) ||
    (whatsapp && !PHONE.test(whatsapp)) ||
    (instagram && !INSTA.test(instagram)) ||
    !profile
  ) {
    return NextResponse.json({ error: "invalid data" }, { status: 400 });
  }

  const known = new Map(trips.map((t) => [t.slug, t.title]));
  const recommended = (Array.isArray(b.recommended) ? b.recommended : [])
    .slice(0, 3)
    .flatMap((r) => {
      const o = r as { slug?: unknown; score?: unknown };
      return typeof o.slug === "string" && known.has(o.slug) && typeof o.score === "number"
        ? [{ slug: o.slug, title: known.get(o.slug)!, score: Math.max(0, Math.min(100, Math.round(o.score))) }]
        : [];
    });

  const top = recommended[0]?.score ?? 0;
  const interest = top >= 85 ? "alto" : top >= 65 ? "médio" : "baixo";
  const band = profile.budgetBand === null ? "não informado" : BUDGET_BANDS[profile.budgetBand].max === Infinity ? `acima de R$ ${BUDGET_BANDS[profile.budgetBand].min}` : `até R$ ${BUDGET_BANDS[profile.budgetBand].max}`;

  const record = {
    name, email, instagram, whatsapp,
    origin: profile.origin, city: profile.city, budget: band,
    budgetIncludesEverything: profile.budgetAll,
    availability: profile.flexibleDates ? "flexível" : profile.months.join(", "),
    maxDays: profile.maxDays,
    interests: profile.mix ? ["um pouco de tudo"] : profile.styles,
    pace: profile.pace, firstGroupTrip: profile.firstGroup === null ? null : !profile.firstGroup,
    womenOnly: profile.womenOnly,
    recommended, interest, status: "novo",
  };
  console.log("matchmaker: new lead", JSON.stringify(record));

  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL_TO;
  if (!apiKey || !notifyEmail) {
    console.error("matchmaker: RESEND_API_KEY or NOTIFY_EMAIL_TO is not configured");
    return NextResponse.json({ error: "not configured yet" }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  try {
    await resend.contacts.create({ email, firstName: name.split(" ")[0], unsubscribed: false });
  } catch (err) {
    console.error("matchmaker: failed to save contact", err);
  }

  const rows: [string, string][] = [
    ["nome", name], ["e-mail", email], ["instagram", instagram || "—"], ["whatsapp", whatsapp || "—"],
    ["origem", `${profile.origin}${profile.city ? ` (${profile.city})` : ""}`],
    ["orçamento", `${band}${profile.budgetAll ? " (voo e extras inclusos)" : " (só pacote)"}`],
    ["disponibilidade", record.availability], ["máx. de dias", String(profile.maxDays ?? "—")],
    ["interesses", record.interests.join(", ") || "—"], ["ritmo", profile.pace ?? "—"],
    ["1ª viagem em grupo", profile.firstGroup === null ? "—" : profile.firstGroup ? "não" : "sim"],
    ["só mulheres", profile.womenOnly === null ? "—" : profile.womenOnly ? "sim" : "tanto faz"],
    ["melhores matches", recommended.map((r) => `${r.title} (${r.score}%)`).join(" · ") || "—"],
    ["nível de interesse", interest], ["status", "novo"],
  ];

  try {
    await resend.emails.send({
      from: "jp travel studio <oi@juliaparaizotravel.com>",
      to: notifyEmail,
      replyTo: email,
      subject: `novo lead do matchmaker — ${name} (${recommended[0]?.title ?? "sem match"})`,
      html: `<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows
        .map(([k, v]) => `<tr><td style="color:#888">${esc(k)}</td><td><strong>${esc(v)}</strong></td></tr>`)
        .join("")}</table>`,
    });
  } catch (err) {
    console.error("matchmaker: failed to send lead email", err);
    return NextResponse.json({ error: "failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
