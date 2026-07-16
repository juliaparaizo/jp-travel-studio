import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const NAME_PATTERN = /^[\p{L}\p{M}\s'.-]{2,80}$/u;
const PHONE_PATTERN = /^[+\d][\d\s().-]{7,19}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_SHORT = 300;
const MAX_LONG = 2000;
const MAX_LIST_ITEMS = 20;

function isShortString(v: unknown, max = MAX_SHORT): v is string {
  return typeof v === "string" && v.length <= max;
}

function isStringArray(v: unknown, max = MAX_LIST_ITEMS): v is string[] {
  return (
    Array.isArray(v) &&
    v.length <= max &&
    v.every((item) => isShortString(item))
  );
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "too many requests, try again later" },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid request" }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const { honeypot } = b;

  // honeypot field: real users never fill this hidden input
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const {
    destinationText,
    hasSpecificDate,
    specificDate,
    availableDuration,
    companions,
    companionsOther,
    childrenInfo,
    boughtTickets,
    scenarios,
    scenariosOther,
    objectives,
    objectivesOther,
    comfortLevel,
    comfortOther,
    travelPace,
    logisticPrefs,
    budgetRange,
    priorityExperiences,
    additionalNotes,
    name,
    phone,
    email,
    birthDate,
  } = b;

  if (
    !isShortString(name) ||
    !NAME_PATTERN.test(name.trim()) ||
    !isShortString(phone) ||
    !PHONE_PATTERN.test(phone.trim()) ||
    !isShortString(email) ||
    !EMAIL_PATTERN.test(email.trim()) ||
    !isShortString(birthDate, 20) ||
    !isShortString(destinationText, MAX_LONG) ||
    (hasSpecificDate !== "" && hasSpecificDate !== "yes" && hasSpecificDate !== "no") ||
    !isShortString(specificDate, 40) ||
    !isShortString(availableDuration) ||
    !isShortString(companions) ||
    !isShortString(companionsOther) ||
    !isShortString(childrenInfo) ||
    (boughtTickets !== "" && boughtTickets !== "yes" && boughtTickets !== "no") ||
    !isStringArray(scenarios) ||
    !isShortString(scenariosOther) ||
    !isStringArray(objectives) ||
    !isShortString(objectivesOther) ||
    !isShortString(comfortLevel) ||
    !isShortString(comfortOther) ||
    !isShortString(travelPace) ||
    !isStringArray(logisticPrefs) ||
    !isShortString(budgetRange) ||
    !isShortString(priorityExperiences, MAX_LONG) ||
    !isShortString(additionalNotes, MAX_LONG)
  ) {
    return NextResponse.json({ error: "invalid data" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL_TO;

  if (!apiKey || !notifyEmail) {
    console.error(
      "planejar: RESEND_API_KEY or NOTIFY_EMAIL_TO is not configured",
    );
    return NextResponse.json(
      { error: "notifications are not configured yet" },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const esc = (v: string) => escapeHtml(v.trim());
  const escList = (v: string[]) => esc(v.join(", "));

  const rows: [string, string][] = [
    ["destino desejado", esc(destinationText)],
    [
      "datas",
      hasSpecificDate === "yes" ? esc(specificDate) : esc(availableDuration),
    ],
    [
      "acompanhantes",
      `${esc(companions)}${companionsOther ? ` — ${esc(companionsOther)}` : ""}${childrenInfo ? ` — ${esc(childrenInfo)}` : ""}`,
    ],
    ["passagens já compradas", boughtTickets === "yes" ? "sim" : "ainda não"],
    ["cenários", `${escList(scenarios)}${scenariosOther ? ` — ${esc(scenariosOther)}` : ""}`],
    ["objetivos", `${escList(objectives)}${objectivesOther ? ` — ${esc(objectivesOther)}` : ""}`],
    ["conforto/ritmo/logística", `${esc(comfortLevel)}${comfortOther ? ` — ${esc(comfortOther)}` : ""} | ${esc(travelPace)} | ${escList(logisticPrefs)}`],
    ["orçamento", esc(budgetRange)],
    ["prioridades", `${esc(priorityExperiences)}${additionalNotes ? ` | ${esc(additionalNotes)}` : ""}`],
    ["nome", esc(name)],
    ["whatsapp", esc(phone)],
    ["e-mail", esc(email)],
    ["nascimento", esc(birthDate)],
  ];

  // log every submission regardless of email outcome, so answers can be
  // recovered from Vercel logs if the email send fails
  console.log(
    "planejar: new submission",
    JSON.stringify(Object.fromEntries(rows)),
  );

  try {
    await resend.emails.send({
      from: "jp travel studio <onboarding@resend.dev>",
      to: notifyEmail,
      subject: `novo roteiro personalizado — ${name.trim()}`,
      html: `
        ${rows.map(([label, value]) => `<p><strong>${label}:</strong> ${value}</p>`).join("\n")}
        <p style="color:#888;font-size:12px;">essa pessoa preencheu o formulário de roteiro personalizado no site.</p>
      `,
    });
  } catch (err) {
    console.error("planejar: failed to send email", err);
    return NextResponse.json(
      { error: "failed to send, try again later" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
