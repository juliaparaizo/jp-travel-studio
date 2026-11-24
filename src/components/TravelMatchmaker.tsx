"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { useLanguage } from "@/lib/i18n";
import { localizeTrip } from "@/lib/trips-en";
import { whatsappUrl } from "@/lib/trips";
import {
  BRL_PER_USD,
  BUDGET_BANDS,
  emptyProfile,
  matchTrips,
  pickResults,
  type Match,
  type Origin,
  type Profile,
} from "@/lib/trip-matching";
import type { Pace, Style } from "@/lib/trip-profiles";

const headingFont = { fontFamily: "var(--font-zt-bros-oskon-90s)", fontWeight: 400 } as const;

type Lang = "pt" | "en";
type Opt = { value: string; label: Record<Lang, string>; hint?: Record<Lang, string> };
type StepId =
  | "origin" | "intl" | "budget" | "budgetAll" | "dates" | "days"
  | "style" | "pace" | "companion" | "firstGroup" | "womenOnly" | "priority";

const usd = (brl: number) => Math.round(brl / BRL_PER_USD / 50) * 50;
const budgetOpts: Opt[] = BUDGET_BANDS.map((b, i) => ({
  value: String(i),
  label: {
    pt: b.max === Infinity ? `acima de R$ ${(b.min / 1000).toFixed(0)}.000` : b.min === 0 ? `até R$ ${(b.max / 1000).toFixed(0)}.000` : `R$ ${(b.min / 1000).toFixed(0)}.000 – ${(b.max / 1000).toFixed(0)}.000`,
    en: b.max === Infinity ? `over $${usd(b.min).toLocaleString("en-US")}` : b.min === 0 ? `under $${usd(b.max).toLocaleString("en-US")}` : `$${usd(b.min).toLocaleString("en-US")} – $${usd(b.max).toLocaleString("en-US")}`,
  },
}));

