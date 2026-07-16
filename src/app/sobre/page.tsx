"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { whatsappNumber } from "@/lib/trips";
import AboutPhotoCarousel, { type AboutPhoto } from "@/components/AboutPhotoCarousel";
import AboutHeroCarousel, { type BannerItem } from "@/components/AboutHeroCarousel";
import InstagramPreview from "@/components/InstagramPreview";

const headingFont = {
  fontFamily: "var(--font-zt-bros-oskon-90s)",
  fontWeight: 400,
} as const;

const bannerItems: BannerItem[] = [
  { type: "video", src: "/videos/about-hero.mp4" },
  { type: "image", src: "/images/about/banner/banner-1.jpg" },
  { type: "image", src: "/images/about/banner/banner-2.jpg" },
  { type: "image", src: "/images/about/banner/banner-3.jpg" },
  { type: "image", src: "/images/about/banner/banner-4.jpg" },
  { type: "image", src: "/images/about/banner/banner-5.jpg" },
  { type: "image", src: "/images/about/banner/banner-6.jpg" },
  { type: "image", src: "/images/about/banner/banner-7.jpg" },
  { type: "image", src: "/images/about/banner/banner-8.jpg" },
];

const aboutPhotosData: { src: string; location: { pt: string; en: string } }[] = [
  { src: "/images/about/about-6.jpg", location: { pt: "Bruges, Bélgica", en: "Bruges, Belgium" } },
  { src: "/images/about/about-7.jpg", location: { pt: "Milão, Itália", en: "Milan, Italy" } },
  { src: "/images/about/about-8.jpg", location: { pt: "Cinque Terre, Itália", en: "Cinque Terre, Italy" } },
  { src: "/images/about/about-9.jpg", location: { pt: "Roma, Itália", en: "Rome, Italy" } },
  { src: "/images/about/about-10.jpg", location: { pt: "Paris, França", en: "Paris, France" } },
  { src: "/images/about/about-11.jpg", location: { pt: "Nova York, EUA", en: "New York, USA" } },
  { src: "/images/about/about-12.jpg", location: { pt: "Barcelona, Espanha", en: "Barcelona, Spain" } },
  { src: "/images/about/about-13.jpg", location: { pt: "Costa do Oregon, EUA", en: "Oregon Coast, USA" } },
  { src: "/images/about/about-14.jpg", location: { pt: "Vulcão Acatenango, Guatemala", en: "Acatenango Volcano, Guatemala" } },
  { src: "/images/about/about-15.jpg", location: { pt: "Grand Canyon, Arizona", en: "Grand Canyon, Arizona" } },
  { src: "/images/about/about-16.jpg", location: { pt: "Machu Picchu, Peru", en: "Machu Picchu, Peru" } },
  { src: "/images/about/about-17.jpg", location: { pt: "Copenhague, Dinamarca", en: "Copenhagen, Denmark" } },
  { src: "/images/about/about-18.jpg", location: { pt: "Paris, França", en: "Paris, France" } },
  { src: "/images/about/about-19.jpg", location: { pt: "Antelope Canyon, Arizona", en: "Antelope Canyon, Arizona" } },
  { src: "/images/about/about-1.jpg", location: { pt: "Dillon, Colorado", en: "Dillon, Colorado" } },
  { src: "/images/about/about-2.jpg", location: { pt: "Vila Velha, Espírito Santo", en: "Vila Velha, Espírito Santo" } },
  { src: "/images/about/about-3.jpg", location: { pt: "Rio Nilo, Egito", en: "Nile River, Egypt" } },
  { src: "/images/about/about-4.jpg", location: { pt: "Whistler, Canadá", en: "Whistler, Canada" } },
  { src: "/images/about/about-5.jpg", location: { pt: "Malmö, Suécia", en: "Malmö, Sweden" } },
];

