"use client";

import { useEffect, useState } from "react";

export type AboutPhoto = {
  src: string;
  location: string;
};

export default function AboutPhotoCarousel({ photos }: { photos: AboutPhoto[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, 4000);
    return () => clearInterval(id);
  }, [photos.length]);

  const current = photos[index];

  const goPrev = () => {
    setIndex((i) => (i - 1 + photos.length) % photos.length);
  };
  const goNext = () => {
    setIndex((i) => (i + 1) % photos.length);
  };

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--foreground)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-10 -right-6 h-48 w-48 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--foreground)" }}
      />

      <div className="relative aspect-[4/5] overflow-hidden rounded-t-[220px] rounded-b-3xl shadow-2xl">
        {photos.map((p, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={p.src}
            src={p.src}
            alt={p.location}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}

        {photos.length > 1 && (
          <>
            <button
              type="button"
              aria-label="previous photo"
              onClick={goPrev}
              className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M15.5 4 7 12l8.5 8 1.4-1.4L9.8 12l7.1-6.6z" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="next photo"
              onClick={goNext}
              className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M8.5 4 17 12l-8.5 8-1.4-1.4L14.2 12 7.1 5.4z" />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className="relative mt-5 flex items-center justify-center gap-2">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[var(--foreground)]/60" aria-hidden="true">
          <path d="M12 2C7.6 2 4 5.6 4 10c0 5.4 6.8 11.2 7.1 11.4a1.4 1.4 0 0 0 1.8 0C13.2 21.2 20 15.4 20 10c0-4.4-3.6-8-8-8zm0 10.8A2.8 2.8 0 1 1 12 7.2a2.8 2.8 0 0 1 0 5.6z" />
        </svg>
        <p className="text-sm tracking-wide text-[var(--foreground)]/70">{current.location}</p>
      </div>
    </div>
  );
}
