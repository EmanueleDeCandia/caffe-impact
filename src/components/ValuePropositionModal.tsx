import { useEffect, useState } from "react";
import { LiveDot, Stamp, Tag } from "@/components/ui";

export type HypothesisId = "A" | "B" | "C";

export interface HypothesisData {
  id: HypothesisId;
  role: string;
  target: string;
  focus: string;
  code: string;
  headlineTitle: string;
  headlineItalic: string;
  headlineEnd?: string;
  tesi: string;
  componenti: {
    num: string;
    titolo: string;
    desc: string;
    badge: string;
  }[];
  metriche: {
    label: string;
    val: string;
    sub: string;
  }[];
}

export const HYPOTHESES: Record<HypothesisId, HypothesisData> = {
  A: {
    id: "A",
    role: "Direzione & Titolari",
    target: "Titolare d'Azienda · Amministratore Delegato · Direttore Generale di PMI",
    focus: "Business Networking, Dialogo con il Territorio e Best Practice per la Direzione",
    code: "ICI-CJ-01 / B2B-NET",
    headlineTitle: "Non è solo una scelta di gusto.",
    headlineItalic: "È il caffè che connette la vostra impresa",
    headlineEnd: "ai protagonisti e al futuro del territorio.",
    tesi:
      "Il caffè di qualità è una scelta che l'azienda compie ogni giorno. Quella stessa scelta sostiene l'ingresso dell'impresa in una rete esclusiva: incontrare altri imprenditori del territorio durante eventi unici, dialogare informandosi sulle politiche di sviluppo locale e valorizzare la propria azienda come Best Practice attestata nei borghi delle Marche.",
    componenti: [
      {
        num: "01",
        titolo: "Business Networking Conviviale",
        desc: "Partecipazione a serate ed eventi d'autore con altri titolari e professionisti per esplorare nuove sinergie commerciali, fornitori qualificati e partnership territoriali.",
        badge: "Incontri tra Imprenditori",
      },
      {
        num: "02",
        titolo: "Advocacy e Dialogo sulle Politiche Territoriali",
        desc: "Presenza attiva e informale nei momenti di confronto sul futuro economico, turistico e produttivo dei borghi marchigiani, facendo sentire la voce dell'impresa.",
        badge: "Tavole Rotonde Aree Interne",
      },
      {
        num: "03",
        titolo: "Diffusione delle Best Practice",
        desc: "Inserimento della storia aziendale nel Libro Bianco annuale delle Aree Interne e visibilità qualificata nella rassegna stampa regionale senza oneri di agenzia PR.",
        badge: "Libro Bianco & Stampa",
      },
    ],
    metriche: [
      { label: "Relazioni attivate", val: "24 Borghi", sub: "Rete Comuni marchigiani" },
      { label: "Posizionamento B2B", val: "Main Partner", sub: "Libro Bianco annuale" },
      { label: "Advocacy territoriale", val: "Diretta", sub: "Tavoli informali di sviluppo" },
    ],
  },
  B: {
    id: "B",
    role: "Collaboratori & HR",
    target: "HR Manager · Titolari attenti al clima aziendale · Responsabili Relazioni Interne",
    focus: "Gratificazione del Personale, Esperienze d'Autore e Team Building Spontaneo",
    code: "ICI-CJ-02 / PEOPLE-EXP",
    headlineTitle: "La qualità del caffè di sempre.",
    headlineItalic: "In più, serate d'autore, uscite conviviali nei borghi",
    headlineEnd: "e premi reali per le vostre persone.",
    tesi:
      "Dimenticate i soliti cataloghi a punti e i gadget aziendali inutili. I consumi ordinari di presidi e distributori maturano pacchetti di rewarding esperienziale gestiti dalla Startup: pass per spettacoli dal vivo, degustazioni nei chiostri storici, cene convenzionate nei borghi e la possibilità di organizzare micro-uscite di reparto con spese deducibili. Con una novità: il team partecipa attivamente votando sull'app quale borgo o festival supportare.",
    componenti: [
      {
        num: "01",
        titolo: "Incentivi Esperienziali d'Autore",
        desc: "Biglietti VIP per spettacoli dal vivo, teatro e concerti nei 24 borghi delle Aree Interne marchigiane, con calice di benvenuto DOC nei chiostri.",
        badge: "5 Biglietti ogni 1.000 erogazioni",
      },
      {
        num: "02",
        titolo: "Micro-Eventi di Reparto & Team Offsite",
        desc: "Pacchetti cumulabili per cene e uscite di gruppo nei borghi: un team building autentico a budget minimo, con spese di rappresentanza deducibili al 100%.",
        badge: "Spese Deducibili al 100%",
      },
      {
        num: "03",
        titolo: "Partecipazione e Voto sul Territorio",
        desc: "I collaboratori usano la Web App aziendale per esprimere la preferenza del proprio team sulle rassegne da sostenere: gamification etica e democrazia attiva.",
        badge: "Diritto di Voto Ponderato",
      },
    ],
    metriche: [
      { label: "Titoli generati", val: "5 / 1.000", sub: "2 VIP + 3 Standard" },
      { label: "Deducibilità Fiscale", val: "100%", sub: "Spese rappresentanza cena" },
      { label: "Coinvolgimento Team", val: "Voto Attivo", sub: "Scelta festival sostenuto" },
    ],
  },
  C: {
    id: "C",
    role: "Acquisti & CFO",
    target: "Responsabile Acquisti (Buyer) · CFO · Facility Manager",
    focus: "Razionalità Economica, Giustificazione del Premium Price e Semplicità Operativa",
    code: "ICI-CJ-03 / PROCUREMENT",
    headlineTitle: "Perché accontentarsi di una commodity anonima",
    headlineItalic: "quando la qualità migliore vi restituisce sconti sul territorio",
    headlineEnd: "e valore attestato?",
    tesi:
      "Chi acquista caffè solo guardando al centesimo porta in azienda prodotti anonimi, lamentele del personale e zero valore aggiunto. La scelta delle migliori torrefazioni azzera il divario economico offrendo sconti dedicati sul riordino di specialità agroalimentari a Km 0 consegnate a impatto logistico zero. Il tutto senza costi nascosti, senza sovrastrutture IT invasive e con attestazioni d'impatto chiare e incontestabili.",
    componenti: [
      {
        num: "01",
        titolo: "Sconti di Riacquisto su Prodotti a Km 0",
        desc: "Riduzione reale dei costi di fornitura per l'ufficio sulle eccellenze enogastronomiche locali selezionate entro 70 km (L. 61/2022).",
        badge: "Ammortamento Spese di Sede",
      },
      {
        num: "02",
        titolo: "Logistica Combinata a Spese Zero",
        desc: "Il paniere alimentare viaggia sullo stesso mezzo di rifornimento Illiria già programmato: zero furgoni dedicati sulla strada e zero spese di spedizione.",
        badge: "Zero Furgoni Aggiuntivi",
      },
      {
        num: "03",
        titolo: "Flusso Dati a Zero Attrito",
        desc: "Consumi ordinari → Accredito Punti → Scelta Premi. Nessun software invasivo, dati solo in forma aggregata e privacy rigorosamente tutelata.",
        badge: "Zero Ticket IT · Privacy Safe",
      },
    ],
    metriche: [
      { label: "Km logistici dedicati", val: "0 km", sub: "Flotta ordinaria attiva" },
      { label: "Costi occulti", val: "€ 0", sub: "Nessun canone o licenza" },
      { label: "Verifica impatto", val: "Attestata", sub: "Report e hash SHA-256" },
    ],
  },
};

