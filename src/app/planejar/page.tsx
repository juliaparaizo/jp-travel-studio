"use client";

import { useState } from "react";
import { useLanguage, type Lang } from "@/lib/i18n";
import { whatsappNumber } from "@/lib/trips";

const headingFont = {
  fontFamily: "var(--font-zt-bros-oskon-90s)",
  fontWeight: 400,
} as const;

type L<T = string> = Record<Lang, T>;

const stepNames: L<string[]> = {
  pt: [
    "Destino",
    "Datas",
    "Companhia",
    "Cenários",
    "Objetivos",
    "Estilo",
    "Orçamento",
    "Experiências",
    "Contato",
  ],
  en: [
    "destination",
    "dates",
    "company",
    "scenery",
    "goals",
    "style",
    "budget",
    "experiences",
    "contact",
  ],
};

const txt = {
  landingTitle: {
    pt: "vamos desenhar sua viagem",
    en: "let's design your trip",
  } as L,
  landingSub: {
    pt: "preencha o formulário para que eu possa analisar seu perfil e montar a proposta perfeita para você.",
    en: "fill out the form so i can analyze your profile and put together the perfect proposal for you.",
  } as L,
  start: { pt: "começar", en: "start" } as L,
  takesTime: { pt: "leva cerca de 3 minutos", en: "takes about 3 minutes" } as L,
  step: { pt: "etapa", en: "step" } as L,
  of: { pt: "de", en: "of" } as L,
  back: { pt: "← voltar", en: "← back" } as L,
  next: { pt: "próximo", en: "next" } as L,
  send: { pt: "enviar meu esboço", en: "send my sketch" } as L,
  clear: { pt: "limpar seleção", en: "clear selection" } as L,
  specify: { pt: "especifique...", en: "specify..." } as L,
  optional: { pt: "(opcional)", en: "(optional)" } as L,

  s1Title: { pt: "vamos falar sobre destinos", en: "let's talk destinations" } as L,
  s1Sub: {
    pt: "se já tiver algo em mente, escreva aqui. caso contrário, me conta: pensou em viagem nacional ou internacional? quais são suas expectativas para essa viagem?",
    en: "if you already have something in mind, write it here. otherwise, tell me: are you thinking national or international? what are your expectations for this trip?",
  } as L,
  s1Placeholder: {
    pt: "ex: quero ir para a europa, talvez itália e frança. sonho com paisagens históricas e boa gastronomia. ainda não tenho destino fechado...",
    en: "e.g.: i want to go to europe, maybe italy and france. i dream of historic landscapes and great food. i don't have a set destination yet...",
  } as L,

  s2Title: { pt: "quando você pode viajar?", en: "when can you travel?" } as L,
  s2Sub: {
    pt: "isso nos ajuda a planejar com antecedência e encontrar as melhores opções.",
    en: "this helps us plan ahead and find the best options.",
  } as L,
  s2HasDate: { pt: "você tem uma data específica? *", en: "do you have a specific date? *" } as L,
  s2Yes: { pt: "sim, tenho datas", en: "yes, i have dates" } as L,
  s2No: { pt: "não, estou flexível", en: "no, i'm flexible" } as L,
  s2When: { pt: "quando? *", en: "when? *" } as L,
  s2WhenPh: {
    pt: "ex: 15 a 30 de julho de 2025, agosto de 2026...",
    en: "e.g.: july 15–30, 2025, august 2026...",
  } as L,
  s2HowLong: { pt: "quanto tempo você tem disponível? *", en: "how much time do you have available? *" } as L,
  s2HowLongPh: {
    pt: "ex: 1 semana, 10 dias, 2 semanas, 20 dias...",
    en: "e.g.: 1 week, 10 days, 2 weeks, 20 days...",
  } as L,

  s3Title: { pt: "quem vai viajar?", en: "who's traveling?" } as L,
  s3Sub: {
    pt: "saber quem está indo nos ajuda a montar a experiência ideal.",
    en: "knowing who's going helps us build the ideal experience.",
  } as L,
  s3With: { pt: "você vai com quem? *", en: "who are you going with? *" } as L,
  s3ChildrenLabel: {
    pt: "quantas crianças e quais as idades? *",
    en: "how many children and what ages? *",
  } as L,
  s3ChildrenPh: { pt: "ex: 2 crianças — 4 e 8 anos", en: "e.g.: 2 children — ages 4 and 8" } as L,
  s3CompanionPh: { pt: "com quem você vai viajar?", en: "who are you traveling with?" } as L,
  s3Tickets: { pt: "você já comprou as passagens? *", en: "have you bought your tickets yet? *" } as L,
  s3TicketsYes: { pt: "sim", en: "yes" } as L,
  s3TicketsNo: { pt: "ainda não", en: "not yet" } as L,

  s4Title: { pt: "que cenário você quer viver?", en: "what scenery do you want to live?" } as L,
  s4Sub: {
    pt: "selecione quantos quiser — isso nos ajuda a entender sua viagem ideal.",
    en: "select as many as you like — this helps us understand your ideal trip.",
  } as L,
  s4OtherPh: {
    pt: "que tipo de cenário você tem em mente?",
    en: "what kind of scenery do you have in mind?",
  } as L,

  s5Title: {
    pt: "qual é o principal objetivo dessa viagem?",
    en: "what's the main goal of this trip?",
  } as L,
  s5Sub: { pt: "selecione quantos quiser.", en: "select as many as you like." } as L,
  s5OtherPh: { pt: "qual é o seu objetivo?", en: "what's your goal?" } as L,

  s6Title: { pt: "estilo de viagem", en: "travel style" } as L,
  s6Sub: {
    pt: "suas preferências moldam cada detalhe do planejamento.",
    en: "your preferences shape every detail of the planning.",
  } as L,
  s6Comfort: { pt: "nível de conforto que você procura *", en: "comfort level you're looking for *" } as L,
  s6ComfortPh: {
    pt: "descreva seu nível de conforto ideal",
    en: "describe your ideal comfort level",
  } as L,
  s6Pace: { pt: "ritmo de viagem *", en: "travel pace *" } as L,
  s6Logistics: {
    pt: "restrições ou preferências logísticas *",
    en: "logistic restrictions or preferences *",
  } as L,

  s7Title: { pt: "faixa de investimento", en: "investment range" } as L,
  s7Sub: {
    pt: "contabilizando passagem aérea/transporte — valor estimado por pessoa.",
    en: "including airfare/transport — estimated amount per person.",
  } as L,

  s8Title: { pt: "experiências e detalhes", en: "experiences and details" } as L,
  s8Sub: {
    pt: "essas informações são o coração do planejamento — quanto mais você compartilhar, melhor.",
    en: "this information is the heart of the planning — the more you share, the better.",
  } as L,
  s8Priority: {
    pt: "existe alguma experiência que é prioridade? algo que quer evitar? *",
    en: "is there any experience that's a priority? anything you want to avoid? *",
  } as L,
  s8PriorityPh: {
    pt: "ex: quero obrigatoriamente ver o coliseu. odeio museus muito grandes. adoro mercados locais e ruas menos turísticas...",
    en: "e.g.: i absolutely must see the colosseum. i hate huge museums. i love local markets and less touristy streets...",
  } as L,
  s8Notes: {
    pt: "tem mais algo que gostaria que eu soubesse?",
    en: "is there anything else you'd like me to know?",
  } as L,
  s8NotesPh: {
    pt: "alergias alimentares, restrições de mobilidade, celebração especial, outras observações...",
    en: "food allergies, mobility restrictions, a special celebration, other notes...",
  } as L,

  s9Title: { pt: "seus dados para contato", en: "your contact details" } as L,
  s9Sub: {
    pt: "entrarei em contato em até 24 horas com uma proposta e os valores.",
    en: "i'll get in touch within 24 hours with a proposal and pricing.",
  } as L,
  s9Name: { pt: "nome completo *", en: "full name *" } as L,
  s9NamePh: { pt: "seu nome completo", en: "your full name" } as L,
  s9Phone: { pt: "whatsapp com ddd *", en: "whatsapp with country code *" } as L,
  s9Email: { pt: "e-mail *", en: "e-mail *" } as L,
  s9Birth: { pt: "data de nascimento *", en: "date of birth *" } as L,

  doneTitle: { pt: "recebido!", en: "received!" } as L,
  doneSub: {
    pt: "obrigada por compartilhar seus sonhos de viagem. vou analisar tudo com carinho e entrarei em contato em até 24 horas com uma proposta.",
    en: "thank you for sharing your travel dreams. i'll review everything with care and get in touch within 24 hours with a proposal.",
  } as L,
  doneHome: { pt: "voltar ao início", en: "back to home" } as L,
};

