"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { ui } from "@/lib/ui-strings";

const headingFont = {
  fontFamily: "var(--font-zt-bros-oskon-90s)",
  fontWeight: 400,
} as const;

type Status = "idle" | "sending" | "success" | "error";

export default function NotifyMeForm({
  destination,
  tripSlug,
}: {
  destination: string;
  tripSlug: string;
}) {
  const { lang } = useLanguage();
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/notify-me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          whatsapp,
          destination,
          tripSlug,
          honeypot,
          consent,
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      setName("");
      setWhatsapp("");
      setConsent(false);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-[var(--foreground)]/15 bg-[var(--foreground)]/5 p-8 text-center sm:p-10">
        <p className="text-sm leading-relaxed text-[var(--foreground)]/85">
          {ui.notifySuccess[lang]}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-[var(--foreground)]/15 bg-[var(--foreground)]/5 p-8 sm:p-10">
      <h3 className="text-xl sm:text-2xl" style={headingFont}>
        {ui.notifyTitle[lang]}
      </h3>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--foreground)]/75">
        {ui.notifySubtitle[lang]}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <input
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            required
            minLength={2}
            maxLength={80}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={ui.notifyNamePlaceholder[lang]}
            className="rounded-xl border border-[var(--foreground)]/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--foreground)]/40 focus:border-[var(--foreground)]/50"
          />
          <input
            type="tel"
            required
            minLength={8}
            maxLength={20}
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder={ui.notifyWhatsappPlaceholder[lang]}
            className="rounded-xl border border-[var(--foreground)]/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--foreground)]/40 focus:border-[var(--foreground)]/50"
          />
        </div>

        <label className="flex items-start gap-3 text-xs leading-relaxed text-[var(--foreground)]/70">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--foreground)]"
          />
          {ui.notifyConsent[lang]}
        </label>

        {status === "error" && (
          <p className="text-xs text-red-400">{ui.notifyError[lang]}</p>
        )}

        <button
          type="submit"
          disabled={status === "sending" || !consent}
          className="self-start rounded-full bg-[var(--foreground)] px-8 py-3 text-sm tracking-wide text-[var(--background)] transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          {status === "sending" ? ui.notifySending[lang] : ui.notifyButton[lang]}
        </button>
      </form>
    </div>
  );
}