/* ---------------- Disegni Vettoriali Schematici Ingranditi e ad Alta Leggibilità ---------------- */

function SchemaIpotesiA() {
  return (
    <div className="relative border border-ink/20 bg-bone/70 p-5 md:p-6">
      <div className="flex items-center justify-between border-b border-ink/15 pb-2.5 font-mono text-[9px] tracking-[0.18em] text-ink/60 uppercase">
        <span className="font-bold text-ink">SCHEMA TECNICO · RETE RELAZIONALE B2B</span>
        <span className="text-coral font-bold">FIG. 01 · ADVOCACY &amp; NETWORKING</span>
      </div>

      <svg viewBox="0 0 580 250" className="mt-3.5 w-full" fill="none">
        <defs>
          <pattern id="grid-a-lg" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(21,20,15,0.06)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="580" height="250" fill="url(#grid-a-lg)" />

        {/* Assi e linee di quotatura */}
        <line x1="25" y1="215" x2="555" y2="215" stroke="#15140f" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="30" y1="20" x2="30" y2="225" stroke="#15140f" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <text x="36" y="230" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700" fill="#15140f" opacity="0.6">ASSE TERRITORIALE MARCHE (24 COMUNI)</text>

        {/* Nodo Sorgente: Azienda */}
        <circle cx="95" cy="120" r="40" fill="#efe7d2" stroke="#15140f" strokeWidth="2" />
        <circle cx="95" cy="120" r="34" fill="none" stroke="#ed6f5c" strokeWidth="1.2" strokeDasharray="3 4" />
        <circle cx="95" cy="120" r="4.5" fill="#ed6f5c" />
        <text x="95" y="116" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="800" fill="#15140f" textAnchor="middle">IMPRESA</text>
        <text x="95" y="130" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="600" fill="#15140f" opacity="0.7" textAnchor="middle">PRESIDIO OCS / VENDING</text>

        {/* Vettori e frecce direzionali */}
        <path d="M135 105 C185 68, 225 50, 280 50" stroke="#15140f" strokeWidth="2" />
        <polygon points="280,46 290,50 280,54" fill="#15140f" />

        <path d="M135 120 L280 120" stroke="#ed6f5c" strokeWidth="2.5" />
        <polygon points="280,116 290,120 280,124" fill="#ed6f5c" />

        <path d="M135 135 C185 172, 225 190, 280 190" stroke="#15140f" strokeWidth="2" />
        <polygon points="280,186 290,190 280,194" fill="#15140f" />

        {/* Nodi di destinazione ampliati */}
        {/* 1. Tavolo con altri titolari */}
        <g transform="translate(295, 28)">
          <rect width="255" height="44" fill="#f7f1de" stroke="#15140f" strokeWidth="1.5" />
          <rect width="6" height="44" fill="#15140f" />
          <text x="16" y="18" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="800" fill="#15140f">01 · NETWORKING B2B TRA PARI</text>
          <text x="16" y="32" font-family="'JetBrains Mono', monospace" font-size="8" fill="#15140f" opacity="0.8">Nuove relazioni commerciali, clienti e fornitori</text>
        </g>

        {/* 2. Advocacy politiche pubbliche */}
        <g transform="translate(295, 98)">
          <rect width="255" height="44" fill="#efe7d2" stroke="#ed6f5c" strokeWidth="2" />
          <rect width="6" height="44" fill="#ed6f5c" />
          <text x="16" y="18" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="800" fill="#ed6f5c">02 · ADVOCACY TERRITORIALE</text>
          <text x="16" y="32" font-family="'JetBrains Mono', monospace" font-size="8" fill="#15140f" opacity="0.85">Dialogo costruttivo su sviluppo e politiche locali</text>
        </g>

        {/* 3. Libro Bianco & PR */}
        <g transform="translate(295, 168)">
          <rect width="255" height="44" fill="#f7f1de" stroke="#15140f" strokeWidth="1.5" />
          <rect width="6" height="44" fill="#15140f" />
          <text x="16" y="18" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="800" fill="#15140f">03 · LIBRO BIANCO DELLE MARCHE</text>
          <text x="16" y="32" font-family="'JetBrains Mono', monospace" font-size="8" fill="#15140f" opacity="0.8">Diffusione Best Practice &amp; Rassegna Stampa qualificata</text>
        </g>
      </svg>

      <div className="mt-3 flex items-center justify-between border-t border-dashed border-ink/15 pt-2.5 font-mono text-[9px] text-ink/60 uppercase">
        <span>Coordinate di rete: 43.7121° N / 13.2144° E</span>
        <span className="text-coral font-bold">Valore relazionale: Attestato</span>
      </div>
    </div>
  );
}

