"use client";

import { testimonials } from "@/lib/testimonials";
import { useLanguage } from "@/lib/i18n";
import { ui } from "@/lib/ui-strings";

export default function Testimonials() {
  const { lang } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2
        className="mb-16 text-center text-4xl sm:text-5xl"
        style={{ fontFamily: "var(--font-zt-bros-oskon-90s)", fontWeight: 400 }}
      >
        {ui.testimonialsTitle[lang]}
      </h2>

      <div className="columns-1 gap-8 md:columns-2">
        {testimonials.map((t) => (
          <div
            key={`${t.name}-${t.context}`}
            className="mb-8 break-inside-avoid overflow-hidden rounded-2xl border border-[var(--foreground)]/15 bg-[var(--foreground)]/5"
          >
            {t.photo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={t.photo}
                alt={t.name}
                className="max-h-80 w-full object-cover"
              />
            )}
            <div className="p-8">
            <span
              className="text-5xl leading-none text-[var(--foreground)]/40"
              style={{ fontFamily: "var(--font-pinyon-script)" }}
            >
              &ldquo;
            </span>
            <p className="mt-2 whitespace-pre-line text-[15px] leading-relaxed text-[var(--foreground)]/90">
              {lang === "en" ? t.quoteEn : t.quote}
            </p>
            <p className="mt-6 text-sm tracking-wide text-[var(--foreground)]/70">
              {t.name} — {lang === "en" ? t.contextEn : t.context}
            </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
