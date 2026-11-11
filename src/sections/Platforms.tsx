import { useState } from "react";
import { LiveDot, SectionHead, Tag } from "@/components/ui";
import { IMG } from "@/lib/data";

const QUARTERS = [
  { q: "Q1 '25", co2: 5820, note: "baseline logistica hub" },
  { q: "Q2 '25", co2: 4910, note: "attivazione filiera corta" },
  { q: "Q3 '25", co2: 4180, note: "−15,6% sul trimestre" },
  { q: "Q4 '25", co2: 3460, note: "6 presidi a regime" },
  { q: "Q1 '26", co2: 2985, note: "target CSRD raggiunto" },
];

const INDICI = [
  { k: "Energia rinnovabile", v: "82%" },
  { k: "Investimento sociale", v: "€ 94.600" },
  { k: "Alberi equivalenti", v: "1.472" },
  { k: "Rating ESG sintetico", v: "A++" },
];

const DOC_ROW = [
  { c: "DOC-01", t: "Report d'Impatto Annuale", s: "validato" },
  { c: "DOC-02", t: "Masterplan di Filiera Km 0", s: "validato" },
  { c: "DOC-04", t: "Attestato di adesione", s: "firmato" },
];

function PhoneMock() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] border-[3px] border-ink bg-bone shadow-[14px_14px_0_rgba(237,111,92,0.28)]">
      <div className="flex items-center justify-between border-b border-ink/20 px-4 py-2 font-mono text-[9px] tracking-[0.14em] text-ink/55 uppercase">
        <span>09:41</span>
        <span className="flex items-center gap-1.5 text-coral">
          <LiveDot /> SSO illiria
        </span>
      </div>
      <div className="px-4 py-4">
        <p className="font-mono text-[9px] tracking-[0.2em] text-ink/50 uppercase">Dashboard impatto · Km 0</p>
        <p className="mt-1 text-[19px] leading-tight font-black tracking-[-0.03em] uppercase">
          Ciao Marco,
          <br />
          <span className="font-editorial text-[17px] font-medium text-coral normal-case italic">
            quest'anno hai evitato
          </span>
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[
            { k: "CO₂ evitata", v: "18,4 kg" },
            { k: "Km risparmiati", v: "212 km" },
            { k: "Crediti welfare", v: "1.460" },
            { k: "Badge raccolti", v: "7 / 12" },
          ].map((x) => (
            <div key={x.k} className="border border-ink/20 bg-paper p-2.5">
              <p className="font-mono text-[8px] tracking-[0.12em] text-ink/50 uppercase">{x.k}</p>
              <p className="tabnum mt-1 text-[15px] font-extrabold tracking-[-0.02em]">{x.v}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="mt-3 w-full bg-coral px-3 py-2.5 text-left text-[10px] font-bold tracking-[0.14em] text-bone uppercase transition-transform duration-300 hover:-translate-y-0.5"
        >
          Genera attestato di impatto e voucher
        </button>

        <div className="mt-3 border border-ink/20">
          <img
            src={IMG.arena}
            alt="Spettacolo nelle Valli Marchigiane"
            loading="lazy"
            className="matte aspect-[16/9] w-full object-cover"
          />
          <div className="bg-paper p-3">
            <p className="font-mono text-[8px] tracking-[0.16em] text-coral uppercase">Rassegna in corso</p>
            <p className="mt-1 text-[12.5px] leading-tight font-extrabold tracking-[-0.02em]">
              Performing Art delle Valli Marchigiane · Rete 6 Comuni
            </p>
            <p className="mt-1.5 font-mono text-[8px] tracking-[0.1em] text-ink/50 uppercase">
              1.000 erogazioni · 5 biglietti omaggio · 43.7262° N
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopMock() {
  const max = Math.max(...QUARTERS.map((d) => d.co2));
  return (
    <div className="w-full border-[3px] border-bone/60 bg-inksoft shadow-[14px_14px_0_rgba(21,20,15,0.35)]">
      <div className="flex items-center gap-3 border-b border-bone/20 px-4 py-2.5">
        <span className="flex gap-1.5">
          {["", "", ""].map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 border ${i === 0 ? "border-coral bg-coral" : "border-bone/40"}`}
            />
          ))}
        </span>
        <span className="font-mono text-[9.5px] tracking-[0.16em] text-bone/55 uppercase">
          impact.illiria.it / manager / panoramica
        </span>
        <span className="ml-auto flex items-center gap-2 font-mono text-[9px] tracking-[0.14em] text-coral uppercase">
          <LiveDot /> sync 06:12
        </span>
      </div>
      <div className="grid gap-0 md:grid-cols-[132px_1fr]">
        <nav className="hidden border-r border-bone/15 p-3 md:block">
          {["Panoramica", "Report ESG", "Progetti", "Welfare", "Presidi", "Documenti"].map((v, i) => (
            <p
              key={v}
              className={`border-l-2 py-1.5 pl-2.5 font-mono text-[9px] tracking-[0.14em] uppercase ${i === 0 ? "border-coral text-bone" : "border-transparent text-bone/45"
                }`}
            >
              {v}
            </p>
          ))}
        </nav>
        <div className="p-4 md:p-5">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              { k: "Unità Impact", v: "88.412" },
              { k: "Social Impact Index", v: "A++" },
              { k: "Welfare distribuito", v: "€ 1.768" },
              { k: "Riscatto crediti", v: "51%" },
            ].map((x) => (
              <div key={x.k} className="border border-bone/20 bg-ink p-3 transition-colors hover:border-coral">
                <p className="font-mono text-[8px] tracking-[0.14em] text-bone/45 uppercase">{x.k}</p>
                <p className="tabnum mt-1 text-[16px] leading-none font-black tracking-[-0.03em] text-bone">
                  {x.v}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 border border-bone/20 bg-ink p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-mono text-[9px] tracking-[0.18em] text-bone/55 uppercase">
                Carbon footprint logistica · quarter over quarter
              </p>
              <p className="font-mono text-[9px] tracking-[0.14em] text-coral uppercase">−48,7% in 5 trimestri</p>
            </div>
            <div className="mt-4 flex h-32 items-end gap-2 sm:gap-3">
              {QUARTERS.map((d, i) => (
                <div key={d.q} className="group flex flex-1 flex-col items-center gap-2">
                  <span className="tabnum font-mono text-[9px] text-bone/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {d.co2.toLocaleString("it-IT")}
                  </span>
                  <span
                    className="bar-grow w-full bg-bone/85 transition-colors duration-300 group-hover:bg-coral"
                    style={{
                      height: `${(d.co2 / max) * 100}%`,
                      minHeight: 6,
                      animationDelay: `${i * 90}ms`,
                    }}
                  />
                  <span className="font-mono text-[8px] tracking-[0.1em] text-bone/45 uppercase">{d.q}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="border border-bone/20 bg-ink p-4">
              <p className="font-mono text-[9px] tracking-[0.18em] text-bone/55 uppercase">Indici sintetici</p>
              <dl className="mt-3 space-y-2">
                {INDICI.map((x) => (
                  <div key={x.k} className="flex items-baseline justify-between gap-3 border-b border-dashed border-bone/15 pb-1.5">
                    <dt className="font-mono text-[9.5px] tracking-[0.1em] text-bone/55 uppercase">{x.k}</dt>
                    <dd className="tabnum text-[13px] font-extrabold text-bone">{x.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="border border-bone/20 bg-ink p-4">
              <p className="font-mono text-[9px] tracking-[0.18em] text-bone/55 uppercase">Archivio documenti</p>
              <ul className="mt-3 space-y-2">
                {DOC_ROW.map((d) => (
                  <li
                    key={d.c}
                    className="group flex items-center justify-between gap-3 border-b border-dashed border-bone/15 pb-1.5"
                  >
                    <span className="font-mono text-[9px] tracking-[0.12em] text-coral uppercase">{d.c}</span>
                    <span className="flex-1 truncate text-[11.5px] font-semibold text-bone/85">{d.t}</span>
                    <span className="font-mono text-[8.5px] tracking-[0.12em] text-bone/40 uppercase">
                      {d.s}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 flex items-center gap-2 font-mono text-[9px] tracking-[0.12em] text-bone/50 uppercase">
                <span className="inline-block h-1.5 w-1.5 bg-coral" />
                download PDF / CSV ad alta risoluzione
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImprenditoreMock() {
  return (
    <div className="w-full border-[3px] border-bone/60 bg-inksoft shadow-[14px_14px_0_rgba(21,20,15,0.35)]">
      <div className="flex items-center gap-3 border-b border-bone/20 px-4 py-2.5">
        <span className="flex gap-1.5">
          {["", "", ""].map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 border ${i === 0 ? "border-coral bg-coral" : "border-bone/40"}`}
            />
          ))}
        </span>
        <span className="font-mono text-[9.5px] tracking-[0.16em] text-bone/55 uppercase">
          impact.illiria.it / rassegna / status-imprenditore
        </span>
        <span className="ml-auto font-mono text-[8.5px] tracking-[0.12em] text-coral uppercase">
          Riconoscimento attivo
        </span>
      </div>

      <div className="p-5 md:p-6">
        <div className="grid gap-3 sm:grid-cols-4">
          {[
            { k: "Status Sponsor", v: "Main Partner" },
            { k: "Inviti VIP d'Onore", v: "10 Riservati" },
            { k: "Tavolo Istituzionale", v: "Confermato" },
            { k: "Convegno Annuale", v: "Relatore Invitato" },
          ].map((x) => (
            <div key={x.k} className="border border-bone/20 bg-ink p-3">
              <p className="font-mono text-[8px] tracking-[0.14em] text-bone/50 uppercase">{x.k}</p>
              <p className="mt-1 text-[14px] font-black tracking-[-0.02em] text-coral uppercase">{x.v}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 border border-bone/20 bg-ink p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-bone/15 pb-2">
            <p className="font-mono text-[9px] tracking-[0.18em] text-bone/55 uppercase">
              Visibilità Istituzionale nei Luoghi della Rassegna
            </p>
            <span className="font-mono text-[8.5px] text-coral uppercase">Rete 6 Comuni Marche</span>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-3 font-mono text-[9px] leading-relaxed text-bone/70">
            <div className="border border-bone/10 bg-inksoft p-3">
              <p className="font-bold text-coral uppercase mb-1">Colophon di Sala</p>
              Logo e ragione sociale inseriti nel programma cartaceo e digitale di tutti gli spettacoli itineranti.
            </div>
            <div className="border border-bone/10 bg-inksoft p-3">
              <p className="font-bold text-coral uppercase mb-1">Palco Inaugurale</p>
              Premiazione ufficiale e consegna della targa d'autore in ceramica/legno alla serata d'apertura.
            </div>
            <div className="border border-bone/10 bg-inksoft p-3">
              <p className="font-bold text-coral uppercase mb-1">Tavolo delle Autorità</p>
              Accesso prioritario per l'imprenditore al banchetto e dibattito con sindaci e direttori artistici.
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="border border-bone/20 bg-ink p-4">
            <p className="font-mono text-[9px] tracking-[0.18em] text-bone/55 uppercase">Rassegna Stampa & PR</p>
            <p className="mt-2 text-[12px] font-bold text-bone">
              «L'imprenditoria marchigiana sostiene le Aree Interne»: comunicato stampa regionale diffuso con il nome della vostra azienda.
            </p>
            <p className="mt-2 font-mono text-[8.5px] text-coral uppercase">Diffuso su quotidiani locali e testate online</p>
          </div>
          <div className="border border-bone/20 bg-ink p-4">
            <p className="font-mono text-[9px] tracking-[0.18em] text-bone/55 uppercase">Attestato Notarizzato</p>
            <p className="mt-2 text-[12px] font-bold text-bone">
              Certificato di Valorizzazione Locale con hash SHA-256 esponibile in reception e allegabile alla dichiarazione non finanziaria.
            </p>
            <p className="mt-2 font-mono text-[8.5px] text-coral uppercase">Codice univoco notarizzato</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Platforms() {
  const [tab, setTab] = useState<"mobile" | "manager" | "imprenditore">("manager");

  return (
    <section id="piattaforme" className="relative overflow-hidden bg-ink text-bone">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(247,241,222,0.5) 0 1px, transparent 1px 64px), repeating-linear-gradient(90deg, rgba(247,241,222,0.5) 0 1px, transparent 1px 64px)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          dark
          numeral="IV"
          kicker="Tre prospettive di valore"
          title={
            <>
              Una piattaforma, due letture
              <br />
              <span className="font-editorial font-medium text-coral normal-case italic">
                e riconoscimento locale
              </span>.
            </>
          }
          lead="Una piattaforma, due letture e riconoscimento locale. Chi sta in area break vede il significato del proprio gesto; chi sta in direzione vede indicatori, indici e documenti pronti per la rendicontazione non finanziaria, l'imprenditore locale è gratificato per la propria adesione e il suo riconoscimento è nei luoghi della Rassegna."
        />

        <div className="mt-12 flex flex-wrap items-center gap-3">
          {[
            { id: "manager" as const, l: "Dashboard Manager · Elena, HR & ESG" },
            { id: "mobile" as const, l: "App Impresa · Accesso Unico" },
            { id: "imprenditore" as const, l: "Status Imprenditore · Rassegna" },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`border px-5 py-3 font-mono text-[10px] tracking-[0.16em] uppercase transition-all duration-300 ${tab === t.id
                  ? "border-coral bg-coral text-bone"
                  : "border-bone/30 text-bone/60 hover:-translate-y-0.5 hover:border-bone hover:text-bone"
                }`}
            >
              {t.l}
            </button>
          ))}
          <Tag tone="bone" className="ml-auto">
            PWA installabile · SSO aziendale · offline ready
          </Tag>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div data-reveal="scale" className="lg:col-span-7">
            {tab === "manager" ? (
              <div key="manager">
                <DesktopMock />
              </div>
            ) : tab === "mobile" ? (
              <div key="mobile">
                <PhoneMock />
              </div>
            ) : (
              <div key="imprenditore">
                <ImprenditoreMock />
              </div>
            )}
          </div>

          <div data-reveal="up" className="lg:col-span-5">
            <h3 className="text-[clamp(1.4rem,2.6vw,2rem)] leading-[1.05] font-extrabold tracking-[-0.03em] uppercase">
              {tab === "manager" ? (
                <>
                  Quello che ottenete
                  <br />
                  <span className="font-editorial text-[0.85em] font-medium text-coral normal-case italic">
                    dal lato scrivania
                  </span>
                </>
              ) : tab === "mobile" ? (
                <>
                  Quello che vede
                  <br />
                  <span className="font-editorial text-[0.85em] font-medium text-coral normal-case italic">
                    la vostra azienda
                  </span>
                </>
              ) : (
                <>
                  Il riconoscimento
                  <br />
                  <span className="font-editorial text-[0.85em] font-medium text-coral normal-case italic">
                    per l'imprenditore nei luoghi
                  </span>
                </>
              )}
            </h3>

            <ul className="mt-7 divide-y divide-bone/15 border-y border-bone/15">
              {(tab === "manager"
                ? [
                  ["Panoramica annuale", "Unità Impact, Social Impact Index e valore welfare distribuito su tutti i presidi, aggiornati dal saldo consumi."],
                  ["Deep dive analitico", "Carbon footprint quarter over quarter, indici sintetici, rating ESG e scostamenti rispetto al target CSRD."],
                  ["Geolocalizzazione iniziative", "Collage editoriale dei progetti finanziati con coordinate, stato di avanzamento e foto d'archivio."],
                  ["Archivio scaricabile", "PDF ad alta risoluzione e CSV conformi GRI: il dossier che consegnate ai revisori senza rielaborazioni."],
                ]
                : tab === "mobile"
                  ? [
                    ["Borsellino e consumi di sede", "Saldo erogazioni aziendali, CO₂ evitata e chilometri di trasporto dedicati azzerati dal paniere a Km 0."],
                    ["Welfare Territoriale e Km 0", "Bacheca dei festival sostenuti nelle Marche, catalogo biglietti omaggio e convenzioni nei 24 Comuni."],
                    ["Attestato ufficiale", "Rilascio in un tocco dell'attestato numerato con hash e marcatura temporale: collezionabile e condivisibile."],
                    ["Voto del team sui festival", "I collaboratori usano i Punti Impatto aziendali per votare quale rassegna sostenere con priorità."],
                  ]
                  : [
                    ["Presenza nel colophon ufficiale", "Nome e marchio aziendale inseriti nel programma di sala cartaceo e digitale distribuito nelle rassegne."],
                    ["Tavolo istituzionale & VIP", "Accesso riservato con i sindaci e direttori artistici prima degli spettacoli: networking e pubbliche relazioni."],
                    ["Premiazione pubblica sul palco", "Consegna ufficiale dell'Attestato di Valorizzazione Locale e targa d'autore alla serata inaugurale."],
                    ["Relatore al convegno annuale", "Invito formale per l'imprenditore al dibattito pubblico annuale sullo sviluppo delle Aree Interne marchigiane."],
                  ]
              ).map(([t, d], i) => (
                <li key={t} className="group flex gap-5 py-5 transition-colors duration-300 hover:bg-bone/5">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-coral uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[15px] font-extrabold tracking-[-0.02em]">{t}</p>
                    <p className="mt-1.5 max-w-prose text-[13.5px] leading-relaxed text-bone/65">{d}</p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="arrow-slide ml-auto h-4 w-4 shrink-0 text-bone/35 group-hover:text-coral"
                  >
                    <path d="M2.5 13.5L13.5 2.5M13.5 2.5H5.5M13.5 2.5v8" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </li>
              ))}
            </ul>

            <p className="mt-6 font-mono text-[10px] leading-relaxed tracking-[0.12em] text-bone/45 uppercase">
              {tab === "manager"
                ? "FR-04 · export dati ESG in PDF e CSV — conformità GRI / CSRD verificata in audit"
                : tab === "mobile"
                  ? "FR-02 · attestato digitale con codice univoco SHA e marcatura temporale"
                  : "PR-01 · visibilità istituzionale e accredito nei festival delle Marche"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
