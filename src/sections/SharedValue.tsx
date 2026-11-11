import { LiveDot, Tag } from "@/components/ui";

const DESTINATARI = [
  {
    idx: "A",
    chi: "Alla vostra azienda",
    metrica: "−92%",
    metricaLabel: "ore-uomo sulla raccolta dati non finanziari",
    voce: [
      "Dataset per la rendicontazione ESG predisposto dalla Startup",
      "Paniere prodotti agroalimentari a Km 0 a costo di trasporto zero",
      "Storytelling e Best Practice comunicata sui media regionali",
    ],
    tone: "ink" as const,
  },
  {
    idx: "B",
    chi: "Alle vostre persone",
    metrica: "100%",
    metricaLabel: "welfare culturale ed esperienziale diffuso",
    voce: [
      "5 Biglietti Omaggio Performing Art ogni 1.000 erogazioni",
      "Attestato nominale di impatto con hash e marcatura temporale",
      "Convenzioni di soggiorno e cene nei 24 Comuni delle Aree Interne",
    ],
    tone: "coral" as const,
  },
  {
    idx: "C",
    chi: "Al territorio marchigiano",
    metrica: "×2,4",
    metricaLabel: "moltiplicatore economico generato nelle comunità locali",
    voce: [
      "Sostegno diretto a 4 rassegne di teatro e musica nelle Aree Interne",
      "Valorizzazione dei produttori agroalimentari entro 70 km (L. 61/2022)",
      "Zero furgoni dedicati inquinanti grazie alla flotta Illiria",
    ],
    tone: "ash" as const,
  },
];

export default function SharedValue() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(237,111,92,0.14), transparent 62%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-5 pt-16 pb-4 md:px-10 md:pt-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10px] tracking-[0.24em] text-coral uppercase">
              Il principio · valore condiviso
            </p>
            <h2
              data-reveal="mask"
              className="mt-4 text-[clamp(1.9rem,4.4vw,3.3rem)] leading-[0.95] font-black tracking-[-0.04em] uppercase"
            >
              Un caffè erogato,
              <br />
              <span className="font-editorial font-medium text-coral normal-case italic">tre benefici</span> che
              tornano indietro.
            </h2>
            <p data-reveal="up" className="mt-6 max-w-md text-[15.5px] leading-relaxed text-inksoft/85">
              Non è filantropia aziendale e non è un costo nuovo: è la stessa erogazione letta da tre punti di
              vista. Il dato nasce nel distributore del vostro presidio e si divide in rendicontazione per la
              direzione, welfare per le persone, risorse per i luoghi. A voi interessa soprattutto la prima
              colonna — ma è dalle altre due che arriva la forza del racconto.
            </p>
            <div data-reveal="up" className="mt-7 flex flex-wrap gap-3">
              <Tag>Doppia materialità</Tag>
              <Tag>Welfare non monetario</Tag>
              <Tag>Rigenerazione territoriale</Tag>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* nodo sorgente */}
            <div className="flex flex-col items-center">
              <div className="flex w-full items-center justify-center gap-3 border border-ink bg-ink px-4 py-3 text-bone md:w-auto">
                <LiveDot />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
                  Consumi tracciati · Agroalimentare Km 0 · Valore sociale ed economico
                </span>
              </div>
              <span className="drop-line mt-0 h-8" aria-hidden="true" />
            </div>

            {/* diramazione */}
            <div className="relative hidden md:block">
              <span className="absolute top-0 right-[16.6%] left-[16.6%] h-px bg-ink/25" aria-hidden="true" />
            </div>

            <div className="grid gap-6 md:grid-cols-3 md:gap-5">
              {DESTINATARI.map((d, i) => (
                <div key={d.idx} data-reveal="up" style={{ transitionDelay: `${i * 110}ms` }}>
                  <span className="mx-auto hidden h-8 md:block drop-line" aria-hidden="true" />
                  <div
                    className={`group h-full border-t-2 bg-bone p-5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[9px_9px_0_rgba(21,20,15,0.09)] ${d.tone === "coral"
                      ? "border-coral"
                      : d.tone === "ash"
                        ? "border-ash"
                        : "border-ink"
                      }`}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span
                        className={`font-mono text-[10px] tracking-[0.24em] uppercase transition-colors ${d.tone === "coral" ? "text-coral" : "text-ink/45 group-hover:text-coral"
                          }`}
                      >
                        Destinazione {d.idx}
                      </span>
                      <span className="tabnum text-[clamp(1.5rem,3vw,2rem)] leading-none font-black tracking-[-0.045em]">
                        {d.metrica}
                      </span>
                    </div>
                    <p className="mt-1 text-[16px] leading-tight font-extrabold tracking-[-0.02em]">{d.chi}</p>
                    <p className="mt-1.5 font-mono text-[9px] leading-relaxed tracking-[0.1em] text-ink/50 uppercase">
                      {d.metricaLabel}
                    </p>
                    <ul className="mt-4 space-y-2.5 border-t border-dashed border-ink/25 pt-4">
                      {d.voce.map((v) => (
                        <li key={v} className="flex gap-2.5 text-[13.5px] leading-snug text-inksoft/85">
                          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 bg-ink/30 transition-colors duration-300 group-hover:bg-coral" />
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
