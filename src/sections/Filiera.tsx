import { RegFrame, SectionHead, Tag } from "@/components/ui";
import { FILIERA, IMG } from "@/lib/data";

export default function Filiera() {
  return (
    <section id="filiera" className="relative overflow-hidden bg-bone">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          numeral="III"
          kicker="Come funziona"
          title={
            <>
              Dal chicco al borgo,
              <br />
              passando dalla{" "}
              <span className="font-editorial font-medium text-coral normal-case italic">vostra area break</span>.
            </>
          }
          lead="Cinque passaggi, uno solo dei quali riguarda voi. La catena è già in piedi sulla rete Illiria: l'adesione aggancia i vostri presidi e li fa entrare nel registro."
        />

        {/* flusso */}
        <div className="relative mt-16">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute top-[27px] right-0 left-0 hidden h-4 w-full lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 1200 16"
          >
            <line x1="0" y1="8" x2="1200" y2="8" stroke="rgba(21,20,15,0.25)" strokeWidth="1" />
            <line
              x1="0"
              y1="8"
              x2="1200"
              y2="8"
              stroke="var(--color-coral)"
              strokeWidth="2"
              strokeDasharray="14 10"
              className="animate-dash"
            />
          </svg>

          <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-6">
            {FILIERA.map((s, i) => (
              <li
                key={s.n}
                data-reveal="up"
                style={{ transitionDelay: `${i * 110}ms` }}
                className="group relative lg:pr-4"
              >
                <span className="absolute top-6 bottom-0 -left-[13px] hidden w-px bg-ink/20 sm:block lg:hidden" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink bg-paper font-mono text-[15px] font-bold transition-all duration-500 group-hover:scale-110 group-hover:border-coral group-hover:bg-coral group-hover:text-bone">
                  {s.n}
                </div>
                <p className="mt-5 font-mono text-[9.5px] tracking-[0.2em] text-coral uppercase">{s.tag}</p>
                <h3 className="mt-2 text-[17px] leading-tight font-extrabold tracking-[-0.02em]">{s.titolo}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-inksoft/80">{s.testo}</p>
                <p className="mt-4 border-t border-dashed border-ink/25 pt-3 font-mono text-[9.5px] tracking-[0.12em] text-ink/50 uppercase">
                  {s.sforzo}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* banda fotografica */}
        <div className="mt-20 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div data-reveal="scale" className="lg:col-span-7">
            <RegFrame>
              <img
                src={IMG.filiera}
                alt="Produttori agroalimentari a Km 0 e distribuzione sinergica Illiria"
                loading="lazy"
                className="matte aspect-[16/10] w-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.04]"
              />
            </RegFrame>
          </div>
          <div data-reveal="up" className="flex flex-col justify-between lg:col-span-5">
            <div>
              <Tag>Registro di filiera</Tag>
              <p className="mt-5 text-[clamp(1.3rem,2.4vw,1.85rem)] leading-[1.12] font-extrabold tracking-[-0.03em]">
                Ogni consegna evita km di impatto valorizzando la filiera
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-inksoft/80">
                Non è richiesta alcuna misurazione complessa: nei tragitti per rifornimenti tradizionali vengono spediti cestini di Prodotti a Km 0: si registra il numero delle consegne e il punto di prelievo nel tragitto. Il dato viene consolidato ogni sei mesi, con il codice hash che ne attesta la provenienza e la marcatura temporale.
              </p>
            </div>
            <div className="mt-8">
              <dl className="grid grid-cols-2 gap-px border border-ink/20 bg-ink/20">
                {[
                  { k: "Consegne Km 0 tracciate / anno", v: "1.200" },
                  { k: "Presidi collegati Pilota", v: "100" },
                  { k: "Rifornimenti su flotta locale", v: "100%" },
                  { k: "Ritardo medio consegna", v: "< 5 minuti" },
                ].map((d) => (
                  <div key={d.k} className="bg-bone p-4">
                    <dt className="font-mono text-[9px] tracking-[0.14em] text-ink/50 uppercase">{d.k}</dt>
                    <dd className="tabnum mt-1.5 text-[22px] leading-none font-black tracking-[-0.04em]">{d.v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 font-mono text-[9px] leading-relaxed tracking-[0.08em] text-ink/60 uppercase border-t border-dashed border-ink/20 pt-2.5">
                Nota metodologica: abbiamo assunto 100 imprese per il Pilota Clienti Win-Back (Ascoli Piceno e Fermo) con 12 consegne annue per cliente, in cui almeno un addetto acquisti un Cestino di Prodotto della Filiera locale ad una distanza di 50 km (totale 60.000 km di tragitti dedicati evitati).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
