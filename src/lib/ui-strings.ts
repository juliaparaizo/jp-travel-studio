import type { Lang } from "@/lib/i18n";

export const navItems: { href: string; label: Record<Lang, string> }[] = [
  { href: "/", label: { pt: "inicio", en: "home" } },
  { href: "/girl-trips", label: { pt: "girl trips", en: "girl trips" } },
  { href: "/sobre", label: { pt: "sobre", en: "about" } },
  { href: "/testemunhos", label: { pt: "testemunhos", en: "testimonials" } },
  { href: "/contato", label: { pt: "contato", en: "contact" } },
  {
    href: "/roteiros-personalizados",
    label: { pt: "roteiros personalizados", en: "custom itineraries" },
  },
];

export const ui = {
  heroTagline: {
    pt: "boutique travel agency",
    en: "boutique travel agency",
  },
  heroGirlTrips: { pt: "viagens para meninas", en: "girl trips" },
  heroCustom: { pt: "desenhe meu roteiro", en: "design my itinerary" },
  collageLine1: {
    pt: "te levo onde é mais difícil",
    en: "i take you where it's harder",
  },
  collageLine2: { pt: "chegar sozinha", en: "to go alone" },
  testimonialsTitle: {
    pt: "Palavras de Quem Já Viveu",
    en: "words from those who've lived it",
  },
  tripsTitle: { pt: "próximos destinos", en: "next destinations" },
  fromPrice: { pt: "a partir de", en: "from" },
  forWhom: { pt: "para quem é?", en: "who is it for?" },
  itinerary: { pt: "roteiro", en: "itinerary" },
  included: { pt: "o que está incluso", en: "what's included" },
  notIncluded: { pt: "não incluso", en: "not included" },
  accommodation: { pt: "acomodações", en: "accommodations" },
  faq: { pt: "faq", en: "faq" },
  howToPay: { pt: "como você quer pagar?", en: "how would you like to pay?" },
  closeMySpot: { pt: "quero fechar minha vaga", en: "i want my spot" },
  knowMore: { pt: "quero saber mais", en: "i want to know more" },
  comingSoon: { pt: "em breve", en: "coming soon" },
  operatedBy: { pt: "operado por", en: "operated by" },
  overview: { pt: "visão geral", en: "overview" },
  investment: { pt: "investimento", en: "investment" },
  allInclusive: { pt: "tudo incluso", en: "all inclusive" },
  perPerson: { pt: "por pessoa", en: "per person" },
  destinationLabel: { pt: "destino", en: "destination" },
  datesLabel: { pt: "datas", en: "dates" },
  durationLabel: { pt: "duração", en: "duration" },
} satisfies Record<string, Record<Lang, string>>;
