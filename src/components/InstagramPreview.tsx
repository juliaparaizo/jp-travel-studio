"use client";

import { useLanguage } from "@/lib/i18n";
import { ui } from "@/lib/ui-strings";

const headingFont = {
  fontFamily: "var(--font-zt-bros-oskon-90s)",
  fontWeight: 400,
} as const;

const instagramUrl = "https://instagram.com/juliaparaizo";

const photos = [
  "/images/instagram/insta-1.jpg",
  "/images/instagram/insta-2.jpg",
  "/images/instagram/insta-3.jpg",
  "/images/instagram/insta-4.jpg",
  "/images/instagram/insta-5.jpg",
  "/images/instagram/insta-6.jpg",
];

export default function InstagramPreview() {
  const { lang } = useLanguage();

  return (
    <section className="px-6 py-20 text-center">
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-2xl transition-opacity hover:opacity-80 sm:text-3xl"
        style={headingFont}
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-6 w-6 shrink-0"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
        {ui.instagramHandle[lang]}
      </a>
      <p className="mt-3 text-sm text-[var(--foreground)]/70">
        {ui.instagramSubtitle[lang]}
      </p>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
        {photos.map((src) => (
          <a
            key={src}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-square overflow-hidden rounded-xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
