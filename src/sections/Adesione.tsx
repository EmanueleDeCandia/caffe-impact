import { useEffect, useMemo, useState, type FormEvent } from "react";
import { LiveDot, RegFrame, Stamp, Tag } from "@/components/ui";
import { sha256Hex } from "@/hooks/useReveal";
import { PROJECTS, calcolaImpatto, fmt } from "@/lib/data";

type FormState = {
  azienda: string;
  referente: string;
  email: string;
  ruolo: string;
  dipendenti: string;
  presidi: string;
  progetto: string;
  note: string;
  privacy: boolean;
  dossier: boolean;
};

const EMPTY: FormState = {
  azienda: "",
  referente: "",
  email: "",
  ruolo: "HR & Sostenibilità",
  dipendenti: "320",
  presidi: "2",
  progetto: PROJECTS[0].titolo,
  note: "",
  privacy: false,
  dossier: true,
};

type Cert = {
  codice: string;
  sha: string;
  timestamp: string;
  impatto: ReturnType<typeof calcolaImpatto>;
  data: FormState;
};

const RUOLI = ["HR & Sostenibilità", "Acquisti / Procurement", "Facility & Servizi generali", "Direzione generale"];

function svgCertificato(c: Cert): string {
  const l = (
    x: string | number,
    y: string | number,
    t: string | number,
    size: number,
    weight: number,
    fill: string,
    anchor = "start",
    ls: string | number = 0,
  ) =>
    `<text x="${x}" y="${y}" font-family="'JetBrains Mono', monospace" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" letter-spacing="${ls}">${t}</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1240" height="820" viewBox="0 0 1240 820">
<rect width="1240" height="820" fill="#efe7d2"/>
<rect x="24" y="24" width="1192" height="772" fill="none" stroke="#15140f" stroke-width="2"/>
<rect x="40" y="40" width="1160" height="740" fill="none" stroke="#15140f" stroke-width="1" stroke-dasharray="3 6"/>
${l(70, 110, "SHARED VALUE · COFFEE IMPACT", 15, 700, "#15140f", "start", "3")}
${l(70, 150, "ATTESTATO DI ADESIONE AL PATTO DI VALORE CONDIVISO", 34, 800, "#15140f", "start", "0")}
${l(70, 182, "Documento generato dalla richiesta di adesione — non costituisce contratto fino alla controfirma.", 14, 400, "#2a2620")}
<line x1="70" y1="210" x2="1170" y2="210" stroke="#15140f" stroke-width="1"/>
${l(70, 258, "AZIENDA CLIENTE OCS", 12, 700, "#15140f", "start", "2.5")}
${l(70, 288, c.data.azienda.toUpperCase(), 26, 800, "#15140f")}
${l(70, 336, "REFERENTE", 12, 700, "#15140f", "start", "2.5")}
${l(70, 362, c.data.referente + " — " + c.data.ruolo, 17, 500, "#2a2620")}
${l(70, 410, "PERIMETRO DICHIARATO", 12, 700, "#15140f", "start", "2.5")}
${l(70, 436, c.data.dipendenti + " dipendenti · " + c.data.presidi + " presidi · progetto: " + c.data.progetto, 17, 500, "#2a2620")}
<line x1="70" y1="474" x2="1170" y2="474" stroke="#15140f" stroke-width="1" stroke-dasharray="3 5"/>
${l(70, 520, "STIMA D'IMPATTO ANNUALE (MODELLO ICI-V1)", 12, 700, "#ed6f5c", "start", "2.5")}
${l(70, 566, fmt(c.impatto.km) + " KM", 30, 800, "#15140f")}
${l(70, 588, "trasporto evitati", 12, 400, "#2a2620", "start", "1")}
${l(330, 566, fmt(c.impatto.co2) + " KG", 30, 800, "#15140f")}
${l(330, 588, "CO2 evitata", 12, 400, "#2a2620", "start", "1")}
${l(590, 566, fmt(c.impatto.crediti), 30, 800, "#15140f")}
${l(590, 588, "premi ed esperienze", 12, 400, "#2a2620", "start", "1")}
${l(850, 566, "EURO " + fmt(c.impatto.welfare), 30, 800, "#15140f")}
${l(850, 588, "valore generato", 12, 400, "#2a2620", "start", "1")}
<rect x="70" y="620" width="1100" height="34" fill="none" stroke="#15140f" stroke-width="1"/>
<rect x="70" y="620" width="${Math.min(100, c.impatto.indice) * 11}" height="34" fill="#ed6f5c"/>
${l(84, 643, "SOCIAL IMPACT INDEX " + c.impatto.indice + "/100 — RATING " + c.impatto.rating, 15, 700, "#f7f1de")}
${l(70, 700, "CODICE ADESIONE " + c.codice, 14, 700, "#15140f", "start", "2")}
${l(70, 724, "TIMESTAMP " + c.timestamp, 12, 400, "#2a2620", "start", "1")}
<text x="70" y="756" font-family="'JetBrains Mono', monospace" font-size="10" fill="#2a2620">SHA-256 ${c.sha}</text>
${l(1170, 756, "SHARED VALUE — INNOVADANTE", 11, 700, "#15140f", "end", "2")}
<circle cx="1060" cy="330" r="86" fill="none" stroke="#ed6f5c" stroke-width="3"/>
<circle cx="1060" cy="330" r="72" fill="none" stroke="#ed6f5c" stroke-width="1" stroke-dasharray="3 6"/>
${l(1060, 322, "KM 0", 30, 800, "#ed6f5c", "middle")}
${l(1060, 346, "VALORE CONDIVISO", 10, 700, "#ed6f5c", "middle", "1.6")}
</svg>`;
}

