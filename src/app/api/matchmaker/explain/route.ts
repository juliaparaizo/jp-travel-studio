import { NextRequest, NextResponse } from "next/server";
import { sanitizeProfile } from "@/lib/matchmaker-profile";
import { matchTrips, pickResults } from "@/lib/trip-matching";
import { localizeTrip } from "@/lib/trips-en";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 10;
const log = new Map<string, number[]>();

function limited(ip: string): boolean {
  const now = Date.now();
  const hits = (log.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  log.set(ip, hits);
  return hits.length > MAX_REQUESTS;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) return NextResponse.json({ notes: {} }, { status: 429 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ notes: {} }, { status: 400 });
  }
  const profile = sanitizeProfile(body.profile);
  const lang = body.lang === "en" ? "en" : "pt";
  if (!profile) return NextResponse.json({ notes: {} }, { status: 400 });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return NextResponse.json({ notes: {} });

  // recompute on the server: the model only ever sees real trip data
  const { matches } = pickResults(matchTrips(profile, lang));
  if (matches.length === 0) return NextResponse.json({ notes: {} });

  const facts = matches.map((m) => {
    const t = localizeTrip(m.trip, lang);
    return {
      slug: m.trip.slug,
      title: t.title,
      destination: t.destination,
      dates: t.dates,
      duration: t.duration,
      price: t.priceDisplay,
      spots: m.spots,
      included: t.included.slice(0, 5),
      matchScore: m.score,
      reasons: m.reasons,
      caveats: m.mismatches,
    };
  });

  const system =
    lang === "pt"
      ? "você é a curadora de viagens em grupo da Julia Paraizo. para cada viagem, escreva uma nota personalizada de 1 a 2 frases, calorosa e honesta, em português, tudo em minúsculas. use APENAS os fatos fornecidos: nunca invente preços, datas, vagas, inclusões ou destinos. mencione um ponto de atenção quando houver. não pressione a pessoa a comprar. responda somente com um JSON {\"slug\": \"nota\"}."
      : "you are Julia Paraizo's group trip curator. for each trip, write a warm, honest personalized note of 1-2 sentences in English, all lowercase. use ONLY the facts provided: never invent prices, dates, spots, inclusions or destinations. mention a caveat when there is one. never pressure the person to book. reply only with a JSON object {\"slug\": \"note\"}.";

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 9000);
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 700,
        system,
        messages: [
          {
            role: "user",
            content: JSON.stringify({
              traveler: {
                origin: profile.origin,
                styles: profile.mix ? ["a bit of everything"] : profile.styles,
                pace: profile.pace,
                firstGroupTrip: profile.firstGroup === null ? null : !profile.firstGroup,
              },
              trips: facts,
            }),
          },
        ],
      }),
      signal: controller.signal,
    });
    if (!res.ok) return NextResponse.json({ notes: {} });
    const data = (await res.json()) as { content?: { type: string; text?: string }[] };
    const text = data.content?.find((c) => c.type === "text")?.text ?? "";
    const json = text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1);
    const parsed = JSON.parse(json) as Record<string, unknown>;
    const allowed = new Set(matches.map((m) => m.trip.slug));
    const notes: Record<string, string> = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (allowed.has(k) && typeof v === "string") notes[k] = v.slice(0, 400);
    }
    return NextResponse.json({ notes });
  } catch {
    return NextResponse.json({ notes: {} });
  } finally {
    clearTimeout(timer);
  }
}
