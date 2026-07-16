const slugs = [
  "jalapao",
  "laponia",
  "amazonia",
  "lencois-maranhenses",
  "surfcamp-saquarema",
  "surfcamp-ubatuba",
  "nicaragua",
  "amazonia-2",
] as const;

export function getTripGallery(slug: string): {
  thumbs: string[];
  large: string;
} | null {
  if (!(slugs as readonly string[]).includes(slug)) return null;
  return {
    thumbs: Array.from(
      { length: 10 },
      (_, i) => `/images/trips/${slug}/gallery/thumb-${i + 1}.jpg`,
    ),
    large: `/images/trips/${slug}/gallery/large.jpg`,
  };
}
