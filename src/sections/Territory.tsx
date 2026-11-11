import { SectionHead, Tag } from "@/components/ui";
import { CASE_STUDY, PROJECTS } from "@/lib/data";

export default function Territory() {
  return (
    <section id="territorio" className="relative bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          numeral="V"
          kicker="Catalogo territoriale 2026"
          title={
            <>
              Il vostro nome accanto a{" "}
              <span className="font-editorial font-medium text-coral normal-case italic">festival e rassegne</span>.
            </>
          }
          lead="Non una donazione generica: rassegne teatrali e festival di Performing Art nelle Aree Interne delle Marche, ciascuna con una rete di almeno 6 Comuni partner. I vostri consumi sostengono gli eventi e la Startup eroga ai dipendenti biglietti omaggio e convenzioni."
          aside={
            <div className="mt-2 flex items-center gap-3 border border-ink/25 bg-bone p-4">
              <span className="tabnum text-[30px] leading-none font-black tracking-[-0.04em] text-coral">24</span>
              <p className="font-mono text-[9.5px] leading-relaxed tracking-[0.14em] text-ink/60 uppercase">
                Comuni marchigiani
                <br />
                in 4 circuiti diffusi
              </p>
            </div>
          }
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-9">
          {PROJECTS.map((p, i) => (
            <article
              key={p.codice}
              data-reveal="up"
              style={{ transitionDelay: `${i * 90}ms` }}
              className="group reg-frame flex flex-col border border-ink/20 bg-bone transition-all duration-500 hover:-translate-y-1.5 hover:border-coral hover:shadow-[12px_12px_0_rgba(237,111,92,0.22)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.titolo}
                  loading="lazy"
                  className="matte aspect-[16/10] w-full object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-[1.07]"
                />
                <span className="absolute top-3 left-3 bg-ink px-2.5 py-1 font-mono text-[9px] tracking-[0.18em] text-bone uppercase">
                  {p.codice}
                </span>
                <span className="absolute top-3 right-3 border border-bone/60 bg-ink/70 px-2.5 py-1 font-mono text-[9px] tracking-[0.16em] text-bone uppercase backdrop-blur-[2px]">
                  {p.stato}
                </span>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-coral transition-[width] duration-[1.1s] ease-out group-hover:w-full" />
              </div>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-[clamp(1.25rem,2.2vw,1.7rem)] leading-none font-black tracking-[-0.035em] uppercase">
                    {p.titolo}
                  </h3>
                  <span className="font-mono text-[9.5px] tracking-[0.14em] text-ink/45 uppercase">{p.anno}</span>
                </div>
                <p className="mt-3 max-w-prose text-[14.5px] leading-relaxed text-inksoft/85">{p.sottotitolo}</p>

                <dl className="mt-5 grid grid-cols-2 gap-x-5 gap-y-2 border-t border-dashed border-ink/25 pt-4 font-mono text-[9.5px] tracking-[0.1em] uppercase">
                  <div>
                    <dt className="text-ink/45">Luogo</dt>
                    <dd className="mt-1 text-inksoft">{p.luogo}</dd>
                  </div>
                  <div>
                    <dt className="text-ink/45">Coordinate</dt>
                    <dd className="mt-1 text-inksoft">{p.coord}</dd>
                  </div>
                  <div>
                    <dt className="text-ink/45">Categoria</dt>
                    <dd className="mt-1 text-inksoft">{p.categoria}</dd>
                  </div>
                  <div>
                    <dt className="text-ink/45">Finanziato da</dt>
                    <dd className="mt-1 text-coral">{p.caffe}</dd>
                  </div>
                </dl>

                <div className="mt-5">
                  <div className="flex items-baseline justify-between font-mono text-[9.5px] tracking-[0.14em] text-ink/55 uppercase">
                    <span>Sostegno all'Iniziativa</span>
                    <span className="tabnum text-ink">{p.progresso}%</span>
                  </div>
                  <span className="mt-2 block h-2 w-full border border-ink/20 bg-paper">
                    <span
                      className="block h-full bg-coral transition-[width] duration-1000 ease-out"
                      style={{ width: `${p.progresso}%` }}
                    />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* case study */}
        <div data-reveal="up" className="mt-16 bg-ink text-bone">
          <div className="grid gap-10 p-7 md:grid-cols-12 md:gap-12 md:p-12">
            <div className="md:col-span-7">
              <Tag tone="coral">Caso cliente OCS</Tag>
              <blockquote className="mt-6 text-[clamp(1.25rem,2.6vw,2rem)] leading-[1.28] font-medium">
                <span className="font-editorial text-coral italic">«</span>
                {CASE_STUDY.citazione}
                <span className="font-editorial text-coral italic">»</span>
              </blockquote>
              <footer className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-bone/20 pt-5">
                <span className="text-[14px] font-extrabold tracking-[-0.01em]">{CASE_STUDY.nome}</span>
                <span className="font-mono text-[10px] tracking-[0.14em] text-bone/55 uppercase">
                  {CASE_STUDY.ruolo}
                </span>
                <span className="font-mono text-[10px] tracking-[0.14em] text-coral uppercase">
                  {CASE_STUDY.azienda}
                </span>
              </footer>
            </div>
            <div className="md:col-span-5">
              <p className="font-mono text-[9.5px] tracking-[0.2em] text-bone/50 uppercase">
                Risultati a 12 mesi dall'adesione
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-px bg-bone/20">
                {CASE_STUDY.stats.map((s) => (
                  <div key={s.l} className="group bg-ink p-5 transition-colors duration-500 hover:bg-inksoft">
                    <dd className="tabnum text-[clamp(1.5rem,3vw,2.1rem)] leading-none font-black tracking-[-0.045em] text-coral">
                      {s.v}
                    </dd>
                    <dt className="mt-2.5 font-mono text-[9px] leading-relaxed tracking-[0.12em] text-bone/55 uppercase">
                      {s.l}
                    </dt>
                  </div>
                ))}
              </dl>
              <p className="mt-5 font-mono text-[9.5px] leading-relaxed tracking-[0.12em] text-bone/40 uppercase">
                Dati aggregati pubblicati nel Report d'Impatto Annuale · validati da audit indipendente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
