import { useState } from "react";
import { Counter, LiveDot, Marquee, RegFrame, Stamp, Tag } from "@/components/ui";
import { ValuePropositionModal, type HypothesisId } from "@/components/ValuePropositionModal";
import { BestPracticeModal } from "@/components/BestPracticeModal";
import { LoyaltyArchitectureModal } from "@/components/LoyaltyArchitectureModal";
import { SocialImpactIndexModal } from "@/components/SocialImpactIndexModal";
import { IMG, LIVE_KPIS, TICKER } from "@/lib/data";

function ScrollHint() {
  return (
    <a
      href="#valore-aggiunto"
      className="group inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.24em] text-ink/60 uppercase transition-colors hover:text-coral"
    >
      <span className="relative flex h-9 w-5 items-start justify-center rounded-full border border-ink/35 pt-1.5">
        <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-coral" />
      </span>
      Scorri il dossier
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="arrow-slide">
        <path d="M7 1v11M2.5 8L7 12.5 11.5 8" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </a>
  );
}

export default function Cover() {
  const [selectedHypothesis, setSelectedHypothesis] = useState<HypothesisId | null>(null);
  const [openBestPractice, setOpenBestPractice] = useState(false);
  const [openLoyaltyModal, setOpenLoyaltyModal] = useState(false);
  const [openSiiModal, setOpenSiiModal] = useState(false);

  return (
    <header id="copertina" className="paper-field relative overflow-hidden">
      {/* griglia editoriale ambientale */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--color-ink) 0 1px, transparent 1px calc(100% / 6))",
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-[4vw] -bottom-[9vw] hidden select-none font-display text-[26vw] leading-[0.72] font-black tracking-[-0.06em] text-transparent md:block"
        style={{ WebkitTextStroke: "1px rgba(21,20,15,0.14)" }}
      >
        KM0
      </span>

      {/* masthead */}
      <div className="relative border-b border-ink/20">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-6 gap-y-2 px-5 py-2.5 font-mono text-[10px] tracking-[0.22em] text-ink/70 uppercase md:px-10">
          <span className="font-bold text-ink">Shared Value</span>
          <span className="hidden text-ink/35 md:inline">/</span>
          <span className="hidden md:inline">Presidi OCS & Distributori Automatici</span>
          <span className="ml-auto flex items-center gap-4">
            <span className="hidden sm:inline">Dossier Valore Condiviso — 2026</span>
            <span className="flex items-center gap-2 text-coral">
              <LiveDot />
              Saldo consumi attivo
            </span>
          </span>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 pt-10 pb-6 md:px-10 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* colonna editoriale */}
          <div className="lg:col-span-7">
            <div data-reveal="up" className="flex flex-wrap items-center gap-3">
              <Tag tone="coral">Proposta di adesione</Tag>
              <span className="font-mono text-[11px] tracking-[0.2em] text-ink/60 uppercase">
                Per i presidi OCS e distributori automatici
              </span>
            </div>

            <h1
              data-reveal="mask"
              className="mt-6 text-[clamp(2.4rem,6.8vw,5.6rem)] leading-[0.88] font-black tracking-[-0.045em] uppercase"
            >
              Non è solo
              <br />
              un ottimo caffè.
              <br />
              È il network che
              <br />
              accende{" "}
              <span className="font-editorial text-[0.92em] font-medium tracking-[-0.02em] text-coral normal-case italic">
                nuovo valore
              </span>
              .
            </h1>

            <p
              data-reveal="up"
              style={{ transitionDelay: "160ms" }}
              className="mt-8 max-w-xl text-[16px] leading-[1.65] text-inksoft/90 md:text-[17px]"
            >
              Sappiamo di non essere una fornitura low cost. Uniamo l'eccellenza delle migliori torrefazioni a un ecosistema esclusivo per i presidi OCS e per i distributori automatici: sconti su specialità a Km 0, serate d'autore nei borghi per le vostre persone e relazioni qualificate tra imprenditori del territorio. Un investimento concreto promosso insieme alla Startup, senza alcun costo nascosto.
            </p>

            {/* Selettore 3 Customer Journey · 3 Ipotesi di Valore */}
            <div
              data-reveal="up"
              style={{ transitionDelay: "200ms" }}
              className="mt-8 border-t border-ink/15 pt-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-[9.5px] font-bold tracking-[0.2em] text-coral uppercase flex items-center gap-2">
                  <LiveDot /> 3 Customer Journey · Apri la scheda di valore
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setOpenSiiModal(true)}
                    className="group relative inline-flex items-center gap-1.5 border-2 border-ink bg-[#ffe600] px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-[0.14em] text-ink shadow-[3px_3px_0_#15140f] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#fff04d] hover:shadow-[4px_4px_0_#ed6f5c] active:translate-y-0 cursor-pointer"
                    title="Visualizza Standard e Formula Matematica del Social Impact Index SII-100"
                  >
                    <span className="h-1.5 w-1.5 bg-coral" />
                    <span>SOCIAL IMPACT INDEX SII-100 ↗</span>
                  </button>
                  <span className="text-ink/30 hidden sm:inline">·</span>
                  <button
                    type="button"
                    onClick={() => setOpenLoyaltyModal(true)}
                    className="font-mono text-[9px] tracking-[0.14em] text-ink/75 hover:text-coral uppercase underline decoration-coral/50 underline-offset-2 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    Borsellino &amp; Loyalty Framework ↗
                  </button>
                  <span className="text-ink/30 hidden sm:inline">·</span>
                  <button
                    type="button"
                    onClick={() => setOpenBestPractice(true)}
                    className="font-mono text-[9px] tracking-[0.14em] text-ink/75 hover:text-coral uppercase underline decoration-coral/50 underline-offset-2 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    Cos'è una Best Practice? [Dossier PR ↗]
                  </button>
                </div>
              </div>

              <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                <button
                  type="button"
                  onClick={() => setSelectedHypothesis("A")}
                  className="group relative flex flex-col justify-between border border-ink/25 bg-bone/90 p-3.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-coral hover:bg-paper hover:shadow-[5px_5px_0_rgba(237,111,92,0.35)]"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-[8.5px] tracking-[0.16em] text-coral uppercase font-bold">
                      <span>Ipotesi I</span>
                      <span className="text-ink/35 transition-transform group-hover:translate-x-0.5 group-hover:text-coral">↗</span>
                    </div>
                    <p className="mt-1.5 text-[12.5px] font-extrabold uppercase tracking-tight text-ink">
                      Direzione &amp; Titolari
                    </p>
                    <p className="mt-1 font-mono text-[8.5px] leading-tight text-inksoft/70">
                      Networking B2B, status &amp; Libro Bianco
                    </p>
                  </div>
                  <span className="mt-2.5 inline-block border-t border-dashed border-ink/15 pt-1.5 font-mono text-[7.5px] tracking-[0.12em] text-ink/50 uppercase">
                    Focus: Relazioni d'Impresa
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedHypothesis("B")}
                  className="group relative flex flex-col justify-between border border-ink/25 bg-bone/90 p-3.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-coral hover:bg-paper hover:shadow-[5px_5px_0_rgba(237,111,92,0.35)]"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-[8.5px] tracking-[0.16em] text-coral uppercase font-bold">
                      <span>Ipotesi II</span>
                      <span className="text-ink/35 transition-transform group-hover:translate-x-0.5 group-hover:text-coral">↗</span>
                    </div>
                    <p className="mt-1.5 text-[12.5px] font-extrabold uppercase tracking-tight text-ink">
                      Collaboratori &amp; HR
                    </p>
                    <p className="mt-1 font-mono text-[8.5px] leading-tight text-inksoft/70">
                      Pass nei borghi, team offsite &amp; voto
                    </p>
                  </div>
                  <span className="mt-2.5 inline-block border-t border-dashed border-ink/15 pt-1.5 font-mono text-[7.5px] tracking-[0.12em] text-ink/50 uppercase">
                    Focus: Esperienze &amp; Team
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedHypothesis("C")}
                  className="group relative flex flex-col justify-between border border-ink/25 bg-bone/90 p-3.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-coral hover:bg-paper hover:shadow-[5px_5px_0_rgba(237,111,92,0.35)]"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-[8.5px] tracking-[0.16em] text-coral uppercase font-bold">
                      <span>Ipotesi III</span>
                      <span className="text-ink/35 transition-transform group-hover:translate-x-0.5 group-hover:text-coral">↗</span>
                    </div>
                    <p className="mt-1.5 text-[12.5px] font-extrabold uppercase tracking-tight text-ink">
                      Acquisti &amp; CFO
                    </p>
                    <p className="mt-1 font-mono text-[8.5px] leading-tight text-inksoft/70">
                      Sconti filiera Km 0, zero costi IT
                    </p>
                  </div>
                  <span className="mt-2.5 inline-block border-t border-dashed border-ink/15 pt-1.5 font-mono text-[7.5px] tracking-[0.12em] text-ink/50 uppercase">
                    Focus: Economia Circolare
                  </span>
                </button>
              </div>
            </div>

            <div
              data-reveal="up"
              style={{ transitionDelay: "240ms" }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#valore-aggiunto"
                className="btn-sweep group inline-flex items-center gap-3 border border-ink bg-ink px-6 py-3.5 text-[12px] font-bold tracking-[0.14em] text-bone uppercase transition-colors hover:text-bone"
              >
                Scopri perché conviene
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="arrow-slide">
                  <path d="M2 13L13 2M13 2H5M13 2v8" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
              <a
                href="#simulatore"
                className="inline-flex items-center gap-3 border border-ink/45 px-6 py-3.5 text-[12px] font-bold tracking-[0.14em] text-ink uppercase transition-all hover:border-ink hover:bg-bone"
              >
                Calcola il tuo impatto
              </a>
            </div>

            <dl
              data-reveal="up"
              style={{ transitionDelay: "320ms" }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/15 pt-5 font-mono text-[10.5px] tracking-[0.16em] text-ink/60 uppercase"
            >
              <div className="flex gap-2">
                <dt className="text-coral">Zero</dt>
                <dd>costi nascosti</dd>
              </div>
              <button
                type="button"
                onClick={() => setOpenLoyaltyModal(true)}
                className="group flex cursor-pointer items-center gap-2 text-left transition-colors hover:text-ink focus:outline-none"
                title="Architettura Incentivi: Meccanica completa del Borsellino, Tiering e 4 Strategie"
              >
                <dt className="font-bold text-coral group-hover:underline">5 biglietti ↗</dt>
                <dd className="border-b border-dashed border-ink/40 text-ink/75 group-hover:border-coral group-hover:text-coral">
                  ogni 1.000 erogazioni
                </dd>
              </button>
              <button
                type="button"
                onClick={() => setOpenBestPractice(true)}
                className="group flex cursor-pointer items-center gap-2 text-left transition-colors hover:text-ink focus:outline-none"
                title="Approfondimento Tecnico: La Comunicazione delle Best Practice nelle Relazioni Pubbliche"
              >
                <dt className="font-bold text-coral group-hover:underline">Best Practice ↗</dt>
                <dd className="border-b border-dashed border-ink/40 text-ink/75 group-hover:border-coral group-hover:text-coral">
                  attestata e verificabile
                </dd>
              </button>
              <div className="hidden items-center sm:flex">
                <ScrollHint />
              </div>
            </dl>
          </div>

          {/* registro di impatto */}
          <div className="lg:col-span-5">
            <div
              data-reveal="right"
              className="relative border border-ink/25 bg-bone/70 p-5 shadow-[10px_10px_0_rgba(21,20,15,0.08)] backdrop-blur-[1px] md:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.24em] text-ink/55 uppercase">
                    Registro di impatto
                  </p>
                  <p className="mt-1 text-[15px] font-extrabold tracking-[-0.02em] uppercase">
                    Rete OCS & Vending · oggi
                  </p>
                </div>
                <Stamp
                  label="Km 0 · l. 61/2022 · valore condiviso · "
                  sub={"Impatto\nattestato"}
                  size={92}
                  className="-mt-2 -mr-1"
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-px bg-ink/15">
                {LIVE_KPIS.map((k, i) => (
                  <div key={k.label} className="group bg-bone p-4 transition-colors hover:bg-paper">
                    <p className="font-mono text-[9.5px] tracking-[0.18em] text-ink/50 uppercase">
                      {String(i + 1).padStart(2, "0")} · {k.label}
                    </p>
                    <p className="mt-2 text-[clamp(1.35rem,2.6vw,1.9rem)] leading-none font-extrabold tracking-[-0.03em]">
                      <Counter value={k.value} decimals={k.decimals} prefix={k.prefix ?? ""} suffix={k.suffix} />
                    </p>
                    <p className="mt-2 font-mono text-[9px] tracking-[0.1em] text-ink/45 uppercase">
                      {k.note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-[86px_1fr] items-end gap-4">
                <RegFrame>
                  <img
                    src={IMG.tostatura}
                    alt="Chicchi di caffè tostati nella filiera di prossimità"
                    loading="lazy"
                    className="matte aspect-square h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-[1.06]"
                  />
                </RegFrame>
                <div>
                  <p className="font-mono text-[9.5px] leading-relaxed tracking-[0.12em] text-ink/55 uppercase">
                    Lotto 4471 · tostatura di prossimità
                    <br />
                    42.3643° N / 14.2142° E
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpenSiiModal(true)}
                    className="mt-2.5 group relative inline-flex items-center gap-2 border-2 border-ink bg-[#ffe600] px-3.5 py-1.5 font-mono text-[10.5px] font-black uppercase tracking-[0.14em] text-ink shadow-[4px_4px_0_#15140f] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#fff04d] hover:shadow-[5px_5px_0_#ed6f5c] active:translate-y-0 cursor-pointer"
                    title="Visualizza Standard e Formula Matematica del Social Impact Index SII-100"
                  >
                    <span className="h-2 w-2 bg-coral" />
                    <span>SOCIAL IMPACT INDEX SII-100 ↗</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ticker saldo consumi */}
      <div className="relative mt-6 border-y border-ink/25 bg-ink py-2.5 text-bone/85">
        <Marquee items={TICKER} className="font-mono" />
      </div>

      {/* Scheda di Valore Monografica 3 Customer Journey */}
      <ValuePropositionModal
        selected={selectedHypothesis}
        onClose={() => setSelectedHypothesis(null)}
        onSelect={setSelectedHypothesis}
      />

      {/* Dossier Tecnico Best Practice nelle Relazioni Pubbliche */}
      <BestPracticeModal
        isOpen={openBestPractice}
        onClose={() => setOpenBestPractice(false)}
      />

      {/* Architettura Strategica Incentivi & Borsellino Loyalty */}
      <LoyaltyArchitectureModal
        isOpen={openLoyaltyModal}
        onClose={() => setOpenLoyaltyModal(false)}
      />

      {/* Standard Tecnico Social Impact Index */}
      <SocialImpactIndexModal
        isOpen={openSiiModal}
        onClose={() => setOpenSiiModal(false)}
      />
    </header>
  );
}