function scarica(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function Field({
  label,
  children,
  error,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3 font-mono text-[9.5px] tracking-[0.2em] text-ink/55 uppercase">
        {label}
        {hint && <span className="text-ink/35 normal-case">{hint}</span>}
      </span>
      <span className="mt-2 block">{children}</span>
      {error && <span className="mt-1.5 block font-mono text-[9.5px] tracking-[0.1em] text-coral uppercase">{error}</span>}
    </label>
  );
}

const inputCls =
  "w-full border border-ink/30 bg-bone px-3.5 py-3 text-[14.5px] text-ink outline-none transition-all duration-300 placeholder:text-ink/35 focus:border-coral focus:bg-paper focus:shadow-[3px_3px_0_rgba(237,111,92,0.35)]";

export default function Adesione() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [cert, setCert] = useState<Cert | null>(null);
  const [inviato, setInviato] = useState(false);
  const [presetNote, setPresetNote] = useState<string | null>(null);

  useEffect(() => {
    const onPreset = (e: Event) => {
      const d = (e as CustomEvent).detail as {
        dipendenti: number;
        presidi: number;
        caffeGiorno: number;
        impatto: ReturnType<typeof calcolaImpatto>;
      };
      setForm((f) => ({ ...f, dipendenti: String(d.dipendenti), presidi: String(d.presidi) }));
      setPresetNote(
        `Parametri importati dal simulatore · ${fmt(d.impatto.co2)} kg CO₂ evitata stimata · indice ${d.impatto.rating}`,
      );
      setErrors({});
    };
    window.addEventListener("ici:preset", onPreset);
    return () => window.removeEventListener("ici:preset", onPreset);
  }, []);

  useEffect(() => {
    if (!cert) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setCert(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [cert]);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setForm((f) => ({ ...f, [k]: v }));

  const impatto = useMemo(
    () =>
      calcolaImpatto(
        Number(form.dipendenti) || 0,
        2.5,
        Number(form.presidi) || 1,
      ),
    [form.dipendenti, form.presidi],
  );

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (form.azienda.trim().length < 2) err.azienda = "indicate la ragione sociale";
    if (form.referente.trim().length < 2) err.referente = "indicate il referente aziendale";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) err.email = "email aziendale non valida";
    if (!form.privacy) err.privacy = "è necessaria l'accettazione dell'informativa";
    setErrors(err);
    if (Object.keys(err).length) return;

    const timestamp = new Date().toISOString().replace("T", " · ").slice(0, 19);
    const payload = `${form.azienda}|${form.email}|${form.dipendenti}|${form.presidi}|${form.progetto}|${timestamp}`;
    const sha = await sha256Hex(payload);
    const seq = String(1200 + (parseInt(sha.slice(0, 3), 16) % 800)).padStart(4, "0");
    setInviato(true);
    setCert({
      codice: `ICI-AD-${new Date().getFullYear()}-${seq}`,
      sha,
      timestamp,
      impatto,
      data: form,
    });
  };

  return (
    <>
      <section id="adesione" className="relative overflow-hidden bg-ink text-bone">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 78% 20%, rgba(237,111,92,0.55), transparent 46%), radial-gradient(circle at 8% 88%, rgba(247,241,222,0.22), transparent 42%)",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* pitch */}
            <div className="lg:col-span-5">
              <p className="flex items-center gap-3 font-mono text-[10px] tracking-[0.24em] text-coral uppercase">
                IX · Adesione <LiveDot />
              </p>
              <h2
                data-reveal="mask"
                className="mt-5 text-[clamp(2rem,4.6vw,3.6rem)] leading-[0.94] font-black tracking-[-0.04em] uppercase"
              >
                Firmate il patto
                <br />
                di{" "}
                <span className="font-editorial font-medium text-coral normal-case italic">valore condiviso</span>
              </h2>
              <p data-reveal="up" className="mt-6 max-w-md text-[15.5px] leading-relaxed text-bone/70">
                Compilate il perimetro della vostra rete OCS o Vending: vi restituiamo un prospetto con la stima
                d'impatto del primo anno, il Social Impact Index previsto e il codice che apre il dossier
                completo. Nella documentazione troverete i benefici della partecipazione per la vostra impresa e il grande contributo che con l'adesione creerete allo sviluppo locale. Un referente del team vi richiama entro due giorni lavorativi.
              </p>

              <ul data-reveal="up" className="mt-9 space-y-4 border-t border-bone/20 pt-7">
                {[
                  ["Nessun costo nascosto", "Il programma è reso disponibile con gli ordini ordinari di fornitura OCS e Vending."],
                  ["Nessun progetto IT", "Rilevazione erogazioni già presente, SSO aziendale, app PWA installabile."],
                  ["Dati aggregati e GDPR", "Consumi letti per matricola anonimizzata o per reparto."],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-4">
                    <span className="mt-1 text-coral">
                      <svg width="13" height="11" viewBox="0 0 12 10" fill="none">
                        <path d="M1 5.2l3.2 3.3L11 1.2" stroke="currentColor" strokeWidth="1.7" />
                      </svg>
                    </span>
                    <span>
                      <span className="block text-[14.5px] font-extrabold tracking-[-0.01em]">{t}</span>
                      <span className="mt-1 block max-w-sm text-[13.5px] leading-relaxed text-bone/55">{d}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div data-reveal="up" className="mt-10 flex items-center gap-6">
                <Stamp
                  label="patto di valore condiviso · coffee impact · "
                  sub={"adesione\naperta"}
                  size={124}
                  tone="coral"
                />
                <div className="font-mono text-[10px] leading-relaxed tracking-[0.14em] text-bone/55 uppercase">
                  Shared Value
                  <br />
                  <a href="mailto:sharedvalue@innovadante.com" className="link-underline text-bone">
                    sharedvalue@innovadante.com
                  </a>
                  <br />
                  <a href="tel:+390734123456" className="link-underline text-bone">
                    +39 0734 123 456
                  </a>
                </div>
              </div>
            </div>

            {/* modulo */}
            <div className="lg:col-span-7">
              <form
                onSubmit={submit}
                data-reveal="up"
                noValidate
                className="reg-frame border border-bone/30 bg-paper p-5 text-ink shadow-[14px_14px_0_rgba(0,0,0,0.35)] md:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink/20 pb-4">
                  <p className="text-[15px] font-extrabold tracking-[0.02em] uppercase">
                    Modulo di adesione · pag. 1/1
                  </p>
                  <span className="font-mono text-[9.5px] tracking-[0.18em] text-ink/50 uppercase">
                    PRD-ICI-2024-V1 · FR-03
                  </span>
                </div>

                {presetNote && (
                  <p className="mt-4 flex items-center gap-2 border border-coral/60 bg-coral/10 px-3 py-2 font-mono text-[9.5px] tracking-[0.1em] text-coral uppercase">
                    <LiveDot /> {presetNote}
                  </p>
                )}

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <Field label="Azienda cliente OCS" error={errors.azienda}>
                    <input
                      className={inputCls}
                      value={form.azienda}
                      onChange={(e) => set("azienda", e.target.value)}
                      placeholder="Ragione sociale"
                      autoComplete="organization"
                    />
                  </Field>
                  <Field label="Referente" error={errors.referente}>
                    <input
                      className={inputCls}
                      value={form.referente}
                      onChange={(e) => set("referente", e.target.value)}
                      placeholder="Nome e cognome"
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Email aziendale" error={errors.email}>
                    <input
                      className={inputCls}
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="nome@azienda.it"
                      type="email"
                      autoComplete="email"
                    />
                  </Field>
                  <Field label="Ruolo">
                    <select
                      className={inputCls}
                      value={form.ruolo}
                      onChange={(e) => set("ruolo", e.target.value)}
                    >
                      {RUOLI.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Dipendenti serviti" hint="stima">
                    <input
                      className={`${inputCls} tabnum`}
                      value={form.dipendenti}
                      inputMode="numeric"
                      onChange={(e) => set("dipendenti", e.target.value.replace(/\D/g, ""))}
                    />
                  </Field>
                  <Field label="Presidi con distributore" hint="siti">
                    <input
                      className={`${inputCls} tabnum`}
                      value={form.presidi}
                      inputMode="numeric"
                      onChange={(e) => set("presidi", e.target.value.replace(/\D/g, ""))}
                    />
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label="Progetto territoriale di interesse">
                    <select
                      className={inputCls}
                      value={form.progetto}
                      onChange={(e) => set("progetto", e.target.value)}
                    >
                      {PROJECTS.map((p) => (
                        <option key={p.codice}>{p.titolo}</option>
                      ))}
                      <option>Ripartizione su tutti i progetti in catalogo</option>
                      <option>Progetto dedicato sul nostro territorio (da valutare)</option>
                    </select>
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label="Note per il team Shared Value" hint="facoltativo">
                    <textarea
                      className={`${inputCls} min-h-[96px] resize-y`}
                      value={form.note}
                      onChange={(e) => set("note", e.target.value)}
                      placeholder="Esigenze di rendicontazione, scadenze di bilancio, sedi da collegare per prime…"
                    />
                  </Field>
                </div>

                {/* stima live */}
                <div className="mt-6 border border-ink/20 bg-bone">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/15 px-4 py-2.5">
                    <span className="font-mono text-[9.5px] tracking-[0.18em] text-ink/55 uppercase">
                      Stima d'impatto aggiornata
                    </span>
                    <span className="flex items-center gap-2 font-mono text-[9.5px] tracking-[0.14em] text-coral uppercase">
                      <LiveDot /> live
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-px bg-ink/15 sm:grid-cols-4">
                    {[
                      { k: "Km evitati", v: fmt(impatto.km) },
                      { k: "CO₂ evitata", v: `${fmt(impatto.co2)} kg` },
                      { k: "Titoli d'accesso", v: fmt(impatto.crediti) },
                      { k: "Indice stimato", v: impatto.rating },
                    ].map((x) => (
                      <div key={x.k} className="bg-bone p-3.5">
                        <p className="font-mono text-[8.5px] tracking-[0.14em] text-ink/50 uppercase">{x.k}</p>
                        <p className="tabnum mt-1.5 text-[17px] leading-none font-black tracking-[-0.035em]">
                          {x.v}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      k: "privacy" as const,
                      t: "Ho letto l'informativa privacy: i consumi saranno trattati in forma aggregata per reparto (GDPR art. 6).",
                    },
                    {
                      k: "dossier" as const,
                      t: "Desidero ricevere il dossier di adesione, schema per il Report d'Impatto e Catalogo sui prodotti locali consegnati con i vostri prodotti.",
                    },
                  ].map((c) => (
                    <label key={c.k} className="group flex cursor-pointer items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border transition-colors ${
                          form[c.k]
                            ? "border-coral bg-coral text-bone"
                            : "border-ink/40 bg-bone text-transparent group-hover:border-coral"
                        }`}
                      >
                        <svg width="10" height="8" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5.2l3.2 3.3L11 1.2" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </span>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={form[c.k]}
                        onChange={(e) => set(c.k, e.target.checked)}
                      />
                      <span className="text-[13px] leading-relaxed text-inksoft/85">{c.t}</span>
                    </label>
                  ))}
                  {errors.privacy && (
                    <p className="font-mono text-[9.5px] tracking-[0.1em] text-coral uppercase">
                      {errors.privacy}
                    </p>
                  )}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-ink/20 pt-6">
                  <button
                    type="submit"
                    className="btn-sweep group inline-flex items-center gap-3 border border-ink bg-ink px-6 py-3.5 text-[11.5px] font-bold tracking-[0.16em] text-bone uppercase"
                  >
                    Genera richiesta di adesione
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="arrow-slide">
                      <path d="M2 13L13 2M13 2H5M13 2v8" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </button>
                  <p className="max-w-[26ch] font-mono text-[9.5px] leading-relaxed tracking-[0.12em] text-ink/50 uppercase">
                    {inviato ? "Richiesta registrata · attestato emesso" : "Nessun vincolo: è una richiesta di dossier"}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {cert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Attestato di adesione"
          className="fixed inset-0 z-[90] flex items-end justify-center bg-ink/80 p-3 md:items-center md:p-8"
          onClick={() => setCert(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto border-2 border-ink bg-paper shadow-[16px_16px_0_rgba(237,111,92,0.45)]"
          >
            <button
              type="button"
              onClick={() => setCert(null)}
              aria-label="Chiudi attestato"
              className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center border border-ink/30 bg-bone font-mono text-[13px] transition-colors hover:border-coral hover:bg-coral hover:text-bone"
            >
              ✕
            </button>

            <div className="border-b border-dashed border-ink/40 p-6 md:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.24em] text-coral uppercase">
                    Shared Value · Coffee Impact
                  </p>
                  <h3 className="mt-3 text-[clamp(1.5rem,4vw,2.4rem)] leading-[0.98] font-black tracking-[-0.04em] uppercase">
                    Attestato di adesione
                    <br />
                    <span className="font-editorial text-[0.7em] font-medium text-coral normal-case italic">
                      al patto di valore condiviso
                    </span>
                  </h3>
                </div>
                <Stamp label="km 0 · l. 61/2022 · valore condiviso · " sub={"emesso\n" + new Date().getFullYear()} size={104} />
              </div>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-12 md:p-8">
              <div className="md:col-span-7">
                <p className="text-[clamp(1.3rem,3vw,1.9rem)] leading-none font-black tracking-[-0.04em] uppercase">
                  {cert.data.azienda}
                </p>
                <p className="mt-3 text-[14px] text-inksoft/85">
                  {cert.data.referente} · {cert.data.ruolo}
                </p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.12em] text-ink/55 uppercase">
                  {cert.data.dipendenti} dipendenti · {cert.data.presidi} presidi · {cert.data.progetto}
                </p>
                {cert.data.note && (
                  <p className="mt-4 border-l-2 border-coral pl-3 text-[13.5px] leading-relaxed text-inksoft/80 italic">
                    “{cert.data.note}”
                  </p>
                )}
                <div className="mt-6 space-y-2 border-t border-ink/15 pt-4">
                  <p className="font-mono text-[9.5px] tracking-[0.18em] text-ink/50 uppercase">
                    Codice adesione · {cert.codice}
                  </p>
                  <p className="font-mono text-[9.5px] tracking-[0.14em] text-ink/50 uppercase">
                    Timestamp · {cert.timestamp}
                  </p>
                  <p className="break-all font-mono text-[9.5px] leading-relaxed text-ink/45">
                    sha-256 {cert.sha}
                  </p>
                </div>
              </div>

              <div className="md:col-span-5">
                <RegFrame>
                  <div className="grid grid-cols-2 gap-px bg-ink/20">
                    {[
                      { k: "Km evitati", v: fmt(cert.impatto.km) },
                      { k: "CO₂ kg", v: fmt(cert.impatto.co2) },
                      { k: "Titoli", v: fmt(cert.impatto.crediti) },
                      { k: "Esperienze €", v: fmt(cert.impatto.welfare) },
                      { k: "Alberi eq.", v: fmt(cert.impatto.alberi) },
                      { k: "Territorio €", v: fmt(cert.impatto.territorio) },
                    ].map((x) => (
                      <div key={x.k} className="bg-bone p-3.5">
                        <p className="font-mono text-[8.5px] tracking-[0.14em] text-ink/50 uppercase">{x.k}</p>
                        <p className="tabnum mt-1.5 text-[16px] leading-none font-black tracking-[-0.035em]">
                          {x.v}
                        </p>
                      </div>
                    ))}
                  </div>
                </RegFrame>
                <div className="mt-4 border border-coral bg-coral/10 p-4">
                  <p className="font-mono text-[9px] tracking-[0.18em] text-ink/55 uppercase">
                    Social Impact Index stimato
                  </p>
                  <p className="mt-1.5 flex items-baseline gap-3">
                    <span className="tabnum text-[34px] leading-none font-black tracking-[-0.05em]">
                      {cert.impatto.indice}
                    </span>
                    <span className="border border-coral bg-coral px-2 py-0.5 text-[13px] font-black text-bone">
                      {cert.impatto.rating}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-ink/20 bg-bone p-5 md:p-6">
              <button
                type="button"
                onClick={() =>
                  scarica(`${cert.codice}.svg`, svgCertificato(cert), "image/svg+xml;charset=utf-8;")
                }
                className="btn-sweep inline-flex items-center gap-2.5 border border-ink bg-ink px-5 py-3 text-[11px] font-bold tracking-[0.14em] text-bone uppercase"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="arrow-slide">
                  <path d="M7 1v8.5M3.5 6L7 9.5 10.5 6M1.5 12.5h11" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                Scarica attestato SVG
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 border border-ink/45 px-5 py-3 text-[11px] font-bold tracking-[0.14em] uppercase transition-all hover:-translate-y-0.5 hover:border-coral hover:text-coral"
              >
                Stampa / salva in PDF
              </button>
              <Tag className="ml-auto">Documento non contrattuale · controfirma in Fase 1</Tag>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
