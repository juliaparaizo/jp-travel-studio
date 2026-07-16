"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { whatsappNumber } from "@/lib/trips";
import InstagramPreview from "@/components/InstagramPreview";

const headingFont = {
  fontFamily: "var(--font-zt-bros-oskon-90s)",
  fontWeight: 400,
} as const;

const whatsappGroupUrl =
  "https://chat.whatsapp.com/KRDJdcJsTEb1txT04BuQhO?s=cl&p=i&ilr=1";

const content = {
  label: { pt: "vamos conversar", en: "let's talk" },
  title: { pt: "fale comigo", en: "talk to me" },
  introTitle: {
    pt: "vamos planejar sua próxima viagem!",
    en: "let's plan your next trip!",
  },
  introBody: {
    pt: "tem dúvida sobre algum destino, quer saber mais sobre os próximos roteiros ou só bater um papo? só me chama :)",
    en: "have a question about a destination, want to know more about upcoming trips, or just want to chat? reach out — i answer with care.",
  },
  whatsappLabel: { pt: "whatsapp", en: "whatsapp" },
  whatsappValue: "+1 (602) 206-5421",
  whatsappGroupLabel: { pt: "grupo do whatsapp", en: "whatsapp group" },
  whatsappGroupValue: { pt: "novidades em primeira mão", en: "first-hand updates" },
  emailLabel: { pt: "e-mail", en: "email" },
  instaPersonalLabel: { pt: "instagram pessoal", en: "personal instagram" },
  instaTravelLabel: { pt: "instagram de viagens", en: "travel instagram" },
  tiktokLabel: { pt: "tiktok", en: "tiktok" },
  newsletterTitle: { pt: "entre para a lista", en: "join the list" },
  newsletterBody: {
    pt: "novidades de viagens, lançamentos e conteúdos exclusivos direto no seu e-mail.",
    en: "trip news, launches and exclusive content straight to your inbox.",
  },
  nameLabel: { pt: "nome", en: "name" },
  namePlaceholder: { pt: "seu nome", en: "your name" },
  emailPlaceholder: { pt: "voce@email.com", en: "you@email.com" },
  newsletterButton: { pt: "quero entrar na lista", en: "sign me up" },
  newsletterNote: {
    pt: "sem spam. só novidades de viagens e lançamentos exclusivos.",
    en: "no spam. just trip news and exclusive launches.",
  },
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 448 512" className="h-6 w-6 fill-current" aria-hidden="true">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

const GroupIcon = () => (
  <svg viewBox="0 0 640 512" className="h-6 w-6 fill-current" aria-hidden="true">
    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62.1 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-243.7-13.4C93.5 263.1 77.6 256 60 256H32c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.3 34.9-87.3 75.2-109.4z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 512 512" className="h-6 w-6 fill-current" aria-hidden="true">
    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 448 512" className="h-6 w-6 fill-current" aria-hidden="true">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 448 512" className="h-6 w-6 fill-current" aria-hidden="true">
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 512 512" className="h-4 w-4 fill-current" aria-hidden="true">
    <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L343 407.1l-56.1 61.8c-7.1 7.8-18.2 10.5-28.1 6.8s-16.5-13.2-16.5-23.9V386.6c0-7.8 3.1-15.4 8.5-20.9L419.6 173.2c-4.5-6.5-13.5-8.4-20.3-4.2L136 337.9 30.1 302.6c-11.5-3.8-19.4-14.2-19.9-26.3s6.4-23.1 17.5-27.8l448-192c11.1-4.7 24-1.9 32.4 6.9z" />
  </svg>
);

export default function Contato() {
  const { lang } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("quero entrar para a lista de novidades");
    const body = encodeURIComponent(`nome: ${name}\ne-mail: ${email}`);
    window.location.href = `mailto:julia.vianaparaizo@fora.travel?subject=${subject}&body=${body}`;
  };

  const contactCards = [
    {
      icon: <WhatsAppIcon />,
      label: content.whatsappLabel[lang],
      value: content.whatsappValue,
      href: `https://wa.me/${whatsappNumber}`,
    },
    {
      icon: <GroupIcon />,
      label: content.whatsappGroupLabel[lang],
      value: content.whatsappGroupValue[lang],
      href: whatsappGroupUrl,
    },
    {
      icon: <EmailIcon />,
      label: content.emailLabel[lang],
      value: "julia.vianaparaizo@fora.travel",
      href: "mailto:julia.vianaparaizo@fora.travel",
    },
    {
      icon: <InstagramIcon />,
      label: content.instaPersonalLabel[lang],
      value: "@juliaparaizo",
      href: "https://instagram.com/juliaparaizo",
    },
    {
      icon: <InstagramIcon />,
      label: content.instaTravelLabel[lang],
      value: "@juliaparaizo.travel",
      href: "https://instagram.com/juliaparaizo.travel",
    },
    {
      icon: <TikTokIcon />,
      label: content.tiktokLabel[lang],
      value: "@julia.paraizo",
      href: "https://tiktok.com/@julia.paraizo",
    },
  ];

  return (
    <div>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden px-6 pb-16 pt-32">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/contato/julia-piramides.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
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

      <section className="bg-[var(--foreground)] px-6 py-24 text-[var(--background)]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl" style={headingFont}>
              {content.introTitle[lang]}
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--background)]/70">
              {content.introBody[lang]}
            </p>

            <div className="mt-10 flex flex-col gap-3">
              {contactCards.map((card) => (
                <a
                  key={card.label}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 rounded-2xl border border-[var(--background)]/15 bg-[var(--background)]/5 p-5 transition-colors hover:border-[var(--background)]/40 hover:bg-[var(--background)]/10"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--background)]/25">
                    {card.icon}
                  </span>
                  <span>
                    <span className="block text-xs tracking-[0.2em] text-[var(--background)]/50">
                      {card.label}
                    </span>
                    <span className="mt-1 block text-lg">{card.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="h-fit rounded-3xl bg-[var(--background)] p-8 text-[var(--foreground)] sm:p-10">
            <h3 className="text-2xl sm:text-3xl" style={headingFont}>
              {content.newsletterTitle[lang]} ✈
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/70">
              {content.newsletterBody[lang]}
            </p>

            <form onSubmit={handleSubscribe} className="mt-8 flex flex-col gap-5">
              <label className="flex flex-col gap-2 text-sm">
                {content.nameLabel[lang]}
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={content.namePlaceholder[lang]}
                  className="rounded-xl border border-[var(--foreground)]/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--foreground)]/40 focus:border-[var(--foreground)]/50"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                {content.emailLabel[lang]}
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={content.emailPlaceholder[lang]}
                  className="rounded-xl border border-[var(--foreground)]/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--foreground)]/40 focus:border-[var(--foreground)]/50"
                />
              </label>
              <button
                type="submit"
                className="mt-1 flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3.5 text-sm tracking-wide text-[var(--background)] transition-opacity hover:opacity-90"
              >
                {content.newsletterButton[lang]}
                <SendIcon />
              </button>
              <p className="text-center text-xs text-[var(--foreground)]/50">
                {content.newsletterNote[lang]}
              </p>
            </form>
          </div>
        </div>
      </section>

      <InstagramPreview />
    </div>
  );
}
