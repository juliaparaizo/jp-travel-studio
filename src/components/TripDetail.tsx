"use client";

import { trips, whatsappUrl } from "@/lib/trips";
import { localizeTrip } from "@/lib/trips-en";
import { useLanguage } from "@/lib/i18n";
import { ui } from "@/lib/ui-strings";
import TripGallery from "@/components/TripGallery";
import HeroCarousel from "@/components/HeroCarousel";
import SectionLabel from "@/components/SectionLabel";
import NotifyMeForm from "@/components/NotifyMeForm";
import Testimonials from "@/components/Testimonials";

const testimonialDestinationBySlug: Record<string, string> = {
  "lencois-maranhenses": "lencois",
  amazonia: "amazonia",
  "amazonia-2": "amazonia",
};

const headingFont = {
  fontFamily: "var(--font-zt-bros-oskon-90s)",
  fontWeight: 400,
} as const;

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-[var(--foreground)]/10 py-3 text-sm last:border-none">
      <span className="text-xs tracking-[0.15em] text-[var(--foreground)]/50">
        {label}
      </span>
      <span className="text-right">{value}</span>
    </div>
  );
}

export default function TripDetail({ slug }: { slug: string }) {
  const { lang } = useLanguage();
  const baseTrip = trips.find((t) => t.slug === slug);
  if (!baseTrip) return null;
  const trip = localizeTrip(baseTrip, lang);

  let sectionCount = 0;
  const nextSection = () => {
    sectionCount += 1;
    return sectionCount;
  };

  const flightHelpMessage =
    lang === "en"
      ? `Hi Julia, I need help with the flight for the ${trip.title} group trip (${trip.dates}). my departure city is [city] and my return city is [city].`
      : `Oi Julia, preciso de ajuda com a passagem pra viagem em grupo ${trip.title} (${trip.dates}). minha cidade de partida é [cidade] e minha cidade de retorno é [cidade].`;

  return (
    <article>
      <section className="relative flex h-[60vh] w-full items-end overflow-hidden">
        {trip.heroImages && trip.heroImages.length > 1 ? (
          <HeroCarousel images={trip.heroImages} alt={trip.title} />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={trip.heroImage}
            alt={trip.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-black/30 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-12">
          <p className="text-xs tracking-[0.25em] text-[var(--foreground)]/80">
            {trip.destination}
          </p>
          <h1 className="mt-2 text-5xl sm:text-6xl md:text-7xl" style={headingFont}>
            {trip.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[var(--foreground)]/80">
            <span>{trip.dates}</span>
            {trip.duration && <span>· {trip.duration}</span>}
            {trip.urgentBadge && (
              <span className="rounded-full bg-[var(--foreground)] px-3 py-1 text-xs text-[var(--background)]">
                {trip.urgentBadge}
              </span>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-16">
        <TripGallery slug={trip.slug} />

        {trip.pending ? (
          <div className="flex flex-col items-center gap-8 py-12 text-center">
            <p className="text-lg text-[var(--foreground)]/80">
              {ui.comingSoon[lang]}
            </p>
            <a
              href={whatsappUrl(trip.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--foreground)]/60 px-8 py-3 text-sm tracking-wide transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              {ui.knowMore[lang]}
            </a>
          </div>
        ) : (
          <>
            {/* summary card */}
            <section className="mt-16 rounded-3xl border border-[var(--foreground)]/15 bg-[var(--foreground)]/5 p-8 sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <p className="text-xs tracking-[0.2em] text-[var(--foreground)]/50">
                    {ui.allInclusive[lang]}
                  </p>
                  <p className="mt-2 text-4xl sm:text-5xl" style={headingFont}>
                    {trip.priceDisplay}
                  </p>
                  <p className="mt-1 text-xs text-[var(--foreground)]/60">
                    {ui.perPerson[lang]}
                  </p>
                </div>
                <a
                  href={whatsappUrl(trip.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block shrink-0 rounded-full bg-[var(--foreground)] px-8 py-3 text-sm tracking-wide text-[var(--background)] transition-opacity hover:opacity-90"
                >
                  {ui.closeMySpot[lang]}
                </a>
              </div>

              <div className="mt-8 border-t border-[var(--foreground)]/10 pt-2">
                <StatRow label={ui.destinationLabel[lang]} value={trip.destination} />
                <StatRow label={ui.datesLabel[lang]} value={trip.dates} />
                {trip.duration && (
                  <StatRow label={ui.durationLabel[lang]} value={trip.duration} />
                )}
              </div>
            </section>

            {trip.description && (
              <section className="mt-20">
                <SectionLabel number={nextSection()}>{ui.overview[lang]}</SectionLabel>
                <p className="mx-auto max-w-3xl leading-relaxed text-[var(--foreground)]/90">
                  {trip.description}
                </p>
              </section>
            )}

            {trip.forWhom.length > 0 && (
              <section className="mt-20">
                <SectionLabel number={nextSection()}>{ui.forWhom[lang]}</SectionLabel>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {trip.forWhom.map((f) => (
                    <div
                      key={f.title}
                      className="rounded-2xl border border-[var(--foreground)]/15 bg-[var(--foreground)]/5 p-6"
                    >
                      <h3 className="text-lg" style={headingFont}>
                        {f.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/80">
                        {f.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {trip.itinerary.length > 0 && (
              <section className="mt-20">
                <SectionLabel number={nextSection()}>{ui.itinerary[lang]}</SectionLabel>
                <ol className="flex flex-col gap-8">
                  {trip.itinerary.map((day) => (
                    <li key={day.day} className="flex gap-6">
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--foreground)]/30 text-lg"
                        style={headingFont}
                      >
                        {day.day}
                      </span>
                      <div>
                        <h3 className="text-lg" style={headingFont}>
                          {day.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/80">
                          {day.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {(trip.included.length > 0 || trip.notIncluded.length > 0) && (
              <section className="mt-20">
                <SectionLabel number={nextSection()}>{ui.included[lang]}</SectionLabel>
                <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                  {trip.included.length > 0 && (
                    <div>
                      <p className="mb-4 text-sm font-medium tracking-[0.15em] text-[var(--foreground)]/70">
                        {ui.included[lang]}
                      </p>
                      <ul className="flex flex-col gap-3 text-sm leading-relaxed text-[var(--foreground)]/85">
                        {trip.included.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span aria-hidden className="text-[var(--foreground)]/70">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {trip.notIncluded.length > 0 && (
                    <div>
                      <p className="mb-4 text-sm font-medium tracking-[0.15em] text-[var(--foreground)]/70">
                        {ui.notIncluded[lang]}
                      </p>
                      <ul className="flex flex-col gap-3 text-sm leading-relaxed text-[var(--foreground)]/60">
                        {trip.notIncluded.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span aria-hidden>—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}

            {trip.accommodation && (
              <section className="mt-20">
                <SectionLabel number={nextSection()}>{ui.accommodation[lang]}</SectionLabel>
                <p className="mx-auto max-w-3xl whitespace-pre-line text-sm leading-relaxed text-[var(--foreground)]/85">
                  {trip.accommodation}
                </p>
                {trip.accommodationImages && (
                  <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {trip.accommodationImages.map((src) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={src}
                        src={src}
                        alt=""
                        className="aspect-square w-full rounded-xl object-cover"
                      />
                    ))}
                  </div>
                )}
              </section>
            )}

            <section className="mt-20">
              <SectionLabel number={nextSection()}>{ui.investment[lang]}</SectionLabel>
              <div className="rounded-3xl border border-[var(--foreground)]/20 bg-[var(--foreground)]/5 p-10 text-center">
                <p className="text-[10px] tracking-[0.2em] text-[var(--foreground)]/50">
                  {ui.fromPrice[lang]}
                </p>
                <p className="mt-2 text-5xl" style={headingFont}>
                  {trip.priceDisplay}
                </p>
                {trip.priceInstallments && (
                  <p className="mt-3 text-sm text-[var(--foreground)]/70">
                    {trip.priceInstallments}
                  </p>
                )}
                {trip.paymentMethods.length > 0 && (
                  <div className="mt-6">
                    <p className="text-xs tracking-wide text-[var(--foreground)]/60">
                      {ui.howToPay[lang]}
                    </p>
                    <ul className="mt-3 flex flex-wrap justify-center gap-3 text-sm text-[var(--foreground)]/85">
                      {trip.paymentMethods.map((m) => (
                        <li
                          key={m}
                          className="rounded-full border border-[var(--foreground)]/25 px-4 py-1.5"
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <a
                  href={whatsappUrl(trip.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block rounded-full border border-[var(--foreground)]/60 px-10 py-3 text-sm tracking-wide transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                >
                  {ui.closeMySpot[lang]}
                </a>
                <div>
                  <a
                    href={whatsappUrl(flightHelpMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-xs tracking-wide text-[var(--foreground)]/60 underline underline-offset-4 hover:text-[var(--foreground)]"
                  >
                    {ui.flightHelp[lang]}
                  </a>
                </div>
                {trip.agency && (
                  <p className="mt-6 text-xs text-[var(--foreground)]/50">
                    {ui.operatedBy[lang]} {trip.agency}
                  </p>
                )}
              </div>
            </section>

            {trip.travelRequirements && (
              <section className="mt-20">
                <SectionLabel number={nextSection()}>
                  {ui.travelRequirements[lang]}
                </SectionLabel>
                <div className="mx-auto max-w-3xl rounded-2xl border-2 border-amber-500/50 bg-amber-500/10 p-6 sm:p-8">
                  <p className="text-sm leading-relaxed text-[var(--foreground)]/90">
                    {trip.travelRequirements}
                  </p>
                </div>
              </section>
            )}

            {trip.faqs.length > 0 && (
              <section className="mt-20">
                <SectionLabel number={nextSection()}>{ui.faq[lang]}</SectionLabel>
                <div className="flex flex-col gap-3">
                  {trip.faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-2xl border border-[var(--foreground)]/15 bg-[var(--foreground)]/5 px-6 py-4"
                    >
                      <summary className="cursor-pointer list-none text-sm tracking-wide marker:hidden">
                        {faq.question}
                      </summary>
                      <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-[var(--foreground)]/80">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <section className="mt-20">
              <NotifyMeForm destination={trip.destination} tripSlug={trip.slug} />
            </section>
          </>
        )}
      </div>

      {!trip.pending && testimonialDestinationBySlug[trip.slug] && (
        <Testimonials destination={testimonialDestinationBySlug[trip.slug]} />
      )}
    </article>
  );
}