const companionOptions: L<string[]> = {
  pt: [
    "Sozinho(a) — 1ª vez viajando solo",
    "Sozinho(a) — Já viajei solo antes",
    "Família — Com crianças",
    "Família — Sem crianças",
    "Parceiro(a)",
    "Amigos",
    "Outro",
  ],
  en: [
    "solo — first time traveling alone",
    "solo — i've traveled alone before",
    "family — with children",
    "family — no children",
    "partner",
    "friends",
    "other",
  ],
};

const scenarioOptions: L<string[]> = {
  pt: [
    "Praia e mar",
    "Ilhas",
    "Lagos",
    "Montanhas, trilhas ou trekking",
    "Neve e paisagens alpinas",
    "Cidades grandes e cosmopolitas",
    "Cidades pequenas e charmosas",
    "Interior/campo",
    "Paisagens dramáticas (falésias, vulcões, desertos etc.)",
    "Clima quente e ensolarado",
    "Arquitetura histórica e cidades antigas",
    "Ski",
    "Outro",
  ],
  en: [
    "beach and sea",
    "islands",
    "lakes",
    "mountains, trails or trekking",
    "snow and alpine landscapes",
    "big cosmopolitan cities",
    "small charming towns",
    "countryside",
    "dramatic landscapes (cliffs, volcanoes, deserts etc.)",
    "warm and sunny weather",
    "historic architecture and old cities",
    "ski",
    "other",
  ],
};

