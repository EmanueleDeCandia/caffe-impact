import { Marquee } from "@/components/ui";

const COLONNE = [
  {
    titolo: "Il dossier",
    link: [
      ["I · Patto di valore condiviso", "#patto"],
      ["II · Simulatore di presidio", "#simulatore"],
      ["III · Prodotti a Km 0 e Rete", "#filiera"],
      ["IV · Le due interfacce", "#piattaforme"],
    ],
  },
  {
    titolo: "Prove e impegni",
    link: [
      ["V · Rassegne nelle Marche", "#territorio"],
      ["VI · Archivi ESG", "#rendicontazione"],
      ["VII · Attivazione in 6 mesi", "#attivazione"],
      ["VIII · Domande frequenti", "#domande"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-bone">
      <div className="ticker-mask border-b border-bone/15 py-4">
        <Marquee
          reverse
          separator="·"
          items={[
            "VALORE CONDIVISO",
            "PRODOTTI TIPICI A KM 0 (L. 61/2022)",
            "WELFARE CULTURALE",
            "PERFORMING ART NELLE MARCHE",
            "RENDICONTAZIONE CSRD",
          ]}
          className="outline-marquee text-transparent"
          itemClassName="gap-10 font-display text-[clamp(1.8rem,6vw,4.4rem)] leading-none font-black tracking-[-0.04em] uppercase"
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10px] tracking-[0.24em] text-coral uppercase">Gruppo Illiria S.p.A.</p>
            <p className="mt-4 text-[clamp(1.9rem,4.4vw,3rem)] leading-[0.92] font-black tracking-[-0.045em] uppercase">
              Illiria
              <br />
              Coffee <span className="font-editorial font-medium text-coral normal-case italic">Impact</span>
            </p>
            <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-bone/60">
              La pausa caffè della vostra azienda come leva di welfare, di rendicontazione ESG e di
              rigenerazione territoriale. Un progetto di valore condiviso, misurato erogazione per erogazione.
            </p>
            <a
              href="#adesione"
              className="btn-sweep mt-8 inline-flex items-center gap-3 border border-bone bg-bone px-6 py-3.5 text-[11px] font-bold tracking-[0.16em] text-ink uppercase"
            >
              Richiedi il dossier di adesione
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="arrow-slide">
                <path d="M2 13L13 2M13 2H5M13 2v8" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </div>

          {COLONNE.map((c) => (
            <nav key={c.titolo} className="lg:col-span-2">
              <p className="font-mono text-[9.5px] tracking-[0.22em] text-bone/45 uppercase">{c.titolo}</p>
              <ul className="mt-5 space-y-3">
                {c.link.map(([t, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="link-underline text-[13.5px] text-bone/80 transition-colors hover:text-coral"
                    >
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-3">
            <p className="font-mono text-[9.5px] tracking-[0.22em] text-bone/45 uppercase">Direzione Impact</p>
            <ul className="mt-5 space-y-3 text-[13.5px] text-bone/80">
              <li>
                <a href="mailto:impact@illiria.it" className="link-underline hover:text-coral">
                  impact@illiria.it
                </a>
              </li>
              <li>
                <a href="tel:+390851234567" className="link-underline hover:text-coral">
                  +39 085 123 4567
                </a>
              </li>
              <li className="pt-2 text-bone/55">
                Sede operativa e tostatura di prossimità
                <br />
                Strada per la Val Pescara, 44 — 65129 Pescara
              </li>
              <li className="pt-2 font-mono text-[9.5px] tracking-[0.14em] text-bone/45 uppercase">
                Lun—Ven 08:00 / 18:00 · assistenza presidi h24
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 grid gap-4 border-t border-bone/20 pt-6 font-mono text-[9.5px] leading-relaxed tracking-[0.14em] text-bone/45 uppercase md:grid-cols-3">
          <p>© 2026 Gruppo Illiria S.p.A. · P.IVA 01234567890 · Documento PRD-ICI-2024-V1</p>
          <p className="md:text-center">
            Design system Atelier Zero · Inter Tight / Playfair Display / JetBrains Mono
          </p>
          <p className="md:text-right">
            Fotografie di archivio Pexels · dati dimostrativi a scopo di presentazione
          </p>
        </div>
      </div>
    </footer>
  );
}
