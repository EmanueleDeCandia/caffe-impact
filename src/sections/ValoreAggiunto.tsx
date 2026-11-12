import { useState } from "react";
import { LiveDot, Tag } from "@/components/ui";
import { BestPracticeModal } from "@/components/BestPracticeModal";
import { LoyaltyArchitectureModal } from "@/components/LoyaltyArchitectureModal";

const CONFRONTO = [
  {
    profilo: "Fornitura generica / Low-Cost",
    tono: "ink" as const,
    badge: "Commodity passiva",
    caratteristiche: [
      {
        voce: "Qualità del caffè",
        desc: "Miscele anonime o discount con resa incostante e lamentele del personale.",
        critico: true,
      },
      {
        voce: "Ritorno economico",
        desc: "Puro costo unitario a fondo cassa: ogni euro speso genera solo rifiuti.",
        critico: true,
      },
      {
        voce: "Relazioni per l'impresa",
        desc: "Zero occasioni di networking, nessun contatto qualificato sul territorio.",
        critico: true,
      },
      {
        voce: "Incentivi per le persone",
        desc: "Cataloghi a punti con gadget promozionali di plastica che finiscono nei cassetti.",
        critico: true,
      },
      {
        voce: "Impatto sul territorio",
        desc: "Nessun legame con le comunità locali; consegne isolate e frammentate.",
        critico: true,
      },
    ],
  },
  {
    profilo: "Illiria Coffee Impact (Presidi OCS & Vending)",
    tono: "coral" as const,
    badge: "Piattaforma di valore",
    caratteristiche: [
      {
        voce: "Qualità del caffè",
        desc: "Marchi d'eccellenza riconosciuti (Lavazza, Nespresso) con affidabilità costante.",
        critico: false,
      },
      {
        voce: "Ritorno economico",
        desc: "Sconti fornitura diretti sul riordino del paniere agroalimentare a Km 0.",
        critico: false,
      },
      {
        voce: "Relazioni per l'impresa",
        desc: "Business networking con altri titolari e dialogo informale sulle politiche delle Aree Interne.",
        critico: false,
      },
      {
        voce: "Incentivi per le persone",
        desc: "Pass VIP per serate d'autore nei borghi, degustazioni nei chiostri e team offsite deducibili.",
        critico: false,
      },
      {
        voce: "Impatto sul territorio",
        desc: "Sostegno a 24 borghi marchigiani e filiera a Km 0 consegnata a zero furgoni dedicati.",
        critico: false,
      },
    ],
  },
];

const PILASTRI = [
  {
    num: "01",
    target: "Per l'Imprenditore e la Direzione",
    titolo: "Business Networking & Posizionamento Territoriale",
    occhiello: "Capitale relazionale e Best Practice",
    punti: [
      {
        label: "Relazioni tra pari",
        testo:
          "Condividere serate ed eventi d'eccezione nei borghi con altri titolari e professionisti delle Marche, per esplorare nuove opportunità commerciali e partnership.",
      },
      {
        label: "Advocacy informale e costruttiva",
        testo:
          "Presenza e confronto qualificato nei momenti di dibattito sul futuro economico, turistico e produttivo dei territori e delle Aree Interne.",
      },
      {
        label: "Diffusione della Best Practice",
        testo:
          "Pubblicazione del caso aziendale nel Libro Bianco annuale delle Aree Interne e valorizzazione qualificata sulla stampa regionale senza costi di agenzia.",
      },
    ],
    tag: "Networking B2B · Libro Bianco",
  },
  {
    num: "02",
    target: "Per i Collaboratori e l'HR",
    titolo: "Esperienze d'Autore & Partecipazione Attiva",
    occhiello: "Gratificazione tangibile nel tempo libero",
    punti: [
      {
        label: "Premi esperienziali reali",
        testo:
          "5 titoli d'accesso ogni 1.000 erogazioni per spettacoli dal vivo, teatro e concerti nei 24 borghi delle Marche, con calici di benvenuto e convenzioni ricettive.",
      },
      {
        label: "Micro-Eventi di Reparto & Team Offsite",
        testo:
          "Possibilità di cumulare pacchetti per organizzare uscite di gruppo conviviali nei borghi, con spese di rappresentanza deducibili al 100%.",
      },
      {
        label: "Democrazia partecipata",
        testo:
          "Sulla Web App i collaboratori votano a quale circuito di borghi marchigiani destinare con priorità il sostegno maturato dalle erogazioni.",
      },
    ],
    tag: "Pass VIP borghi · Spese deducibili 100%",
  },
  {
    num: "03",
    target: "Per la Sede e gli Acquisti",
    titolo: "Economia di Filiera a Costi Zero",
    occhiello: "Ammortamento e trasparenza gestionale",
    punti: [
      {
        label: "Sconti di riacquisto su Km 0",
        testo:
          "Le consumazioni maturano sconti dedicati sul riordino del paniere di specialità agroalimentari a Km 0 (L. 61/2022), riducendo le spese vive di sede.",
      },
      {
        label: "Logistica combinata a impatto zero",
        testo:
          "Il cibo viaggia a bordo dei mezzi di rifornimento Illiria già programmati: zero furgoni dedicati sulla strada e zero spese di spedizione.",
      },
      {
        label: "Zero complessità e privacy protetta",
        testo:
          "Nessun software invasivo da installare e nessun ticket IT: i dati sono rilevati solo in forma aggregata per presidio, nel pieno rispetto del GDPR.",
      },
    ],
    tag: "Sconti fornitura Km 0 · Zero attrito IT",
  },
];