function SchemaIpotesiB() {
  return (
    <div className="relative border border-ink/20 bg-bone/70 p-5 md:p-6">
      <div className="flex items-center justify-between border-b border-ink/15 pb-2.5 font-mono text-[9px] tracking-[0.18em] text-ink/60 uppercase">
        <span className="font-bold text-ink">SCHEMA TECNICO · CIRCUITO DI REWARDING &amp; VOTO</span>
        <span className="text-coral font-bold">FIG. 02 · PEOPLE &amp; BORGHI</span>
      </div>

      <svg viewBox="0 0 580 250" className="mt-3.5 w-full" fill="none">
        <defs>
          <pattern id="grid-b-lg" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(21,20,15,0.06)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="580" height="250" fill="url(#grid-b-lg)" />

        {/* Blocco 1: Consumo ordinario */}
        <g transform="translate(20, 80)">
          <rect width="115" height="90" fill="#efe7d2" stroke="#15140f" strokeWidth="1.8" />
          <rect x="0" y="0" width="115" height="22" fill="#15140f" />
          <text x="57" y="15" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700" fill="#efe7d2" textAnchor="middle">CONSUMI</text>
          <text x="57" y="54" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="800" fill="#15140f" textAnchor="middle">1.000</text>
          <text x="57" y="72" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="600" fill="#15140f" opacity="0.7" textAnchor="middle">EROGAZIONI SEDE</text>
        </g>

        {/* Frecce di conversione */}
        <path d="M135 125 L175 125" stroke="#ed6f5c" strokeWidth="2.5" strokeDasharray="4 4" />
        <polygon points="175,121 185,125 175,129" fill="#ed6f5c" />

        {/* Blocco 2: Borsellino di trasformazione */}
        <g transform="translate(190, 52)">
          <rect width="135" height="146" fill="#f7f1de" stroke="#ed6f5c" strokeWidth="2.2" />
          <text x="67" y="24" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="800" fill="#ed6f5c" textAnchor="middle">BORSELLINO</text>
          <line x1="20" y1="34" x2="115" y2="34" stroke="#ed6f5c" strokeWidth="1.2" opacity="0.4" />
          
          <rect x="14" y="44" width="107" height="38" fill="#efe7d2" stroke="#15140f" strokeWidth="1.2" />
          <text x="67" y="62" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="800" fill="#15140f" textAnchor="middle">5 BIGLIETTI</text>
          <text x="67" y="74" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="600" fill="#15140f" opacity="0.7" textAnchor="middle">2 VIP + 3 STANDARD</text>

          <rect x="14" y="92" width="107" height="38" fill="#efe7d2" stroke="#15140f" strokeWidth="1.2" />
          <text x="67" y="110" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="800" fill="#ed6f5c" textAnchor="middle">10 PUNTI</text>
          <text x="67" y="122" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="600" fill="#15140f" opacity="0.7" textAnchor="middle">DIRITTO DI VOTO</text>
        </g>

        {/* Frecce verso i benefici */}
        <path d="M325 100 C350 100, 360 62, 385 62" stroke="#15140f" strokeWidth="2" />
        <polygon points="385,58 395,62 385,66" fill="#15140f" />

        <path d="M325 125 L385 125" stroke="#ed6f5c" strokeWidth="2.5" />
        <polygon points="385,121 395,125 385,129" fill="#ed6f5c" />

        <path d="M325 150 C350 150, 360 188, 385 188" stroke="#15140f" strokeWidth="2" />
        <polygon points="385,184 395,188 385,192" fill="#15140f" />

        {/* Nodi esito ampliati */}
        <g transform="translate(400, 40)">
          <rect width="165" height="44" fill="#efe7d2" stroke="#15140f" strokeWidth="1.2" />
          <text x="12" y="18" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#15140f">SPETTACOLI DAL VIVO</text>
          <text x="12" y="32" font-family="'JetBrains Mono', monospace" font-size="7.5" fill="#15140f" opacity="0.75">Teatro e concerti nei 24 borghi</text>
        </g>

        <g transform="translate(400, 103)">
          <rect width="165" height="44" fill="#f7f1de" stroke="#ed6f5c" strokeWidth="1.8" />
          <text x="12" y="18" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ed6f5c">CENE TEAM OFFSITE</text>
          <text x="12" y="32" font-family="'JetBrains Mono', monospace" font-size="7.5" fill="#15140f" opacity="0.75">Deducibili 100% rappresentanza</text>
        </g>

        <g transform="translate(400, 166)">
          <rect width="165" height="44" fill="#efe7d2" stroke="#15140f" strokeWidth="1.2" />
          <text x="12" y="18" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#15140f">VOTO DEMOCRATICO</text>
          <text x="12" y="32" font-family="'JetBrains Mono', monospace" font-size="7.5" fill="#15140f" opacity="0.75">Il team decide il festival sostenuto</text>
        </g>
      </svg>

      <div className="mt-3 flex items-center justify-between border-t border-dashed border-ink/15 pt-2.5 font-mono text-[9px] text-ink/60 uppercase">
        <span>Frequenza riscatto stimata: &gt;45%</span>
        <span className="text-coral font-bold">Welfare burocratico: Sostituito con esperienze</span>
      </div>
    </div>
  );
}

