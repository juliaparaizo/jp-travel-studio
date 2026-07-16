import { notFound } from "next/navigation";
import { trips } from "@/lib/trips";
import TripDetail from "@/components/TripDetail";

export function generateStaticParams() {
  return trips.map((trip) => ({ slug: trip.slug }));
}

export default async function TripPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = trips.find((t) => t.slug === slug);
  if (!trip) notFound();

  return <TripDetail slug={slug} />;
}
