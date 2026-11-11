import { RegFrame, Tag } from "@/components/ui";
import { BENEFITS, IMG, LEDGER } from "@/lib/data";

function LedgerList({
  titolo,
  items,
  marker,
  markerTone,
}: {
  titolo: string;
  items: string[];
  marker: "dash" | "check";
  markerTone: "ink" | "coral";
}) {
  return (
    <div className="p-5 md:p-6">
      <p className="font-mono text-[10px] tracking-[0.22em] text-ink/55 uppercase">{titolo}</p>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it} className="group flex items-start gap-3">
            <span
              className={`mt-[7px] shrink-0 ${
                markerTone === "coral" ? "text-coral" : "text-ink/45"
              } transition-transform duration-300 group-hover:translate-x-0.5`}
            >
              {marker === "check" ? (
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path d="M1 5.2l3.2 3.3L11 1.2" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              ) : (
                <svg width="12" height="2" viewBox="0 0 12 2">
                  <rect width="12" height="1.4" fill="currentColor" />
                </svg>
              )}
            </span>
            <span className="text-[14.5px] leading-snug text-inksoft/90">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Value() {
  return (
    <section id="patto" className="relative bg-bone">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        {/* Header Sezione I: layout editoriale bilanciato con testo a sinistra e foto ampia */}
        <div className="grid gap-10 border-t border-ink/20 pt-8 lg:grid-cols-12 lg:gap-14">
          {/* Colonna Sinistra: testo allineato a sinistra dello sguardo */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-coral">
                  I
                </span>
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink/55">
                  Il patto di valore condiviso
                </span>
              </div>

              <h2
                data-reveal="mask"
                className="mt-6 text-[clamp(2rem,4.2vw,3.5rem)] leading-[0.98] font-extrabold tracking-[-0.03em] uppercase text-ink"
              >
                Entrare non è una spesa.
                <br />È <span className="font-editorial font-medium text-coral normal-case italic">una leva</span> che
                avevate già in casa.
              </h2>

              <p
                data-reveal="up"
                style={{ transitionDelay: "120ms" }}
                className="mt-6 max-w-xl text-[16px] leading-relaxed text-inksoft/85 md:text-[17px]"
              >
                Il valore condiviso funziona quando ciò che conviene all'azienda conviene anche al territorio e a
                chi ci lavora. Qui la materia prima è la stessa per tutti e tre: il caffè che eroghiamo ogni giorno
                nei vostri presidi. Cambia solo ciò che decidiamo di misurarne.
              </p>
            </div>
          </div>

          {/* Colonna Destra: immagine ingrandita con ampio respiro e cornice dedicata */}
          <div data-reveal="scale" className="lg:col-span-5">
            <RegFrame className="overflow-hidden bg-paper/60 p-2 md:p-3">
              <img
                src={IMG.break}
                alt="Colleghi in pausa caffè nell'area break aziendale"
                loading="lazy"
                className="matte-warm aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.03]"
              />
              <div className="mt-3 flex items-center justify-between border-t border-dashed border-ink/20 pt-2.5 font-mono text-[10px] tracking-[0.14em] text-ink/60 uppercase">
                <span>Area break · presidio PE-04</span>
                <span className="text-coral">ore 10:12</span>
              </div>
            </RegFrame>
          </div>
        </div>

        {/* registro dei benefici */}
        <ol className="mt-20 border-t border-ink/20 md:mt-24">
          {BENEFITS.map((b, i) => (
            <li
              key={b.n}
              data-reveal="up"
              style={{ transitionDelay: `${i * 60}ms` }}
              className="group row-lift border-b border-ink/15"
            >
              <div className="grid gap-5 px-1 py-8 transition-colors duration-500 group-hover:bg-paper/70 md:grid-cols-12 md:gap-7 md:px-3">
                <div className="md:col-span-3">
                  <span className="font-mono text-[11px] tracking-[0.24em] text-ink/40 uppercase transition-colors duration-300 group-hover:text-coral">
                    Beneficio {b.n}
                  </span>
                  <p className="mt-3 text-[clamp(1.9rem,3.4vw,2.7rem)] leading-none font-black tracking-[-0.04em] text-ink">
                    {b.metrica}
                  </p>
                  <p className="mt-2 max-w-[22ch] font-mono text-[10px] leading-relaxed tracking-[0.1em] text-ink/50 uppercase">
                    {b.metricLabel}
                  </p>
                </div>
                <div className="md:col-span-6">
                  <h3 className="text-[clamp(1.15rem,2vw,1.6rem)] leading-[1.1] font-extrabold tracking-[-0.025em]">
                    {b.titolo}
                  </h3>
                  <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-inksoft/80">{b.testo}</p>
                </div>
                <div className="flex items-start justify-between gap-4 md:col-span-3 md:flex-col md:items-end md:text-right">
                  <Tag className="md:max-w-[24ch] md:whitespace-normal md:text-[9.5px] md:leading-relaxed">
                    {b.perVoi}
                  </Tag>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="arrow-slide mt-1 text-ink/35 group-hover:text-coral md:mt-4"
                  >
                    <path d="M3 15L15 3M15 3H6.5M15 3v8.5" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* registro di adesione a due colonne */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] tracking-[0.24em] text-coral uppercase">Registro II</p>
            <h3
              data-reveal="mask"
              className="mt-3 text-[clamp(1.5rem,2.8vw,2.2rem)] leading-[1.02] font-extrabold tracking-[-0.03em] uppercase"
            >
              Chi mette
              <br />
              cosa
            </h3>
            <p data-reveal="up" className="mt-5 max-w-sm text-[15px] leading-relaxed text-inksoft/80">
              Il progetto sta in piedi perché la parte pesante resta a noi. Voi continuate a fare quello che fate
              già: bere caffè, scegliere, raccontare. Nessuna integrazione IT, nessuna raccolta dati manuale,
              nessun canone.
            </p>
            <p data-reveal="up" className="mt-5 font-mono text-[10px] tracking-[0.14em] text-ink/50 uppercase">
              Tempo medio di attivazione del primo presidio: <span className="text-coral">9 settimane</span>
            </p>
          </div>

          <div data-reveal="up" className="lg:col-span-8">
            <div className="grid border border-ink/25 bg-paper sm:grid-cols-2">
              <div className="border-ink/15 sm:border-r">
                <div className="flex items-center justify-between border-b border-ink/15 px-5 py-2.5 md:px-6">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-ink/60 uppercase">
                    Azienda cliente OCS
                  </span>
                  <span className="font-mono text-[10px] text-ink/35">col. A</span>
                </div>
                <LedgerList titolo="Il vostro contributo" items={LEDGER.voi} marker="dash" markerTone="ink" />
              </div>
              <div>
                <div className="flex items-center justify-between border-b border-ink/15 bg-coral/10 px-5 py-2.5 md:px-6">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-coral uppercase">
                    Gruppo Illiria
                  </span>
                  <span className="font-mono text-[10px] text-ink/35">col. B</span>
                </div>
                <LedgerList
                  titolo="Ciò che portiamo noi"
                  items={LEDGER.noi}
                  marker="check"
                  markerTone="coral"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
