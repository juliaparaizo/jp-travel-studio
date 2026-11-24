import { tripsSorted, type Trip } from "@/lib/trips";
import { getTripProfile, type Pace, type Region, type Style } from "@/lib/trip-profiles";
import { parseISODate } from "@/lib/date-utils";

export type Lang = "pt" | "en";
export type Origin = "brasil" | "northAmerica" | "europe" | "other";

export type Profile = {
  origin: Origin;
  city: string;
  intl: boolean | null;
  budgetBand: number | null;
  budgetAll: boolean;
  flexibleDates: boolean;
  months: string[];
  maxDays: number | null;
  styles: Style[];
  mix: boolean;
  pace: Pace | null;
  companion: "alone" | "friend" | null;
  firstGroup: boolean | null;
  womenOnly: boolean | null;
  priority: "safety" | "friends" | "organization" | "price" | null;
};

export const BUDGET_BANDS = [
  { min: 0, max: 3000 },
  { min: 3000, max: 5000 },
  { min: 5000, max: 8000 },
  { min: 8000, max: 12000 },
  { min: 12000, max: 18000 },
  { min: 18000, max: Infinity },
] as const;

export const BRL_PER_USD = 5.5;

const WEIGHTS = { budget: 30, dates: 25, style: 20, duration: 10, location: 10, group: 5 };

// rough round-trip flight estimates in BRL (origin x destination region);
// only used to compare against the traveler's budget, always labeled as estimates
const FLIGHTS: Record<Origin, Record<Region, number>> = {
  brasil: { brasil: 1200, southAmerica: 2800, centralAmerica: 4500, europe: 5500, nordic: 6500, asia: 9500 },
  northAmerica: { brasil: 4500, southAmerica: 3500, centralAmerica: 2200, europe: 3500, nordic: 4500, asia: 6500 },
  europe: { brasil: 4500, southAmerica: 5000, centralAmerica: 5000, europe: 800, nordic: 1200, asia: 4500 },
  other: { brasil: 5000, southAmerica: 5000, centralAmerica: 5000, europe: 4000, nordic: 4500, asia: 4000 },
};

export function emptyProfile(): Profile {
  return {
    origin: "brasil",
    city: "",
    intl: null,
    budgetBand: null,
    budgetAll: false,
    flexibleDates: true,
    months: [],
    maxDays: null,
    styles: [],
    mix: false,
    pace: null,
    companion: null,
    firstGroup: null,
    womenOnly: null,
    priority: null,
  };
}

export type Match = {
  trip: Trip;
  score: number;
  full: boolean;
  reasons: string[];
  mismatches: string[];
  changes: string[];
  days: number;
  flightEstimate: number;
  totalCost: number;
  spots: number | null;
};

export function tripDays(t: Trip): number {
  const a = parseISODate(t.dateForSort).getTime();
  const b = parseISODate(t.dateForSortEnd).getTime();
  return Math.round((b - a) / 86400000) + 1;
}

export function parseSpots(t: Trip): number | null {
  const m = t.urgentBadge?.match(/(\d+)\s*(vagas?|spots?)/i);
  return m ? Number(m[1]) : null;
}

function monthKey(iso: string): string {
  return iso.slice(0, 7);
}

const styleNames: Record<Style, Record<Lang, string>> = {
  adventure: { pt: "aventura", en: "adventure" },
  nature: { pt: "natureza", en: "nature" },
  beach: { pt: "praia", en: "beach" },
  culture: { pt: "cultura", en: "culture" },
};

