import { useEffect, useState } from "react";
import { LiveDot } from "@/components/ui";
import { useRevealObserver, useScrollProgress } from "@/hooks/useReveal";
import Cover from "@/sections/Cover";
import ValoreAggiunto from "@/sections/ValoreAggiunto";
import SharedValue from "@/sections/SharedValue";
import Value from "@/sections/Value";
import Simulator from "@/sections/Simulator";
import Filiera from "@/sections/Filiera";
import Platforms from "@/sections/Platforms";
import Territory from "@/sections/Territory";
import Compliance from "@/sections/Compliance";
import Adesione from "@/sections/Adesione";
import Footer from "@/sections/Footer";

const NAV = [
  { id: "valore-aggiunto", label: "Valore", num: "" },
  { id: "patto", label: "Il patto", num: "I ·" },
  { id: "simulatore", label: "Simulatore", num: "II ·" },
  { id: "filiera", label: "Filiera", num: "III ·" },
  { id: "piattaforme", label: "Piattaforme", num: "IV ·" },
  { id: "territorio", label: "Territorio", num: "V ·" },
  { id: "rendicontazione", label: "Best Practice", num: "VI ·" },
  { id: "attivazione", label: "Attivazione", num: "VII ·" },
];

function Nav() {
  const progress = useScrollProgress();
  const [active, setActive] = useState("copertina");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = ["copertina", ...NAV.map((n) => n.id), "domande", "adesione"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((e): e is HTMLElement => Boolean(e));
    if (!els.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <div className="sticky top-0 z-[75]">
      <div className="border-b border-ink/25 bg-paper/95 backdrop-blur-[2px]">
        <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-5 py-3 md:px-10">
          <a href="#copertina" className="group flex items-baseline gap-2.5">
            <span className="text-[15px] leading-none font-black tracking-[-0.03em] uppercase">Illiria</span>
            <span className="font-mono text-[9.5px] tracking-[0.2em] text-coral uppercase transition-transform duration-300 group-hover:translate-x-0.5">
              Coffee Impact
            </span>
          </a>

          <nav aria-label="Sezioni del dossier" className="ml-auto hidden items-center gap-5 xl:flex">
            {NAV.map(({ id, label, num }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`relative flex flex-col font-mono text-[9.5px] tracking-[0.18em] uppercase transition-colors duration-300 ${
                  active === id ? "text-coral" : "text-ink/55 hover:text-ink"
                }`}
              >
                {num && <span className="text-[8.5px] leading-tight text-ink/45">{num}</span>}
                <span className="whitespace-nowrap leading-tight">{label}</span>
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-coral transition-[width] duration-500 ${
                    active === id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3 xl:ml-0">
            <span className="hidden items-center gap-2 font-mono text-[9px] tracking-[0.16em] text-ink/50 uppercase lg:flex">
              <LiveDot /> rete OCS attiva
            </span>
            <a
              href="#adesione"
              className="btn-sweep hidden items-center gap-2 border border-ink bg-ink px-4 py-2.5 font-mono text-[9.5px] font-bold tracking-[0.16em] text-bone uppercase sm:inline-flex"
            >
              Aderisci
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label="Apri il menu del dossier"
              className="flex h-9 w-9 items-center justify-center border border-ink/35 transition-colors hover:border-coral hover:text-coral xl:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* avanzamento di lettura */}
        <div className="relative h-[2px] w-full bg-ink/10">
          <span
            className="absolute inset-y-0 left-0 bg-coral transition-[width] duration-150 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      {/* menu mobile */}
      <div
        className={`overflow-hidden border-b border-ink/25 bg-paper transition-[max-height,opacity] duration-500 xl:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto grid max-w-[1400px] gap-px bg-ink/10 px-5 sm:grid-cols-2 md:px-10">
          {[
            { id: "copertina", label: "Copertina" },
            ...NAV.map((n) => ({ id: n.id, label: n.num ? `${n.num} ${n.label}` : n.label })),
            { id: "domande", label: "VIII · Domande" },
            { id: "adesione", label: "IX · Adesione" },
          ].map(({ id, label }) => (
            <li key={id} className="bg-paper">
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-1 py-3 font-mono text-[10px] tracking-[0.18em] uppercase transition-colors ${
                  active === id ? "text-coral" : "text-ink/65"
                }`}
              >
                {label}
                <span className="text-ink/25">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  useRevealObserver();

  return (
    <div className="relative min-h-screen bg-paper">
      <a
        href="#patto"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:border focus:border-ink focus:bg-bone focus:px-4 focus:py-2.5 focus:font-mono focus:text-[10px] focus:tracking-[0.18em] focus:text-ink focus:uppercase"
      >
        Salta al contenuto del dossier
      </a>
      <div className="grain-layer" aria-hidden="true" />
      <Nav />
      <main>
        <Cover />
        <ValoreAggiunto />
        <SharedValue />
        <Value />
        <Simulator />
        <Filiera />
        <Platforms />
        <Territory />
        <Compliance />
        <Adesione />
      </main>
      <Footer />
    </div>
  );
}
