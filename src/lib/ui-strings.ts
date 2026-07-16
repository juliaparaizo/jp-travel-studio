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
  flightHelp: {
    pt: "preciso de ajuda com a passagem aérea",
    en: "i need help with my flight",
  },
  overview: { pt: "visão geral", en: "overview" },
  investment: { pt: "investimento", en: "investment" },
  allInclusive: { pt: "tudo incluso", en: "all inclusive" },
  perPerson: { pt: "por pessoa", en: "per person" },
  destinationLabel: { pt: "destino", en: "destination" },
  datesLabel: { pt: "datas", en: "dates" },
  durationLabel: { pt: "duração", en: "duration" },
  notifyTitle: { pt: "não vai dar nessa data?", en: "can't make this date?" },
  notifySubtitle: {
    pt: "deixa seu nome e whatsapp que eu te aviso pessoalmente assim que tiver uma nova data pra esse destino.",
    en: "leave your name and whatsapp and i'll personally let you know as soon as there's a new date for this destination.",
  },
  notifyNamePlaceholder: { pt: "seu nome", en: "your name" },
  notifyWhatsappPlaceholder: { pt: "seu whatsapp (com DDD)", en: "your whatsapp number" },
  notifyConsent: {
    pt: "aceito que a Julia me contate no WhatsApp quando houver uma nova data pra esse destino.",
    en: "i agree to be contacted by Julia on WhatsApp when there's a new date for this destination.",
  },
  notifyButton: { pt: "quero ser avisada", en: "notify me" },
  notifySending: { pt: "enviando...", en: "sending..." },
  notifySuccess: {
    pt: "prontinho! você vai ser a primeira a saber quando tiver uma nova data 💌",
    en: "all set! you'll be the first to know when there's a new date 💌",
  },
  notifyError: {
    pt: "não deu pra enviar agora — tenta de novo em instantes ou chama no whatsapp.",
    en: "couldn't send right now — try again shortly or reach out on whatsapp.",
  },
  instagramHandle: { pt: "@juliaparaizo", en: "@juliaparaizo" },
  instagramSubtitle: {
    pt: "acompanhe minhas aventuras em tempo real",
    en: "follow my adventures in real time",
  },
} satisfies Record<string, Record<Lang, string>>;
