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

const EMAIL_PATTERN = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

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

  const { email, honeypot, consent } = body as Record<string, unknown>;

  if (typeof honeypot === "string" && honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof email !== "string" ||
    consent !== true ||
    email.trim().length > 120 ||
    !EMAIL_PATTERN.test(email.trim())
  ) {
    return NextResponse.json({ error: "invalid data" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL_TO;

  if (!apiKey || !notifyEmail) {
    console.error(
      "newsletter: RESEND_API_KEY or NOTIFY_EMAIL_TO is not configured",
    );
    return NextResponse.json(
      { error: "newsletter is not configured yet" },
      { status: 503 },
    );
  }

  const address = email.trim().toLowerCase();
  const resend = new Resend(apiKey);

  console.log("newsletter: new subscriber", address);

  let saved = false;
  try {
    const { error } = await resend.contacts.create({
      email: address,
      unsubscribed: false,
    });
    saved = !error;
    if (error) console.error("newsletter: failed to save contact", error);
  } catch (err) {
    console.error("newsletter: failed to save contact", err);
  }

  try {
    await resend.emails.send({
      from: "jp travel studio <oi@juliaparaizotravel.com>",
      to: notifyEmail,
      subject: "nova inscrição na newsletter",
      html: `
        <p><strong>e-mail:</strong> ${escapeHtml(address)}</p>
        <p style="color:#888;font-size:12px;">${
          saved
            ? "salvo nos contatos do Resend."
            : "não foi possível salvar nos contatos do Resend — guarde este e-mail manualmente."
        }</p>
      `,
    });
  } catch (err) {
    console.error("newsletter: failed to send notification", err);
    if (!saved) {
      return NextResponse.json(
        { error: "failed to subscribe, try again later" },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
