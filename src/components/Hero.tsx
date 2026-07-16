"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { ui } from "@/lib/ui-strings";

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        poster="/videos/hero-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center text-[var(--foreground)]">
        <h1
          className="text-6xl italic sm:text-7xl md:text-8xl"
          style={{ fontFamily: "var(--font-zt-bros-oskon-90s)", fontWeight: 200 }}
        >
          julia paraizo
        </h1>
        <p className="mt-5 text-sm tracking-[0.3em] sm:text-base">
          {ui.heroTagline[lang]}
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/girl-trips"
            className="rounded-full border border-[var(--foreground)]/60 px-8 py-3 text-sm tracking-wide transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            {ui.heroGirlTrips[lang]}
          </Link>
          <Link
            href="/planejar"
            className="rounded-full border border-[var(--foreground)]/60 px-8 py-3 text-sm tracking-wide transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            {ui.heroCustom[lang]}
          </Link>
        </div>
      </div>
    </section>
  );
}