const objectiveOptions: L<string[]> = {
  pt: [
    "Descanso e desacelerar",
    "Contato com a natureza",
    "Explorar cultura e história",
    "Gastronomia e experiências locais",
    "Celebrar algo especial",
    "Tempo de qualidade a dois",
    "Socializar e conhecer pessoas",
    "Festa e vida noturna",
    "Aventura e atividades ao ar livre",
    "Equilibrar descanso e exploração",
    "Quero viver experiências únicas",
    "Ainda não tenho clareza, quero ajuda para definir",
    "Outro",
  ],
  en: [
    "rest and slowing down",
    "contact with nature",
    "exploring culture and history",
    "gastronomy and local experiences",
    "celebrating something special",
    "quality time as a couple",
    "socializing and meeting people",
    "party and nightlife",
    "adventure and outdoor activities",
    "balancing rest and exploration",
    "i want to live unique experiences",
    "i'm not sure yet, i want help defining it",
    "other",
  ],
};

const comfortOptions: L<string[]> = {
  pt: [
    "Hostel — low budget",
    "Hotel 3 estrelas — confortável",
    "Hotel 4 estrelas — experiência diferenciada",
    "Hotel 5 estrelas — luxo",
    "Outro",
  ],
  en: [
    "hostel — low budget",
    "3-star hotel — comfortable",
    "4-star hotel — elevated experience",
    "5-star hotel — luxury",
    "other",
  ],
};

const paceOptions: L<string[]> = {
  pt: [
    "Mais tranquilo — menos cidades, mais tempo em cada lugar",
    "Equilibrado — sem pressa, sem ficar mais tempo que o necessário",
    "Mais dinâmico — quero ver o máximo possível",
  ],
  en: [
    "slower — fewer cities, more time in each place",
    "balanced — no rush, no staying longer than necessary",
    "more dynamic — i want to see as much as possible",
  ],
};

