import { useEffect, useState } from "react";
import { LiveDot, Stamp, Tag } from "@/components/ui";

export function LoyaltyArchitectureModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"framework" | "tiering" | "strategie" | "scala" | "simulazione">("framework");

  // Chiusura con tasto Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Architettura Strategica degli Incentivi: Loyalty & Borsellino d'Impatto"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/80 p-3 backdrop-blur-md sm:p-5 md:p-8"
      onClick={onClose}
    >
      {/* Scheda a pagina unica esaustiva ad alta precisione grafica */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto max-h-[94vh] w-full max-w-5xl overflow-y-auto border-2 border-ink bg-paper p-6 shadow-[18px_18px_0_rgba(237,111,92,0.45)] transition-all sm:p-8 md:p-10"
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

        {/* Intestazione tecnica monografica */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink pb-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <Tag tone="coral">Architettura Incentivi &amp; Loyalty</Tag>
            <span className="font-mono text-[10px] tracking-[0.18em] text-ink/60 uppercase">
              Doc. ICI-LOYALTY-FRAMEWORK-2026
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 font-mono text-[9px] tracking-[0.14em] text-ink/50 uppercase sm:flex">
              <LiveDot /> Meccanica Operativa del Borsellino
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Chiudi la scheda"
              className="flex h-9 w-9 items-center justify-center border border-ink bg-ink text-bone font-mono text-[12px] font-bold transition-all hover:bg-coral hover:border-coral cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Hero della Card */}
        <div className="mt-6 border-b border-dashed border-ink/20 pb-6">
          <p className="font-mono text-[9.5px] tracking-[0.24em] text-coral uppercase font-bold">
            Guida tecnica al funzionamento del programma premi &amp; incentivi
          </p>
          <h2 className="mt-2 text-[clamp(1.6rem,3.2vw,2.5rem)] leading-[1.04] font-black tracking-[-0.035em] uppercase text-ink">
            Come funziona il Borsellino d'Impatto:
            <br />
            <span className="font-editorial text-[0.92em] font-medium tracking-[-0.02em] text-coral normal-case italic">
              dalle erogazioni caffè ai benefici tangibili
            </span>{" "}
            per azienda e persone.
          </h2>

          <p className="mt-4 text-[14.5px] leading-relaxed text-inksoft/90 md:text-[15.5px]">
            Un'architettura di incentivazione B2B2C trasparente che elimina la dispersione dei soliti cataloghi a punti.
            Ogni consumazione nei presidi OCS o nei distributori automatici alimenta un unico <strong>Borsellino Aziendale</strong>,
            attivando 4 leve simultanee: sconti fornitura diretti su prodotti tipici a Km 0, reputazione istituzionale con sindaci e partner territoriali,
            titoli d'accesso per spettacoli d'autore e voto partecipato per i collaboratori.
          </p>

          {/* Barra di Navigazione Rapida / Indice dei 5 Moduli */}
          <div className="mt-6 flex flex-wrap gap-1.5 border-t border-ink/15 pt-4">
            <button
              type="button"
              onClick={() => setActiveTab("framework")}
              className={`px-3 py-1.5 font-mono text-[9px] font-bold tracking-[0.14em] uppercase transition-all cursor-pointer ${
                activeTab === "framework"
                  ? "border border-ink bg-ink text-bone"
                  : "border border-ink/20 bg-bone/70 text-ink/70 hover:border-coral hover:text-coral"
              }`}
            >
              1. Framework 4 Dimensioni
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("tiering")}
              className={`px-3 py-1.5 font-mono text-[9px] font-bold tracking-[0.14em] uppercase transition-all cursor-pointer ${
                activeTab === "tiering"
                  ? "border border-ink bg-ink text-bone"
                  : "border border-ink/20 bg-bone/70 text-ink/70 hover:border-coral hover:text-coral"
              }`}
            >
              2. Borsellino &amp; Livelli (Tiering)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("strategie")}
              className={`px-3 py-1.5 font-mono text-[9px] font-bold tracking-[0.14em] uppercase transition-all cursor-pointer ${
                activeTab === "strategie"
                  ? "border border-ink bg-ink text-bone"
                  : "border border-ink/20 bg-bone/70 text-ink/70 hover:border-coral hover:text-coral"
              }`}
            >
              3. 4 Strategie di Attuazione
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("scala")}
              className={`px-3 py-1.5 font-mono text-[9px] font-bold tracking-[0.14em] uppercase transition-all cursor-pointer ${
                activeTab === "scala"
                  ? "border border-ink bg-ink text-bone"
                  : "border border-ink/20 bg-bone/70 text-ink/70 hover:border-coral hover:text-coral"
              }`}
            >
              4. Scala Proporzionale &amp; Status
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("simulazione")}
              className={`px-3 py-1.5 font-mono text-[9px] font-bold tracking-[0.14em] uppercase transition-all cursor-pointer ${
                activeTab === "simulazione"
                  ? "border border-ink bg-ink text-bone"
                  : "border border-ink/20 bg-bone/70 text-ink/70 hover:border-coral hover:text-coral"
              }`}
            >
              5. Esempio 50 Dipendenti
            </button>
          </div>
        </div>

        {/* MODULO 1: IL LOYALTY FRAMEWORK A 4 DIMENSIONI */}
        <section className={`mt-8 ${activeTab === "framework" ? "block" : "hidden sm:block"}`}>
          <div className="flex items-center justify-between border-b border-ink/20 pb-2.5">
            <h3 className="font-mono text-[11px] font-bold tracking-[0.2em] text-coral uppercase">
              01 · Il Loyalty Framework a 4 Dimensioni
            </h3>
            <span className="font-mono text-[8.5px] text-ink/50 uppercase">
              Equilibrio Azienda (B2B) + Collaboratori (B2C)
            </span>
          </div>

          <p className="mt-3 text-[13px] leading-relaxed text-inksoft/80">
            Il semplice regalo di biglietti manifesta limiti se disgiunto dalle esigenze dell'azienda.
            Il nostro modello attiva contemporaneamente quattro leve strategiche:
          </p>

          <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
            {/* Dimensione 1 */}
            <div className="border border-ink/20 bg-bone/50 p-4 transition-all hover:border-coral hover:bg-bone">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-coral uppercase">
                  Dimensione 01
                </span>
                <Tag className="text-[7.5px] py-0.5">Per l'Impresa</Tag>
              </div>
              <h4 className="mt-2 text-[14px] font-extrabold uppercase tracking-tight text-ink">
                Leva Economica: Credito di Riacquisto &amp; Sconti
              </h4>
              <p className="mt-2 text-[12px] leading-relaxed text-inksoft/85">
                Una quota dei consumi accumulati nel Borsellino si traduce in agevolazioni concrete sul riordino del
                paniere di prodotti tipici a Km 0 e su accessori fornitura. L'impresa vede che bere caffè con questa fornitura
                riduce direttamente le spese vive di sede.
              </p>
              <div className="mt-3 border-t border-dashed border-ink/15 pt-2 font-mono text-[8.5px] text-ink/60 uppercase">
                Effetto: Ammortamento costi ordinari
              </div>
            </div>

            {/* Dimensione 2 */}
            <div className="border border-ink/20 bg-bone/50 p-4 transition-all hover:border-coral hover:bg-bone">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-coral uppercase">
                  Dimensione 02
                </span>
                <Tag className="text-[7.5px] py-0.5">Per Direzione &amp; HR</Tag>
              </div>
              <h4 className="mt-2 text-[14px] font-extrabold uppercase tracking-tight text-ink">
                Leva di Status &amp; Relazioni Territoriali
              </h4>
              <p className="mt-2 text-[12px] leading-relaxed text-inksoft/85">
                Attestati d'impatto con marcatura temporale che documentano chilometri e CO₂ evitati.
                Amplificazione dell'azienda nei comunicati stampa regionali e inserimento tra i Main Partner del festival,
                aprendo canali di dialogo privilegiati con altri imprenditori e sindaci.
              </p>
              <div className="mt-3 border-t border-dashed border-ink/15 pt-2 font-mono text-[8.5px] text-coral uppercase font-bold">
                Effetto: Capitale relazionale e Best Practice
              </div>
            </div>

            {/* Dimensione 3 */}
            <div className="border border-ink/20 bg-bone/50 p-4 transition-all hover:border-coral hover:bg-bone">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-coral uppercase">
                  Dimensione 03
                </span>
                <Tag className="text-[7.5px] py-0.5">Per i Collaboratori</Tag>
              </div>
              <h4 className="mt-2 text-[14px] font-extrabold uppercase tracking-tight text-ink">
                Leva Etica &amp; Governance Partecipata
              </h4>
              <p className="mt-2 text-[12px] leading-relaxed text-inksoft/85">
                I collaboratori non sono spettatori passivi. Tramite la Web App consultano i Punti Impatto maturati
                dalla sede ed esprimono il proprio voto democratico per decidere a quale circuito di borghi marchigiani
                destinare il sostegno. Più l'azienda consuma, più il peso del voto del team cresce.
              </p>
              <div className="mt-3 border-t border-dashed border-ink/15 pt-2 font-mono text-[8.5px] text-ink/60 uppercase">
                Effetto: Coinvolgimento e coesione interna
              </div>
            </div>

            {/* Dimensione 4 */}
            <div className="border border-ink/20 bg-bone/50 p-4 transition-all hover:border-coral hover:bg-bone">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-coral uppercase">
                  Dimensione 04
                </span>
                <Tag className="text-[7.5px] py-0.5">Startup → Collaboratori</Tag>
              </div>
              <h4 className="mt-2 text-[14px] font-extrabold uppercase tracking-tight text-ink">
                Leva Esperienziale nei Borghi
              </h4>
              <p className="mt-2 text-[12px] leading-relaxed text-inksoft/85">
                Regola fissa: 5 Biglietti Omaggio ogni 1.000 erogazioni messi a disposizione dalla Startup per spettacoli
                dal vivo nei 24 borghi delle Aree Interne. In più, convenzioni diffuse con agriturismi, chiostri e botteghe tipiche
                per cene e tempo libero delle famiglie.
              </p>
              <div className="mt-3 border-t border-dashed border-ink/15 pt-2 font-mono text-[8.5px] text-coral uppercase font-bold">
                Effetto: Premi d'autore e svago reale
              </div>
            </div>
          </div>

          {/* Diagramma Vettoriale di Interconnessione 4D */}
          <div className="mt-5 border border-ink/20 bg-bone/80 p-4">
            <div className="flex items-center justify-between font-mono text-[8.5px] tracking-[0.14em] text-ink/60 uppercase">
              <span>SCHEMA ARCHITETTURALE · MATRICE A 4 DIMENSIONI</span>
              <span className="text-coral font-bold">FIG. LF-01</span>
            </div>
            <svg viewBox="0 0 760 140" className="mt-2 w-full" fill="none">
              <defs>
                <pattern id="grid-lf" width="16" height="16" patternUnits="userSpaceOnUse">
                  <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(21,20,15,0.05)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="760" height="140" fill="url(#grid-lf)" />

              {/* Centro: Il Borsellino */}
              <g transform="translate(300, 25)">
                <rect width="160" height="90" fill="#15140f" stroke="#ed6f5c" strokeWidth="2" />
                <text x="80" y="24" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="700" fill="#ed6f5c" textAnchor="middle">NUCLEO CENTRALE</text>
                <text x="80" y="44" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" fill="#f7f1de" textAnchor="middle">BORSELLINO</text>
                <text x="80" y="58" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#f7f1de" textAnchor="middle">AZIENDALE</text>
                <line x1="25" y1="68" x2="135" y2="68" stroke="#ed6f5c" strokeWidth="1" opacity="0.6" />
                <text x="80" y="80" font-family="'JetBrains Mono', monospace" font-size="7" fill="#f7f1de" opacity="0.75" textAnchor="middle">1.000 erog. = 5 pass + 10 pt</text>
              </g>

              {/* Ramo 1 Sinistra Alto: Leva Economica */}
              <path d="M300 50 L170 35" stroke="#15140f" strokeWidth="1.5" strokeDasharray="3 3" />
              <g transform="translate(10, 15)">
                <rect width="150" height="42" fill="#efe7d2" stroke="#15140f" strokeWidth="1.2" />
                <text x="75" y="16" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="700" fill="#ed6f5c" textAnchor="middle">01 · LEVA ECONOMICA</text>
                <text x="75" y="32" font-family="'JetBrains Mono', monospace" font-size="7.5" fill="#15140f" textAnchor="middle">Sconti riordino Km 0</text>
              </g>

              {/* Ramo 2 Sinistra Basso: Status & PR */}
              <path d="M300 90 L170 105" stroke="#ed6f5c" strokeWidth="1.5" />
              <g transform="translate(10, 85)">
                <rect width="150" height="42" fill="#f7f1de" stroke="#ed6f5c" strokeWidth="1.5" />
                <text x="75" y="16" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="700" fill="#ed6f5c" textAnchor="middle">02 · STATUS &amp; PR</text>
                <text x="75" y="32" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="700" fill="#15140f" textAnchor="middle">Libro Bianco &amp; Tavoli</text>
              </g>

              {/* Ramo 3 Destra Alto: Governance Dipendenti */}
              <path d="M460 50 L590 35" stroke="#15140f" strokeWidth="1.5" strokeDasharray="3 3" />
              <g transform="translate(600, 15)">
                <rect width="150" height="42" fill="#efe7d2" stroke="#15140f" strokeWidth="1.2" />
                <text x="75" y="16" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="700" fill="#ed6f5c" textAnchor="middle">03 · GOVERNANCE</text>
                <text x="75" y="32" font-family="'JetBrains Mono', monospace" font-size="7.5" fill="#15140f" textAnchor="middle">Voto festival del team</text>
              </g>

              {/* Ramo 4 Destra Basso: Esperienze Borghi */}
              <path d="M460 90 L590 105" stroke="#ed6f5c" strokeWidth="1.5" />
              <g transform="translate(600, 85)">
                <rect width="150" height="42" fill="#f7f1de" stroke="#ed6f5c" strokeWidth="1.5" />
                <text x="75" y="16" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="700" fill="#ed6f5c" textAnchor="middle">04 · ESPERIENZE</text>
                <text x="75" y="32" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="700" fill="#15140f" textAnchor="middle">5 pass / 1.000 erogazioni</text>
              </g>
            </svg>
          </div>
        </section>

        {/* MODULO 2: MECCANICA DI CALCOLO DEL BORSELLINO E LIVELLI DI IMPATTO (TIERING) */}
        <section className={`mt-10 border-t border-ink/20 pt-8 ${activeTab === "tiering" ? "block" : "hidden sm:block"}`}>
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/15 pb-2.5">
            <div>
              <p className="font-mono text-[9px] tracking-[0.2em] text-coral uppercase font-bold">
                Meccanica algoritmica
              </p>
              <h3 className="text-[17px] font-black uppercase tracking-tight text-ink">
                02 · Calcolo del Borsellino e Livelli di Impatto (Tiering Gamificato)
              </h3>
            </div>
            <span className="font-mono text-[9px] tracking-[0.14em] text-ink/50 uppercase">
              Conto Unico su Web App Aziendale
            </span>
          </div>

          {/* Formula Base Monografica */}
          <div className="mt-4 border-2 border-ink bg-bone p-4 shadow-[4px_4px_0_rgba(21,20,15,0.08)]">
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono">
              <div>
                <span className="text-[10px] tracking-[0.18em] text-coral uppercase font-bold block">
                  Regola Base Fondamentale:
                </span>
                <span className="text-[15px] font-black text-ink sm:text-[17px]">
                  1.000 Erogazioni Totali = 5 Biglietti Omaggio + 10 Punti Impatto
                </span>
              </div>
              <div className="border-l border-ink/20 pl-4 text-[10px] text-inksoft/80">
                <span className="text-coral font-bold block">1 Punto ogni 100 erogazioni</span>
                Nessun costo per l'impresa · Biglietti erogati dalla Startup
              </div>
            </div>
          </div>

          {/* Tabella Tiering Completa */}
          <div className="mt-6 overflow-x-auto border border-ink/20">
            <table className="w-full text-left font-mono text-[11px]">
              <thead className="border-b border-ink/25 bg-ink text-bone text-[9px] uppercase tracking-[0.14em]">
                <tr>
                  <th className="p-3">Soglia Punti</th>
                  <th className="p-3">Livello Raggiunto</th>
                  <th className="p-3">Vantaggi per l'Impresa (B2B)</th>
                  <th className="p-3">Vantaggi per i Collaboratori (B2C)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10 bg-paper">
                <tr className="hover:bg-bone/60 transition-colors">
                  <td className="p-3 font-bold text-coral whitespace-nowrap">
                    10 Punti
                    <span className="block text-[8.5px] font-normal text-ink/50">1.000 caffè</span>
                  </td>
                  <td className="p-3 font-bold text-ink whitespace-nowrap">
                    Livello Partecipante
                  </td>
                  <td className="p-3 text-inksoft/85 text-[11.5px] font-sans">
                    • Certificato d'Impatto Livello 1 generato.<br />
                    • Menzione di benvenuto sui canali della Startup.
                  </td>
                  <td className="p-3 text-inksoft/85 text-[11.5px] font-sans">
                    • Assegnazione dei primi 5 Biglietti Omaggio.<br />
                    • Accesso alla Web App per consultare il cartellone.
                  </td>
                </tr>

                <tr className="hover:bg-bone/60 transition-colors">
                  <td className="p-3 font-bold text-coral whitespace-nowrap">
                    20 Punti
                    <span className="block text-[8.5px] font-normal text-ink/50">2.000 caffè</span>
                  </td>
                  <td className="p-3 font-bold text-ink whitespace-nowrap">
                    Livello Territorio Attivo
                  </td>
                  <td className="p-3 text-inksoft/85 text-[11.5px] font-sans">
                    • Sconto riservato sul riordino del paniere a Km 0.<br />
                    • Kit di comunicazione interna per l'area break aziendale.
                  </td>
                  <td className="p-3 text-inksoft/85 text-[11.5px] font-sans">
                    • 10 Biglietti Omaggio totali.<br />
                    • Diritto di Voto Base: scelta del festival marchigiano da sostenere.
                  </td>
                </tr>

                <tr className="hover:bg-bone/60 transition-colors">
                  <td className="p-3 font-bold text-coral whitespace-nowrap">
                    30 Punti
                    <span className="block text-[8.5px] font-normal text-ink/50">3.000 caffè</span>
                  </td>
                  <td className="p-3 font-bold text-ink whitespace-nowrap">
                    Livello Impatto Condiviso
                  </td>
                  <td className="p-3 text-inksoft/85 text-[11.5px] font-sans">
                    • Certificato di Valorizzazione Locale attestato.<br />
                    • Scheda dati precompilata per il fascicolo ESG dell'azienda.
                  </td>
                  <td className="p-3 text-inksoft/85 text-[11.5px] font-sans">
                    • 15 Biglietti Omaggio totali.<br />
                    • Voto Ponderato x1.5: la preferenza del team pesa di più.
                  </td>
                </tr>

                <tr className="bg-bone/40 hover:bg-bone/70 transition-colors border-l-2 border-coral">
                  <td className="p-3 font-bold text-coral whitespace-nowrap">
                    50 Punti
                    <span className="block text-[8.5px] font-normal text-ink/50">5.000 caffè</span>
                  </td>
                  <td className="p-3 font-bold text-coral whitespace-nowrap">
                    Livello Best Practice ★
                  </td>
                  <td className="p-3 text-inksoft/85 text-[11.5px] font-sans">
                    • Comunicato stampa congiunto e pubblicazione della Best Practice.<br />
                    • Logo aziendale nel catalogo ufficiale degli eventi nei borghi.
                  </td>
                  <td className="p-3 text-inksoft/85 text-[11.5px] font-sans">
                    • 25 Biglietti Omaggio totali.<br />
                    • Voto Ponderato x2 + Convenzioni pernottamento e ristorazione.
                  </td>
                </tr>

                <tr className="bg-coral/5 hover:bg-coral/10 transition-colors border-l-2 border-coral">
                  <td className="p-3 font-bold text-coral whitespace-nowrap">
                    100 Punti
                    <span className="block text-[8.5px] font-normal text-ink/50">10.000 caffè</span>
                  </td>
                  <td className="p-3 font-bold text-coral whitespace-nowrap">
                    Main Partner Aree Interne
                  </td>
                  <td className="p-3 text-inksoft/85 text-[11.5px] font-sans">
                    • Targa d'impatto fisica in ceramica/legno per la sede aziendale.<br />
                    • Invito del management a tavole rotonde con sindaci e operatori culturali.
                  </td>
                  <td className="p-3 text-inksoft/85 text-[11.5px] font-sans">
                    • 50 Biglietti Omaggio totali.<br />
                    • Posti d'onore riservati e incontri esclusivi con gli artisti.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* MODULO 3: LE 4 STRATEGIE ALTERNATIVE DI ATTUAZIONE */}
        <section className={`mt-10 border-t border-ink/20 pt-8 ${activeTab === "strategie" ? "block" : "hidden sm:block"}`}>
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/15 pb-2.5">
            <div>
              <p className="font-mono text-[9px] tracking-[0.2em] text-coral uppercase font-bold">
                Flessibilità e modularità applicativa
              </p>
              <h3 className="text-[17px] font-black uppercase tracking-tight text-ink">
                03 · Le 4 Strategie Alternative di Attuazione
              </h3>
            </div>
            <span className="font-mono text-[9px] tracking-[0.14em] text-ink/50 uppercase">
              Modulari · Sostenibili · Personalizzabili
            </span>
          </div>

          <p className="mt-3 text-[13px] leading-relaxed text-inksoft/85">
            Non tutte le aziende hanno le stesse priorità. Per questo la Startup ha sviluppato 4 alternative
            perfettamente sostenibili e attivabili a scelta dell'impresa in base al proprio profilo:
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {/* Alternativa A */}
            <div className="border border-ink/20 bg-bone/40 p-4 transition-all hover:border-coral hover:bg-bone">
              <div className="flex items-center justify-between border-b border-ink/10 pb-2">
                <span className="font-mono text-[9px] font-bold text-coral uppercase">Strategia A</span>
                <Tag className="text-[7.5px] py-0.5">Effetto Tavolo Aziendale</Tag>
              </div>
              <h4 className="mt-2 text-[13.5px] font-bold uppercase tracking-tight text-ink">
                Il Protocollo del Posto Riservato al Banchetto
              </h4>
              <p className="mt-2 text-[12px] leading-relaxed text-inksoft/85">
                <strong>Meccanica:</strong> L'impresa riceve i suoi 5 titoli d'accesso (2 Biglietti Invito VIP + 3 Biglietti Standard).
                Ai 2 Biglietti VIP è abbinata la prelazione d'onore al pre-spettacolo: i posti a tavola con ammistratori locali e artisti sono riservati, la cena è organizzata per essere un punto di incontro conviviale.
              </p>
              <p className="mt-2 text-[11.5px] font-mono text-ink/75 bg-paper p-2 border border-ink/10">
                <strong>Perché funziona:</strong> Il biglietto VIP è un regalo di prestigio; la cena ha un prezzo accessibile per un contesto esclusivo.
                La Startup genera un'esperienza protetta e indotto vivo per i borghi.
              </p>
            </div>

            {/* Alternativa B */}
            <div className="border border-ink/20 bg-bone/40 p-4 transition-all hover:border-coral hover:bg-bone">
              <div className="flex items-center justify-between border-b border-ink/10 pb-2">
                <span className="font-mono text-[9px] font-bold text-coral uppercase">Strategia B</span>
                <Tag className="text-[7.5px] py-0.5">Micro-Eventi Aziendali</Tag>
              </div>
              <h4 className="mt-2 text-[13.5px] font-bold uppercase tracking-tight text-ink">
                Premio di Reparto &amp; Team Offsite
              </h4>
              <p className="mt-2 text-[12px] leading-relaxed text-inksoft/85">
                <strong>Meccanica:</strong> Pensata per evitare la dispersione di singoli biglietti e la lotteria interna.
                L'impresa cumula i pacchetti per organizzare un'uscita di gruppo del reparto o del team premiato. I biglietti teatrali sono offerti dal programma;
                la cena conviviale viene fatturata all'azienda come spesa di rappresentanza deducibile al 100%.
              </p>
              <p className="mt-2 text-[11.5px] font-mono text-ink/75 bg-paper p-2 border border-ink/10">
                <strong>Perché funziona:</strong> L'imprenditore ottiene un team building stimolato a partecipare con budget minimo, senza costi di consulenza o agenzie esterne.
              </p>
            </div>

            {/* Alternativa C */}
            <div className="border border-ink/20 bg-bone/40 p-4 transition-all hover:border-coral hover:bg-bone">
              <div className="flex items-center justify-between border-b border-ink/10 pb-2">
                <span className="font-mono text-[9px] font-bold text-coral uppercase">Strategia C</span>
                <Tag className="text-[7.5px] py-0.5">Esperienza Senza Attrito</Tag>
              </div>
              <h4 className="mt-2 text-[13.5px] font-bold uppercase tracking-tight text-ink">
                Diritto di Prelazione &amp; Accoglienza Dedicata
              </h4>
              <p className="mt-2 text-[12px] leading-relaxed text-inksoft/85">
                <strong>Meccanica:</strong> L'accento è posto sullo status e sui servizi di accoglienza: pass parcheggio riservato nel centro storico del borgo,
                accredito prioritario salta-fila e un Calice di Benvenuto DOC con degustazione di prodotti tipici marchigiani nel chiostro storico.
              </p>
              <p className="mt-2 text-[11.5px] font-mono text-ink/75 bg-paper p-2 border border-ink/10">
                <strong>Perché funziona:</strong> La degustazione nel chiostro crea un'atmosfera informale dove oltre il 60% degli invitati sceglie
                di fermarsi per la cena completa, massimizzando il ritorno per l'economia locale.
              </p>
            </div>

            {/* Alternativa D */}
            <div className="border border-ink/20 bg-bone/40 p-4 transition-all hover:border-coral hover:bg-bone">
              <div className="flex items-center justify-between border-b border-ink/10 pb-2">
                <span className="font-mono text-[9px] font-bold text-coral uppercase">Strategia D</span>
                <Tag className="text-[7.5px] py-0.5">Public Affairs Pratici</Tag>
              </div>
              <h4 className="mt-2 text-[13.5px] font-bold uppercase tracking-tight text-ink">
                Corporate Sponsorship &amp; Visibilità Istituzionale
              </h4>
              <p className="mt-2 text-[12px] leading-relaxed text-inksoft/85">
                <strong>Meccanica:</strong> Risponde al bisogno di risconoscimento dell'imprenditore locale: visibilità pubblica, reputazione territoriale e accredito istituzionale con esponenti pubblici, sindacati, altri imprenditori e associazioni di categoria delle Marche.
              </p>
              <p className="mt-2 text-[11.5px] font-mono text-ink/75 bg-paper p-2 border border-ink/10">
                <strong>Perché funziona:</strong> I 2 Biglietti VIP permettono all'imprenditore di presenziare come "Azienda Sostenitrice della Rassegna",
                sedendosi al tavolo delle autorità e costruendo relazioni istituzionali solide.
              </p>
            </div>
          </div>
        </section>

        {/* MODULO 4: SCALA DI PROPORZIONALITÀ DEI PREMI E CRESCITA DELLO STATUS ISTITUZIONALE */}
        <section className={`mt-10 border-t border-ink/20 pt-8 ${activeTab === "scala" ? "block" : "hidden sm:block"}`}>
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/15 pb-2.5">
            <div>
              <p className="font-mono text-[9px] tracking-[0.2em] text-coral uppercase font-bold">
                Scalabilità per scaglioni di 500 consumazioni
              </p>
              <h3 className="text-[17px] font-black uppercase tracking-tight text-ink">
                04 · Scala di Proporzionalità dei Premi e Crescita dello Status
              </h3>
            </div>
            <span className="font-mono text-[9px] tracking-[0.14em] text-ink/50 uppercase">
              Progressione Lineare e Reputazionale
            </span>
          </div>

          <p className="mt-3 text-[13px] leading-relaxed text-inksoft/85">
            La soglia di 1.000 erogazioni è solo il punto di partenza: il modello scala per scaglioni di 500 erogazioni.
            All'aumentare dei consumi non aumentano solo i titoli d'accesso ma <strong>cresce il prestigio istituzionale dell'impresa</strong>:
          </p>

          <div className="mt-5 overflow-x-auto border border-ink/20">
            <table className="w-full text-left font-mono text-[11px]">
              <thead className="border-b border-ink/25 bg-ink text-bone text-[9px] uppercase tracking-[0.14em]">
                <tr>
                  <th className="p-2.5">Erogazioni Annue</th>
                  <th className="p-2.5">Biglietti VIP d'Onore</th>
                  <th className="p-2.5">Biglietti Standard</th>
                  <th className="p-2.5">Punti Borsellino</th>
                  <th className="p-2.5">Benefici di Status, Sponsorizzazione &amp; PR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10 bg-paper">
                <tr className="hover:bg-bone/60 transition-colors">
                  <td className="p-2.5 font-bold text-coral">1.000</td>
                  <td className="p-2.5 font-bold text-ink">2 VIP</td>
                  <td className="p-2.5 text-ink/75">3 Standard</td>
                  <td className="p-2.5 text-coral font-bold">10 pt</td>
                  <td className="p-2.5 text-inksoft/85 font-sans text-[11px]">
                    Attestato di Partecipazione Livello 1; prelazione accoglienza chiostro.
                  </td>
                </tr>

                <tr className="hover:bg-bone/60 transition-colors">
                  <td className="p-2.5 font-bold text-coral">1.500</td>
                  <td className="p-2.5 font-bold text-ink">3 VIP</td>
                  <td className="p-2.5 text-ink/75">4 Standard</td>
                  <td className="p-2.5 text-coral font-bold">15 pt</td>
                  <td className="p-2.5 text-inksoft/85 font-sans text-[11px]">
                    Menzione nei canali social della Startup e nel cartellone digitale della rassegna.
                  </td>
                </tr>

                <tr className="hover:bg-bone/60 transition-colors">
                  <td className="p-2.5 font-bold text-coral">2.000</td>
                  <td className="p-2.5 font-bold text-ink">4 VIP</td>
                  <td className="p-2.5 text-ink/75">6 Standard</td>
                  <td className="p-2.5 text-coral font-bold">20 pt</td>
                  <td className="p-2.5 text-inksoft/85 font-sans text-[11px]">
                    Tavolo Riservato Delegazione; Diritto di Voto del team; nome aziendale nel Colophon del programma di sala cartaceo.
                  </td>
                </tr>

                <tr className="hover:bg-bone/60 transition-colors">
                  <td className="p-2.5 font-bold text-coral">2.500</td>
                  <td className="p-2.5 font-bold text-ink">5 VIP</td>
                  <td className="p-2.5 text-ink/75">7 Standard</td>
                  <td className="p-2.5 text-coral font-bold">25 pt</td>
                  <td className="p-2.5 text-inksoft/85 font-sans text-[11px]">
                    Menzione d'onore come "Azienda Amica del Borgo"; pass parcheggio VIP garantito per 2 vetture aziendali.
                  </td>
                </tr>

                <tr className="hover:bg-bone/60 transition-colors bg-bone/30">
                  <td className="p-2.5 font-bold text-coral">3.000</td>
                  <td className="p-2.5 font-bold text-ink">6 VIP</td>
                  <td className="p-2.5 text-ink/75">9 Standard</td>
                  <td className="p-2.5 text-coral font-bold">30 pt</td>
                  <td className="p-2.5 text-inksoft/85 font-sans text-[11px]">
                    Certificato di Valorizzazione Locale con consegna ufficiale sul palco durante la serata inaugurale.
                  </td>
                </tr>

                <tr className="hover:bg-bone/60 transition-colors">
                  <td className="p-2.5 font-bold text-coral">3.500</td>
                  <td className="p-2.5 font-bold text-ink">7 VIP</td>
                  <td className="p-2.5 text-ink/75">10 Standard</td>
                  <td className="p-2.5 text-coral font-bold">35 pt</td>
                  <td className="p-2.5 text-inksoft/85 font-sans text-[11px]">
                    Invito al tavolo istituzionale con il Sindaco del Comune ospitante e il Direttore Artistico per 2 persone.
                  </td>
                </tr>

                <tr className="hover:bg-bone/60 transition-colors">
                  <td className="p-2.5 font-bold text-coral">4.000</td>
                  <td className="p-2.5 font-bold text-ink">8 VIP</td>
                  <td className="p-2.5 text-ink/75">12 Standard</td>
                  <td className="p-2.5 text-coral font-bold">40 pt</td>
                  <td className="p-2.5 text-inksoft/85 font-sans text-[11px]">
                    Spazio logo nel materiale promozionale diffuso nei 6 Comuni; pillola video aziendale nei canali del festival.
                  </td>
                </tr>

                <tr className="hover:bg-bone/60 transition-colors">
                  <td className="p-2.5 font-bold text-coral">4.500</td>
                  <td className="p-2.5 font-bold text-ink">9 VIP</td>
                  <td className="p-2.5 text-ink/75">13 Standard</td>
                  <td className="p-2.5 text-coral font-bold">45 pt</td>
                  <td className="p-2.5 text-inksoft/85 font-sans text-[11px]">
                    Partecipazione come relatore invitato alle tavole rotonde territoriali su sviluppo e rigenerazione delle Aree Interne.
                  </td>
                </tr>

                <tr className="bg-coral/10 hover:bg-coral/15 transition-colors border-l-2 border-coral">
                  <td className="p-2.5 font-bold text-coral">5.000</td>
                  <td className="p-2.5 font-bold text-ink">10 VIP</td>
                  <td className="p-2.5 text-ink/75">15 Standard</td>
                  <td className="p-2.5 text-coral font-black">50 pt</td>
                  <td className="p-2.5 text-inksoft/85 font-sans text-[11px]">
                    Status di "Main Partner delle Aree Interne"; targa d'impatto in ceramica/legno d'autore; invito ufficiale al Convegno Annuale con dibattito e rassegna stampa dedicata.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* MODULO 5: ESEMPIO DI SIMULAZIONE REALISTICA: AZIENDA DA 50 DIPENDENTI */}
        <section className={`mt-10 border-t border-ink/20 pt-8 ${activeTab === "simulazione" ? "block" : "hidden sm:block"}`}>
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/15 pb-2.5">
            <div>
              <p className="font-mono text-[9px] tracking-[0.2em] text-coral uppercase font-bold">
                Caso Studio Numerico
              </p>
              <h3 className="text-[17px] font-black uppercase tracking-tight text-ink">
                05 · Simulazione Operativa: Azienda da 50 Dipendenti
              </h3>
            </div>
            <span className="font-mono text-[9px] tracking-[0.14em] text-ink/50 uppercase">
              Rendimento Diretto su Consumi Medi
            </span>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-12">
            {/* Parametri di partenza */}
            <div className="border border-ink/25 bg-bone/70 p-5 lg:col-span-4">
              <span className="font-mono text-[9px] tracking-[0.16em] text-coral uppercase font-bold block">
                Parametri di calcolo
              </span>
              <ul className="mt-3 space-y-2.5 font-mono text-[11px] text-ink">
                <li className="flex justify-between border-b border-ink/10 pb-1.5">
                  <span className="text-ink/60">Dipendenti totali:</span>
                  <span className="font-bold">50 persone</span>
                </li>
                <li className="flex justify-between border-b border-ink/10 pb-1.5">
                  <span className="text-ink/60">Consumatori (30%):</span>
                  <span className="font-bold">15 persone</span>
                </li>
                <li className="flex justify-between border-b border-ink/10 pb-1.5">
                  <span className="text-ink/60">Consumo medio:</span>
                  <span className="font-bold">2 caffè/giorno</span>
                </li>
                <li className="flex justify-between border-b border-ink/10 pb-1.5">
                  <span className="text-ink/60">Giorni lavorativi:</span>
                  <span className="font-bold">220 giorni/anno</span>
                </li>
                <li className="mt-3 pt-2 border-t-2 border-ink flex justify-between text-[12px]">
                  <span className="font-bold text-coral">Totale Annuo:</span>
                  <span className="font-black text-ink">6.600 erogazioni</span>
                </li>
              </ul>
              <div className="mt-4 font-mono text-[8.5px] text-ink/50 uppercase">
                Formula: 15 addetti × 2 erogazioni × 220 gg
              </div>
            </div>

            {/* Risultati generati a triplice rendimento */}
            <div className="grid gap-3 sm:grid-cols-3 lg:col-span-8">
              {/* Risultato 1 */}
              <div className="border-2 border-coral bg-paper p-4 shadow-[4px_4px_0_rgba(237,111,92,0.25)]">
                <span className="font-mono text-[8.5px] tracking-[0.16em] text-coral uppercase font-bold block">
                  Risultato 01 · Esperienze
                </span>
                <p className="mt-1 font-mono text-[28px] font-black text-coral leading-none">
                  33
                </p>
                <p className="mt-1 text-[12.5px] font-bold text-ink uppercase tracking-tight">
                  Biglietti Omaggio / anno
                </p>
                <p className="mt-2 text-[11px] leading-relaxed text-inksoft/80 font-sans">
                  Calcolo: (6.600 / 1.000) × 5. Copre tutti i consumatori assidui con più di 2 ingressi omaggio nei borghi.
                </p>
              </div>

              {/* Risultato 2 */}
              <div className="border border-ink/25 bg-paper p-4">
                <span className="font-mono text-[8.5px] tracking-[0.16em] text-ink/50 uppercase font-bold block">
                  Risultato 02 · Borsellino
                </span>
                <p className="mt-1 font-mono text-[28px] font-black text-ink leading-none">
                  66 pt
                </p>
                <p className="mt-1 text-[12.5px] font-bold text-ink uppercase tracking-tight">
                  Livello Best Practice
                </p>
                <p className="mt-2 text-[11px] leading-relaxed text-inksoft/80 font-sans">
                  Calcolo: 6.600 / 100. Supera la soglia di 50 pt: sconti sul paniere Km 0, voto raddoppiato per il team e rassegna stampa.
                </p>
              </div>

              {/* Risultato 3 */}
              <div className="border border-ink/25 bg-paper p-4">
                <span className="font-mono text-[8.5px] tracking-[0.16em] text-ink/50 uppercase font-bold block">
                  Risultato 03 · Logistica
                </span>
                <p className="mt-1 font-mono text-[24px] font-black text-ink leading-none">
                  ~1.000 km
                </p>
                <p className="mt-1 text-[12.5px] font-bold text-ink uppercase tracking-tight">
                  Spedizioni Evitate
                </p>
                <p className="mt-2 text-[11px] leading-relaxed text-inksoft/80 font-sans">
                  Sinergia flotta: 12-24 spedizioni evitate con un risparmio stimato di 200–350 kg di CO₂.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Box conclusivo di sintesi */}
        <div className="mt-10 border-t-2 border-ink pt-6">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center">
              <Stamp
                label="architettura incentivi · loyalty framework · borsellino · "
                sub={"valore\ntrasparente"}
                size={84}
                tone="coral"
                className="shrink-0"
              />
              <div className="ml-[10mm]">
                <p className="font-mono text-[9px] tracking-[0.16em] text-coral uppercase font-bold">
                  Sintesi di Governance
                </p>
                <p className="mt-1 text-[13.5px] font-bold text-ink">
                  Una meccanica chiara, modulare e verificabile per ogni ordine di fornitura.
                </p>
                <p className="font-mono text-[8.5px] text-ink/50 uppercase mt-0.5">
                  Nessun costo nascosto · Erogazione a carico Startup · Impatto tracciato
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="btn-sweep border border-ink bg-ink px-5 py-2.5 font-mono text-[10px] font-bold tracking-[0.14em] text-bone uppercase hover:border-coral hover:bg-coral cursor-pointer"
            >
              Ho compreso · Chiudi scheda
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-wrap items-center justify-between border-t border-ink/15 pt-3 font-mono text-[8.5px] tracking-[0.12em] text-ink/45 uppercase">
          <span>Programma a cura della Startup Innovativa GIORGI&amp;CO. S.R.L.</span>
          <span>Premi [ESC] per chiudere</span>
        </div>
      </div>
    </div>
  );
}
