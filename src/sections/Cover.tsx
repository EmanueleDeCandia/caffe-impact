import { Counter, LiveDot, Marquee, RegFrame, Stamp, Tag } from "@/components/ui";
import { IMG, LIVE_KPIS, TICKER } from "@/lib/data";

function ScrollHint() {
  return (
    <a
      href="#patto"
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
          <span className="font-bold text-ink">Gruppo Illiria S.p.A.</span>
          <span className="hidden text-ink/35 md:inline">/</span>
          <span className="hidden md:inline">Office Coffee Service</span>
          <span className="ml-auto flex items-center gap-4">
            <span className="hidden sm:inline">Dossier OCS N. 04 — 2026</span>
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
                Per i clienti OCS Illiria
              </span>
            </div>

            <h1
              data-reveal="mask"
              className="mt-6 text-[clamp(2.5rem,7.4vw,6.1rem)] leading-[0.88] font-black tracking-[-0.045em] uppercase"
            >
              La vostra pausa
              <br />
              caffè diventa
              <br />
              <span className="font-editorial text-[0.92em] font-medium tracking-[-0.02em] text-coral normal-case italic">
                valore condiviso
              </span>
            </h1>

            <p
              data-reveal="up"
              style={{ transitionDelay: "160ms" }}
              className="mt-8 max-w-xl text-[16px] leading-[1.65] text-inksoft/90 md:text-[17px]"
            >
              <strong className="font-semibold">Illiria Coffee Impact</strong> converte ogni erogazione dei
              vostri presidi in chilometri tolti dalla strada, CO₂ evitata e crediti di welfare culturale per
              le vostre persone. Voi mettete il caffè di sempre: al resto pensiamo noi, e il risultato è un
              numero che potete portare in bilancio, in audit e sul territorio.
            </p>

            <div
              data-reveal="up"
              style={{ transitionDelay: "240ms" }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#simulatore"
                className="btn-sweep group inline-flex items-center gap-3 border border-ink bg-ink px-6 py-3.5 text-[12px] font-bold tracking-[0.14em] text-bone uppercase transition-colors hover:text-bone"
              >
                Calcola il tuo impatto
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="arrow-slide">
                  <path d="M2 13L13 2M13 2H5M13 2v8" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
              <a
                href="#adesione"
                className="inline-flex items-center gap-3 border border-ink/45 px-6 py-3.5 text-[12px] font-bold tracking-[0.14em] text-ink uppercase transition-all hover:border-ink hover:bg-bone"
              >
                Richiedi il dossier di adesione
              </a>
            </div>

            <dl
              data-reveal="up"
              style={{ transitionDelay: "320ms" }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/15 pt-5 font-mono text-[10.5px] tracking-[0.16em] text-ink/60 uppercase"
            >
              <div className="flex gap-2">
                <dt className="text-coral">€0</dt>
                <dd>canone aggiuntivo</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-coral">6 mesi</dt>
                <dd>attivazione per fasi</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-coral">GRI / CSRD</dt>
                <dd>export incluso</dd>
              </div>
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
                    Rete OCS Illiria · oggi
                  </p>
                </div>
                <Stamp
                  label="Km 0 · l. 61/2022 · valore condiviso · "
                  sub={"SHA-256\nvalidato"}
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
                  <p className="mt-2 flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-coral uppercase">
                    <LiveDot /> Social Impact Index A++
                  </p>
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
    </header>
  );
}