const logisticOptions: L<string[]> = {
  pt: [
    "Prefiro evitar muitos deslocamentos",
    "Prefiro evitar ônibus",
    "Prefiro voos diretos e pagaria mais caro por isso",
    "Não me importo com deslocamentos se valer a pena",
  ],
  en: [
    "i prefer to avoid a lot of transfers",
    "i prefer to avoid buses",
    "i prefer direct flights and would pay more for them",
    "i don't mind transfers if they're worth it",
  ],
};

const budgetOptions: L<string[]> = {
  pt: [
    "Até R$ 5 mil por pessoa",
    "R$ 5 mil – R$ 10 mil por pessoa",
    "R$ 10 mil – R$ 15 mil por pessoa",
    "R$ 15 mil – R$ 20 mil por pessoa",
    "R$ 20 mil – R$ 30 mil por pessoa",
    "R$ 30 mil – R$ 40 mil por pessoa",
    "Acima de R$ 40 mil por pessoa",
  ],
  en: [
    "up to R$ 5k per person",
    "R$ 5k – R$ 10k per person",
    "R$ 10k – R$ 15k per person",
    "R$ 15k – R$ 20k per person",
    "R$ 20k – R$ 30k per person",
    "R$ 30k – R$ 40k per person",
    "above R$ 40k per person",
  ],
};

type FormData = {
  destinationText: string;
  hasSpecificDate: "" | "yes" | "no";
  specificDate: string;
  availableDuration: string;
  companions: string;
  companionsOther: string;
  childrenInfo: string;
  boughtTickets: "" | "yes" | "no";
  scenarios: string[];
  scenariosOther: string;
  objectives: string[];
  objectivesOther: string;
  comfortLevel: string;
  comfortOther: string;
  travelPace: string;
  logisticPrefs: string[];
  budgetRange: string;
  priorityExperiences: string;
  additionalNotes: string;
  name: string;
  phone: string;
  email: string;
  birthDate: string;
};

const initialData: FormData = {
  destinationText: "",
  hasSpecificDate: "",
  specificDate: "",
  availableDuration: "",
  companions: "",
  companionsOther: "",
  childrenInfo: "",
  boughtTickets: "",
  scenarios: [],
  scenariosOther: "",
  objectives: [],
  objectivesOther: "",
  comfortLevel: "",
  comfortOther: "",
  travelPace: "",
  logisticPrefs: [],
  budgetRange: "",
  priorityExperiences: "",
  additionalNotes: "",
  name: "",
  phone: "",
  email: "",
  birthDate: "",
};

function toggle(list: string[], value: string) {
  return list.includes(value)
    ? list.filter((v) => v !== value)
    : [...list, value];
}

const chipBase =
  "px-4 py-2.5 rounded-full text-sm border transition-all duration-200";
const chipOn =
  "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]";
const chipOff =
  "border-[var(--foreground)]/25 text-[var(--foreground)]/70 hover:border-[var(--foreground)]/60 hover:text-[var(--foreground)]";

const rowBase =
  "px-5 py-3.5 rounded-2xl text-sm border text-left transition-all duration-200 w-full";

const inputCls =
  "w-full rounded-full border border-[var(--foreground)]/25 bg-transparent px-5 py-3 text-sm text-[var(--foreground)] focus:border-[var(--foreground)]/60 focus:outline-none";
const textareaCls =
  "w-full resize-none rounded-2xl border border-[var(--foreground)]/25 bg-transparent px-5 py-4 text-sm leading-relaxed text-[var(--foreground)] focus:border-[var(--foreground)]/60 focus:outline-none";
const labelCls =
  "mb-2 block text-xs tracking-[0.2em] text-[var(--foreground)]/40";