const T = {
  pt: {
    introTitle: "não sabe qual viagem é a sua?",
    introText: "vamos achar a sua aventura perfeita. responda umas perguntas rápidas e eu te mostro os grupos que combinam com seu orçamento, suas datas e seu jeito de viajar.",
    start: "encontrar minha viagem perfeita",
    step: (n: number, t: number) => `pergunta ${n} de ${t}`,
    back: "voltar", skip: "pular", next: "continuar", close: "fechar",
    cityPlaceholder: "sua cidade (opcional)",
    flexible: "datas flexíveis",
    q: {
      origin: ["de onde você vai viajar?", "escolha a região de onde você sai."],
      intl: ["topa voo internacional?", "algumas viagens são fora do Brasil."],
      budget: ["qual o seu orçamento total pra essa viagem?", "pode ser aproximado."],
      budgetAll: ["esse valor inclui o quê?", "assim eu comparo com o custo real, não só o preço do pacote."],
      dates: ["quando você pode viajar?", "escolha um ou mais meses, ou diga que é flexível."],
      days: ["quantos dias você tem?", "o máximo de dias que você consegue ficar fora."],
      style: ["que tipo de experiência você procura?", "pode escolher mais de uma."],
      pace: ["qual o seu ritmo de viagem?", "não existe resposta errada."],
      companion: ["você viaja sozinha ou com alguém?", ""],
      firstGroup: ["já fez uma viagem em grupo antes?", ""],
      womenOnly: ["prefere um grupo só de mulheres?", "a maioria das viagens é só pra mulheres, mas algumas são mistas."],
      priority: ["o que mais importa numa viagem em grupo?", "isso me ajuda a explicar as recomendações."],
    } as Record<StepId, [string, string]>,
    opts: {
      origin: [["brasil", "Brasil"], ["northAmerica", "EUA ou Canadá"], ["europe", "Europa"], ["other", "outro lugar"]],
      yesno: [["yes", "sim"], ["no", "não"]],
      intl: [["yes", "sim, topo"], ["no", "prefiro viagens no Brasil"]],
      budgetAll: [["pkg", "só o pacote da viagem"], ["all", "tudo: pacote, voo e gastos extras"]],
      days: [["4", "até 4 dias"], ["7", "até 7 dias"], ["10", "até 10 dias"], ["99", "sem limite"]],
      style: [["adventure", "aventura e outdoor"], ["nature", "natureza e paisagens"], ["beach", "praias e destinos tropicais"], ["culture", "cultura e lugares autênticos"], ["mix", "um pouco de tudo"]],
      pace: [["adventurous", "aventureira", "quero explorar o máximo possível"], ["balanced", "equilibrada", "aventura, mas com tempo pra relaxar"], ["relaxed", "tranquila", "prefiro viajar mais devagar"]],
      companion: [["alone", "sozinha"], ["friend", "com alguém"]],
      womenOnly: [["yes", "só mulheres"], ["no", "tanto faz"]],
      priority: [["safety", "segurança"], ["friends", "fazer novas amigas"], ["organization", "tudo organizado"], ["price", "preço"]],
    } as Record<string, string[][]>,
    resultsTitle: "suas viagens ideais",
    found: (n: number) => (n === 1 ? "1 viagem combina com você" : `${n} viagens combinam com você`),
    altTitle: "não achei uma viagem perfeita, mas essas são as mais próximas",
    altHint: "pra encaixar melhor, talvez precise de:",
    match: "match", why: "por que combina", watch: "pontos de atenção", included: "o que está incluso",
    spots: (n: number) => `${n} vagas`, spotsUnknown: "vagas: confirmar com a Julia",
    explore: "ver essa viagem", talk: "falar com a Julia",
    estimate: "o custo estimado usa uma estimativa grosseira de voo e extras. confirme os valores com a Julia antes de decidir.",
    aiNote: "nota personalizada",
    restart: "refazer o questionário",
    leadTitle: "quer receber mais informações?", leadText: "deixe seus dados e eu te mando detalhes dessas viagens. é opcional.",
    firstName: "primeiro nome", email: "e-mail", instagram: "instagram (opcional)", whatsapp: "whatsapp (opcional)",
    consent: "aceito que a Julia use meus dados e respostas pra me enviar informações e novidades sobre viagens. posso cancelar quando quiser.",
    send: "quero receber", sending: "enviando...", sent: "prontinho! a Julia vai entrar em contato 💌", error: "não deu pra enviar agora — tenta de novo em instantes ou chama no whatsapp.",
    empty: "não tem nenhuma viagem aberta agora. chama a Julia no whatsapp pra saber das próximas.",
  },
  en: {
    introTitle: "not sure which trip is right for you?",
    introText: "let's find your perfect adventure. answer a few quick questions and i'll match you with the group trips that fit your budget, schedule and travel style.",
    start: "find my perfect trip",
    step: (n: number, t: number) => `question ${n} of ${t}`,
    back: "back", skip: "skip", next: "continue", close: "close",
    cityPlaceholder: "your city (optional)",
    flexible: "flexible dates",
    q: {
      origin: ["where are you traveling from?", "pick the region you're leaving from."],
      intl: ["are you up for an international flight?", "some trips are outside Brazil."],
      budget: ["what's your total budget for this trip?", "an approximate number is fine."],
      budgetAll: ["what does that amount include?", "so i can compare it with the real cost, not just the package price."],
      dates: ["when are you available to travel?", "pick one or more months, or say you're flexible."],
      days: ["how many days do you have?", "the most days you can be away."],
      style: ["what kind of experience are you looking for?", "you can pick more than one."],
      pace: ["what's your travel pace?", "there are no wrong answers."],
      companion: ["are you traveling alone or with someone?", ""],
      firstGroup: ["have you joined a group trip before?", ""],
      womenOnly: ["do you prefer a women-only group?", "most trips are women-only, but a few are mixed."],
      priority: ["what matters most to you in a group trip?", "this helps me explain the recommendations."],
    } as Record<StepId, [string, string]>,
    opts: {
      origin: [["brasil", "Brazil"], ["northAmerica", "USA or Canada"], ["europe", "Europe"], ["other", "somewhere else"]],
      yesno: [["yes", "yes"], ["no", "no"]],
      intl: [["yes", "yes, i'm up for it"], ["no", "i prefer trips in Brazil"]],
      budgetAll: [["pkg", "just the trip package"], ["all", "everything: package, flights and extras"]],
      days: [["4", "up to 4 days"], ["7", "up to 7 days"], ["10", "up to 10 days"], ["99", "no limit"]],
      style: [["adventure", "adventure and outdoors"], ["nature", "nature and landscapes"], ["beach", "beaches and tropical places"], ["culture", "culture and authentic places"], ["mix", "a bit of everything"]],
      pace: [["adventurous", "adventurous", "i want to explore as much as possible"], ["balanced", "balanced", "adventure, but time to relax too"], ["relaxed", "relaxed", "i prefer slower travel"]],
      companion: [["alone", "alone"], ["friend", "with someone"]],
      womenOnly: [["yes", "women only"], ["no", "doesn't matter"]],
      priority: [["safety", "safety"], ["friends", "making new friends"], ["organization", "everything organized"], ["price", "price"]],
    } as Record<string, string[][]>,
    resultsTitle: "your ideal trips",
    found: (n: number) => (n === 1 ? "1 trip matches you" : `${n} trips match you`),
    altTitle: "i couldn't find a perfect trip, but these are the closest",
    altHint: "to fit better, you might need:",
    match: "match", why: "why it matches", watch: "things to keep in mind", included: "what's included",
    spots: (n: number) => `${n} spots`, spotsUnknown: "spots: confirm with Julia",
    explore: "explore this trip", talk: "talk to Julia",
    estimate: "estimated cost uses a rough flight and extras estimate. confirm the numbers with Julia before deciding.",
    aiNote: "personalized note",
    restart: "restart the questionnaire",
    leadTitle: "want more information?", leadText: "leave your details and i'll send you more about these trips. it's optional.",
    firstName: "first name", email: "email", instagram: "instagram (optional)", whatsapp: "whatsapp (optional)",
    consent: "i agree that Julia may use my data and answers to send me information and news about trips. i can unsubscribe anytime.",
    send: "send me info", sending: "sending...", sent: "all set! Julia will be in touch 💌", error: "couldn't send right now — try again shortly or reach out on whatsapp.",
    empty: "there are no open trips right now. message Julia on whatsapp to hear about the next ones.",
  },
};

