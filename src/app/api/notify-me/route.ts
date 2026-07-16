import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// in-memory sliding-window rate limiter (best-effort; resets on cold start)
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
const WHATSAPP_PATTERN = /^[+\d][\d\s().-]{7,19}$/;

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

  const { name, whatsapp, destination, tripSlug, honeypot, consent } =
    body as Record<string, unknown>;

  // honeypot field: real users never fill this hidden input
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof whatsapp !== "string" ||
    typeof destination !== "string" ||
    typeof tripSlug !== "string" ||
    consent !== true ||
    !NAME_PATTERN.test(name.trim()) ||
    !WHATSAPP_PATTERN.test(whatsapp.trim()) ||
    destination.trim().length < 2 ||
    destination.trim().length > 120 ||
    !/^[a-z0-9-]{1,60}$/.test(tripSlug)
  ) {
    return NextResponse.json({ error: "invalid data" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL_TO;

  if (!apiKey || !notifyEmail) {
    console.error(
      "notify-me: RESEND_API_KEY or NOTIFY_EMAIL_TO is not configured",
    );
    return NextResponse.json(
      { error: "notifications are not configured yet" },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const safeName = escapeHtml(name.trim());
  const safeWhatsapp = escapeHtml(whatsapp.trim());
  const safeDestination = escapeHtml(destination.trim());

  // log every submission regardless of email outcome, so entries can be
  // recovered from Vercel logs if the email send fails
  console.log("notify-me: new submission", JSON.stringify({
    name: name.trim(),
    whatsapp: whatsapp.trim(),
    destination: destination.trim(),
    tripSlug,
  }));

  try {
    await resend.emails.send({
      from: "jp travel studio <onboarding@resend.dev>",
      to: notifyEmail,
      subject: `nova pessoa na lista de espera — ${destination.trim()}`,
      html: `
        <p><strong>destino:</strong> ${safeDestination} (${escapeHtml(tripSlug)})</p>
        <p><strong>nome:</strong> ${safeName}</p>
        <p><strong>whatsapp:</strong> ${safeWhatsapp}</p>
        <p style="color:#888;font-size:12px;">essa pessoa pediu pra ser avisada quando houver uma nova data pra esse destino. entre em contato direto pelo whatsapp acima quando tiver novidade.</p>
      `,
    });
  } catch (err) {
    console.error("notify-me: failed to send email", err);
    return NextResponse.json(
      { error: "failed to send, try again later" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
