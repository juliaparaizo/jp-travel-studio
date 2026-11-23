"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { ui } from "@/lib/ui-strings";

const headingFont = {
  fontFamily: "var(--font-zt-bros-oskon-90s)",
  fontWeight: 400,
} as const;

type Status = "idle" | "sending" | "success" | "error";

export default function NewsletterForm() {
  const { lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, honeypot, consent, lang }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="mx-auto w-full max-w-2xl px-6 pt-16">
      <div className="rounded-3xl border border-[var(--foreground)]/15 bg-[var(--foreground)]/5 p-8 text-center sm:p-10">
        {status === "success" ? (
          <p className="text-sm leading-relaxed text-[var(--foreground)]/85">
            {ui.newsletterSuccess[lang]}
          </p>
        ) : (
          <>
            <h3 className="text-2xl sm:text-3xl" style={headingFont}>
              {ui.newsletterTitle[lang]}
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[var(--foreground)]/75">
              {ui.newsletterSubtitle[lang]}
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col items-center gap-4"
            >
              <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  maxLength={120}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={ui.newsletterEmailPlaceholder[lang]}
                  aria-label={ui.newsletterEmailPlaceholder[lang]}
                  className="flex-1 rounded-full border border-[var(--foreground)]/20 bg-transparent px-5 py-3 text-sm outline-none transition-colors placeholder:text-[var(--foreground)]/40 focus:border-[var(--foreground)]/50"
                />
                <button
                  type="submit"
                  disabled={status === "sending" || !consent}
                  className="rounded-full bg-[var(--foreground)] px-8 py-3 text-sm tracking-wide text-[var(--background)] transition-opacity hover:opacity-90 disabled:opacity-40"
                >
                  {status === "sending"
                    ? ui.notifySending[lang]
                    : ui.newsletterButton[lang]}
                </button>
              </div>

              <label className="flex items-start gap-3 text-left text-xs leading-relaxed text-[var(--foreground)]/70">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--foreground)]"
                />
                {ui.newsletterConsent[lang]}
              </label>

              {status === "error" && (
                <p className="text-xs text-red-400">{ui.notifyError[lang]}</p>
              )}
            </form>
          </>
        )}
      </div>
    </section>
  );
}
