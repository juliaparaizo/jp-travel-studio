import { BUDGET_BANDS, emptyProfile, type Origin, type Profile } from "@/lib/trip-matching";
import type { Pace, Style } from "@/lib/trip-profiles";

const ORIGINS: Origin[] = ["brasil", "northAmerica", "europe", "other"];
const STYLES: Style[] = ["adventure", "nature", "beach", "culture"];
const PACES: Pace[] = ["adventurous", "balanced", "relaxed"];
const PRIORITIES = ["safety", "friends", "organization", "price"] as const;

const bool = (v: unknown): boolean | null => (typeof v === "boolean" ? v : null);

// the profile comes from the browser, so every field is re-validated server side
export function sanitizeProfile(input: unknown): Profile | null {
  if (!input || typeof input !== "object") return null;
  const p = input as Record<string, unknown>;
  const base = emptyProfile();

  const origin = ORIGINS.includes(p.origin as Origin) ? (p.origin as Origin) : null;
  if (!origin) return null;

  const band = typeof p.budgetBand === "number" && Number.isInteger(p.budgetBand) && p.budgetBand >= 0 && p.budgetBand < BUDGET_BANDS.length ? p.budgetBand : null;
  const months = Array.isArray(p.months)
    ? p.months.filter((m): m is string => typeof m === "string" && /^\d{4}-\d{2}$/.test(m)).slice(0, 24)
    : [];
  const maxDays = typeof p.maxDays === "number" && p.maxDays > 0 && p.maxDays <= 60 ? Math.round(p.maxDays) : null;

  return {
    ...base,
    origin,
    city: typeof p.city === "string" ? p.city.trim().slice(0, 80) : "",
    intl: bool(p.intl),
    budgetBand: band,
    budgetAll: p.budgetAll === true,
    flexibleDates: p.flexibleDates !== false || months.length === 0,
    months,
    maxDays,
    styles: Array.isArray(p.styles) ? p.styles.filter((s): s is Style => STYLES.includes(s as Style)) : [],
    mix: p.mix === true,
    pace: PACES.includes(p.pace as Pace) ? (p.pace as Pace) : null,
    companion: p.companion === "alone" || p.companion === "friend" ? p.companion : null,
    firstGroup: bool(p.firstGroup),
    womenOnly: bool(p.womenOnly),
    priority: PRIORITIES.includes(p.priority as (typeof PRIORITIES)[number]) ? (p.priority as Profile["priority"]) : null,
  };
}