function track(name: string, params?: Record<string, string | number>) {
  try {
    sendGAEvent("event", name, params ?? {});
  } catch {
    /* analytics must never break the flow */
  }
}

function monthOptions(lang: Lang): Opt[] {
  const now = new Date();
  const fmt = new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en-US", { month: "short", year: "numeric" });
  return Array.from({ length: 14 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    const label = fmt.format(d);
    return { value: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`, label: { pt: label, en: label } };
  });
}

export default function TravelMatchmaker() {
  const { lang } = useLanguage();
  const t = T[lang];
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState<Profile>(emptyProfile());
  const [stepIdx, setStepIdx] = useState(0);
  const [done, setDone] = useState(false);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const panelRef = useRef<HTMLDivElement>(null);

  const steps = useMemo<StepId[]>(() => {
    const list: StepId[] = ["origin"];
    if (profile.origin === "brasil") list.push("intl");
    list.push("budget");
    if (profile.budgetBand !== null) list.push("budgetAll");
    list.push("dates", "days", "style", "pace", "companion", "firstGroup", "womenOnly", "priority");
    return list;
  }, [profile.origin, profile.budgetBand]);

  const step = steps[Math.min(stepIdx, steps.length - 1)];
  const all = useMemo(() => (done ? matchTrips(profile, lang) : []), [done, profile, lang]);
  const { matches, alternatives } = useMemo(() => pickResults(all), [all]);

  useEffect(() => {
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [open, stepIdx, done]);

  useEffect(() => {
    if (!done || matches.length === 0) return;
    let cancelled = false;
    fetch("/api/matchmaker/explain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profile, lang }),
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled && d?.notes) setNotes(d.notes);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done, lang]);

  const advance = () => {
    if (stepIdx >= steps.length - 1) {
      setDone(true);
      track("matchmaker_complete");
      return;
    }
    setStepIdx((i) => i + 1);
  };

  const patch = (p: Partial<Profile>) => setProfile((prev) => ({ ...prev, ...p }));

  const reset = () => {
    setProfile(emptyProfile());
    setStepIdx(0);
    setDone(false);
    setNotes({});
    track("matchmaker_restart");
  };

  const pickSingle = (value: string) => {
    switch (step) {
      case "origin": patch({ origin: value as Origin, intl: value === "brasil" ? profile.intl : null }); break;
      case "intl": patch({ intl: value === "yes" }); break;
      case "budget": patch({ budgetBand: Number(value) }); break;
      case "budgetAll": patch({ budgetAll: value === "all" }); break;
      case "days": patch({ maxDays: value === "99" ? null : Number(value) }); break;
      case "pace": patch({ pace: value as Pace }); break;
      case "companion": patch({ companion: value as "alone" | "friend" }); break;
      case "firstGroup": patch({ firstGroup: value === "no" }); break;
      case "womenOnly": patch({ womenOnly: value === "yes" }); break;
      case "priority": patch({ priority: value as Profile["priority"] }); break;
    }
    if (step !== "origin") window.setTimeout(advance, 160);
  };

  const toggleMulti = (value: string) => {
    if (step === "dates") {
      const months = profile.months.includes(value) ? profile.months.filter((m) => m !== value) : [...profile.months, value];
      patch({ months, flexibleDates: false });
    } else if (step === "style") {
      if (value === "mix") patch({ mix: !profile.mix, styles: [] });
      else {
        const styles = profile.styles.includes(value as Style) ? profile.styles.filter((s) => s !== value) : [...profile.styles, value as Style];
        patch({ styles, mix: false });
      }
    }
  };

  const options = (): Opt[] => {
    if (step === "budget") return budgetOpts;
    if (step === "dates") return monthOptions(lang);
    const key = step === "firstGroup" ? "yesno" : step;
    return (t.opts[key] ?? []).map(([value, l, hint]) => ({
      value,
      label: { pt: l, en: l },
      hint: hint ? { pt: hint, en: hint } : undefined,
    }));
  };

  const isSelected = (v: string): boolean => {
    switch (step) {
      case "origin": return profile.origin === v;
      case "intl": return profile.intl === (v === "yes");
      case "budget": return profile.budgetBand === Number(v);
      case "budgetAll": return profile.budgetAll === (v === "all");
      case "dates": return profile.months.includes(v);
      case "days": return v === "99" ? profile.maxDays === null : profile.maxDays === Number(v);
      case "style": return v === "mix" ? profile.mix : profile.styles.includes(v as Style);
      case "pace": return profile.pace === v;
      case "companion": return profile.companion === v;
      case "firstGroup": return profile.firstGroup === (v === "no");
      case "womenOnly": return profile.womenOnly === (v === "yes");
      case "priority": return profile.priority === v;
      default: return false;
    }
  };

  const multi = step === "dates" || step === "style";

  if (!open) {
    return (
      <div className="mx-auto mb-12 max-w-3xl rounded-3xl border border-[var(--foreground)]/15 bg-[var(--foreground)]/5 p-8 text-center sm:p-10">
        <h3 className="text-2xl sm:text-3xl" style={headingFont}>{t.introTitle}</h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--foreground)]/75">{t.introText}</p>
        <button
          type="button"
          onClick={() => { setOpen(true); track("matchmaker_start"); }}
          className="mt-6 rounded-full bg-[var(--foreground)] px-8 py-3 text-sm tracking-wide text-[var(--background)] transition-opacity hover:opacity-90"
        >
          {t.start}
        </button>
      </div>
    );
  }

  return (
    <div ref={panelRef} className="mx-auto mb-12 max-w-4xl scroll-mt-24 rounded-3xl border border-[var(--foreground)]/15 bg-[var(--foreground)]/5 p-6 sm:p-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        {!done ? (
          <div className="flex-1">
            <p className="mb-2 text-xs tracking-[0.15em] text-[var(--foreground)]/50">{t.step(stepIdx + 1, steps.length)}</p>
            <div className="h-1 w-full overflow-hidden rounded-full bg-[var(--foreground)]/10" role="progressbar" aria-valuemin={1} aria-valuemax={steps.length} aria-valuenow={stepIdx + 1}>
              <div className="h-full rounded-full bg-[var(--foreground)] transition-all duration-300" style={{ width: `${((stepIdx + 1) / steps.length) * 100}%` }} />
            </div>
          </div>
        ) : <span />}
        <button type="button" onClick={() => setOpen(false)} className="text-xs tracking-wide text-[var(--foreground)]/60 underline underline-offset-4 hover:text-[var(--foreground)]">{t.close}</button>
      </div>

      {!done ? (
        <div key={step} className="animate-[fadeIn_250ms_ease-out]">
          <h3 className="text-2xl sm:text-3xl" style={headingFont}>{t.q[step][0]}</h3>
          {t.q[step][1] && <p className="mt-2 text-sm text-[var(--foreground)]/65">{t.q[step][1]}</p>}

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2" role={multi ? "group" : "radiogroup"}>
            {options().map((o) => {
              const sel = isSelected(o.value);
              return (
                <button
                  key={o.value}
                  type="button"
                  role={multi ? "checkbox" : "radio"}
                  aria-checked={sel}
                  onClick={() => (multi ? toggleMulti(o.value) : pickSingle(o.value))}
                  className={`rounded-2xl border px-5 py-4 text-left text-sm transition-colors ${sel ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]" : "border-[var(--foreground)]/20 hover:border-[var(--foreground)]/50"}`}
                >
                  <span className="block">{o.label[lang]}</span>
                  {o.hint && <span className={`mt-1 block text-xs ${sel ? "opacity-70" : "text-[var(--foreground)]/55"}`}>{o.hint[lang]}</span>}
                </button>
              );
            })}
            {step === "dates" && (
              <button
                type="button"
                role="checkbox"
                aria-checked={profile.flexibleDates}
                onClick={() => patch({ flexibleDates: true, months: [] })}
                className={`rounded-2xl border px-5 py-4 text-left text-sm transition-colors ${profile.flexibleDates ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]" : "border-[var(--foreground)]/20 hover:border-[var(--foreground)]/50"}`}
              >
                {t.flexible}
              </button>
            )}
          </div>

          {step === "origin" && (
            <input
              type="text"
              maxLength={80}
              value={profile.city}
              onChange={(e) => patch({ city: e.target.value })}
              placeholder={t.cityPlaceholder}
              aria-label={t.cityPlaceholder}
              className="mt-4 w-full rounded-xl border border-[var(--foreground)]/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--foreground)]/40 focus:border-[var(--foreground)]/50"
            />
          )}

          <div className="mt-8 flex items-center justify-between">
            <button type="button" disabled={stepIdx === 0} onClick={() => setStepIdx((i) => Math.max(0, i - 1))} className="text-sm text-[var(--foreground)]/60 underline underline-offset-4 hover:text-[var(--foreground)] disabled:opacity-30">{t.back}</button>
            <div className="flex items-center gap-5">
              {step !== "origin" && <button type="button" onClick={advance} className="text-sm text-[var(--foreground)]/60 underline underline-offset-4 hover:text-[var(--foreground)]">{t.skip}</button>}
              {(multi || step === "origin") && (
                <button type="button" onClick={advance} className="rounded-full bg-[var(--foreground)] px-7 py-2.5 text-sm tracking-wide text-[var(--background)] transition-opacity hover:opacity-90">{t.next}</button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Results t={t} lang={lang} profile={profile} matches={matches} alternatives={alternatives} notes={notes} onRestart={reset} />
      )}
    </div>
  );
}

