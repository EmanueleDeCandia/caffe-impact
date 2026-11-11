import { useEffect, useState } from "react";
import { RegFrame, SectionHead, Stamp, Tag } from "@/components/ui";
import { DOCUMENTS, FAQ, ROADMAP } from "@/lib/data";

const DOC_ABSTRACT: Record<string, { abstract: string; contenuti: string[] }> = {
  "DOC-01": {
    abstract:
      "Il documento che i vostri revisori chiederanno: perimetro, metodologia di calcolo, indicatori ambientali e sociali, doppia materialità e confronto con l'anno precedente, redatto sui vostri presidi.",
    contenuti: [
      "Perimetro di rendicontazione e presidi inclusi",
      "Indicatori GRI 305-1, 305-4 e metriche CSRD E1-6",
      "Analisi di doppia materialità (impatti e rischi)",
      "Storia delle rassegne di Performing Art sostenute nell'anno",
    ],
  },
  "DOC-02": {
    abstract:
      "Mappa logistica integrata: percorsi di rifornimento OCS/Vending e consegna combinata dei produttori locali a Km 0 (entro 70 km, L. 61/2022) a percorrenza dedicata azzerata.",
    contenuti: [
      "Cartografia dei giri locali con percorrenze dei furgoni Illiria",
      "Confronto consegne in proprio vs sinergia di flotta",
      "Registro prodotti agroalimentari a Km 0 e marcature temporali",
      "Monitoraggio dei presidi e chilometri dedicati evitati",
    ],
  },
  "DOC-04": {
    abstract:
      "L'atto con cui entrate nel programma: perimetro del trattamento dati, ruoli privacy, livelli di servizio della piattaforma e impegni reciproci sul valore condiviso.",
    contenuti: [
      "Patto di valore condiviso e impegni delle parti",
      "Informativa GDPR: aggregazione per matricola e reparto",
      "SLA di saldo consumi, disponibilità PWA e supporto",
      "Regole di riscatto dei biglietti omaggio e convenzioni",
    ],
  },
};

function DocModal({ codice, onClose }: { codice: string; onClose: () => void }) {
  const doc = DOCUMENTS.find((d) => d.codice === codice)!;
  const info = DOC_ABSTRACT[codice];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={doc.titolo}
      className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/70 p-3 md:items-center md:p-8"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="reg-frame relative max-h-[88vh] w-full max-w-2xl overflow-y-auto border border-ink bg-paper p-6 shadow-[14px_14px_0_rgba(21,20,15,0.4)] md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Chiudi anteprima documento"
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center border border-ink/30 font-mono text-[13px] transition-colors hover:border-coral hover:bg-coral hover:text-bone"
        >
          ✕
        </button>
        <div className="flex items-start gap-5">
          <Stamp label="documento · registro impact · " sub={doc.codice} size={78} spin={false} />
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-coral uppercase">
              {doc.codice} · {doc.formato}
            </p>
            <h3 className="mt-2 text-[clamp(1.3rem,3vw,1.9rem)] leading-[1.05] font-black tracking-[-0.035em] uppercase">
              {doc.titolo}
            </h3>
            <p className="mt-2 font-mono text-[9.5px] tracking-[0.14em] text-ink/55 uppercase">
              {doc.standard}
            </p>
          </div>
        </div>

        <p className="mt-6 text-[15px] leading-relaxed text-inksoft/90">{info.abstract}</p>

        <p className="mt-6 font-mono text-[9.5px] tracking-[0.2em] text-ink/50 uppercase">Contenuti</p>
        <ul className="mt-3 border-t border-ink/15">
          {info.contenuti.map((c, i) => (
            <li
              key={c}
              className="flex items-baseline gap-4 border-b border-ink/15 py-2.5 text-[14px] text-inksoft/90"
            >
              <span className="font-mono text-[9.5px] text-coral">{String(i + 1).padStart(2, "0")}</span>
              {c}
            </li>
          ))}
        </ul>

        <div className="mt-6 border border-dashed border-ink/30 bg-bone p-4">
          <p className="font-mono text-[9px] tracking-[0.18em] text-ink/50 uppercase">Hash documento · SHA-256</p>
          <p className="mt-2 break-all font-mono text-[10.5px] leading-relaxed text-inksoft">{doc.sha}</p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#adesione"
            onClick={onClose}
            className="btn-sweep inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3 text-[11px] font-bold tracking-[0.14em] text-bone uppercase"
          >
            Richiedi la versione integrale
          </a>
          <Tag>FR-02 · attestazione digitale con hash</Tag>
        </div>
      </div>
    </div>
  );
}

