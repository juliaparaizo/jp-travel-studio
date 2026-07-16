"use client";

import Link from "next/link";
import { useState } from "react";
import { tripsSorted, type Trip } from "@/lib/trips";
import { localizeTrip } from "@/lib/trips-en";
import { useLanguage, type Lang } from "@/lib/i18n";
import { ui } from "@/lib/ui-strings";

type Filter = "todas" | "disponiveis" | "embreve" | "nacionais" | "internacionais";
type Sort = "data" | "az" | "menor" | "maior";

const filterLabels: { id: Filter; label: Record<Lang, string> }[] = [
  { id: "todas", label: { pt: "todas", en: "all" } },
  { id: "disponiveis", label: { pt: "disponíveis", en: "available" } },
  { id: "embreve", label: { pt: "em breve", en: "coming soon" } },
  { id: "nacionais", label: { pt: "nacionais", en: "national" } },
  { id: "internacionais", label: { pt: "internacionais", en: "international" } },
];

const sortLabels: { id: Sort; label: Record<Lang, string> }[] = [
  { id: "data", label: { pt: "data", en: "date" } },
  { id: "az", label: { pt: "a–z", en: "a–z" } },
  { id: "menor", label: { pt: "menor preço", en: "lowest price" } },
  { id: "maior", label: { pt: "maior preço", en: "highest price" } },
];

const subtitle: Record<Lang, string> = {
  pt: "escolha seu próximo destino. expedições exclusivas para mulheres, com vagas limitadas para garantir a melhor experiência.",
  en: "choose your next destination. women-only expeditions, with limited spots to guarantee the best experience.",
};

const sortByLabel: Record<Lang, string> = { pt: "ordenar:", en: "sort by:" };

function applyFilter(trips: Trip[], filter: Filter): Trip[] {
  switch (filter) {
    case "disponiveis":
      return trips.filter((t) => !t.pending);
    case "embreve":
      return trips.filter((t) => t.pending);
    case "nacionais":
      return trips.filter((t) => t.national);
    case "internacionais":
      return trips.filter((t) => !t.national);
    default:
      return trips;
  }
}

function applySort(trips: Trip[], sort: Sort): Trip[] {
  const list = [...trips];
  switch (sort) {
    case "az":
      return list.sort((a, b) => a.title.localeCompare(b.title));
    case "menor":
      return list.sort(
        (a, b) =>
          (a.priceValue || Number.MAX_SAFE_INTEGER) -
          (b.priceValue || Number.MAX_SAFE_INTEGER),
      );
    case "maior":
      return list.sort((a, b) => b.priceValue - a.priceValue);
    default:
      return list.sort((a, b) => a.dateForSort.localeCompare(b.dateForSort));
  }
}

export default function TripsSection() {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState<Filter>("todas");
  const [sort, setSort] = useState<Sort>("data");

  const visible = applySort(applyFilter(tripsSorted, filter), sort);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2
        className="mb-6 text-center text-4xl sm:text-5xl"
        style={{ fontFamily: "var(--font-zt-bros-oskon-90s)", fontWeight: 400 }}
      >
        {ui.tripsTitle[lang]}
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed text-[var(--foreground)]/70">
        {subtitle[lang]}
      </p>

      <div className="mb-4 flex justify-center">
        <div className="flex flex-wrap justify-center gap-1 rounded-full border border-[var(--foreground)]/15 bg-[var(--foreground)]/5 p-1.5">
          {filterLabels.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-5 py-2 text-sm transition-all duration-200 ${
                filter === f.id
                  ? "bg-[var(--foreground)] text-[var(--background)]"
                  : "text-[var(--foreground)]/70 hover:text-[var(--foreground)]"
              }`}
            >
              {f.label[lang]}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-16 flex items-center justify-center gap-3">
        <span className="text-xs tracking-[0.15em] text-[var(--foreground)]/50">
          {sortByLabel[lang]}
        </span>
        <div className="flex flex-wrap justify-center gap-1 rounded-full border border-[var(--foreground)]/15 bg-[var(--foreground)]/5 p-1">
          {sortLabels.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSort(s.id)}
              className={`rounded-full px-4 py-1.5 text-sm transition-all duration-200 ${
                sort === s.id
                  ? "bg-[var(--foreground)] text-[var(--background)]"
                  : "text-[var(--foreground)]/70 hover:text-[var(--foreground)]"
              }`}
            >
              {s.label[lang]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((baseTrip) => {
          const trip = localizeTrip(baseTrip, lang);
          return (
            <Link
              key={trip.slug}
              href={`/girl-trips/${trip.slug}`}
              className="group overflow-hidden rounded-2xl border border-[var(--foreground)]/15 bg-[var(--foreground)]/5 transition-colors hover:border-[var(--foreground)]/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={trip.cardImage}
                  alt={trip.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[var(--background)]/80 px-3 py-1 text-xs tracking-wide backdrop-blur">
                  {trip.destination}
                </span>
                {trip.urgentBadge && (
                  <span className="absolute right-4 top-4 rounded-full bg-[var(--foreground)] px-3 py-1 text-xs tracking-wide text-[var(--background)]">
                    {trip.urgentBadge}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3 p-6">
                <p className="text-xs tracking-wide text-[var(--foreground)]/60">
                  {trip.dates}
                </p>
                <h3
                  className="text-2xl"
                  style={{
                    fontFamily: "var(--font-zt-bros-oskon-90s)",
                    fontWeight: 400,
                  }}
                >
                  {trip.title}
                </h3>
                {trip.tagline && (
                  <p className="text-sm leading-relaxed text-[var(--foreground)]/80">
                    {trip.tagline}
                  </p>
                )}
                <div className="mt-2 border-t border-[var(--foreground)]/10 pt-4">
                  <p className="text-[10px] tracking-[0.2em] text-[var(--foreground)]/50">
                    {ui.fromPrice[lang]}
                  </p>
                  <p className="mt-1 text-lg">{trip.priceDisplay}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
