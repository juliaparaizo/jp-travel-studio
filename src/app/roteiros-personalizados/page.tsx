"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { ui } from "@/lib/ui-strings";

const headingFont = {
  fontFamily: "var(--font-zt-bros-oskon-90s)",
  fontWeight: 400,
} as const;

const scriptFont = {
  fontFamily: "var(--font-pinyon-script)",
} as const;

const content = {
  intro: {
    pt: "essa é uma agência de viagens full service especializada em proporcionar experiências únicas.",
    en: "this is a full service travel agency specialized in providing unique experiences.",
  },
  stamp: {
    pt: "cobro R$ 150 pelo serviço de curadoria e planejamento de itinerário, do começo ao fim de cada viagem.",
    en: "i charge R$ 150 for the itinerary curation and planning service, from the beginning to the end of every trip.",
  },
  script: {
    pt: "depois do primeiro contato com o cliente, criamos juntos o roteiro ideal, transformando desejos em experiências reais.",
    en: "after the first contact with the client, we create the ideal itinerary together, turning wishes into real experiences.",
  },
  curation: {
    pt: "meu trabalho começa pela curadoria e reserva dos melhores hotéis e acomodações, sempre alinhados ao perfil e às expectativas de cada viajante.",
    en: "my work begins with the curation and booking of the best hotels and accommodations, always aligned with each traveler's profile and expectations.",
  },
  pillars: [
    {
      title: { pt: "hospedagem", en: "lodging" },
      description: {
        pt: "escolhendo entre hotéis, vilas encantadoras, casas de temporada ou barcos para se hospedar, encontro o melhor espaço para a sua estadia.",
        en: "choosing among hotels, charming villas, vacation homes or boats to stay in, i find the best space for your stay.",
      },
    },
    {
      title: { pt: "gastronomia", en: "gastronomy" },
      description: {
        pt: "seleciono uma variedade de restaurantes de todos os estilos e para todos os gostos e orçamentos, garantindo que você aprecie ao máximo cada experiência.",
        en: "i select a variety of restaurants of every style and for every taste and budget, making sure you enjoy each experience to the fullest.",
      },
    },
    {
      title: { pt: "atividades e programas", en: "activities and programs" },
      description: {
        pt: "desde aventuras emocionantes até momentos relaxantes, passando por imersões culturais, compras e vivências locais únicas, monto cada programação conforme as suas preferências.",
        en: "from thrilling adventures to relaxing moments, through cultural immersions, shopping and unique local experiences, i build each program according to your preferences.",
      },
    },
    {
      title: { pt: "destinos", en: "destinations" },
      description: {
        pt: "busco os destinos mais fascinantes, com as experiências mais inesquecíveis.",
        en: "i seek out the most fascinating destinations, with the most unforgettable experiences.",
      },
    },
  ],
  benefitsTitle: { pt: "benefícios", en: "benefits" },
  partnerships: {
    pt: "parcerias com propriedades hoteleiras globais e mais de 50 programas de vantagens, como:",
    en: "partnerships with global hotel properties and more than 50 perks programs, such as:",
  },
  partners: [
    "Virtuoso",
    "Four Seasons Preferred",
    "Rosewood Elite",
    "Belmond Bellini Club",
    "Marriott Stars",
    "Mandarin Oriental Fan Club",
  ],
  exclusives: {
    pt: "benefícios exclusivos para clientes, como upgrades de quarto e créditos para uso no hotel ou spa.",
    en: "exclusive client benefits, such as room upgrades and credits to use at the hotel or spa.",
  },
};

const stripPhotos = [
  { src: "/images/trips/jalapao/jalapao-2.jpeg", rotate: -3 },
  { src: "/images/trips/laponia/laponia-1.jpeg", rotate: 2 },
  { src: "/images/trips/amazonia/amazonia-1.jpeg", rotate: -2 },
  { src: "/images/trips/jalapao/jalapao-4.jpeg", rotate: 3 },
];

export default function RoteirosPersonalizados() {
  const { lang } = useLanguage();

  return (
    <div>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-24 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/trips/jalapao/jalapao-3.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10">
          <h1
            className="mx-auto max-w-3xl text-4xl leading-tight sm:text-5xl md:text-6xl"
            style={headingFont}
          >
            {content.intro[lang]}
          </h1>
          <div className="mx-auto mt-12 max-w-sm -rotate-2 rounded-xl border border-dashed border-[var(--foreground)]/60 bg-[var(--background)]/40 px-8 py-5 backdrop-blur-sm">
            <p className="text-sm leading-relaxed">{content.stamp[lang]}</p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-28 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/trips/laponia/laponia-2.jpeg"
          alt=""
          className="absolute left-2 top-10 hidden w-40 -rotate-6 rounded-xl shadow-2xl lg:block"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/trips/amazonia/amazonia-2.jpeg"
          alt=""
          className="absolute bottom-10 right-2 hidden w-40 rotate-6 rounded-xl shadow-2xl lg:block"
        />
        <p
          className="mx-auto max-w-3xl text-4xl leading-snug sm:text-5xl"
          style={scriptFont}
        >
          {content.script[lang]}
        </p>
        <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-[var(--foreground)]/80">
          {content.curation[lang]}
        </p>
      </section>

      <section className="bg-[var(--foreground)] py-24 text-[var(--background)]">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
          {content.pillars.map((pillar) => (
            <div
              key={pillar.title.pt}
              className="rounded-2xl border border-[var(--background)]/15 bg-[var(--background)]/5 p-8"
            >
              <div className="flex items-center gap-4">
                <span className="h-5 w-5 shrink-0 rounded border border-[var(--background)]/50" />
                <h2 className="text-2xl" style={headingFont}>
                  {pillar.title[lang]}
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--background)]/80">
                {pillar.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-6 py-20">
        {stripPhotos.map((photo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={photo.src}
            src={photo.src}
            alt=""
            className="aspect-[4/5] w-40 rounded-xl object-cover shadow-2xl transition-transform duration-300 hover:scale-105 sm:w-48"
            style={{ transform: `rotate(${photo.rotate}deg)` }}
          />
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28 text-center">
        <h2 className="text-5xl sm:text-6xl" style={scriptFont}>
          {content.benefitsTitle[lang]}
        </h2>
        <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-[var(--foreground)]/70">
          {content.partnerships[lang]}
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
          {content.partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center rounded-2xl bg-[var(--foreground)] px-4 py-6 text-sm tracking-wide text-[var(--background)]"
            >
              {partner}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-[var(--foreground)]/70">
          {content.exclusives[lang]}
        </p>

        <Link
          href="/planejar"
          className="mt-14 inline-block rounded-full bg-[var(--foreground)] px-10 py-4 text-sm tracking-wide text-[var(--background)] transition-transform hover:scale-105"
        >
          {ui.heroCustom[lang]}
        </Link>
      </section>
    </div>
  );
}