const FLUSSO_DATI = [
  { step: "01", nome: "Consumo ordinario", note: "Presidi OCS e distributori automatici erogano il caffè di qualità abituale." },
  { step: "02", nome: "Accredito Punti", note: "Ogni 100 caffè matura 1 Punto Impatto e ogni 1.000 si sbloccano 5 titoli d'accesso." },
  { step: "03", nome: "Esperienze e Sconti", note: "Il team sceglie le rassegne nei borghi; l'azienda sconta le specialità a Km 0." },
  { step: "04", nome: "Best Practice attestata", note: "I dati documentano un impatto reale, verificato e pronto per essere raccontato." },
];

export default function ValoreAggiunto() {
  const [openBestPractice, setOpenBestPractice] = useState(false);
  const [openLoyaltyModal, setOpenLoyaltyModal] = useState(false);
  return (
    <section id="valore-aggiunto" className="relative border-b border-ink/20 bg-bone/40 py-20 md:py-28">
      {/* filigrana editoriale */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, var(--color-ink) 0 1px, transparent 1px 40px)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        {/* Intestazione Sezione */}
        <div className="grid gap-8 border-t border-ink/20 pt-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-coral">
                PROPOSTA
              </span>
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink/55">
                Il valore delle scelte · OCS e Vending
              </span>
            </div>
            <p className="mt-4 font-mono text-[10px] tracking-[0.2em] text-coral uppercase">
              <LiveDot /> Perché non siamo una fornitura low cost
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2
              data-reveal="mask"
              className="text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[0.96] font-black tracking-[-0.035em] uppercase text-ink"
            >
              Un ecosistema di ritorno che{" "}
              <span className="font-editorial font-medium text-coral normal-case italic">
                nessuna commodity
              </span>{" "}
              può offrire.
            </h2>
            <p
              data-reveal="up"
              style={{ transitionDelay: "120ms" }}
              className="mt-6 max-w-2xl text-[16px] leading-relaxed text-inksoft/85 md:text-[17px]"
            >
              Nel mercato delle forniture caffè per uffici e stabilimenti, scegliere al ribasso sembra un
              risparmio immediato. Ma ogni centesimo risparmiato su una commodity anonima resta una spesa a
              perdere che lascia solo polvere e rifiuti. Illiria seleziona grandi torrefazioni di riferimento e
              costruisce attorno a ogni consumazione tre ritorni concreti: opportunità di incontro e visibilità
              per chi guida l'impresa, serate d'autore nei borghi per le persone e sconti sul cibo del territorio per la sede.
            </p>
          </div>
        </div>

        {/* 1. Griglia di Confronto Misurato */}
        <div className="mt-16 md:mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/20 pb-4">
            <div>
              <p className="font-mono text-[10px] tracking-[0.24em] text-ink/50 uppercase">
                Confronto strutturale
              </p>
              <h3 className="mt-1 text-[20px] font-extrabold tracking-[-0.02em] uppercase">
                La differenza tra una spesa e un investimento
              </h3>
            </div>
            <span className="font-mono text-[10px] tracking-[0.14em] text-ink/50 uppercase">
              Valido per presidi OCS e distributori automatici
            </span>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {CONFRONTO.map((c) => (
              <div
                key={c.profilo}
                data-reveal="up"
                className={`relative border p-6 md:p-8 ${
                  c.tono === "coral"
                    ? "border-coral/60 bg-paper shadow-[8px_8px_0_rgba(237,111,92,0.12)]"
                    : "border-ink/20 bg-paper/60"
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink/15 pb-4">
                  <h4 className="text-[17px] font-bold tracking-[-0.01em] uppercase">{c.profilo}</h4>
                  <Tag tone={c.tono === "coral" ? "coral" : "ink"}>{c.badge}</Tag>
                </div>

                <ul className="mt-6 divide-y divide-ink/10">
                  {c.caratteristiche.map((item) => (
                    <li key={item.voce} className="grid grid-cols-[130px_1fr] gap-4 py-3.5 sm:grid-cols-[160px_1fr]">
                      <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink/60">
                        {item.voce}
                      </span>
                      <span
                        className={`text-[13.5px] leading-snug ${
                          item.critico ? "text-ink/65 line-through decoration-ink/30" : "font-medium text-ink"
                        }`}
                      >
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 2. I Tre Pilastri Fondamentali del Ritorno */}
        <div className="mt-20 border-t border-ink/20 pt-16 md:mt-24">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] tracking-[0.24em] text-coral uppercase">
              Le tre componenti di valore
            </span>
            <h3 className="mt-2 text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.02] font-black tracking-[-0.03em] uppercase">
              Cosa ottiene chi sceglie la qualità superiore
            </h3>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {PILASTRI.map((p, idx) => (
              <div
                key={p.num}
                data-reveal="up"
                style={{ transitionDelay: `${idx * 120}ms` }}
                className="group flex flex-col justify-between border-t-2 border-ink bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-coral hover:shadow-[10px_10px_0_rgba(21,20,15,0.08)] md:p-7"
              >
                <div>
                  <div className="flex items-baseline justify-between border-b border-ink/15 pb-3">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-coral uppercase">
                      Pilastro {p.num}
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.16em] text-ink/50 uppercase">
                      {p.target}
                    </span>
                  </div>

                  <h4 className="mt-4 text-[19px] leading-tight font-extrabold tracking-[-0.02em]">
                    {p.titolo}
                  </h4>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.12em] text-ink/55 uppercase">
                    {p.occhiello}
                  </p>

                  <ul className="mt-6 space-y-4 border-t border-dashed border-ink/20 pt-5">
                    {p.punti.map((pt) => (
                      <li key={pt.label} className="text-[13.5px] leading-relaxed">
                        <strong className="block font-semibold text-ink">{pt.label}:</strong>
                        <span className="text-inksoft/85">{pt.testo}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-ink/15 pt-4">
                  <Tag className="w-full justify-center text-[9px]">{p.tag}</Tag>
                  {p.num === "01" && (
                    <button
                      type="button"
                      onClick={() => setOpenBestPractice(true)}
                      className="mt-3 w-full border border-ink/30 bg-bone/70 py-2 text-center font-mono text-[9px] font-bold tracking-[0.14em] text-coral uppercase transition-all hover:border-coral hover:bg-paper cursor-pointer"
                    >
                      Dossier: Cos'è una Best Practice? ↗
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Meccanica Semplice e Trasparente in 4 Passi */}
        <div className="mt-16 border border-ink/20 bg-paper p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/15 pb-4">
            <div>
              <p className="font-mono text-[10px] tracking-[0.24em] text-coral uppercase">
                Zero attrito gestionale
              </p>
              <h4 className="mt-1 text-[16px] font-extrabold tracking-[-0.01em] uppercase">
                Il percorso lineare: dal consumo al valore dimostrato
              </h4>
            </div>
            <span className="font-mono text-[10px] tracking-[0.14em] text-ink/55 uppercase">
              Nessun ticket IT · Nessun costo nascosto
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FLUSSO_DATI.map((f) => (
              <div key={f.step} className="border-l-2 border-ink/30 pl-4 py-1 transition-colors hover:border-coral">
                <span className="font-mono text-[11px] font-bold text-coral">{f.step}</span>
                <p className="mt-1 text-[14px] font-bold tracking-tight text-ink">{f.nome}</p>
                <p className="mt-1.5 font-mono text-[10.5px] leading-relaxed text-inksoft/80">
                  {f.note}
                </p>
                {f.step === "02" && (
                  <button
                    type="button"
                    onClick={() => setOpenLoyaltyModal(true)}
                    className="mt-2 inline-flex items-center gap-1 font-mono text-[9px] font-bold text-coral uppercase hover:underline cursor-pointer"
                  >
                    Vedi Borsellino &amp; Tiering ↗
                  </button>
                )}
                {f.step === "04" && (
                  <button
                    type="button"
                    onClick={() => setOpenBestPractice(true)}
                    className="mt-2 inline-flex items-center gap-1 font-mono text-[9px] font-bold text-coral uppercase hover:underline cursor-pointer"
                  >
                    Apri Dossier PR ↗
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

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
    </section>
  );
}
