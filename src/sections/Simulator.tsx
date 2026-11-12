import { useEffect, useRef, useState, type CSSProperties } from "react";
import { LiveDot, SectionHead, Tag } from "@/components/ui";
import { LoyaltyArchitectureModal } from "@/components/LoyaltyArchitectureModal";
import { SocialImpactIndexModal } from "@/components/SocialImpactIndexModal";
import { MODEL, calcolaImpattoAvanzato, fmt } from "@/lib/data";

/* numero che insegue il valore target con easing: dà vita ai risultati mentre si trascina */
function useSmooth(target: number, stiffness = 0.16) {
  const [v, setV] = useState(target);
  const current = useRef(target);
  useEffect(() => {
    let raf = 0;
    const step = () => {
      const diff = target - current.current;
      if (Math.abs(diff) < 0.6) {
        current.current = target;
        setV(target);
        return;
      }
      current.current += diff * stiffness;
      setV(current.current);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, stiffness]);
  return v;
}

function Dial({
  label,
  unit,
  value,
  min,
  max,
  step,
  onChange,
  hint,
}: {
  label: string;
  unit: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  hint: string;
}) {
  const pct = max > min ? ((value - min) / (max - min)) * 100 : 0;
  return (
    <div className="border-b border-ink/15 py-5 last:border-b-0">
      <div className="flex items-baseline justify-between gap-4">
        <label className="font-mono text-[10px] tracking-[0.22em] text-ink/60 uppercase">{label}</label>
        <p className="flex items-baseline gap-1.5">
          <span className="tabnum text-[clamp(1.5rem,2.8vw,2.1rem)] leading-none font-black tracking-[-0.04em]">
            {value % 1 === 0 ? value : value.toFixed(1)}
          </span>
          <span className="font-mono text-[10px] tracking-[0.14em] text-ink/50 uppercase">{unit}</span>
        </p>
      </div>
      <input
        type="range"
        className="dial mt-3.5"
        style={{ "--fill": `${pct}%` } as CSSProperties}
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={label}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="flex justify-between font-mono text-[9.5px] tracking-[0.12em] text-ink/40 uppercase">
        <span>{min}</span>
        <span className="hidden text-ink/45 sm:inline">{hint}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  suffix,
  prefix,
  decimals = 0,
  big = false,
  sublabel,
}: {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  big?: boolean;
  sublabel?: string;
}) {
  const s = useSmooth(value);
  return (
    <div className="group bg-ink p-4 transition-colors duration-500 hover:bg-inksoft md:p-5">
      <p className="font-mono text-[9px] tracking-[0.18em] text-bone/50 uppercase">{label}</p>
      <p
        className={`tabnum mt-2 leading-none font-black tracking-[-0.045em] text-bone ${big ? "text-[clamp(1.6rem,3.4vw,2.4rem)]" : "text-[clamp(1.3rem,2.4vw,1.8rem)]"
          }`}
      >
        {prefix}
        {s.toLocaleString("it-IT", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}
        <span className="text-coral">{suffix}</span>
      </p>
      {sublabel && (
        <p className="mt-2 font-mono text-[8.5px] tracking-[0.1em] text-bone/40 uppercase">
          {sublabel}
        </p>
      )}
    </div>
  );
}

const PRESETS = [
  { nome: "Presidio OCS Piceno", dip: 60, pet: 35, ocs: 2, vending: 0, caffe: 2, dist: 35 },
  { nome: "Media Impresa Fermana", dip: 280, pet: 40, ocs: 2, vending: 1, caffe: 2.5, dist: 45 },
  { nome: "Multisito Industriale", dip: 850, pet: 45, ocs: 4, vending: 3, caffe: 3, dist: 60 },
];

export default function Simulator() {
  const [dipendenti, setDipendenti] = useState(100);
  const [penetrazionePct, setPenetrazionePct] = useState(20);
  const [presidiOcs, setPresidiOcs] = useState(2);
  const [presidiVending, setPresidiVending] = useState(1);
  const [caffeGiorno, setCaffeGiorno] = useState(2);
  const [distanzaKm0, setDistanzaKm0] = useState(50);
  const [showNota, setShowNota] = useState(false);
  const [openLoyaltyModal, setOpenLoyaltyModal] = useState(false);
  const [openSiiModal, setOpenSiiModal] = useState(false);

  // Variabili di portafoglio imprese target (0 - 100)
  const [clientiAttuali, setClientiAttuali] = useState(50);
  const [clientiNuovi, setClientiNuovi] = useState(30);
  const [clientiWinBack, setClientiWinBack] = useState(70);

  const r = calcolaImpattoAvanzato({
    presidiOcs,
    presidiVending,
    dipendenti,
    penetrazionePct,
    caffeGiorno,
    distanzaKm0,
    clientiAttuali,
    clientiNuovi,
    clientiWinBack,
  });

  const scaricaCsv = () => {
    const now = new Date().toISOString();
    const rows = [
      ["Illiria Coffee Impact — Stima di Impatto e Valore Condiviso"],
      ["Generato il", now],
      ["Standard di riferimento", "CSRD ESRS E1 / GRI 305-1 / Legge 17 maggio 2022 n. 61"],
      [],
      ["Parametri di input", "Valore"],
      ["Dipendenti totali", dipendenti],
      ["Penetrazione consumatori effettivi (%)", `${penetrazionePct}%`],
      ["Consumatori attivi stimati", r.consumatoriAttivi],
      ["Presidi OCS (uffici)", presidiOcs],
      ["Distributori Automatici (Vending)", presidiVending],
      ["Caffè al giorno pro capite", caffeGiorno],
      ["Distanza media produttore a Km 0", `${distanzaKm0} km`],
      [],
      ["Indicatore", "Valore annuale", "Unità"],
      ["Erogazioni tracciate", r.erogazioni, "unità/anno"],
      ["Km di trasporto evitati", r.kmEvitati, "km/anno"],
      ["CO2 evitata", r.co2Evitata, "kg/anno"],
      ["Biglietti Omaggio Performing Art", r.biglietti, "biglietti"],
      ["Punti Impatto Borsellino", r.puntiBorsellino, "punti"],
      ["Valore Biglietti Omaggio", r.valoreBiglietti, "EUR"],
      ["Valore Servizi di Comunicazione Startup", r.valoreServizi, "EUR"],
      ["Indotto Economico Locale Stimato (x2,4)", r.indottoLocale, "EUR"],
      ["Valore Complessivo Generato", r.valoreTotale, "EUR"],
      ["Livello Tiering Borsellino", r.livelloTier, "livello"],
      ["Social Impact Index", `${r.indice}/100 (${r.rating})`, "indice"],
      [],
      ["Ipotesi di modello", "Valore"],
      ["Giorni lavorativi annui", MODEL.giorniLavorativi],
      ["Consegne annuali paniere Km 0", MODEL.consegneKm0Anno],
      ["Fattore emissivo veicoli commerciali", `${MODEL.kgCo2PerKm} kg CO2/km`],
      ["Valore nominale biglietto", `${MODEL.valoreBigliettoEuro} EUR`],
      ["Valore indicativo servizi Startup per impresa", `${MODEL.valoreServiziStartupEuro} EUR/anno`],
      ["Moltiplicatore economico territoriale", `${MODEL.moltiplicatoreIndottoLocale}x`],
    ];
    const csv = rows.map((row) => row.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(";")).join("\r\n");
    const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `illiria-coffee-impact_stima_${dipendenti}dip.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const portaInAdesione = () => {
    window.dispatchEvent(
      new CustomEvent("ici:preset", {
        detail: {
          dipendenti,
          presidi: presidiOcs + presidiVending,
          caffeGiorno,
          impatto: {
            erogazioni: r.erogazioni,
            km: r.kmEvitati,
            co2: r.co2Evitata,
            welfare: r.valoreTotale,
            crediti: r.biglietti,
            indice: r.indice,
            rating: r.rating,
          },
        },
      }),
    );
    document.getElementById("adesione")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="simulatore" className="relative bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          numeral="II"
          kicker="Simulatore di presidio & valore condiviso"
          title={
            <>
              Quanto vale, per voi,{" "}
              <span className="font-editorial font-medium text-coral normal-case italic">un anno</span> di consumi
              tracciati?
            </>
          }
          lead="Configurate i parametri reali della vostra sede: presidi OCS, distributori, tasso di consumo effettivo e raggio dei prodotti a Km 0. I risultati alimentano il Borsellino Aziendale con Biglietti Omaggio, Punti Impatto e dataset per il reporting ESG."
          aside={
            <div className="mt-2 border border-ink/25 bg-bone p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-[9.5px] tracking-[0.18em] text-ink/50 uppercase">Parametri di calcolo</p>
                <button
                  type="button"
                  onClick={() => setOpenSiiModal(true)}
                  className="group relative inline-flex items-center gap-1.5 border-2 border-ink bg-[#ffe600] px-2.5 py-1 font-mono text-[9.5px] font-black uppercase tracking-[0.14em] text-ink shadow-[3px_3px_0_#15140f] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#fff04d] hover:shadow-[4px_4px_0_#ed6f5c] cursor-pointer"
                  title="Apri Specifica Tecnica Social Impact Index SII-100"
                >
                  <span className="h-1.5 w-1.5 bg-coral" />
                  <span>SII-100 ↗</span>
                </button>
              </div>
              <ul className="mt-3 space-y-1.5 font-mono text-[10px] leading-relaxed text-inksoft/80">
                <li>{MODEL.giorniLavorativi} giorni lavorativi effettivi / anno</li>
                <li>1.000 erogazioni = 5 Biglietti Omaggio (@ 15 €)</li>
                <li>100 erogazioni = 1 Punto Impatto Borsellino</li>
                <li>Km evitati per la Filiera Locale: da 50 a 100 km per consegna</li>
                <li>Indotto economico locale: moltiplicatore ×2,4</li>
              </ul>
            </div>
          }
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* controlli */}
          <div data-reveal="left" className="lg:col-span-5">
            <div className="reg-frame border border-ink/25 bg-bone p-5 md:p-7">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[13px] font-extrabold tracking-[0.02em] uppercase">Configurazione Presidio</p>
                <span className="flex items-center gap-2 font-mono text-[9.5px] tracking-[0.16em] text-coral uppercase">
                  <LiveDot /> calcolo live
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {PRESETS.map((p) => {
                  const attivo =
                    dipendenti === p.dip &&
                    penetrazionePct === p.pet &&
                    presidiOcs === p.ocs &&
                    presidiVending === p.vending;
                  return (
                    <button
                      key={p.nome}
                      type="button"
                      onClick={() => {
                        setDipendenti(p.dip);
                        setPenetrazionePct(p.pet);
                        setPresidiOcs(p.ocs);
                        setPresidiVending(p.vending);
                        setCaffeGiorno(p.caffe);
                        setDistanzaKm0(p.dist);
                      }}
                      className={`border px-3 py-1.5 font-mono text-[9px] tracking-[0.14em] uppercase transition-all duration-300 ${attivo
                        ? "border-coral bg-coral text-bone"
                        : "border-ink/30 text-ink/65 hover:-translate-y-0.5 hover:border-ink hover:bg-paper"
                        }`}
                    >
                      {p.nome}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4">
                <Dial
                  label="Dipendenti totali della sede"
                  unit="persone"
                  value={dipendenti}
                  min={20}
                  max={3000}
                  step={10}
                  hint="organico complessivo"
                  onChange={setDipendenti}
                />
                <Dial
                  label="Penetrazione consumatori effettivi"
                  unit="%"
                  value={penetrazionePct}
                  min={0}
                  max={100}
                  step={5}
                  hint={`${r.consumatoriAttivi} consumatori attivi stimati`}
                  onChange={setPenetrazionePct}
                />
                <Dial
                  label="Presidi OCS (macchine ufficio)"
                  unit="siti"
                  value={presidiOcs}
                  min={0}
                  max={20}
                  step={1}
                  hint="0 = disattiva OCS"
                  onChange={setPresidiOcs}
                />
                <Dial
                  label="Distributori Automatici (Vending)"
                  unit="presidi"
                  value={presidiVending}
                  min={0}
                  max={15}
                  step={1}
                  hint="0 = disattiva Vending"
                  onChange={setPresidiVending}
                />
                <Dial
                  label="Caffè al giorno per consumatore"
                  unit="erogazioni"
                  value={caffeGiorno}
                  min={1}
                  max={4}
                  step={0.5}
                  hint="media su 220 gg lavorativi"
                  onChange={setCaffeGiorno}
                />
                <Dial
                  label="Distanza Produttore Locale Km 0"
                  unit="km"
                  value={distanzaKm0}
                  min={10}
                  max={70}
                  step={5}
                  hint="ai sensi L. 61/2022 (max 70 km)"
                  onChange={setDistanzaKm0}
                />
              </div>

              {/* confronto logistica dinamico */}
              <div className="mt-6 border-t border-ink/15 pt-5">
                <p className="font-mono text-[9.5px] tracking-[0.18em] text-ink/50 uppercase">
                  Logistica Prodotti a Km 0 (L. 61/2022)
                </p>
                <div className="mt-3 space-y-2.5">
                  <div>
                    <div className="flex items-center justify-between font-mono text-[9px] uppercase text-ink/65">
                      <span>Consegne in proprio Km 0 (a/r)</span>
                      <span className="tabnum font-bold text-ink">{r.kmPerViaggioAr} km / fornitura</span>
                    </div>
                    <div className="mt-1 relative h-2.5 w-full bg-ink/10">
                      <div className="h-full bg-ink/35" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between font-mono text-[9px] uppercase text-coral">
                      <span>Consegne con Sinergie Flotta Illiria</span>
                      <span className="tabnum font-bold text-coral">0 km aggiuntivi</span>
                    </div>
                    <div className="mt-1 relative h-2.5 w-full bg-ink/10">
                      <div className="h-full bg-coral" style={{ width: "2%" }} />
                    </div>
                  </div>
                </div>
                <p className="mt-3 font-mono text-[10px] tracking-[0.12em] text-inksoft/80 uppercase">
                  Percorrenza a/r evitata: <span className="text-coral font-bold">{fmt(r.kmEvitati)} km/anno</span> ({MODEL.consegneKm0Anno} forniture)
                </p>
              </div>
            </div>
          </div>

          {/* risultati */}
          <div data-reveal="right" className="lg:col-span-7">
            {/* Tabella di Strategia Portafoglio Imprese Target (3 colonne x 2 righe) */}
            <div className="border border-ink/25 bg-bone p-5 md:p-6 shadow-[8px_8px_0_rgba(21,20,15,0.06)]">
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink/15 pb-4">
                <div>
                  <p className="font-mono text-[9.5px] tracking-[0.2em] text-coral uppercase font-bold">
                    Portafoglio Imprese Target & Strategia
                  </p>
                  <p className="text-[15px] font-black tracking-[-0.02em] uppercase mt-0.5">
                    Simulazione d'Impatto Collettivo · {r.totaleImpreseTarget} Imprese Coinvolte
                  </p>
                </div>
                <span className="font-mono text-[9.5px] tracking-[0.14em] text-ink/55 uppercase">
                  Impatto scalabile territorio
                </span>
              </div>

              {/* Riga 1: Variabili numeriche da 0 a 100 con slider/input rapido */}
              <div className="mt-4 grid grid-cols-1 gap-px bg-ink/15 sm:grid-cols-3">
                <div className="bg-paper p-3.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.16em] text-ink/60 uppercase font-bold">
                      Clienti Attuali
                    </span>
                    <span className="tabnum text-[18px] font-black text-ink">{clientiAttuali}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={5}
                    value={clientiAttuali}
                    onChange={(e) => setClientiAttuali(Number(e.target.value))}
                    className="dial mt-2 h-1.5 w-full cursor-pointer accent-coral"
                  />
                  <p className="font-mono text-[8px] tracking-[0.1em] text-ink/40 uppercase mt-1">
                    Retention & Upselling OCS
                  </p>
                </div>

                <div className="bg-paper p-3.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.16em] text-coral uppercase font-bold">
                      Nuovi Clienti
                    </span>
                    <span className="tabnum text-[18px] font-black text-coral">{clientiNuovi}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={5}
                    value={clientiNuovi}
                    onChange={(e) => setClientiNuovi(Number(e.target.value))}
                    className="dial mt-2 h-1.5 w-full cursor-pointer accent-coral"
                  />
                  <p className="font-mono text-[8px] tracking-[0.1em] text-ink/40 uppercase mt-1">
                    Acquisizione & Differenziazione
                  </p>
                </div>

                <div className="bg-paper p-3.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.16em] text-ink/60 uppercase font-bold">
                      Clienti Win-Back
                    </span>
                    <span className="tabnum text-[18px] font-black text-ink">{clientiWinBack}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={5}
                    value={clientiWinBack}
                    onChange={(e) => setClientiWinBack(Number(e.target.value))}
                    className="dial mt-2 h-1.5 w-full cursor-pointer accent-coral"
                  />
                  <p className="font-mono text-[8px] tracking-[0.1em] text-ink/40 uppercase mt-1">
                    Riattivazione Piceno e Fermo
                  </p>
                </div>
              </div>

              {/* Riga 2: Spiegazione delle 3 strategie differenziate */}
              <div className="mt-px grid grid-cols-1 gap-px bg-ink/15 sm:grid-cols-3">
                <div className="bg-paper p-3 font-mono text-[9px] leading-relaxed text-inksoft/85">
                  <p className="font-bold text-ink uppercase tracking-[0.08em] mb-1">Strategia Fidelizzazione:</p>
                  Integrazione del paniere a Km 0 e Borsellino con Punti Impatto per votare le rassegne. Nessun costo nascosto, massima differenziazione rispetto ai concorrenti.
                </div>
                <div className="bg-paper p-3 font-mono text-[9px] leading-relaxed text-inksoft/85">
                  <p className="font-bold text-coral uppercase tracking-[0.08em] mb-1">Strategia Acquisizione:</p>
                  Spostamento del posizionamento fuori dalla guerra del prezzo: leva su premi esperienziali nel territorio, pass d'onore ed Earned Media sui media regionali.
                </div>
                <div className="bg-paper p-3 font-mono text-[9px] leading-relaxed text-inksoft/85">
                  <p className="font-bold text-ink uppercase tracking-[0.08em] mb-1">Strategia Win-Back:</p>
                  Riaggancio ad alto valore simbolico di clienti dormienti (focus Ascoli e Fermo) per saturare i percorsi della flotta con inviti VIP e prodotti locali dedicati.
                </div>
              </div>

              {/* Nota Metodologica sulla Normalizzazione dell'Indice e Imprese Target */}
              <div className="mt-3 flex items-start gap-2.5 border border-ink/20 bg-paper p-3 font-mono text-[9px] leading-relaxed text-ink/75">
                <span className="font-bold text-coral uppercase shrink-0">Nota di calcolo:</span>
                <div>
                  Il <strong>Social Impact Index (0–100)</strong> è normalizzato e intrinseco alla <em>singola impresa aderente</em> (misura engagement, consumi, azzeramento viaggi Km 0 e presidi OCS/Vending). I cursori del Portafoglio quantificano l'effetto moltiplicatore scalato sui volumi complessivi di territorio (caffè totali, CO₂, biglietti e indotto). Il rating SII della singola organizzazione è perciò rigorosamente normalizzato e invariante, sia che si analizzi 1 singola impresa sia che si simuli l'intero portafoglio di 100 o più aziende.
                </div>
              </div>
            </div>

            {/* Spazio vuoto e allineamento verso il basso con la tabella Output Principali */}
            <div className="mt-8">
              <div className="flex items-baseline justify-between mb-3 px-1">
                <p className="font-mono text-[9.5px] tracking-[0.2em] text-ink/50 uppercase">
                  Impatto Complessivo Generato ({r.totaleImpreseTarget} Imprese Target)
                </p>
                <span className="font-mono text-[9px] tracking-[0.14em] text-coral uppercase">
                  Valori annui aggregati di portafoglio
                </span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-bone/15 md:grid-cols-3">
                <Metric
                  label="Erogazioni tracciate / anno"
                  value={r.erogazioni}
                  big
                  sublabel={`${r.consumatoriAttivi} consumatori attivi totali`}
                />
                <Metric
                  label="Km di trasporto evitati"
                  value={r.kmEvitati}
                  suffix=" km"
                  big
                  sublabel="consegne dedicate azzerate"
                />
                <Metric
                  label="CO₂ evitata"
                  value={r.co2Evitata}
                  suffix=" kg"
                  big
                  sublabel="0,28 kg CO₂/km su flotta"
                />
                <Metric
                  label="Biglietti Omaggio Performing Art"
                  value={r.biglietti}
                  sublabel="5 biglietti ogni 1.000 consumi"
                />
                <Metric
                  label="Punti Impatto nel Borsellino"
                  value={r.puntiBorsellino}
                  sublabel="1 punto ogni 100 consumi"
                />
                <Metric
                  label="Valore Complessivo Generato"
                  value={r.valoreTotale}
                  prefix="€ "
                  sublabel="esperienze + servizi + indotto"
                />
              </div>
            </div>

            <div className="mt-8 border border-ink/25 bg-bone p-5 md:p-6 shadow-[6px_6px_0_rgba(21,20,15,0.06)]">
              {/* Header Box con Marcatore e Ombra Brutalista */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/15 pb-4 mb-5">
                <div>
                  <p className="font-mono text-[9.5px] tracking-[0.2em] text-ink/60 uppercase font-bold">
                    Rating Rigoroso &amp; Tiering di Sostenibilità
                  </p>
                  <p className="mt-0.5 text-[14px] font-black uppercase tracking-tight text-ink">
                    Social Impact Index &amp; Borsellino Aziendale
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setOpenLoyaltyModal(true)}
                    className="font-mono text-[10px] tracking-[0.14em] text-coral uppercase font-bold hover:underline cursor-pointer flex items-center gap-1"
                  >
                    Borsellino &amp; Tiering ↗
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpenSiiModal(true)}
                    className="group relative inline-flex items-center gap-2.5 border-2 border-ink bg-[#ffe600] px-4 py-2 font-mono text-[11px] md:text-[12px] font-black uppercase tracking-[0.16em] text-ink shadow-[4px_4px_0_#15140f] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#fff04d] hover:shadow-[6px_6px_0_#ed6f5c] active:translate-y-0 active:shadow-[2px_2px_0_#15140f] cursor-pointer"
                  >
                    <span className="h-2 w-2 bg-coral" />
                    <span>SOCIAL IMPACT INDEX SII-100 ↗</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="flex items-baseline gap-3">
                    <span className="tabnum text-[clamp(2.6rem,6.5vw,3.8rem)] leading-none font-black tracking-[-0.05em] text-ink">
                      {r.indice}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.16em] text-ink/50 uppercase">/ 100</span>
                    <span className="border border-coral bg-coral px-3 py-1 text-[13.5px] leading-none font-black text-bone shadow-[2px_2px_0_#15140f]">
                      {r.rating}
                    </span>
                    <span className="font-mono text-[11.5px] font-bold tracking-[0.12em] text-ink uppercase bg-paper border border-ink/20 px-2.5 py-0.5">
                      Tier: {r.livelloTier}
                    </span>
                  </p>
                </div>
                <p className="max-w-[34ch] font-mono text-[10px] leading-relaxed tracking-[0.1em] text-ink/60 uppercase">
                  Valuta engagement del team, km evitati per i produttori locali, punti borsellino e sostegno alle Aree Interne.
                </p>
              </div>

              <div className="mt-5">
                <span className="relative block h-3 w-full border border-ink/25 bg-paper">
                  <span
                    className="absolute inset-y-0 left-0 bg-coral transition-[width] duration-700 ease-out"
                    style={{ width: `${Math.min(100, r.indice)}%` }}
                  />
                  {[40, 54, 68, 82].map((t) => (
                    <span
                      key={t}
                      className="absolute inset-y-0 w-px bg-ink/40"
                      style={{ left: `${t}%` }}
                      title={`Soglia di scatto: ${t} pt`}
                    />
                  ))}
                </span>
                <div className="mt-1.5 flex justify-between font-mono text-[9px] tracking-[0.14em] text-ink/45 uppercase">
                  <span>BBB (&lt;40)</span>
                  <span>A (≥54 Territorio Attivo)</span>
                  <span>A+ (≥68 Impatto Condiviso)</span>
                  <span>A++ (≥82 Main Partner)</span>
                </div>
                <p className="mt-2.5 border-t border-ink/10 pt-2 font-mono text-[8.5px] leading-relaxed text-ink/50 uppercase">
                  Rating normalizzato per singola organizzazione: misura la densità e la qualità del presidio aziendale ed è intrinsecamente indipendente dal numero di imprese target simulate nel portafoglio.
                </p>
              </div>

              {/* ripartizione del valore */}
              <div className="mt-7 border-t border-ink/15 pt-5">
                <p className="font-mono text-[9.5px] tracking-[0.2em] text-ink/50 uppercase">
                  Composizione del valore generato (Esperienze + Comunicazione + Indotto)
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <div className="border-l-2 border-ink pl-3">
                    <p className="tabnum text-[19px] font-extrabold tracking-[-0.03em]">
                      € {fmt(r.valoreBiglietti)}
                    </p>
                    <p className="font-mono text-[9px] tracking-[0.14em] text-ink/50 uppercase">
                      {r.biglietti} Biglietti Omaggio Performing Art nelle Marche (@ 15 €)
                    </p>
                  </div>
                  <div className="border-l-2 border-coral pl-3">
                    <p className="tabnum text-[19px] font-extrabold tracking-[-0.03em]">
                      € {fmt(r.valoreServizi)}
                    </p>
                    <p className="font-mono text-[9px] tracking-[0.14em] text-ink/50 uppercase">
                      Servizi di comunicazione, concorsi e reporting ESG della Startup
                    </p>
                  </div>
                  <div className="border-l-2 border-ash pl-3">
                    <p className="tabnum text-[19px] font-extrabold tracking-[-0.03em]">
                      € {fmt(r.indottoLocale)}
                    </p>
                    <p className="font-mono text-[9px] tracking-[0.14em] text-ink/50 uppercase">
                      Indotto economico locale generato nei 24 Comuni (moltiplicatore ×2,4)
                    </p>
                  </div>
                </div>
              </div>

              {/* nota metodologica espandibile */}
              <div className="mt-6 border-t border-ink/15 pt-4">
                <button
                  type="button"
                  onClick={() => setShowNota(!showNota)}
                  className="flex w-full items-center justify-between font-mono text-[10px] tracking-[0.16em] text-ink/65 uppercase hover:text-coral"
                >
                  <span>Nota metodologica sui Servizi inclusi della Startup</span>
                  <span className="font-bold">{showNota ? "− Chiudi" : "+ Leggi dettagli"}</span>
                </button>
                {showNota && (
                  <div className="mt-3 space-y-2 border border-ink/15 bg-paper p-4 font-mono text-[9.5px] leading-relaxed text-inksoft/80">
                    <p>
                      Valore Servizi Startup per impresa: la cifra di € 1000 è esemplificativa e non rispecchia il valore equivalente, cioè il costo che le imprese spenderebbero per ricevere i medesimi servizi. Soltanto i servizi editoriali per ogni impresa coinvolta superebbe la cifra fissata. I servizi includono: la produzione di tutti i contenuti creativi per essere pubblicati nella piattaforma web dedicata e predisposti per ogni canale, newsletter aziendali, il media kit per la redazione di comunicati stampa, la redazione delle Best Practice, i tool per attestati digitali con hash crittografico, il supporto alla redazione del proprio reporting di Impatto, la comunicazione istituzionale nelle rassegne.
                    </p>
                    <p>
                      <strong className="text-ink">Moltiplicatore Economico Territoriale (×2,4):</strong> ogni euro in biglietti omaggio attiva effetti indiretti e indotti 2,4 € a favore delle comunità locali delle Aree Interne marchigiane oltre un effetto diretto in pernottamenti, ristorazione e prodotti tipici che in questa stima non viene calcolato. La Startup promotrice ha analizzato e creato internamente molte analisi di economia nell'intersezione tra cultura, turismo e modelli di business multi versante.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={scaricaCsv}
                  className="btn-sweep inline-flex items-center gap-2.5 border border-ink bg-ink px-5 py-3 text-[11px] font-bold tracking-[0.14em] text-bone uppercase"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="arrow-slide">
                    <path d="M7 1v8.5M3.5 6L7 9.5 10.5 6M1.5 12.5h11" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                  Esporta stima in CSV
                </button>
                <button
                  type="button"
                  onClick={portaInAdesione}
                  className="inline-flex items-center gap-2.5 border border-ink/45 px-5 py-3 text-[11px] font-bold tracking-[0.14em] uppercase transition-all hover:-translate-y-0.5 hover:border-coral hover:text-coral"
                >
                  Porta questi numeri all'adesione
                </button>
                <Tag className="ml-auto">FR-04 · export dati d'impatto</Tag>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architettura Strategica Incentivi & Borsellino Loyalty */}
      <LoyaltyArchitectureModal
        isOpen={openLoyaltyModal}
        onClose={() => setOpenLoyaltyModal(false)}
      />

      {/* Standard Tecnico Social Impact Index */}
      <SocialImpactIndexModal
        isOpen={openSiiModal}
        onClose={() => setOpenSiiModal(false)}
      />
    </section>
  );
}
