"use client";

import { useLanguage } from "@/lib/i18n";
import { testimonials, type Testimonial } from "@/lib/testimonials";
import { whatsappNumber } from "@/lib/trips";

function interleaveByDestination(items: Testimonial[]): Testimonial[] {
  const groups = new Map<string, Testimonial[]>();
  for (const item of items) {
    const group = groups.get(item.destination) ?? [];
    group.push(item);
    groups.set(item.destination, group);
  }
  const queues = Array.from(groups.values());
  const result: Testimonial[] = [];
  let lastDestination: string | null = null;

  while (result.length < items.length) {
    let picked = false;
    const order = [...queues].sort((a, b) => b.length - a.length);
    for (const queue of order) {
      if (queue.length === 0) continue;
      if (queue[0].destination === lastDestination && order.some((q) => q !== queue && q.length > 0)) {
        continue;
      }
      const next = queue.shift()!;
      result.push(next);
      lastDestination = next.destination;
      picked = true;
      break;
    }
    if (!picked) break;
  }
  return result;
}

const headingFont = {
  fontFamily: "var(--font-zt-bros-oskon-90s)",
  fontWeight: 400,
} as const;

const scriptFont = {
  fontFamily: "var(--font-pinyon-script)",
} as const;

const content = {
  label: { pt: "depoimentos", en: "testimonials" },
  title: { pt: "testemunhos", en: "testimonials" },
  subtitle: {
    pt: "palavras de quem topou embarcar sozinha e voltou com memórias incríveis e amizades pra vida toda!",
    en: "words from those who dared to go alone and came back with incredible memories and friendships for life!",
  },
  ctaTitle: {
    pt: "quer ser a próxima a contar essa história?",
    en: "want to be the next one telling this story?",
  },
  ctaButton: { pt: "fale comigo", en: "talk to me" },
};

const orderedTestimonials = interleaveByDestination(testimonials);

export default function Testemunhos() {
  const { lang } = useLanguage();

  return (
    <div>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden px-6 pb-16 pt-32">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/testimonials/grupo-lencois.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-black/40 to-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-4xl">
          <p className="text-xs tracking-[0.25em] text-[var(--foreground)]/80">
            {content.label[lang]}
          </p>
          <h1 className="mt-2 text-6xl sm:text-7xl md:text-8xl" style={headingFont}>
            {content.title[lang]}
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--foreground)]/80">
            {content.subtitle[lang]}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col gap-16">
          {orderedTestimonials.map((t, i) => {
            const flipped = i % 2 === 1;
            return (
              <div
                key={`${t.name}-${t.context}`}
                className={`flex flex-col items-center gap-8 md:gap-12 lg:items-stretch ${
                  flipped ? "lg:flex-row-reverse" : "lg:flex-row"
                } ${flipped ? "lg:mt-16" : ""}`}
              >
                <div className="w-full max-w-sm shrink-0 lg:w-[38%]">
                  {t.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={t.photo}
                      alt={t.name}
                      className={`aspect-[4/5] w-full rounded-3xl object-cover shadow-xl ${
                        flipped ? "lg:-rotate-2" : "lg:rotate-2"
                      }`}
                    />
                  ) : (
                    <div className="flex aspect-[4/5] w-full items-center justify-center rounded-3xl bg-[var(--foreground)]/5">
                      <span className="text-6xl" style={scriptFont}>
                        {t.name[0]}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col justify-center">
                  <span
                    className="text-6xl leading-none text-[var(--foreground)]/30"
                    style={scriptFont}
                  >
                    &ldquo;
                  </span>
                  <p className="-mt-4 whitespace-pre-line text-lg leading-relaxed text-[var(--foreground)]/90 sm:text-xl">
                    {lang === "en" ? t.quoteEn : t.quote}
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <span
                      className="h-px w-10 bg-[var(--foreground)]/40"
                      aria-hidden
                    />
                    <p className="text-sm tracking-wide">
                      <span style={headingFont} className="text-lg">
                        {t.name}
                      </span>{" "}
                      <span className="text-[var(--foreground)]/60">
                        — {lang === "en" ? t.contextEn : t.context}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-[var(--foreground)]/10 px-6 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl" style={headingFont}>
          {content.ctaTitle[lang]}
        </h2>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-[var(--foreground)] px-10 py-3 text-sm tracking-wide text-[var(--background)] transition-opacity hover:opacity-90"
        >
          {content.ctaButton[lang]}
        </a>
      </section>
    </div>
  );
}