function SchemaIpotesiC() {
  return (
    <div className="relative border border-ink/20 bg-bone/70 p-5 md:p-6">
      <div className="flex items-center justify-between border-b border-ink/15 pb-2.5 font-mono text-[9px] tracking-[0.18em] text-ink/60 uppercase">
        <span className="font-bold text-ink">SCHEMA TECNICO · FILIERA CORTA A ZERO KM DEDICATI</span>
        <span className="text-coral font-bold">FIG. 03 · PROCUREMENT CIRCOLARE</span>
      </div>

      <svg viewBox="0 0 580 250" className="mt-3.5 w-full" fill="none">
        <defs>
          <pattern id="grid-c-lg" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(21,20,15,0.06)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="580" height="250" fill="url(#grid-c-lg)" />

        {/* Anello di filiera chiusa ampliato */}
        <circle cx="290" cy="125" r="95" fill="none" stroke="#15140f" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.35" />
        <circle cx="290" cy="125" r="54" fill="#efe7d2" stroke="#ed6f5c" strokeWidth="2.2" />
        <text x="290" y="118" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="800" fill="#15140f" textAnchor="middle">FLOTTA</text>
        <text x="290" y="132" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ed6f5c" textAnchor="middle">SINERGICA</text>
        <text x="290" y="144" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="600" fill="#15140f" opacity="0.7" textAnchor="middle">0 KM EXTRA</text>

        {/* 4 Poli cardinali dell'anello */}
        {/* Nord: Torrefazione eccellenza */}
        <g transform="translate(195, 10)">
          <rect width="190" height="34" fill="#f7f1de" stroke="#15140f" strokeWidth="1.2" />
          <text x="95" y="16" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="800" fill="#15140f" textAnchor="middle">CAFFÈ DI QUALITÀ SUPERIORE</text>
          <text x="95" y="27" font-family="'JetBrains Mono', monospace" font-size="7" fill="#15140f" opacity="0.7" textAnchor="middle">Grandi marchi (Lavazza / Nespresso)</text>
        </g>

        {/* Est: Sconti paniere Km 0 */}
        <g transform="translate(415, 106)">
          <rect width="155" height="38" fill="#efe7d2" stroke="#ed6f5c" strokeWidth="1.8" />
          <text x="77" y="17" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ed6f5c" textAnchor="middle">SCONTI KM 0</text>
          <text x="77" y="29" font-family="'JetBrains Mono', monospace" font-size="7.5" fill="#15140f" opacity="0.8" textAnchor="middle">Ammortamento spese sede</text>
        </g>

        {/* Sud: Dati verificati & privacy */}
        <g transform="translate(195, 206)">
          <rect width="190" height="34" fill="#f7f1de" stroke="#15140f" strokeWidth="1.2" />
          <text x="95" y="16" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="800" fill="#15140f" textAnchor="middle">DATI VERIFICATI SHA-256</text>
          <text x="95" y="27" font-family="'JetBrains Mono', monospace" font-size="7" fill="#15140f" opacity="0.7" textAnchor="middle">Nessun software IT invasivo · GDPR</text>
        </g>

        {/* Ovest: Produttori locali */}
        <g transform="translate(10, 106)">
          <rect width="155" height="38" fill="#efe7d2" stroke="#15140f" strokeWidth="1.2" />
          <text x="77" y="17" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#15140f" textAnchor="middle">PRODUTTORI ENTRO 70 KM</text>
          <text x="77" y="29" font-family="'JetBrains Mono', monospace" font-size="7.5" fill="#15140f" opacity="0.8" textAnchor="middle">L. 61/2022 Marche</text>
        </g>

        {/* Linee di collegamento con frecce orarie */}
        <path d="M290 44 L290 71" stroke="#15140f" strokeWidth="1.8" />
        <path d="M415 125 L344 125" stroke="#ed6f5c" strokeWidth="2" />
        <path d="M290 206 L290 179" stroke="#15140f" strokeWidth="1.8" />
        <path d="M165 125 L236 125" stroke="#15140f" strokeWidth="1.8" />
      </svg>

      <div className="mt-3 flex items-center justify-between border-t border-dashed border-ink/15 pt-2.5 font-mono text-[9px] text-ink/60 uppercase">
        <span>Furgoni dedicati evitati: 100%</span>
        <span className="text-coral font-bold">Costi occulti o IT: Zero</span>
      </div>
    </div>
  );
}

