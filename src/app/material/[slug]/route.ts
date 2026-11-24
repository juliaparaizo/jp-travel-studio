import { NextRequest, NextResponse } from "next/server";
import { trips } from "@/lib/trips";

// Stable link sent in WhatsApp quick replies: juliaparaizotravel.com/material/<slug>.
// Opens the trip's PDF when one is set, otherwise falls back to the trip page,
// so the link never breaks while a PDF is still being made.
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const trip = trips.find((t) => t.slug === slug);

  const target = !trip
    ? "/girl-trips"
    : (trip.materialPdf ?? `/girl-trips/${trip.slug}`);

  return NextResponse.redirect(new URL(target, request.url), 307);
}
