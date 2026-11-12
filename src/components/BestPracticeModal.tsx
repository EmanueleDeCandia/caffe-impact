import { useEffect } from "react";
import { LiveDot, Stamp, Tag } from "@/components/ui";

export function BestPracticeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
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
      aria-label="Approfondimento Tecnico: La Comunicazione delle Best Practice nelle Relazioni Pubbliche"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/80 p-3 backdrop-blur-md sm:p-5 md:p-8"
      onClick={onClose}
    >
      {/* Scheda a pagina unica (dimensione leggermente più compatta: max-w-4xl ~ 960px) con scroll interno */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto max-h-[92vh] w-full max-w-4xl overflow-y-auto border-2 border-ink bg-paper p-6 shadow-[18px_18px_0_rgba(237,111,92,0.45)] transition-all sm:p-8 md:p-10"
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
            <Tag tone="coral">Dossier Tecnico PR</Tag>
            <span className="font-mono text-[10px] tracking-[0.18em] text-ink/60 uppercase">
              Doc. ICI-DOC-BP-2026
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 font-mono text-[9px] tracking-[0.14em] text-ink/50 uppercase sm:flex">
              <LiveDot /> Public Relations &amp; Public Affairs
            </span>
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

        {/* Hero Monografica della Card */}
        <div className="mt-6 border-b border-dashed border-ink/20 pb-7">
          <p className="font-mono text-[9.5px] tracking-[0.24em] text-coral uppercase font-bold">
            Guida metodologica per imprenditori e dirigenti
          </p>
          <h2 className="mt-3 text-[clamp(1.7rem,3.4vw,2.7rem)] leading-[1.02] font-black tracking-[-0.035em] uppercase text-ink">
            Cos'è davvero una{" "}
            <span className="font-editorial text-[0.92em] font-medium tracking-[-0.02em] text-coral normal-case italic">
              Best Practice
            </span>
            .
            <br />
            E perché vale molto di più di una campagna pubblicitaria.
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-inksoft/90 md:text-[16px]">
            Nelle moderne <strong>Public Relations</strong> e nella disciplina dei <strong>Public Affairs</strong>,
            l'impatto reale di un'impresa non si esaurisce in una tabella contabile né in slogan autoreferenziali.
            Diventa un asset di <strong>reputazione, credibilità e leadership d'opinione (Thought Leadership)</strong> quando
            viene formalizzato come <strong>Best Practice</strong>: un caso studio documentato, ripetibile e verificabile
            che dimostra come l'azienda abbia risolto un problema comune (spreco di risorse, spopolamento delle aree interne,
            impatto logistico) generando un beneficio tangibile per il territorio.
          </p>
        </div>

        {/* 1. Schema Comparativo: Pubblicità vs Bilancio Formale vs Best Practice */}
        <div className="mt-8">
          <p className="font-mono text-[10px] tracking-[0.2em] text-ink/50 uppercase font-bold mb-3">
            01 · I tre livelli della comunicazione d'impresa
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="border border-ink/20 bg-bone/50 p-4">
              <span className="font-mono text-[9px] tracking-[0.16em] text-ink/50 uppercase block">Livello 1</span>
              <p className="mt-1 font-bold text-[13px] uppercase tracking-tight text-ink">Pubblicità (Paid Media)</p>
              <p className="mt-2 text-[12px] leading-relaxed text-inksoft/75">
                Spazio a pagamento su giornali o cartelloni. È costosa, effimera e percepita dal pubblico come autoreferenziale.
              </p>
              <div className="mt-3 font-mono text-[8.5px] text-coral uppercase">Credibilità: Bassa</div>
            </div>

            <div className="border border-ink/20 bg-bone/50 p-4">
              <span className="font-mono text-[9px] tracking-[0.16em] text-ink/50 uppercase block">Livello 2</span>
              <p className="mt-1 font-bold text-[13px] uppercase tracking-tight text-ink">Bilancio Formale</p>
              <p className="mt-2 text-[12px] leading-relaxed text-inksoft/75">
                Tabelle burocratiche di indicatori non finanziari. Viene archiviato per gli audit, ma non viene letto dal mercato B2B.
              </p>
              <div className="mt-3 font-mono text-[8.5px] text-ink/60 uppercase">Efficacia commerciale: Minima</div>
            </div>

            <div className="border-2 border-coral bg-bone p-4 shadow-[4px_4px_0_rgba(237,111,92,0.3)]">
              <span className="font-mono text-[9px] tracking-[0.16em] text-coral uppercase font-bold block">Livello 3 · Eccellenza</span>
              <p className="mt-1 font-bold text-[13px] uppercase tracking-tight text-coral">Best Practice (Earned Media)</p>
              <p className="mt-2 text-[12px] leading-relaxed text-inksoft/90">
                Caso studio documentato e verificabile. Giornalisti, sindaci e partner citano l'impresa spontaneamente come modello positivo.
              </p>
              <div className="mt-3 font-mono text-[8.5px] font-bold text-coral uppercase">Valore reputazionale: Massimo</div>
            </div>
          </div>
        </div>

        {/* 2. Disegno Geometrico Vettoriale: L'Architettura della Reputazione */}
        <div className="mt-8 border border-ink/20 bg-bone/70 p-5">
          <div className="flex items-center justify-between border-b border-ink/15 pb-2 font-mono text-[9px] tracking-[0.16em] text-ink/60 uppercase">
            <span className="font-bold text-ink">SCHEMA TECNICO PR · LA CATENA DI VALORIZZAZIONE</span>
            <span className="text-coral font-bold">FIG. BP-01 · DALL'AZIONE ALLA LEADERSHIP</span>
          </div>

          <svg viewBox="0 0 540 180" className="mt-3 w-full" fill="none">
            <defs>
              <pattern id="grid-bp" width="18" height="18" patternUnits="userSpaceOnUse">
                <path d="M 18 0 L 0 0 0 18" fill="none" stroke="rgba(21,20,15,0.06)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="540" height="180" fill="url(#grid-bp)" />

            {/* Fasi orizzontali collegate */}
            {/* Step 1 */}
            <g transform="translate(10, 45)">
              <rect width="115" height="90" fill="#efe7d2" stroke="#15140f" strokeWidth="1.5" />
              <rect width="115" height="18" fill="#15140f" />
              <text x="57" y="12" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="700" fill="#efe7d2" textAnchor="middle">01 · AZIONE SUL CAMPO</text>
              <text x="57" y="42" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700" fill="#15140f" textAnchor="middle">CONSUMI + KM 0</text>
              <text x="57" y="58" font-family="'JetBrains Mono', monospace" font-size="7" fill="#15140f" opacity="0.7" textAnchor="middle">Caffè d'eccellenza</text>
              <text x="57" y="70" font-family="'JetBrains Mono', monospace" font-size="7" fill="#15140f" opacity="0.7" textAnchor="middle">Paniere entro 70 km</text>
            </g>

            {/* Freccia 1 */}
            <path d="M125 90 L145 90" stroke="#ed6f5c" strokeWidth="2" strokeDasharray="3 3" />
            <polygon points="145,87 153,90 145,93" fill="#ed6f5c" />

            {/* Step 2 */}
            <g transform="translate(155, 45)">
              <rect width="115" height="90" fill="#f7f1de" stroke="#15140f" strokeWidth="1.5" />
              <rect width="115" height="18" fill="#ed6f5c" />
              <text x="57" y="12" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="700" fill="#efe7d2" textAnchor="middle">02 · DATI VERIFICATI</text>
              <text x="57" y="42" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700" fill="#15140f" textAnchor="middle">HASH SHA-256</text>
              <text x="57" y="58" font-family="'JetBrains Mono', monospace" font-size="7" fill="#15140f" opacity="0.7" textAnchor="middle">Km tolti da strada</text>
              <text x="57" y="70" font-family="'JetBrains Mono', monospace" font-size="7" fill="#15140f" opacity="0.7" textAnchor="middle">Fondi arti dal vivo</text>
            </g>

            {/* Freccia 2 */}
            <path d="M270 90 L290 90" stroke="#ed6f5c" strokeWidth="2" strokeDasharray="3 3" />
            <polygon points="290,87 298,90 290,93" fill="#ed6f5c" />

            {/* Step 3 */}
            <g transform="translate(300, 45)">
              <rect width="115" height="90" fill="#efe7d2" stroke="#15140f" strokeWidth="1.5" />
              <rect width="115" height="18" fill="#15140f" />
              <text x="57" y="12" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="700" fill="#efe7d2" textAnchor="middle">03 · LIBRO BIANCO</text>
              <text x="57" y="42" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700" fill="#15140f" textAnchor="middle">CO-AUTORE PR</text>
              <text x="57" y="58" font-family="'JetBrains Mono', monospace" font-size="7" fill="#15140f" opacity="0.7" textAnchor="middle">Diffusione Confindustria</text>
              <text x="57" y="70" font-family="'JetBrains Mono', monospace" font-size="7" fill="#15140f" opacity="0.7" textAnchor="middle">Rassegna Stampa</text>
            </g>

            {/* Freccia 3 */}
            <path d="M415 90 L435 90" stroke="#ed6f5c" strokeWidth="2.5" />
            <polygon points="435,86 445,90 435,94" fill="#ed6f5c" />

            {/* Step 4: Risultato */}
            <g transform="translate(445, 38)">
              <rect width="85" height="104" fill="#f7f1de" stroke="#ed6f5c" strokeWidth="2" />
              <text x="42" y="24" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="800" fill="#ed6f5c" textAnchor="middle">REPUTAZIONE</text>
              <text x="42" y="38" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#15140f" textAnchor="middle">LEADERSHIP</text>
              <line x1="12" y1="46" x2="72" y2="46" stroke="#ed6f5c" strokeWidth="1" opacity="0.4" />
              <text x="42" y="62" font-family="'JetBrains Mono', monospace" font-size="6.5" fill="#15140f" opacity="0.75" textAnchor="middle">Dialogo Istituzioni</text>
              <text x="42" y="74" font-family="'JetBrains Mono', monospace" font-size="6.5" fill="#15140f" opacity="0.75" textAnchor="middle">Nuovi Clienti B2B</text>
              <text x="42" y="86" font-family="'JetBrains Mono', monospace" font-size="6.5" fill="#15140f" opacity="0.75" textAnchor="middle">Fiducia Stakeholder</text>
            </g>
          </svg>
        </div>

        {/* 3. I 4 Strumenti Operativi di Valorizzazione */}
        <div className="mt-8 space-y-4">
          <p className="font-mono text-[10px] tracking-[0.2em] text-ink/50 uppercase font-bold">
            02 · I 4 strumenti operativi a disposizione dell'impresa
          </p>

          {/* Strumento 1 */}
          <div className="border border-ink/20 bg-bone/40 p-4 transition-all hover:border-coral hover:bg-bone">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-mono text-[12px] font-bold text-coral uppercase">
                1. Il Modello del Caso Studio Strutturato (Problem → Solution → Outcome)
              </h3>
              <Tag className="text-[8px] py-0.5">Strumento B2B</Tag>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-inksoft/85">
              Nelle PR professionali una storia funziona solo se è misurabile. La Startup elabora una scheda documentale pronta all'uso che descrive: lo <strong>Scenario</strong> (l'impresa converte i consumi ordinari del personale), l'<strong>Azione</strong> (adozione di caffè d'alta gamma e paniere a Km 0 a zero spedizioni dedicate) e l'<strong>Esito</strong> (furgoni tolti dalla strada, collaboratori coinvolti nei borghi, produttori locali sostenuti). L'azienda può riutilizzare questa scheda su LinkedIn, nel proprio profilo aziendale e nelle presentazioni commerciali verso nuovi clienti.
            </p>
          </div>

          {/* Strumento 2 */}
          <div className="border border-ink/20 bg-bone/40 p-4 transition-all hover:border-coral hover:bg-bone">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-mono text-[12px] font-bold text-coral uppercase">
                2. Il Libro Bianco (White Paper) Territoriale delle Aree Interne
              </h3>
              <Tag className="text-[8px] py-0.5">Thought Leadership</Tag>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-inksoft/85">
              Annualmente la Startup raccoglie i dati e le esperienze di tutte le imprese aderenti all'interno di un <strong>Libro Bianco sulla Cooperazione d'Impatto nelle Marche</strong>. Il documento viene stampato e inviato ai vertici delle associazioni di categoria (Confindustria, CNA, Confcommercio), agli assessorati regionali e alle testate giornalistiche economiche. L'impresa aderente figura come <strong>co-autrice e testimone d'eccellenza</strong>, conquistando un'autorevolezza che nessuna campagna pubblicitaria a pagamento potrebbe conferire.
            </p>
          </div>

          {/* Strumento 3 */}
          <div className="border border-ink/20 bg-bone/40 p-4 transition-all hover:border-coral hover:bg-bone">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-mono text-[12px] font-bold text-coral uppercase">
                3. Earned Media &amp; Rassegna Stampa Qualificata
              </h3>
              <Tag className="text-[8px] py-0.5">Copertura Giornalistica</Tag>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-inksoft/85">
              L'<strong>Earned Media</strong> è la visibilità guadagnata spontaneamente, non comprata con inserzioni pubblicitarie. I comunicati stampa ufficiali dei festival e delle rassegne culturali nei 24 borghi citano l'impresa come <strong>partner territoriale di Best Practice</strong>. Questo genera interviste, citazioni e articoli sulla stampa regionale (quotidiani cartacei, testate online, servizi TV locali), alimentando la rassegna stampa aziendale e la reputazione del marchio.
            </p>
          </div>

          {/* Strumento 4 */}
          <div className="border border-ink/20 bg-bone/40 p-4 transition-all hover:border-coral hover:bg-bone">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-mono text-[12px] font-bold text-coral uppercase">
                4. Advocacy Informale e Dialogo sulle Politiche di Sviluppo
              </h3>
              <Tag className="text-[8px] py-0.5">Public Affairs Pratici</Tag>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-inksoft/85">
              La quasi totalità delle PMI non dispone di uffici o agenzie di lobbying professionale. Spesso il confronto con la pubblica amministrazione si riduce a moduli burocratici o contenziosi. I momenti d'incontro nei borghi, gli aperitivi conviviali pre-spettacolo e le tavole rotonde territoriali rappresentano un <strong>contesto protetto, disteso e informale</strong> dove gli imprenditori possono confrontarsi direttamente con Sindaci, amministratori e colleghi sulle reali priorità del territorio: bandi regionali, incentivi all'occupazione e mobilità nelle Aree Interne.
            </p>
          </div>
        </div>

        {/* Box conclusivo di sintesi */}
        <div className="mt-8 border-t-2 border-ink pt-6">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center">
              <Stamp
                label="best practice · public affairs · relazioni pubbliche · "
                sub={"impatto\nautentico"}
                size={84}
                tone="coral"
                className="shrink-0"
              />
              <div className="ml-[10mm]">
                <p className="font-mono text-[9px] tracking-[0.16em] text-coral uppercase font-bold">
                  Sintesi Strategica
                </p>
                <p className="mt-1 text-[13.5px] font-bold text-ink">
                  Una fornitura caffè che costruisce il capitale immateriale della vostra impresa.
                </p>
                <p className="font-mono text-[8.5px] text-ink/50 uppercase mt-0.5">
                  Nessun greenwashing · Dati primari attestati · Riconoscimento territoriale
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="btn-sweep border border-ink bg-ink px-5 py-2.5 font-mono text-[10px] font-bold tracking-[0.14em] text-bone uppercase hover:border-coral hover:bg-coral"
            >
              Ho compreso · Chiudi scheda
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-wrap items-center justify-between border-t border-ink/15 pt-3 font-mono text-[8.5px] tracking-[0.12em] text-ink/45 uppercase">
          <span>Dossier a cura della Startup Innovativa GIORGI&amp;CO. S.R.L.</span>
          <span>Premi [ESC] per chiudere</span>
        </div>
      </div>
    </div>
  );
}
