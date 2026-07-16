"use client";

import { useLanguage } from "@/lib/i18n";
import { ui } from "@/lib/ui-strings";
import HeroCarousel from "@/components/HeroCarousel";

const carouselImages = [
  "/images/girl-trips/carousel/carousel-1.jpg",
  "/images/girl-trips/carousel/carousel-2.jpg",
  "/images/girl-trips/carousel/carousel-3.jpg",
  "/images/girl-trips/carousel/carousel-4.jpg",
  "/images/girl-trips/carousel/carousel-5.jpg",
  "/images/girl-trips/carousel/carousel-6.jpg",
  "/images/girl-trips/carousel/carousel-7.jpg",
  "/images/girl-trips/carousel/carousel-8.jpg",
];

export default function MediaCollage() {
  const { lang } = useLanguage();

  return (
    <div className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
      <HeroCarousel images={carouselImages} alt="" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <h2
          className="max-w-3xl text-4xl leading-tight text-white sm:text-5xl md:text-6xl"
          style={{ fontFamily: "var(--font-zt-bros-oskon-90s)", fontWeight: 400 }}
        >
          {ui.collageLine1[lang]}
          <br />
          {ui.collageLine2[lang]}
        </h2>
      </div>
    </div>
  );
}