function Results({ t, lang, profile, matches, alternatives, notes, onRestart }: {
  t: (typeof T)["pt"]; lang: Lang; profile: Profile; matches: Match[]; alternatives: boolean; notes: Record<string, string>; onRestart: () => void;
}) {
  useEffect(() => {
    track("matchmaker_results", { count: matches.length, alternatives: alternatives ? 1 : 0, top: matches[0]?.trip.slug ?? "none" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (matches.length === 0) {
    return (
      <div className="animate-[fadeIn_250ms_ease-out] text-center">
        <p className="text-sm text-[var(--foreground)]/75">{t.empty}</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href={whatsappUrl("Oi Julia! Fiz o quiz de viagens e não apareceu nenhuma viagem pra mim. Quais são as próximas?")} target="_blank" rel="noopener noreferrer" onClick={() => track("matchmaker_cta_whatsapp", { trip: "none" })} className="rounded-full bg-[var(--foreground)] px-7 py-2.5 text-sm text-[var(--background)]">{t.talk}</a>
          <button type="button" onClick={onRestart} className="text-sm underline underline-offset-4 text-[var(--foreground)]/60">{t.restart}</button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-[fadeIn_250ms_ease-out]">
      <h3 className="text-2xl sm:text-3xl" style={headingFont}>{t.resultsTitle}</h3>
      <p className="mt-2 text-sm text-[var(--foreground)]/70">{alternatives ? t.altTitle : t.found(matches.length)}</p>

      <div className="mt-6 flex flex-col gap-6">
        {matches.map((m, i) => {
          const trip = localizeTrip(m.trip, lang);
          const msg =
            lang === "pt"
              ? `Oi Julia! Fiz o quiz de viagens e a ${trip.title} (${trip.dates}) apareceu como ${m.score}% de match. Queria saber mais :)`
              : `Hi Julia! I took the trip quiz and ${trip.title} (${trip.dates}) came up as a ${m.score}% match. I'd like to know more :)`;
          return (
            <article key={m.trip.slug} className="overflow-hidden rounded-2xl border border-[var(--foreground)]/15 bg-[var(--background)]/40 sm:grid sm:grid-cols-[240px_1fr]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={trip.cardImage} alt={trip.title} className="h-48 w-full object-cover sm:h-full" />
              <div className="flex flex-col gap-3 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs tracking-wide text-[var(--foreground)]/60">{trip.destination}</p>
                    <h4 className="text-xl sm:text-2xl" style={headingFont}>{i + 1}. {trip.title}</h4>
                  </div>
                  <span className="shrink-0 rounded-full bg-[var(--foreground)] px-3 py-1 text-xs text-[var(--background)]">{m.score}% {t.match}</span>
                </div>
                <p className="text-xs text-[var(--foreground)]/70">{trip.dates} · {trip.duration} · {trip.priceDisplay} · {m.spots !== null ? t.spots(m.spots) : t.spotsUnknown}</p>
                {trip.tagline && <p className="text-sm text-[var(--foreground)]/85">{trip.tagline}</p>}

                {notes[m.trip.slug] && (
                  <p className="rounded-xl border border-[var(--foreground)]/15 bg-[var(--foreground)]/5 p-3 text-sm italic leading-relaxed text-[var(--foreground)]/85">
                    <span className="mr-1 not-italic text-xs tracking-wide text-[var(--foreground)]/50">{t.aiNote}:</span>
                    {notes[m.trip.slug]}
                  </p>
                )}

                {m.reasons.length > 0 && (
                  <div>
                    <p className="text-xs tracking-[0.15em] text-[var(--foreground)]/50">{t.why}</p>
                    <ul className="mt-1 list-disc pl-5 text-sm text-[var(--foreground)]/80">{m.reasons.slice(0, 4).map((r) => <li key={r}>{r}</li>)}</ul>
                  </div>
                )}
                {m.mismatches.length > 0 && (
                  <div>
                    <p className="text-xs tracking-[0.15em] text-[var(--foreground)]/50">{t.watch}</p>
                    <ul className="mt-1 list-disc pl-5 text-sm text-[var(--foreground)]/70">{m.mismatches.map((r) => <li key={r}>{r}</li>)}</ul>
                  </div>
                )}
                {alternatives && m.changes.length > 0 && (
                  <p className="text-sm text-[var(--foreground)]/80">{t.altHint} {m.changes.join("; ")}.</p>
                )}
                <div>
                  <p className="text-xs tracking-[0.15em] text-[var(--foreground)]/50">{t.included}</p>
                  <p className="mt-1 text-sm text-[var(--foreground)]/70">{trip.included.slice(0, 4).join(" · ")}</p>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <Link href={`/girl-trips/${m.trip.slug}`} onClick={() => track("matchmaker_cta_explore", { trip: m.trip.slug })} className="rounded-full bg-[var(--foreground)] px-6 py-2.5 text-sm tracking-wide text-[var(--background)] transition-opacity hover:opacity-90">{t.explore}</Link>
                  <a href={whatsappUrl(msg)} target="_blank" rel="noopener noreferrer" onClick={() => track("matchmaker_cta_whatsapp", { trip: m.trip.slug })} className="rounded-full border border-[var(--foreground)]/30 px-6 py-2.5 text-sm tracking-wide transition-colors hover:border-[var(--foreground)]/60">{t.talk}</a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-4 text-xs text-[var(--foreground)]/50">{t.estimate}</p>

      <LeadForm t={t} lang={lang} profile={profile} slugs={matches.map((m) => m.trip.slug)} scores={matches.map((m) => m.score)} />

      <button type="button" onClick={onRestart} className="mt-6 text-sm text-[var(--foreground)]/60 underline underline-offset-4 hover:text-[var(--foreground)]">{t.restart}</button>
    </div>
  );
}

function LeadForm({ t, lang, profile, slugs, scores }: { t: (typeof T)["pt"]; lang: Lang; profile: Profile; slugs: string[]; scores: number[] }) {
  const [form, setForm] = useState({ name: "", email: "", instagram: "", whatsapp: "" });
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/matchmaker/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, consent, honeypot, lang, profile, recommended: slugs.map((s, i) => ({ slug: s, score: scores[i] })) }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      track("matchmaker_lead");
    } catch {
      setStatus("error");
    }
  };

  const input = "rounded-xl border border-[var(--foreground)]/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--foreground)]/40 focus:border-[var(--foreground)]/50";

  return (
    <div className="mt-8 rounded-2xl border border-[var(--foreground)]/15 p-5 sm:p-6">
      {status === "success" ? (
        <p className="text-sm text-[var(--foreground)]/85">{t.sent}</p>
      ) : (
        <>
          <h4 className="text-xl" style={headingFont}>{t.leadTitle}</h4>
          <p className="mt-2 text-sm text-[var(--foreground)]/70">{t.leadText}</p>
          <form onSubmit={submit} className="mt-4 flex flex-col gap-3">
            <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input className={input} required minLength={2} maxLength={80} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t.firstName} aria-label={t.firstName} />
              <input className={input} type="email" required maxLength={120} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={t.email} aria-label={t.email} />
              <input className={input} maxLength={40} value={form.instagram} onChange={(e) => setForm({ ...form, instagram: e.target.value })} placeholder={t.instagram} aria-label={t.instagram} />
              <input className={input} type="tel" maxLength={20} value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder={t.whatsapp} aria-label={t.whatsapp} />
            </div>
            <label className="flex items-start gap-3 text-xs leading-relaxed text-[var(--foreground)]/70">
              <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--foreground)]" />
              {t.consent}
            </label>
            {status === "error" && <p className="text-xs text-red-400">{t.error}</p>}
            <button type="submit" disabled={status === "sending" || !consent} className="self-start rounded-full bg-[var(--foreground)] px-7 py-2.5 text-sm tracking-wide text-[var(--background)] transition-opacity hover:opacity-90 disabled:opacity-40">{status === "sending" ? t.sending : t.send}</button>
          </form>
        </>
      )}
    </div>
  );
}