export default function Compliance() {
  const [open, setOpen] = useState<string | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <>
      {/* VI — rendicontazione */}
      <section id="rendicontazione" className="relative bg-bone">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <SectionHead
            numeral="VI"
            kicker="Rendicontazione ESG"
            title={
              <>
                Documenti che{" "}
                <span className="font-editorial font-medium text-coral normal-case italic">stanno in piedi</span> in
                audit.
              </>
            }
            lead="Ogni indicatore pubblicato ha una fonte, un hash e una marcatura temporale. Questo è l'archivio che mettiamo a disposizione del vostro referente sostenibilità — e dei vostri revisori."
          />

          <div className="mt-12 border-t border-ink/25">
            {DOCUMENTS.map((d, i) => (
              <div
                key={d.codice}
                data-reveal="up"
                style={{ transitionDelay: `${i * 70}ms` }}
                className="group row-lift grid items-center gap-4 border-b border-ink/15 px-1 py-6 transition-colors duration-500 hover:bg-paper/80 md:grid-cols-12 md:gap-6 md:px-3"
              >
                <div className="flex items-center gap-4 md:col-span-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-coral uppercase">{d.codice}</span>
                  <div>
                    <p className="text-[16px] leading-tight font-extrabold tracking-[-0.02em]">{d.titolo}</p>
                    <p className="mt-1 font-mono text-[9.5px] tracking-[0.12em] text-ink/50 uppercase">
                      {d.formato} · {d.standard}
                    </p>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <p className="break-all font-mono text-[9.5px] leading-relaxed text-ink/45 transition-colors duration-500 group-hover:text-inksoft/80">
                    sha-256 {d.sha}
                  </p>
                </div>
                <div className="flex items-center gap-3 md:col-span-3 md:justify-end">
                  {d.scaricabile ? (
                    <a
                      href="#simulatore"
                      className="inline-flex items-center gap-2 border border-ink/40 px-4 py-2.5 font-mono text-[9.5px] tracking-[0.14em] uppercase transition-all hover:-translate-y-0.5 hover:border-coral hover:text-coral"
                    >
                      genera dal simulatore
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setOpen(d.codice)}
                      className="inline-flex items-center gap-2 border border-ink/40 px-4 py-2.5 font-mono text-[9.5px] tracking-[0.14em] uppercase transition-all hover:-translate-y-0.5 hover:border-coral hover:bg-coral hover:text-bone"
                    >
                      anteprima
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="arrow-slide">
                        <path d="M2 11L11 2M11 2H4.5M11 2v6.5" stroke="currentColor" strokeWidth="1.3" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 font-mono text-[10px] tracking-[0.14em] text-ink/50 uppercase">
            NFR-04 · i consumi sono trattati in forma aggregata per matricola o reparto: nessun dato individuale
            viene esportato.
          </p>
        </div>
      </section>

      {/* VII — roadmap */}
      <section id="attivazione" className="relative bg-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <SectionHead
            numeral="VII"
            kicker="Attivazione"
            title={
              <>
                Sei mesi, quattro fasi,
                <br />
                <span className="font-editorial font-medium text-coral normal-case italic">quattro ore</span> del
                vostro tempo.
              </>
            }
            lead="Il calendario è il nostro, non il vostro. Qui sotto trovate per ogni fase l'impegno reale richiesto al referente aziendale: è l'argomento più concreto che possiamo portarvi."
          />

          <ol className="mt-14 relative border-l border-dashed border-ink/30 pl-6 md:pl-10">
            {ROADMAP.map((f, i) => (
              <li
                key={f.fase}
                data-reveal="up"
                style={{ transitionDelay: `${i * 90}ms` }}
                className="group relative pb-12 last:pb-0"
              >
                <span
                  className={`absolute top-1.5 -left-[31px] flex h-4 w-4 items-center justify-center border-2 md:-left-[47px] ${
                    f.stato === "attivo"
                      ? "border-coral bg-coral"
                      : "border-ink/40 bg-paper group-hover:border-coral"
                  }`}
                />
                <div className="grid gap-5 md:grid-cols-12 md:gap-7">
                  <div className="md:col-span-3">
                    <p className="font-mono text-[10px] tracking-[0.22em] text-coral uppercase">{f.fase}</p>
                    <p className="mt-1 font-mono text-[10px] tracking-[0.16em] text-ink/50 uppercase">{f.mesi}</p>
                    <h3 className="mt-3 text-[clamp(1.15rem,2vw,1.5rem)] leading-[1.06] font-extrabold tracking-[-0.03em]">
                      {f.titolo}
                    </h3>
                  </div>
                  <div className="md:col-span-4">
                    <p className="font-mono text-[9px] tracking-[0.2em] text-ink/45 uppercase">Cosa fate voi</p>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-inksoft/85">{f.cliente}</p>
                  </div>
                  <div className="md:col-span-4">
                    <p className="font-mono text-[9px] tracking-[0.2em] text-ink/45 uppercase">Cosa facciamo noi</p>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-inksoft/85">{f.noi}</p>
                  </div>
                  <div className="md:col-span-1 md:text-right">
                    <RegFrame className="inline-block">
                      <span className="block bg-bone px-3 py-2 font-mono text-[10px] tracking-[0.14em] text-ink uppercase transition-colors duration-300 group-hover:bg-coral group-hover:text-bone">
                        {f.impegno}
                      </span>
                    </RegFrame>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VIII — FAQ */}
      <section id="domande" className="relative bg-bone">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <SectionHead
                  numeral="VIII"
                  kicker="Chiarimenti strategici e operativi"
                  title={
                    <>
                      Tutte le risposte
                      <br />
                      <span className="font-editorial font-medium text-coral normal-case italic">chiare e dirette</span>
                      <br />
                      sul nostro modello
                    </>
                  }
                />
                <p data-reveal="up" className="mt-6 max-w-sm text-[15px] leading-relaxed text-inksoft/80">
                  Se ne resta fuori una, scrivetela nel modulo di adesione: rispondiamo entro due giorni
                  lavorativi con un referente dedicato, non con un call center.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <ul className="border-t border-ink/20">
                {FAQ.map((f, i) => {
                  const isOpen = faqOpen === i;
                  return (
                    <li key={f.q} className="border-b border-ink/20">
                      <button
                        type="button"
                        onClick={() => setFaqOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="group flex w-full items-start gap-5 py-6 text-left"
                      >
                        <span
                          className={`mt-1 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors ${
                            isOpen ? "text-coral" : "text-ink/40 group-hover:text-coral"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 text-[clamp(1.02rem,1.8vw,1.28rem)] leading-snug font-extrabold tracking-[-0.02em]">
                          {f.q}
                        </span>
                        <span
                          className={`relative mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center transition-transform duration-500 ${
                            isOpen ? "rotate-45 text-coral" : "text-ink/50 group-hover:text-coral"
                          }`}
                        >
                          <span className="absolute h-[1.5px] w-4 bg-current" />
                          <span className="absolute h-4 w-[1.5px] bg-current" />
                        </span>
                      </button>
                      <div className={`accordion-body ${isOpen ? "open" : ""}`}>
                        <div>
                          <p className="max-w-prose pb-7 pl-0 text-[15px] leading-relaxed text-inksoft/85 md:pl-[42px]">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {open && <DocModal codice={open} onClose={() => setOpen(null)} />}
    </>
  );
}
