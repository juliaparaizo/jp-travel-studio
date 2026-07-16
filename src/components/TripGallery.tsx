import { getTripGallery } from "@/lib/trip-gallery";

export default function TripGallery({ slug }: { slug: string }) {
  const gallery = getTripGallery(slug);
  if (!gallery) return null;

  return (
    <section>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {gallery.thumbs.map((src) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt=""
            className="aspect-[4/5] w-full rounded-xl object-cover"
          />
        ))}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={gallery.large}
        alt=""
        className="mt-8 aspect-[16/10] w-full rounded-2xl object-cover"
      />
    </section>
  );
}
