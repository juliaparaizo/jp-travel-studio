import type { Lang } from "@/lib/i18n";

/**
 * Calendar-date helpers. Trip dates are stored as "YYYY-MM-DD" strings and
 * must always be treated as calendar dates, never as UTC timestamps —
 * `new Date("2027-01-10")` parses as UTC midnight, which shifts to the
 * previous day in any timezone behind UTC. Every parse/format here goes
 * through local year/month/day components instead.
 */

const MONTHS_FULL: Record<Lang, string[]> = {
  pt: [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ],
  en: [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ],
};

const MONTHS_SHORT: Record<Lang, string[]> = {
  pt: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
  en: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
};

export const WEEKDAYS_SHORT: Record<Lang, string[]> = {
  pt: ["seg", "ter", "qua", "qui", "sex", "sáb", "dom"],
  en: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
};

export function parseISODate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function today(): Date {
  return startOfDay(new Date());
}

export function isSameDay(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() === startOfDay(b).getTime();
}

export function isBeforeDay(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() < startOfDay(b).getTime();
}

export function isAfterDay(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() > startOfDay(b).getTime();
}

export function isWithinDay(day: Date, start: Date, end: Date): boolean {
  const t = startOfDay(day).getTime();
  return t >= startOfDay(start).getTime() && t <= startOfDay(end).getTime();
}

export function addDays(date: Date, days: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

export function addMonths(date: Date, months: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + months, 1);
}

export function isSameMonth(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

/**
 * Core rule for the availability filter: a trip only matches when it fits
 * ENTIRELY inside the selected window — not just when the two ranges
 * overlap.
 */
export function isTripWithinAvailabilityWindow(
  tripStart: Date,
  tripEnd: Date,
  availabilityStart: Date,
  availabilityEnd: Date,
): boolean {
  return (
    !isBeforeDay(tripStart, availabilityStart) && !isAfterDay(tripEnd, availabilityEnd)
  );
}

/** Cells for a single month grid, Monday-first, padded with nulls so every row has 7 slots. */
export function getCalendarMatrix(year: number, month: number): (Date | null)[] {
  const firstOfMonth = new Date(year, month, 1);
  const startWeekday = (firstOfMonth.getDay() + 6) % 7; // Sun=0..Sat=6 -> Mon=0..Sun=6
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export function formatDateShort(date: Date, lang: Lang): string {
  return `${date.getDate()} ${MONTHS_SHORT[lang][date.getMonth()]}`;
}

export function formatMonthYear(date: Date, lang: Lang): string {
  return `${MONTHS_FULL[lang][date.getMonth()]} ${date.getFullYear()}`;
}

export function formatDateFull(date: Date, lang: Lang): string {
  const month = MONTHS_FULL[lang][date.getMonth()];
  return lang === "pt"
    ? `${date.getDate()} de ${month} de ${date.getFullYear()}`
    : `${month} ${date.getDate()}, ${date.getFullYear()}`;
}