export default function Planejar() {
  const { lang } = useLanguage();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [honeypot, setHoneypot] = useState("");

  const set = (patch: Partial<FormData>) =>
    setData((d) => ({ ...d, ...patch }));

  const sendEmailCopy = () => {
    fetch("/api/planejar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, honeypot }),
    }).catch(() => {
      // best-effort: the WhatsApp handoff still goes through even if this fails
    });
  };

  const totalSteps = 9;

  const canAdvance =
    step === 0
      ? true
      : step === 1
        ? data.destinationText.trim() !== ""
        : step === 2
          ? data.hasSpecificDate === "yes"
            ? data.specificDate.trim() !== ""
            : data.hasSpecificDate === "no"
              ? data.availableDuration.trim() !== ""
              : false
          : step === 3
            ? data.companions !== "" &&
              (data.companions !== companionOptions[lang][6] ||
                data.companionsOther.trim() !== "") &&
              (data.companions !== companionOptions[lang][2] ||
                data.childrenInfo.trim() !== "") &&
              data.boughtTickets !== ""
            : step === 4
              ? data.scenarios.length > 0
              : step === 5
                ? data.objectives.length > 0
                : step === 6
                  ? data.comfortLevel !== "" &&
                    (data.comfortLevel !== comfortOptions[lang][4] ||
                      data.comfortOther.trim() !== "") &&
                    data.travelPace !== "" &&
                    data.logisticPrefs.length > 0
                  : step === 7
                    ? data.budgetRange !== ""
                    : step === 8
                      ? data.priorityExperiences.trim() !== ""
                      : data.name.trim() !== "" &&
                        data.phone.trim() !== "" &&
                        data.email.includes("@") &&
                        data.birthDate !== "";

  const buildWhatsappMessage = () => {
    const message =
      lang === "pt"
        ? `Olá, acabei de preencher o formulário de assessoria no site! Meu nome é ${data.name}.`
        : `Hi, I just filled out the trip-planning form on the website! My name is ${data.name}.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--foreground)]/30 text-2xl">
            ✓
          </div>
          <h2 className="mb-3 text-4xl" style={headingFont}>
            {txt.doneTitle[lang]}
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-[var(--foreground)]/70">
            {txt.doneSub[lang]}
          </p>
          <a
            href="/"
            className="inline-block rounded-full border border-[var(--foreground)]/60 px-8 py-3 text-sm tracking-wide transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            {txt.doneHome[lang]}
          </a>
        </div>
      </div>
    );
  }

  if (step === 0) {
    return (
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/trips/amazonia/amazonia-2.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl" style={headingFont}>
            {txt.landingTitle[lang]}
          </h1>
          <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-[var(--foreground)]/80">
            {txt.landingSub[lang]}
          </p>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="mt-10 rounded-full bg-[var(--foreground)] px-10 py-4 text-sm tracking-wide text-[var(--background)] shadow-lg transition-transform hover:scale-105"
          >
            {txt.start[lang]}
          </button>
          <p className="mt-4 text-xs text-[var(--foreground)]/50">
            {txt.takesTime[lang]}
          </p>
        </div>
      </section>
    );
  }

  const progress = (step / totalSteps) * 100;

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-14">
      <input
        type="text"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="mb-10">
        <div className="mb-3 flex items-center justify-between text-xs text-[var(--foreground)]/40">
          <span className="tracking-[0.2em]">
            {txt.step[lang]} {step} {txt.of[lang]} {totalSteps}
          </span>
          <span>{stepNames[lang][step - 1]}</span>
        </div>
        <div className="h-px w-full bg-[var(--foreground)]/15">
          <div
            className="h-full bg-[var(--foreground)] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {step === 1 && (
        <div>
          <h2 className="mb-3 text-3xl sm:text-4xl" style={headingFont}>
            {txt.s1Title[lang]}
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-[var(--foreground)]/60">
            {txt.s1Sub[lang]}
          </p>
          <textarea
            value={data.destinationText}
            onChange={(e) => set({ destinationText: e.target.value })}
            rows={6}
            placeholder={txt.s1Placeholder[lang]}
            className={textareaCls}
            autoFocus
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="mb-3 text-3xl sm:text-4xl" style={headingFont}>
            {txt.s2Title[lang]}
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-[var(--foreground)]/60">
            {txt.s2Sub[lang]}
          </p>
          <p className={labelCls}>{txt.s2HasDate[lang]}</p>
          <div className="mb-8 flex gap-3">
            {(
              [
                { id: "yes", label: txt.s2Yes[lang] },
                { id: "no", label: txt.s2No[lang] },
              ] as const
            ).map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() =>
                  set({
                    hasSpecificDate: data.hasSpecificDate === o.id ? "" : o.id,
                    specificDate: "",
                    availableDuration: "",
                  })
                }
                className={`${chipBase} ${data.hasSpecificDate === o.id ? chipOn : chipOff}`}
              >
                {o.label}
              </button>
            ))}
          </div>
          {data.hasSpecificDate === "yes" && (
            <div>
              <p className={labelCls}>{txt.s2When[lang]}</p>
              <input
                type="text"
                value={data.specificDate}
                onChange={(e) => set({ specificDate: e.target.value })}
                placeholder={txt.s2WhenPh[lang]}
                className={inputCls}
                autoFocus
              />
            </div>
          )}
          {data.hasSpecificDate === "no" && (
            <div>
              <p className={labelCls}>{txt.s2HowLong[lang]}</p>
              <input
                type="text"
                value={data.availableDuration}
                onChange={(e) => set({ availableDuration: e.target.value })}
                placeholder={txt.s2HowLongPh[lang]}
                className={inputCls}
                autoFocus
              />
            </div>
          )}
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="mb-3 text-3xl sm:text-4xl" style={headingFont}>
            {txt.s3Title[lang]}
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-[var(--foreground)]/60">
            {txt.s3Sub[lang]}
          </p>
          <p className={labelCls}>{txt.s3With[lang]}</p>
          <div className="mb-2 flex flex-col gap-2">
            {companionOptions[lang].map((o) => (
              <button
                key={o}
                type="button"
                onClick={() =>
                  set({
                    companions: data.companions === o ? "" : o,
                    companionsOther: "",
                    childrenInfo: "",
                  })
                }
                className={`${rowBase} ${data.companions === o ? chipOn : chipOff}`}
              >
                {o}
              </button>
            ))}
            {data.companions === companionOptions[lang][6] && (
              <input
                type="text"
                value={data.companionsOther}
                onChange={(e) => set({ companionsOther: e.target.value })}
                placeholder={txt.s3CompanionPh[lang]}
                className={`${inputCls} mt-2`}
                autoFocus
              />
            )}
          </div>
          {data.companions === companionOptions[lang][2] && (
            <div className="mb-8 mt-3 rounded-2xl border border-[var(--foreground)]/20 bg-[var(--foreground)]/5 px-5 py-4">
              <p className={labelCls}>{txt.s3ChildrenLabel[lang]}</p>
              <input
                type="text"
                value={data.childrenInfo}
                onChange={(e) => set({ childrenInfo: e.target.value })}
                placeholder={txt.s3ChildrenPh[lang]}
                className={inputCls}
                autoFocus
              />
            </div>
          )}
          {data.companions !== companionOptions[lang][2] && (
            <div className="mb-8" />
          )}
          <p className={labelCls}>{txt.s3Tickets[lang]}</p>
          <div className="flex gap-3">
            {(
              [
                { id: "yes", label: txt.s3TicketsYes[lang] },
                { id: "no", label: txt.s3TicketsNo[lang] },
              ] as const
            ).map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() =>
                  set({
                    boughtTickets: data.boughtTickets === o.id ? "" : o.id,
                  })
                }
                className={`${chipBase} ${data.boughtTickets === o.id ? chipOn : chipOff}`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2 className="mb-3 text-3xl sm:text-4xl" style={headingFont}>
            {txt.s4Title[lang]}
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-[var(--foreground)]/60">
            {txt.s4Sub[lang]}
          </p>
          <div className="mb-3 flex flex-wrap gap-3">
            {scenarioOptions[lang].map((o) => (
              <button
                key={o}
                type="button"
                onClick={() => set({ scenarios: toggle(data.scenarios, o) })}
                className={`${chipBase} ${data.scenarios.includes(o) ? chipOn : chipOff}`}
              >
                {o}
              </button>
            ))}
          </div>
          {data.scenarios.includes(
            scenarioOptions[lang][scenarioOptions[lang].length - 1],
          ) && (
            <input
              type="text"
              value={data.scenariosOther}
              onChange={(e) => set({ scenariosOther: e.target.value })}
              placeholder={txt.s4OtherPh[lang]}
              className={`${inputCls} mt-3`}
            />
          )}
          {data.scenarios.length > 0 && (
            <button
              type="button"
              onClick={() => set({ scenarios: [], scenariosOther: "" })}
              className="mt-3 text-xs text-[var(--foreground)]/40 underline underline-offset-2 hover:text-[var(--foreground)]/70"
            >
              {txt.clear[lang]}
            </button>
          )}
        </div>
      )}

      {step === 5 && (
        <div>
          <h2 className="mb-3 text-3xl sm:text-4xl" style={headingFont}>
            {txt.s5Title[lang]}
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-[var(--foreground)]/60">
            {txt.s5Sub[lang]}
          </p>
          <div className="mb-3 flex flex-wrap gap-3">
            {objectiveOptions[lang].map((o) => (
              <button
                key={o}
                type="button"
                onClick={() => set({ objectives: toggle(data.objectives, o) })}
                className={`${chipBase} ${data.objectives.includes(o) ? chipOn : chipOff}`}
              >
                {o}
              </button>
            ))}
          </div>
          {data.objectives.includes(
            objectiveOptions[lang][objectiveOptions[lang].length - 1],
          ) && (
            <input
              type="text"
              value={data.objectivesOther}
              onChange={(e) => set({ objectivesOther: e.target.value })}
              placeholder={txt.s5OtherPh[lang]}
              className={`${inputCls} mt-3`}
            />
          )}
          {data.objectives.length > 0 && (
            <button
              type="button"
              onClick={() => set({ objectives: [], objectivesOther: "" })}
              className="mt-3 text-xs text-[var(--foreground)]/40 underline underline-offset-2 hover:text-[var(--foreground)]/70"
            >
              {txt.clear[lang]}
            </button>
          )}
        </div>
      )}

      {step === 6 && (
        <div>
          <h2 className="mb-3 text-3xl sm:text-4xl" style={headingFont}>
            {txt.s6Title[lang]}
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-[var(--foreground)]/60">
            {txt.s6Sub[lang]}
          </p>
          <p className={labelCls}>{txt.s6Comfort[lang]}</p>
          <div className="mb-2 flex flex-col gap-2">
            {comfortOptions[lang].map((o) => (
              <button
                key={o}
                type="button"
                onClick={() =>
                  set({
                    comfortLevel: data.comfortLevel === o ? "" : o,
                    comfortOther: "",
                  })
                }
                className={`${rowBase} ${data.comfortLevel === o ? chipOn : chipOff}`}
              >
                {o}
              </button>
            ))}
            {data.comfortLevel === comfortOptions[lang][4] && (
              <input
                type="text"
                value={data.comfortOther}
                onChange={(e) => set({ comfortOther: e.target.value })}
                placeholder={txt.s6ComfortPh[lang]}
                className={`${inputCls} mt-2`}
                autoFocus
              />
            )}
          </div>
          <div className="mb-8" />
          <p className={labelCls}>{txt.s6Pace[lang]}</p>
          <div className="mb-8 flex flex-col gap-2">
            {paceOptions[lang].map((o) => (
              <button
                key={o}
                type="button"
                onClick={() =>
                  set({ travelPace: data.travelPace === o ? "" : o })
                }
                className={`${rowBase} ${data.travelPace === o ? chipOn : chipOff}`}
              >
                {o}
              </button>
            ))}
          </div>
          <div className="mb-3 flex items-center justify-between">
            <p className={labelCls}>{txt.s6Logistics[lang]}</p>
            {data.logisticPrefs.length > 0 && (
              <button
                type="button"
                onClick={() => set({ logisticPrefs: [] })}
                className="text-xs text-[var(--foreground)]/40 underline underline-offset-2 hover:text-[var(--foreground)]/70"
              >
                {txt.clear[lang]}
              </button>
            )}
          </div>
          <div className="flex flex-col gap-2">
            {logisticOptions[lang].map((o) => (
              <button
                key={o}
                type="button"
                onClick={() =>
                  set({ logisticPrefs: toggle(data.logisticPrefs, o) })
                }
                className={`${rowBase} ${data.logisticPrefs.includes(o) ? chipOn : chipOff}`}
              >
                {o}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 7 && (
        <div>
          <h2 className="mb-3 text-3xl sm:text-4xl" style={headingFont}>
            {txt.s7Title[lang]}
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-[var(--foreground)]/60">
            {txt.s7Sub[lang]}
          </p>
          <div className="flex flex-col gap-2">
            {budgetOptions[lang].map((o) => (
              <button
                key={o}
                type="button"
                onClick={() =>
                  set({ budgetRange: data.budgetRange === o ? "" : o })
                }
                className={`${rowBase} ${data.budgetRange === o ? chipOn : chipOff}`}
              >
                {o}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 8 && (
        <div>
          <h2 className="mb-3 text-3xl sm:text-4xl" style={headingFont}>
            {txt.s8Title[lang]}
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-[var(--foreground)]/60">
            {txt.s8Sub[lang]}
          </p>
          <div className="mb-6">
            <p className={labelCls}>{txt.s8Priority[lang]}</p>
            <textarea
              value={data.priorityExperiences}
              onChange={(e) => set({ priorityExperiences: e.target.value })}
              rows={5}
              placeholder={txt.s8PriorityPh[lang]}
              className={textareaCls}
            />
          </div>
          <div>
            <p className={labelCls}>
              {txt.s8Notes[lang]}{" "}
              <span className="text-[var(--foreground)]/30">
                {txt.optional[lang]}
              </span>
            </p>
            <textarea
              value={data.additionalNotes}
              onChange={(e) => set({ additionalNotes: e.target.value })}
              rows={4}
              placeholder={txt.s8NotesPh[lang]}
              className={textareaCls}
            />
          </div>
        </div>
      )}

      {step === 9 && (
        <div>
          <h2 className="mb-3 text-3xl sm:text-4xl" style={headingFont}>
            {txt.s9Title[lang]}
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-[var(--foreground)]/60">
            {txt.s9Sub[lang]}
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <p className={labelCls}>{txt.s9Name[lang]}</p>
              <input
                type="text"
                value={data.name}
                onChange={(e) => set({ name: e.target.value })}
                placeholder={txt.s9NamePh[lang]}
                className={inputCls}
              />
            </div>
            <div>
              <p className={labelCls}>{txt.s9Phone[lang]}</p>
              <input
                type="tel"
                value={data.phone}
                onChange={(e) => set({ phone: e.target.value })}
                placeholder="(00) 00000-0000"
                className={inputCls}
              />
            </div>
            <div>
              <p className={labelCls}>{txt.s9Email[lang]}</p>
              <input
                type="email"
                value={data.email}
                onChange={(e) => set({ email: e.target.value })}
                placeholder="seu@email.com"
                className={inputCls}
              />
            </div>
            <div>
              <p className={labelCls}>{txt.s9Birth[lang]}</p>
              <input
                type="date"
                value={data.birthDate}
                onChange={(e) => set({ birthDate: e.target.value })}
                className={inputCls}
              />
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(s - 1, 1))}
          className="flex items-center gap-2 text-sm text-[var(--foreground)]/50 transition-colors hover:text-[var(--foreground)]"
        >
          {txt.back[lang]}
        </button>
        {step < 9 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={!canAdvance}
            className={`rounded-full px-8 py-3.5 text-sm transition-all duration-200 ${
              canAdvance
                ? "bg-[var(--foreground)] text-[var(--background)] hover:opacity-90"
                : "cursor-not-allowed bg-[var(--foreground)]/10 text-[var(--foreground)]/30"
            }`}
          >
            {txt.next[lang]}
          </button>
        ) : (
          <a
            href={canAdvance ? buildWhatsappMessage() : undefined}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!canAdvance) {
                e.preventDefault();
                return;
              }
              sendEmailCopy();
              setSubmitted(true);
            }}
            className={`rounded-full px-8 py-3.5 text-sm transition-all duration-200 ${
              canAdvance
                ? "bg-[var(--foreground)] text-[var(--background)] hover:opacity-90"
                : "cursor-not-allowed bg-[var(--foreground)]/10 text-[var(--foreground)]/30"
            }`}
          >
            {txt.send[lang]}
          </a>
        )}
      </div>
    </div>
  );
}