export function matchTrips(profile: Profile, lang: Lang, now: Date = new Date()): Match[] {
  const pt = lang === "pt";
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const budgetMax =
    profile.budgetBand === null ? Infinity : BUDGET_BANDS[profile.budgetBand].max;
  const money = (brl: number) =>
    pt ? `R$ ${Math.round(brl).toLocaleString("pt-BR")}` : `US$ ${Math.round(brl / BRL_PER_USD).toLocaleString("en-US")}`;

  const out: Match[] = [];

  for (const trip of tripsSorted) {
    if (trip.soldOut || trip.pending) continue;
    if (parseISODate(trip.dateForSort) < today) continue;

    const tp = getTripProfile(trip.slug);
    const needsIntl = tp.region !== "brasil";
    if (needsIntl && profile.intl === false && profile.origin === "brasil") continue;
    if (tp.mixed && profile.womenOnly === true) continue;

    const days = tripDays(trip);
    const flight = FLIGHTS[profile.origin][tp.region];
    const cost = profile.budgetAll
      ? trip.priceValue + flight + trip.priceValue * 0.12
      : trip.priceValue;

    const reasons: string[] = [];
    const mismatches: string[] = [];
    const changes: string[] = [];

    // budget
    let budget = 100;
    if (cost > budgetMax) {
      const over = cost / budgetMax;
      budget = over <= 1.1 ? 70 : over <= 1.3 ? 30 : 0;
      mismatches.push(
        pt
          ? `fica acima do seu orçamento (custo estimado ${money(cost)}${profile.budgetAll ? ", contando voo e extras" : ""}).`
          : `it's above your budget (estimated cost ${money(cost)}${profile.budgetAll ? ", counting flights and extras" : ""}).`,
      );
      changes.push(
        pt
          ? `um orçamento de cerca de ${money(cost)} ou mais`
          : `a budget of around ${money(cost)} or more`,
      );
    } else if (profile.budgetBand !== null) {
      reasons.push(
        pt
          ? `cabe no seu orçamento (${trip.priceDisplay} no pacote).`
          : `fits your budget (${trip.priceDisplay} for the package).`,
      );
    }

    // dates
    let dates = 100;
    if (!profile.flexibleDates && profile.months.length > 0) {
      const start = monthKey(trip.dateForSort);
      const end = monthKey(trip.dateForSortEnd);
      if (profile.months.includes(start)) {
        reasons.push(pt ? "sai no mês em que você pode viajar." : "departs in a month you're available.");
      } else if (profile.months.includes(end)) {
        dates = 70;
      } else {
        dates = 0;
        mismatches.push(
          pt
            ? `as datas (${trip.dates}) não batem com os meses que você escolheu.`
            : `the dates don't match the months you picked.`,
        );
        changes.push(pt ? "mais flexibilidade nas datas" : "more flexible dates");
      }
    }

    // duration
    let duration = 100;
    if (profile.maxDays !== null && days > profile.maxDays) {
      duration = 0;
      mismatches.push(
        pt
          ? `dura ${days} dias, mais do que os ${profile.maxDays} que você tem.`
          : `it lasts ${days} days, more than the ${profile.maxDays} you have.`,
      );
      changes.push(pt ? `ter ${days} dias livres` : `having ${days} days free`);
    } else if (profile.maxDays !== null) {
      reasons.push(pt ? `dura ${days} dias, dentro do seu tempo.` : `lasts ${days} days, within your time.`);
    }

    // style + pace
    let style = 100;
    const wanted = profile.mix ? [] : profile.styles;
    if (profile.mix) {
      style = tp.styles.length >= 3 ? 100 : tp.styles.length === 2 ? 80 : 55;
      if (tp.styles.length >= 2)
        reasons.push(
          pt
            ? `combina ${tp.styles.map((s) => styleNames[s].pt).join(", ")}.`
            : `combines ${tp.styles.map((s) => styleNames[s].en).join(", ")}.`,
        );
    } else if (wanted.length > 0) {
      const hit = wanted.filter((s) => tp.styles.includes(s));
      style = Math.round((hit.length / wanted.length) * 100);
      if (hit.length > 0)
        reasons.push(
          pt
            ? `tem ${hit.map((s) => styleNames[s].pt).join(" e ")}, o que você procura.`
            : `has ${hit.map((s) => styleNames[s].en).join(" and ")}, what you're after.`,
        );
    }
    let paceScore = 100;
    if (profile.pace) {
      const order: Pace[] = ["relaxed", "balanced", "adventurous"];
      const d = Math.abs(order.indexOf(profile.pace) - order.indexOf(tp.pace));
      paceScore = d === 0 ? 100 : d === 1 ? 65 : 25;
      if (d === 0) reasons.push(pt ? "o ritmo é o que você prefere." : "the pace is what you prefer.");
      if (d === 2)
        mismatches.push(
          pt
            ? tp.pace === "adventurous" ? "o ritmo é intenso, com bastante caminhada e aventura." : "o ritmo é bem tranquilo."
            : tp.pace === "adventurous" ? "the pace is intense, with lots of hiking and adventure." : "the pace is very relaxed.",
        );
    }
    const styleTotal = profile.pace ? Math.round(style * 0.7 + paceScore * 0.3) : style;

    // location / flights
    const loc = flight <= 1500 ? 100 : flight <= 3500 ? 80 : flight <= 5500 ? 60 : 40;
    if (profile.origin === "brasil" && !needsIntl)
      reasons.push(pt ? "é no Brasil, sem voo internacional." : "it's in Brazil, no international flight.");
    else if (loc >= 80)
      reasons.push(pt ? "o voo a partir da sua região tende a ser acessível." : "flights from your region tend to be accessible.");

    // group
    let group = 100;
    if (profile.firstGroup === true && tp.difficulty === "hard") {
      group = 50;
      mismatches.push(
        pt
          ? "é uma expedição puxada, com bastante preparo físico — vale conversar com a Julia se for sua primeira viagem em grupo."
          : "it's a demanding expedition that needs fitness — worth talking to Julia if it's your first group trip.",
      );
    }
    if (profile.priority === "safety" && !tp.mixed)
      reasons.push(pt ? "grupo só de mulheres, com host do começo ao fim." : "a women-only group with a host start to finish.");
    if (profile.priority === "organization")
      reasons.push(pt ? "roteiro, hospedagem e logística já organizados." : "itinerary, lodging and logistics already organized.");
    if (profile.priority === "price" && cost <= budgetMax)
      reasons.push(pt ? "boa relação entre preço e o que está incluso." : "good value for what's included.");

    const score = Math.round(
      (budget * WEIGHTS.budget +
        dates * WEIGHTS.dates +
        styleTotal * WEIGHTS.style +
        duration * WEIGHTS.duration +
        loc * WEIGHTS.location +
        group * WEIGHTS.group) /
        100,
    );

    if (tp.mixed)
      mismatches.push(
        pt
          ? "é um pacote misto, aberto a mulheres e homens (não é só para mulheres)."
          : "it's a mixed package, open to women and men (not women-only).",
      );
    if (trip.notIncluded.some((n) => /passagem|airfare/i.test(n)))
      mismatches.push(
        pt
          ? `a passagem aérea não está inclusa (estimativa grosseira de voo: ${money(flight)} ida e volta, varia muito).`
          : `airfare isn't included (rough flight estimate: ${money(flight)} round trip, varies a lot).`,
      );
    const spots = parseSpots(trip);
    if (spots === null)
      mismatches.push(pt ? "confirme as vagas com a Julia." : "confirm availability with Julia.");

    const full = budget >= 70 && dates >= 70 && duration === 100 && styleTotal >= 40;
    out.push({ trip, score, full, reasons, mismatches, changes, days, flightEstimate: flight, totalCost: cost, spots });
  }

  return out.sort((a, b) => b.score - a.score);
}

// one edition per destination, so the top 3 are three different trips
function onePerDestination(list: Match[]): Match[] {
  const seen = new Set<string>();
  return list.filter((m) => {
    if (seen.has(m.trip.destination)) return false;
    seen.add(m.trip.destination);
    return true;
  });
}

export function pickResults(all: Match[]): { matches: Match[]; alternatives: boolean } {
  const full = onePerDestination(all.filter((m) => m.full)).slice(0, 3);
  if (full.length > 0) return { matches: full, alternatives: false };
  return { matches: onePerDestination(all).slice(0, 3), alternatives: true };
}
