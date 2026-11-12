import { useEffect } from "react";
import { LiveDot, Tag } from "@/components/ui";

export function SocialImpactIndexModal({
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
      aria-label="Standard Tecnico di Calcolo: Social Impact Index (SII-100)"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/80 p-3 backdrop-blur-md sm:p-5 md:p-8"
      onClick={onClose}
    >
      {/* Scheda tecnica stile Reporting Standard ISO / Audit */}
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

        {/* Intestazione tecnica scheda di reporting */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink pb-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <Tag tone="coral">Standard Tecnico Metrica</Tag>
            <span className="font-mono text-[10px] tracking-[0.18em] text-ink/60 uppercase">
              Spec. SII-100 · Versione 2.6
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 font-mono text-[9px] tracking-[0.14em] text-ink/50 uppercase sm:flex">
              <LiveDot /> Disciplina di Calcolo e Reporting
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

        {/* Hero della Scheda Standard */}
        <div className="mt-6 border-b border-dashed border-ink/20 pb-6">
          <p className="font-mono text-[9.5px] tracking-[0.24em] text-coral uppercase font-bold">
            Metodologia di misurazione quantitativa dell'impatto d'impresa
          </p>
          <h2 className="mt-2 text-[clamp(1.6rem,3.2vw,2.4rem)] leading-[1.04] font-black tracking-[-0.035em] uppercase text-ink">
            Social Impact Index (SII-100)
            <br />
            <span className="font-editorial text-[0.92em] font-medium tracking-[-0.02em] text-coral normal-case italic">
              Definizione formale, formulazione matematica e scala di rating.
            </span>
          </h2>

          <p className="mt-4 text-[14px] leading-relaxed text-inksoft/90 md:text-[15px]">
            Il <strong>Social Impact Index (SII)</strong> è un indice sintetico normalizzato in scala continua da 10 a 100 punti.
            Misura in modo rigoroso, verificabile e non manipolabile la densità di valore condiviso generata dai presidi OCS e Vending
            di un'impresa. La formula garantisce <strong>stretta monotonicità</strong>: ogni incremento di penetrazione del personale,
            ogni erogazione aggiuntiva e ogni chilometro logistico evitato accrescono il punteggio in modo trasparente e matematicamente stabile.
          </p>
        </div>

        {/* EQUAZIONE GENERALE DI SINTESI (Formula Principale) */}
        <div className="mt-8">
          <div className="flex items-center justify-between border-b border-ink/15 pb-2 font-mono text-[9px] tracking-[0.16em] text-ink/60 uppercase">
            <span className="font-bold text-ink">Equazione di Composizione Globale</span>
            <span className="text-coral font-bold">Formula SII-TOT</span>
          </div>

          <div className="mt-3 border-2 border-ink bg-bone p-5 shadow-[4px_4px_0_rgba(21,20,15,0.08)]">
            <div className="font-mono text-center">
              <p className="text-[10px] tracking-[0.18em] text-coral uppercase font-bold mb-2">
                Funzione Bounded su 4 Dimensioni Ortogonali:
              </p>
              <div className="inline-block bg-paper border border-ink/20 px-4 py-3 text-[14px] sm:text-[16px] font-black tracking-tight text-ink">
                SII = min(100, max(10, S_adozione + S_consumo + S_logistica + S_infrastruttura + S_network))
              </div>
              <p className="mt-3 text-[10px] text-ink/60 tracking-[0.12em] uppercase">
                Dominio: SII ∈ [10, 100] · Nessun parametro a denominatore variabile (assenza di diluizione)
              </p>
            </div>
          </div>
        </div>

        {/* I 4 PILASTRI MATEMATICI DETTAGLIATI */}
        <div className="mt-8 space-y-6">
          <p className="font-mono text-[10px] tracking-[0.2em] text-ink/50 uppercase font-bold">
            Specifiche analitiche dei 4 coefficienti di calcolo
          </p>

          {/* Pilastro 1 */}
          <div className="border border-ink/20 bg-bone/40 p-4 transition-all hover:border-coral hover:bg-bone">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/10 pb-2">
              <span className="font-mono text-[10px] font-bold text-coral uppercase tracking-[0.16em]">
                Coefficiente 1 · S_comunità &amp; Engagement ∈ [0, 30] pt
              </span>
              <span className="font-mono text-[8.5px] uppercase text-ink/50">Peso ponderale: 30%</span>
            </div>
            <div className="mt-3 grid gap-3 md:grid-cols-12 md:items-center">
              <div className="md:col-span-5 bg-paper border border-ink/15 p-3 text-center font-mono">
                <span className="block text-[8.5px] text-ink/50 uppercase tracking-[0.14em]">Formulazione Analitica</span>
                <span className="mt-1 block text-[12.5px] font-bold text-ink">
                  S_penetrazione = (Penetrazione% / 100) × 20
                </span>
                <span className="mt-0.5 block text-[11.5px] font-bold text-coral">
                  S_scala = 2 + min(8, (Dipendenti / 500) × 8)
                </span>
                <span className="mt-1 block text-[8px] text-coral uppercase font-bold">
                  Strettamente Monotonico: dS/dp &gt; 0 e dS/d(dip) &ge; 0
                </span>
              </div>
              <div className="md:col-span-7 text-[12px] leading-relaxed text-inksoft/85 font-sans">
                <strong>Significato metodologico:</strong> Valuta l'engagement del personale e la scala della popolazione aziendale coinvolta.
                All'aumentare della percentuale di adesione dei collaboratori e dell'organico della sede, il punteggio cresce sempre,
                garantendo che ogni persona ingaggiata aggiunga valore positivo all'indice e non possa mai ridurlo.
              </div>
            </div>
          </div>

          {/* Pilastro 2 */}
          <div className="border border-ink/20 bg-bone/40 p-4 transition-all hover:border-coral hover:bg-bone">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/10 pb-2">
              <span className="font-mono text-[10px] font-bold text-coral uppercase tracking-[0.16em]">
                Coefficiente 2 · S_consumo ∈ [0, 25] pt
              </span>
              <span className="font-mono text-[8.5px] uppercase text-ink/50">Peso ponderale: 25%</span>
            </div>
            <div className="mt-3 grid gap-3 md:grid-cols-12 md:items-center">
              <div className="md:col-span-5 bg-paper border border-ink/15 p-3 text-center font-mono">
                <span className="block text-[8.5px] text-ink/50 uppercase tracking-[0.14em]">Formulazione Analitica</span>
                <span className="mt-1 block text-[13px] font-bold text-ink">
                  S_consumo = min(25, (Caffè_giorno / 4) × 25)
                </span>
                <span className="mt-1 block text-[8px] text-ink/60 uppercase">
                  Saturazione a 4 caffè/giorno per addetto
                </span>
              </div>
              <div className="md:col-span-7 text-[12px] leading-relaxed text-inksoft/85 font-sans">
                <strong>Significato metodologico:</strong> Quantifica l'intensità delle erogazioni giornaliere pro-capite.
                Consumi più elevati alimentano direttamente il Borsellino Aziendale e la generazione di titoli
                d'accesso omaggio per i festival dei borghi, raggiungendo il massimale di 25 punti per consumi ordinari intensivi.
              </div>
            </div>
          </div>

          {/* Pilastro 3 */}
          <div className="border border-ink/20 bg-bone/40 p-4 transition-all hover:border-coral hover:bg-bone">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/10 pb-2">
              <span className="font-mono text-[10px] font-bold text-coral uppercase tracking-[0.16em]">
                Coefficiente 3 · S_logistica ∈ [0, 25] pt
              </span>
              <span className="font-mono text-[8.5px] uppercase text-ink/50">Peso ponderale: 25%</span>
            </div>
            <div className="mt-3 grid gap-3 md:grid-cols-12 md:items-center">
              <div className="md:col-span-5 bg-paper border border-ink/15 p-3 text-center font-mono">
                <span className="block text-[8.5px] text-ink/50 uppercase tracking-[0.14em]">Formulazione Analitica</span>
                <span className="mt-1 block text-[12.5px] font-bold text-ink">
                  S_logistica = 10 + min(15, (Distanza_km / 70) × 15)
                </span>
                <span className="mt-1 block text-[8px] text-coral uppercase font-bold">
                  Valido per Presidi Attivi &gt; 0 (L. 61/2022)
                </span>
              </div>
              <div className="md:col-span-7 text-[12px] leading-relaxed text-inksoft/85 font-sans">
                <strong>Significato metodologico:</strong> Misura la decarbonizzazione logistica certificata (L. 61/2022).
                L'adesione alla flotta combinata conferisce 10 punti base (spedizioni dedicate azzerate); la distanza del fornitore locale
                nel raggio regionale assegna fino a 15 punti addizionali, proporzionali ai chilometri effettivi tolti dalla viabilità.
              </div>
            </div>
          </div>

          {/* Pilastro 4 */}
          <div className="border border-ink/20 bg-bone/40 p-4 transition-all hover:border-coral hover:bg-bone">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/10 pb-2">
              <span className="font-mono text-[10px] font-bold text-coral uppercase tracking-[0.16em]">
                Coefficiente 4 · S_infrastruttura &amp; Presidio Integrato ∈ [0, 20] pt
              </span>
              <span className="font-mono text-[8.5px] uppercase text-ink/50">Peso ponderale: 20%</span>
            </div>
            <div className="mt-3 grid gap-3 md:grid-cols-12 md:items-center">
              <div className="md:col-span-5 bg-paper border border-ink/15 p-3 text-center font-mono">
                <span className="block text-[8.5px] text-ink/50 uppercase tracking-[0.14em]">Formulazione Analitica Normalizzata</span>
                <span className="mt-1 block text-[12px] font-bold text-ink">
                  S_infra = 14 + min(6, (Presidi - 2) × 1.5) [Duale]
                </span>
                <span className="mt-0.5 block text-[10.5px] text-ink/75">
                  8 + min(5, (Presidi - 1) × 1.5) [Singolo]
                </span>
                <span className="mt-1 block text-[8px] text-coral uppercase font-bold">
                  Indice normalizzato e invariante per singola impresa
                </span>
              </div>
              <div className="md:col-span-7 text-[12px] leading-relaxed text-inksoft/85 font-sans">
                <strong>Significato metodologico:</strong> Valuta l'ampiezza dell'infrastruttura coperta nella sede (uffici e stabilimento).
                L'indice è pienamente normalizzato per singola impresa: misura l'effettiva integrazione dei canali di fornitura garantendo
                piena comparabilità oggettiva tra piccole, medie e grandi organizzazioni, a prescindere dalla scala del portafoglio target aggregato.
              </div>
            </div>
          </div>
        </div>

        {/* TABELLA DI MAPPATURA RATING & CLASSI DI IMPATTO */}
        <div className="mt-8 border-t border-ink/20 pt-6">
          <p className="font-mono text-[10px] tracking-[0.2em] text-ink/50 uppercase font-bold mb-3">
            Scala di Rating, Intervalli di Confidenza e Qualificazione
          </p>

          <div className="overflow-x-auto border border-ink/20">
            <table className="w-full text-left font-mono text-[11px]">
              <thead className="border-b border-ink/25 bg-ink text-bone text-[9px] uppercase tracking-[0.14em]">
                <tr>
                  <th className="p-2.5">Punteggio (SII)</th>
                  <th className="p-2.5">Rating</th>
                  <th className="p-2.5">Classe di Riconoscimento</th>
                  <th className="p-2.5">Caratteristiche di Rendicontazione</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10 bg-paper">
                <tr className="hover:bg-bone/60 transition-colors">
                  <td className="p-2.5 font-bold text-coral">82 – 100</td>
                  <td className="p-2.5 font-bold text-coral">A++</td>
                  <td className="p-2.5 font-semibold text-ink">Best Practice Territoriale</td>
                  <td className="p-2.5 text-inksoft/85 font-sans text-[11px]">
                    Main Partner Aree Interne; pubblicazione nel Libro Bianco; co-autorialità rassegna stampa regionale.
                  </td>
                </tr>
                <tr className="hover:bg-bone/60 transition-colors">
                  <td className="p-2.5 font-bold text-coral">68 – 81</td>
                  <td className="p-2.5 font-bold text-ink">A+</td>
                  <td className="p-2.5 text-ink">Impatto Condiviso</td>
                  <td className="p-2.5 text-inksoft/85 font-sans text-[11px]">
                    Voto ponderato moltiplicatore x2; convenzioni ricettive borghi; attestazione con marcatura temporale.
                  </td>
                </tr>
                <tr className="hover:bg-bone/60 transition-colors">
                  <td className="p-2.5 font-bold text-coral">54 – 67</td>
                  <td className="p-2.5 font-bold text-ink">A</td>
                  <td className="p-2.5 text-ink">Territorio Attivo</td>
                  <td className="p-2.5 text-inksoft/85 font-sans text-[11px]">
                    Sconti fornitura riacquisto Km 0; kit di comunicazione interna area break; diritto di voto base del team.
                  </td>
                </tr>
                <tr className="hover:bg-bone/60 transition-colors">
                  <td className="p-2.5 font-bold text-coral">40 – 53</td>
                  <td className="p-2.5 font-bold text-ink">BBB+</td>
                  <td className="p-2.5 text-ink">Partecipante Consolidato</td>
                  <td className="p-2.5 text-inksoft/85 font-sans text-[11px]">
                    Presidi OCS operativi con primi pacchetti di titoli omaggio sbloccati per i collaboratori.
                  </td>
                </tr>
                <tr className="hover:bg-bone/60 transition-colors">
                  <td className="p-2.5 font-bold text-coral">10 – 39</td>
                  <td className="p-2.5 text-ink/75">BBB</td>
                  <td className="p-2.5 text-ink/75">Adesione Iniziale</td>
                  <td className="p-2.5 text-inksoft/85 font-sans text-[11px]">
                    Livello base di avvio presidio: predisposizione tracciamento e configurazione PWA.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Box di sintesi e chiusura */}
        <div className="mt-8 border-t-2 border-ink pt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-[9px] tracking-[0.14em] text-ink/60 uppercase">
            <span className="block font-bold text-ink">Standard Proprietario di Rendicontazione Territoriale</span>
            Elaborato da GIORGI&amp;CO. S.R.L. · Verificabilità dei dati primaria
          </div>
          <button
            type="button"
            onClick={onClose}
            className="btn-sweep border border-ink bg-ink px-5 py-2.5 font-mono text-[10px] font-bold tracking-[0.14em] text-bone uppercase hover:border-coral hover:bg-coral cursor-pointer"
          >
            Chiudi specifica
          </button>
        </div>

        {/* Footer */}
        <div className="mt-5 flex flex-wrap items-center justify-between border-t border-ink/15 pt-2.5 font-mono text-[8.5px] tracking-[0.12em] text-ink/45 uppercase">
          <span>Riferimento Documentale: STD-SII-2026-REV2</span>
          <span>Premi [ESC] per chiudere</span>
        </div>
      </div>
    </div>
  );
}

