"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { ui } from "@/lib/ui-strings";
import {
  addDays,
  addMonths,
  formatDateFull,
  formatDateShort,
  formatMonthYear,
  getCalendarMatrix,
  isBeforeDay,
  isSameDay,
  isSameMonth,
  isWithinDay,
  startOfDay,
  today,
  WEEKDAYS_SHORT,
} from "@/lib/date-utils";

export type DateRange = { start: Date; end: Date };

type Props = {
  value: DateRange | null;
  onChange: (range: DateRange | null) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const CalendarIcon = () => (
  <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
    <rect
      x="2.5"
      y="4"
      width="15"
      height="13.5"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path d="M2.5 8h15" stroke="currentColor" strokeWidth="1.2" />
    <path d="M6.5 2.5v3M13.5 2.5v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export default function AvailabilityDateFilter({ value, onChange, open, onOpenChange }: Props) {
  const { lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dayRefs = useRef(new Map<string, HTMLButtonElement>());

  const [pendingStart, setPendingStart] = useState<Date | null>(value?.start ?? null);
  const [pendingEnd, setPendingEnd] = useState<Date | null>(value?.end ?? null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [leftMonth, setLeftMonth] = useState<Date>(() =>
    startOfDay(new Date((value?.start ?? new Date()).getFullYear(), (value?.start ?? new Date()).getMonth(), 1)),
  );
  const [focusedDate, setFocusedDate] = useState<Date>(() => value?.start ?? today());

  // Re-sync internal pending selection whenever the popover opens.
  useEffect(() => {
    if (!open) return;
    setPendingStart(value?.start ?? null);
    setPendingEnd(value?.end ?? null);
    setHoverDate(null);
    const anchor = value?.start ?? today();
    setLeftMonth(new Date(anchor.getFullYear(), anchor.getMonth(), 1));
    setFocusedDate(anchor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Click-outside + Escape to close.
  useEffect(() => {
    if (!open) return;
    function handlePointerDown(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onOpenChange(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onOpenChange(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onOpenChange]);

  // Keep the focused day's button focused as it moves via keyboard.
  useEffect(() => {
    if (!open) return;
    const key = focusedDate.toDateString();
    dayRefs.current.get(key)?.focus();
  }, [focusedDate, open]);

  const rightMonth = useMemo(() => addMonths(leftMonth, 1), [leftMonth]);

  function selectDay(day: Date, autoApplyOnComplete: boolean) {
    if (isBeforeDay(day, today())) return;

    if (!pendingStart || (pendingStart && pendingEnd)) {
      setPendingStart(day);
      setPendingEnd(null);
      return;
    }

    // pendingStart set, pendingEnd not yet.
    if (isBeforeDay(day, pendingStart)) {
      setPendingStart(day);
      setPendingEnd(null);
      return;
    }

    setPendingEnd(day);
    if (autoApplyOnComplete) {
      onChange({ start: pendingStart, end: day });
      onOpenChange(false);
    }
  }

  function handleConfirm() {
    if (pendingStart && pendingEnd) {
      onChange({ start: pendingStart, end: pendingEnd });
      onOpenChange(false);
    }
  }

  function handleClear() {
    setPendingStart(null);
    setPendingEnd(null);
    onChange(null);
  }

  function moveFocus(days: number) {
    setFocusedDate((prev) => {
      const next = addDays(prev, days);
      if (!isSameMonth(next, leftMonth) && !isSameMonth(next, rightMonth)) {
        setLeftMonth(new Date(next.getFullYear(), next.getMonth(), 1));
      }
      return next;
    });
  }

  function handleGridKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        moveFocus(1);
        break;
      case "ArrowLeft":
        e.preventDefault();
        moveFocus(-1);
        break;
      case "ArrowDown":
        e.preventDefault();
        moveFocus(7);
        break;
      case "ArrowUp":
        e.preventDefault();
        moveFocus(-7);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        selectDay(focusedDate, true);
        break;
      default:
        break;
    }
  }

  const buttonLabel = value
    ? `${formatDateShort(value.start, lang)} — ${formatDateShort(value.end, lang)}`
    : ui.availabilityLabel[lang];

  const hint = !pendingStart
    ? ui.availabilitySelectStart[lang]
    : !pendingEnd
      ? ui.availabilitySelectEnd[lang]
      : null;

  function renderMonth(monthDate: Date, side: "left" | "right" | "single") {
    const cells = getCalendarMatrix(monthDate.getFullYear(), monthDate.getMonth());
    const rangeStart = pendingStart;
    const rangeEnd = pendingEnd ?? (pendingStart && hoverDate && !isBeforeDay(hoverDate, pendingStart) ? hoverDate : null);
    const showPrev = side === "left" || side === "single";
    const showNext = side === "right" || side === "single";

    return (
      <div className="w-full">
        <div className="mb-3 flex items-center justify-between px-1">
          {showPrev ? (
            <button
              type="button"
              aria-label={ui.availabilityPrevMonth[lang]}
              onClick={() => setLeftMonth((m) => addMonths(m, -1))}
              className="flex h-7 w-7 items-center justify-center rounded-full text-[var(--foreground)]/60 transition-colors hover:bg-[var(--foreground)]/10 hover:text-[var(--foreground)]"
            >
              ‹
            </button>
          ) : (
            <span className="h-7 w-7" />
          )}
          <p className="text-xs tracking-[0.15em] text-[var(--foreground)]/80">
            {formatMonthYear(monthDate, lang)}
          </p>
          {showNext ? (
            <button
              type="button"
              aria-label={ui.availabilityNextMonth[lang]}
              onClick={() => setLeftMonth((m) => addMonths(m, 1))}
              className="flex h-7 w-7 items-center justify-center rounded-full text-[var(--foreground)]/60 transition-colors hover:bg-[var(--foreground)]/10 hover:text-[var(--foreground)]"
            >
              ›
            </button>
          ) : (
            <span className="h-7 w-7" />
          )}
        </div>

        <div className="grid grid-cols-7 gap-y-1 px-1">
          {WEEKDAYS_SHORT[lang].map((w) => (
            <span
              key={w}
              className="pb-1 text-center text-[10px] uppercase tracking-wide text-[var(--foreground)]/40"
            >
              {w}
            </span>
          ))}
          {cells.map((day, i) => {
            if (!day) return <span key={i} />;
            const isPast = isBeforeDay(day, today());
            const isStart = rangeStart && isSameDay(day, rangeStart);
            const isEnd = rangeEnd && isSameDay(day, rangeEnd);
            const inRange = rangeStart && rangeEnd && isWithinDay(day, rangeStart, rangeEnd);
            const isFocused = isSameDay(day, focusedDate);
            const key = day.toDateString();

            return (
              <button
                key={i}
                ref={(el) => {
                  if (el) dayRefs.current.set(key, el);
                  else dayRefs.current.delete(key);
                }}
                type="button"
                disabled={isPast}
                tabIndex={isFocused ? 0 : -1}
                aria-label={formatDateFull(day, lang)}
                aria-pressed={Boolean(isStart || isEnd)}
                aria-disabled={isPast}
                onMouseEnter={() => setHoverDate(day)}
                onFocus={() => setFocusedDate(day)}
                onClick={() => selectDay(day, true)}
                className={`relative flex h-9 w-9 items-center justify-center rounded-full text-sm outline-none transition-colors ${
                  isPast
                    ? "cursor-not-allowed text-[var(--foreground)]/20"
                    : "cursor-pointer text-[var(--foreground)]/85 hover:bg-[var(--foreground)]/15"
                } ${inRange && !isStart && !isEnd ? "bg-[var(--foreground)]/10" : ""} ${
                  isStart || isEnd
                    ? "bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--foreground)]"
                    : ""
                } focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]`}
              >
                {day.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => onOpenChange(!open)}
        className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-colors ${
          value
            ? "border-[var(--foreground)]/50 bg-[var(--foreground)]/10 text-[var(--foreground)]"
            : "border-[var(--foreground)]/15 bg-[var(--foreground)]/5 text-[var(--foreground)]/80 hover:border-[var(--foreground)]/35 hover:text-[var(--foreground)]"
        }`}
      >
        <CalendarIcon />
        <span>{buttonLabel}</span>
        {value && (
          <span
            role="button"
            tabIndex={0}
            aria-label={ui.availabilityClear[lang]}
            onClick={(e) => {
              e.stopPropagation();
              handleClear();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                e.stopPropagation();
                handleClear();
              }
            }}
            className="ml-1 flex h-4 w-4 items-center justify-center rounded-full text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
          >
            ×
          </span>
        )}
      </button>

      {/* Desktop popover */}
      {open && (
        <div
          role="dialog"
          aria-label={ui.availabilityLabel[lang]}
          onKeyDown={handleGridKeyDown}
          className="absolute left-1/2 top-full z-50 mt-3 hidden w-[36rem] -translate-x-1/2 animate-[calendarIn_180ms_ease-out] rounded-3xl border border-[var(--foreground)]/15 bg-[var(--background)] p-6 shadow-2xl md:block"
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm tracking-wide text-[var(--foreground)]/90">
              {hint ?? ui.availabilityLabel[lang]}
            </p>
            <button
              type="button"
              aria-label={ui.availabilityClose[lang]}
              onClick={() => onOpenChange(false)}
              className="text-[var(--foreground)]/50 hover:text-[var(--foreground)]"
            >
              ×
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {renderMonth(leftMonth, "left")}
            {renderMonth(rightMonth, "right")}
          </div>
          {value && (
            <div className="mt-4 flex justify-center border-t border-[var(--foreground)]/10 pt-4">
              <button
                type="button"
                onClick={handleClear}
                className="text-xs tracking-wide text-[var(--foreground)]/60 underline underline-offset-4 hover:text-[var(--foreground)]"
              >
                {ui.availabilityClear[lang]}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Mobile bottom sheet */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end md:hidden">
          <div
            className="absolute inset-0 bg-black/50 animate-[fadeIn_180ms_ease-out]"
            onClick={() => onOpenChange(false)}
          />
          <div
            role="dialog"
            aria-label={ui.availabilityLabel[lang]}
            onKeyDown={handleGridKeyDown}
            className="relative z-10 max-h-[85vh] w-full animate-[sheetUp_220ms_ease-out] overflow-y-auto rounded-t-3xl border-t border-[var(--foreground)]/15 bg-[var(--background)] px-5 pb-6 pt-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-base tracking-wide text-[var(--foreground)]">
                {ui.availabilityLabel[lang]}
              </p>
              <button
                type="button"
                aria-label={ui.availabilityClose[lang]}
                onClick={() => onOpenChange(false)}
                className="flex h-8 w-8 items-center justify-center text-lg text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
              >
                ×
              </button>
            </div>
            {hint && (
              <p className="mb-3 text-xs tracking-wide text-[var(--foreground)]/60">{hint}</p>
            )}
            {renderMonth(leftMonth, "single")}
            <div className="mt-6 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleClear}
                className="text-xs tracking-wide text-[var(--foreground)]/60 underline underline-offset-4"
              >
                {ui.availabilityClear[lang]}
              </button>
              <button
                type="button"
                disabled={!pendingStart || !pendingEnd}
                onClick={handleConfirm}
                className="flex-1 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm tracking-wide text-[var(--background)] transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
              >
                {ui.availabilityConfirm[lang]}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