const content = {
  label: { pt: "sobre", en: "about" },
  title: { pt: "julia paraizo", en: "julia paraizo" },

  meLabel: { pt: "sobre mim", en: "about me" },
  meTitle: { pt: "oi, eu sou a julia :)", en: "hi, i'm julia :)" },
  meBody: {
    pt: `e fico muito feliz de te ver aqui! tenho 23 anos e desde novinha sempre sonhei em viajar e viver experiências incríveis pelo mundo, só não sabia como. fiz um intercâmbio em 2022 que mudou completamente a forma como eu via o mundo, e foi ali que comecei a viajar de verdade. com o tempo fui construindo uma comunidade digital de pessoas que amam viajar mas às vezes se sentem sozinhas ou não sabem por onde começar, e assim dei início a esse projeto.`,
    en: `and i'm really happy to have you here! i'm 23 and since i was little i've always dreamed of traveling and living incredible experiences around the world, i just didn't know how. i did an exchange program in 2022 that completely changed how i saw the world, and that's when i really started traveling. over time i built a digital community of people who love to travel but sometimes feel alone or don't know where to start, and that's how this project began.`,
  },
  seeTripsButton: { pt: "ver viagens", en: "see trips" },
  talkToMeButton: { pt: "fale comigo", en: "talk to me" },

  atelierTitle: { pt: "ateliê de viagens", en: "travel atelier" },
  atelierBody: {
    pt: `trabalho com o conceito de travel design. na prática, isso significa que eu te ajudo a desenhar uma viagem que tenha a sua cara

a gente trabalha junto, de perto, pensando em algo que faça sentido pra você, mas sem a parte chata de planejar. com base nas minhas experiências, contatos e muita, muita pesquisa, eu crio uma experiência que talvez você não conseguisse montar sozinho :) como parceira da fora, tenho acesso a parcerias, preços especiais e experiências que fazem toda a diferença no seu roteiro!`,
    en: `i work with the concept of travel design. in practice, that means i help you design a trip that feels like you

we work together, closely, thinking through something that makes sense for you, minus the boring part of planning. based on my experience, contacts and a whole lot of research, i create an experience you might not be able to put together on your own :) as a FORA partner, i have access to partnerships, special rates and experiences that make all the difference in your itinerary!`,
  },
  partnershipLabel: { pt: "parceria com", en: "partnered with" },
  memberLabel: { pt: "membro", en: "member" },

  girlsTitle: { pt: "viagens para meninas", en: "girl trips" },
  girlsBody: {
    pt: `quem nunca acabou adiando um plano de viagem só porque não tinha companhia? ninguém podia ir junto, e foi empurrando com a barriga...

como viajante solo, muitas vezes desejei ter uma comunidade de meninas que compartilhasse esse mesmo desejo de explorar o mundo. foi desse princípio que nasceu esse espaço: incentivar jovens mulheres a saírem da zona de conforto e viajarem também.

vamos juntas <3`,
    en: `who hasn't put off a travel plan just because they had no one to go with? nobody could make it, and you kept pushing it back...

as a solo traveler, i often wished i had a community of girls who shared that same desire to explore the world. that's the principle this space was born from: encouraging young women to step out of their comfort zone and travel too.

let's go together <3`,
  },
};

export default function Sobre() {
  const { lang } = useLanguage();
  const aboutPhotos: AboutPhoto[] = aboutPhotosData.map((p) => ({
    src: p.src,
    location: p.location[lang],
  }));

  return (
    <div>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden px-6 pb-16 pt-32">
        <AboutHeroCarousel items={bannerItems} />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-black/30 to-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-4xl">
          <p className="text-xs tracking-[0.25em] text-[var(--foreground)]/80">
            {content.label[lang]}
          </p>
          <h1 className="mt-2 text-6xl sm:text-7xl md:text-8xl" style={headingFont}>
            {content.title[lang]}
          </h1>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <AboutPhotoCarousel photos={aboutPhotos} />
          </div>
          <div>
            <p className="text-xs tracking-[0.25em] text-[var(--foreground)]/50">
              {content.meLabel[lang]}
            </p>
            <h2 className="mt-2 text-4xl sm:text-5xl" style={headingFont}>
              {content.meTitle[lang]}
            </h2>
            <p className="mt-6 max-w-xl whitespace-pre-line text-sm leading-relaxed text-[var(--foreground)]/80">
              {content.meBody[lang]}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/girl-trips"
                className="rounded-full bg-[var(--foreground)] px-8 py-3 text-sm tracking-wide text-[var(--background)] transition-opacity hover:opacity-90"
              >
                {content.seeTripsButton[lang]}
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--foreground)]/60 px-8 py-3 text-sm tracking-wide transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
              >
                {content.talkToMeButton[lang]}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl" style={headingFont}>
              {content.atelierTitle[lang]}
            </h2>
            <p className="mt-6 max-w-xl whitespace-pre-line text-sm leading-relaxed text-[var(--foreground)]/80">
              {content.atelierBody[lang]}
            </p>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-[var(--foreground)]/50">
                  {content.partnershipLabel[lang]}
                </p>
                <p className="mt-2 text-lg" style={headingFont}>
                  FORA Travel
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] text-[var(--foreground)]/50">
                  {content.memberLabel[lang]}
                </p>
                <p className="mt-2 text-lg" style={headingFont}>
                  Virtuoso
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/trips/jalapao/jalapao-1.jpeg"
              alt=""
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--foreground)] px-6 py-24 text-[var(--background)]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/girl-trips/real/lagoa.jpg"
              alt=""
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl" style={headingFont}>
              {content.girlsTitle[lang]}
            </h2>
            <p className="mt-6 max-w-xl whitespace-pre-line text-sm leading-relaxed text-[var(--background)]/80">
              {content.girlsBody[lang]}
            </p>
          </div>
        </div>
      </section>

      <InstagramPreview />
    </div>
  );
}