/* ---------------- Card Modale / Dossier Monografico Ingrandito ---------------- */

export function ValuePropositionModal({
  selected,
  onClose,
  onSelect,
}: {
  selected: HypothesisId | null;
  onClose: () => void;
  onSelect: (id: HypothesisId) => void;
}) {
  const [copied, setCopied] = useState(false);

  // Chiusura con tasto Escape e frecce da tastiera
  useEffect(() => {
    if (!selected) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        if (selected === "B") onSelect("A");
        if (selected === "C") onSelect("B");
      }
      if (e.key === "ArrowRight") {
        if (selected === "A") onSelect("B");
        if (selected === "B") onSelect("C");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected, onClose, onSelect]);

  if (!selected) return null;
  const current = HYPOTHESES[selected];

  const handleCopySpec = () => {
    const text = `PROSPETTIVA DI VALORE: ${current.role} (${current.code})\n${current.headlineTitle} ${current.headlineItalic} ${current.headlineEnd ?? ""}\n\nTESI: ${current.tesi}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Scheda di posizionamento Customer Journey"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/80 p-3 backdrop-blur-md sm:p-5 md:p-8"
      onClick={onClose}
    >
      {/* Scheda allargata di oltre 10mm (max-w-[1260px]) per consentire piena leggibilità */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-[1260px] border-2 border-ink bg-paper p-6 shadow-[20px_20px_0_rgba(237,111,92,0.45)] transition-all sm:p-8 md:p-10 lg:p-11"
      >
        {/* Crocini tecnici di registro negli 4 angoli */}
        <span className="pointer-events-none absolute -top-3 -left-3 font-mono text-[16px] font-bold text-coral select-none">
          ┌
        </span>
        <span className="pointer-events-none absolute -top-3 -right-3 font-mono text-[16px] font-bold text-coral select-none">
          ┐
        </span>
        <span className="pointer-events-none absolute -bottom-3 -left-3 font-mono text-[16px] font-bold text-coral select-none">
          └
        </span>
        <span className="pointer-events-none absolute -bottom-3 -right-3 font-mono text-[16px] font-bold text-coral select-none">
          ┘
        </span>

        {/* Barra di commutazione tra le 3 Customer Journey (Tabs Rapide) */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink pb-4">
          <div className="flex flex-wrap items-center gap-2.5">
            {(["A", "B", "C"] as HypothesisId[]).map((tabId) => {
              const h = HYPOTHESES[tabId];
              const isActive = selected === tabId;
              return (
                <button
                  key={tabId}
                  type="button"
                  onClick={() => onSelect(tabId)}
                  className={`btn-sweep flex items-center gap-2 border px-4 py-2 font-mono text-[10.5px] tracking-[0.16em] uppercase transition-all ${
                    isActive
                      ? "border-coral bg-coral text-bone shadow-[3px_3px_0_rgba(21,20,15,1)]"
                      : "border-ink/25 bg-bone/70 text-ink/70 hover:border-ink hover:text-ink"
                  }`}
                >
                  <span className="font-bold">{tabId === "A" ? "I" : tabId === "B" ? "II" : "III"}</span>
                  <span>· {h.role}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopySpec}
              className="hidden items-center gap-2 border border-ink/25 px-3 py-1.5 font-mono text-[9px] tracking-[0.14em] text-ink/65 uppercase transition-colors hover:border-ink hover:text-ink md:inline-flex"
            >
              {copied ? "Copiato negli appunti ✓" : "Copia scheda"}
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Chiudi la scheda"
              className="flex h-9 w-9 items-center justify-center border border-ink bg-ink text-bone font-mono text-[12px] font-bold transition-all hover:bg-coral hover:border-coral"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Metadati di intestazione tecnica */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-b border-dashed border-ink/20 pb-3 font-mono text-[9.5px] tracking-[0.18em] text-ink/55 uppercase">
          <span className="flex items-center gap-2">
            <LiveDot /> {current.code}
          </span>
          <span className="text-coral font-medium">Target: {current.target}</span>
          <span className="hidden lg:inline">Hash: SHA-256 · Validato</span>
        </div>

        {/* Contenuto Principale: Struttura Riprogettata a Due Colonne */}
        <div className="mt-7 grid gap-8 lg:grid-cols-12 lg:gap-11">
          {/* COLONNA SINISTRA (lg:col-span-7): Headline, Tesi e ORA "Architettura e Flussi" Ingrandita */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2">
              <Tag tone="coral">Customer Journey {selected}</Tag>
              <span className="font-mono text-[10.5px] tracking-[0.18em] text-ink/55 uppercase font-medium">
                {current.role}
              </span>
            </div>

            <h3 className="mt-4 text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.03] font-black tracking-[-0.03em] uppercase text-ink">
              {current.headlineTitle}
              <br />
              <span className="font-editorial text-[0.92em] font-medium tracking-[-0.02em] text-coral normal-case italic">
                {current.headlineItalic}
              </span>{" "}
              {current.headlineEnd}
            </h3>

            {/* Tesi Fondamentale */}
            <div className="mt-5 border-l-2 border-coral bg-bone/70 p-4 md:p-5">
              <p className="font-mono text-[9px] tracking-[0.18em] text-coral uppercase mb-1.5 font-bold">
                Tesi fondamentale
              </p>
              <p className="text-[14.5px] leading-relaxed text-inksoft/90">
                {current.tesi}
              </p>
            </div>

            {/* ORA QUI A SINISTRA: "Architettura e Flussi" (Spazio Ampio e Figure Chiare) */}
            <div className="mt-7">
              <div className="flex items-center justify-between mb-2.5">
                <p className="font-mono text-[10px] tracking-[0.22em] text-ink/60 uppercase font-bold">
                  Architettura e flussi · Modello dimostrativo
                </p>
                <span className="font-mono text-[8.5px] tracking-[0.14em] text-coral uppercase">
                  Scala 1:1
                </span>
              </div>
              {selected === "A" && <SchemaIpotesiA />}
              {selected === "B" && <SchemaIpotesiB />}
              {selected === "C" && <SchemaIpotesiC />}
            </div>
          </div>

          {/* COLONNA DESTRA (lg:col-span-5): ORA "Componenti di Valore Operativo" in Alto, Metriche e CTA */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              {/* ORA QUI A DESTRA: "Componenti di Valore Operativo" */}
              <div>
                <p className="font-mono text-[10px] tracking-[0.22em] text-ink/60 uppercase font-bold mb-3">
                  Componenti di valore operativo
                </p>
                <div className="space-y-3">
                  {current.componenti.map((c) => (
                    <div
                      key={c.num}
                      className="group border border-ink/15 bg-bone/50 p-4 transition-all hover:border-coral hover:bg-bone hover:shadow-[4px_4px_0_rgba(21,20,15,0.06)]"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="font-mono text-[10.5px] font-bold text-coral uppercase">
                          {c.num} · {c.titolo}
                        </span>
                        <Tag className="text-[8px] py-0.5">{c.badge}</Tag>
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed text-inksoft/85">
                        {c.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Indicatori sintetici di rendimento */}
              <div className="mt-5">
                <p className="font-mono text-[9px] tracking-[0.18em] text-ink/50 uppercase mb-2">
                  Metriche chiave
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {current.metriche.map((m) => (
                    <div key={m.label} className="border border-ink/20 bg-bone p-2.5 text-center">
                      <p className="font-mono text-[8px] tracking-[0.1em] text-ink/50 uppercase truncate">
                        {m.label}
                      </p>
                      <p className="tabnum mt-1 text-[15px] font-black tracking-tight text-ink">
                        {m.val}
                      </p>
                      <p className="mt-0.5 font-mono text-[7.5px] text-ink/50 uppercase truncate">
                        {m.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timbro di attestazione & CTA finale */}
            <div className="mt-6 border-t border-ink/15 pt-5">
              <div className="flex items-center justify-between gap-4">
                <Stamp
                  label="shared value · value proposition · "
                  sub={"customer\njourney " + selected}
                  size={90}
                  tone="coral"
                />
                <div className="flex-1 text-right">
                  <a
                    href="#adesione"
                    onClick={onClose}
                    className="btn-sweep inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2.5 font-mono text-[10px] font-bold tracking-[0.14em] text-bone uppercase hover:border-coral hover:bg-coral"
                  >
                    Richiedi questo dossier →
                  </a>
                  <p className="mt-1.5 font-mono text-[8px] tracking-[0.1em] text-ink/40 uppercase">
                    Configurazione su misura in 2 ore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer della scheda con guida tastiera */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-ink/15 pt-3.5 font-mono text-[8.5px] tracking-[0.12em] text-ink/45 uppercase">
          <span>Usa le frecce [← / →] per scorrere le 3 prospettive · [ESC] per chiudere</span>
          <span className="text-coral">Startup Innovativa GIORGI&amp;CO. S.R.L.</span>
        </div>
      </div>
    </div>
  );
}
