"use client";

import { useEffect, useState } from "react";

export type BannerItem =
  | { type: "image"; src: string }
  | { type: "video"; src: string };

export default function AboutHeroCarousel({ items }: { items: BannerItem[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 6000);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <div className="absolute inset-0">
      {items.map((item, i) => (
        <div
          key={item.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          {item.type === "video" ? (
            <video
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.src} alt="" className="h-full w-full object-cover" />
          )}
        </div>
      ))}
    </div>
  );
}
