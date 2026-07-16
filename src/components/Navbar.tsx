"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage, type Lang } from "@/lib/i18n";
import { navItems } from "@/lib/ui-strings";
import { tripsSorted } from "@/lib/trips";
import { localizeTrip } from "@/lib/trips-en";

function LangToggle() {
  const { lang, setLang } = useLanguage();
  const options: Lang[] = ["pt", "en"];
  return (
    <div className="flex items-center gap-1 text-xs tracking-wide">
      {options.map((option, i) => (
        <span key={option} className="flex items-center gap-1">
          {i > 0 && <span className="opacity-40">·</span>}
          <button
            type="button"
            onClick={() => setLang(option)}
            className={`transition-opacity ${
              lang === option
                ? "opacity-100 underline underline-offset-4"
                : "opacity-50 hover:opacity-80"
            }`}
          >
            {option}
          </button>
        </span>
      ))}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="relative block h-14 w-14 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/jp-travel-studio-logo.svg"
            alt="jp travel studio"
            fill
            sizes="56px"
            className="object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              const isGirlTrips = item.href === "/girl-trips";

              if (!isGirlTrips) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`text-sm tracking-wide transition-opacity hover:opacity-100 ${
                        active ? "opacity-100 underline underline-offset-4" : "opacity-70"
                      }`}
                    >
                      {item.label[lang]}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-sm tracking-wide transition-opacity hover:opacity-100 ${
                      active ? "opacity-100 underline underline-offset-4" : "opacity-70"
                    }`}
                  >
                    {item.label[lang]}
                    <svg
                      viewBox="0 0 12 8"
                      className="h-2.5 w-2.5 fill-current opacity-70 transition-transform group-hover:rotate-180"
                      aria-hidden="true"
                    >
                      <path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </Link>

                  <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <ul className="flex flex-col gap-1 rounded-2xl border border-[var(--foreground)]/10 bg-[var(--background)] p-3 shadow-2xl">
                      {tripsSorted.map((t) => {
                        const trip = localizeTrip(t, lang);
                        return (
                          <li key={t.slug}>
                            <Link
                              href={`/girl-trips/${t.slug}`}
                              className="flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm tracking-wide opacity-80 transition-colors hover:bg-[var(--foreground)]/5 hover:opacity-100"
                            >
                              <span>{trip.title}</span>
                              <span className="text-xs opacity-50">{trip.dates}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          <LangToggle />

          <button
            type="button"
            aria-label="menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-px w-6 bg-[var(--foreground)] transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[var(--foreground)] transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-[var(--foreground)]/10 px-6 py-6 md:hidden">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const isGirlTrips = item.href === "/girl-trips";
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm tracking-wide ${active ? "opacity-100 underline underline-offset-4" : "opacity-70"}`}
                >
                  {item.label[lang]}
                </Link>
                {isGirlTrips && (
                  <ul className="mt-3 flex flex-col gap-3 border-l border-[var(--foreground)]/10 pl-4">
                    {tripsSorted.map((t) => {
                      const trip = localizeTrip(t, lang);
                      return (
                        <li key={t.slug}>
                          <Link
                            href={`/girl-trips/${t.slug}`}
                            onClick={() => setOpen(false)}
                            className="text-xs tracking-wide opacity-60 hover:opacity-100"
                          >
                            {trip.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
