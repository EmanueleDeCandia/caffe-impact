import type { ReactNode } from "react";
import { useCountUp, useInView } from "@/hooks/useReveal";
import { cn } from "@/utils/cn";

let uid = 0;
const nextId = (p: string) => `${p}-${++uid}`;

/* ---------------- Timbro circolare con notch ---------------- */
export function Stamp({
  label,
  sub,
  size = 148,
  className,
  spin = true,
  tone = "coral",
}: {
  label: string;
  sub?: string;
  size?: number;
  className?: string;
  spin?: boolean;
  tone?: "coral" | "ink" | "bone";
}) {
  const pathId = nextId("stamp-path");
  const color = tone === "coral" ? "var(--color-coral)" : tone === "bone" ? "var(--color-bone)" : "var(--color-ink)";
  const notches = Array.from({ length: 24 });
  return (
    <div className={cn("relative shrink-0", className)} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        className={cn("h-full w-full", spin && "animate-spin-slow")}
        style={{ animationDirection: tone === "bone" ? "reverse" : "normal" }}
        aria-hidden="true"
      >
        <defs>
          <path id={pathId} d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
        </defs>
        <circle cx="100" cy="100" r="94" fill="none" stroke={color} strokeWidth="1.2" opacity="0.55" />
        <circle cx="100" cy="100" r="84" fill="none" stroke={color} strokeWidth="2.4" />
        <circle cx="100" cy="100" r="55" fill="none" stroke={color} strokeWidth="0.9" strokeDasharray="2 5" />
        {notches.map((_, i) => {
          const a = (i / notches.length) * Math.PI * 2;
          const r1 = 84;
          const r2 = i % 6 === 0 ? 74 : 80;
          return (
            <line
              key={i}
              x1={100 + Math.cos(a) * r1}
              y1={100 + Math.sin(a) * r1}
              x2={100 + Math.cos(a) * r2}
              y2={100 + Math.sin(a) * r2}
              stroke={color}
              strokeWidth={i % 6 === 0 ? 2.2 : 1}
            />
          );
        })}
        <text
          fill={color}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 15.5,
            letterSpacing: "0.19em",
            textTransform: "uppercase",
          }}
        >
          <textPath href={`#${pathId}`} startOffset="0%">
            {label}
          </textPath>
        </text>
      </svg>
      {sub && (
        <div className="absolute inset-0 grid place-items-center px-8 text-center">
          <span
            className="font-mono text-[9px] leading-tight whitespace-pre-line tracking-[0.18em] uppercase"
            style={{ color }}
          >
            {sub}
          </span>
        </div>
      )}
    </div>
  );
}

/* ---------------- Contatore animato ---------------- */
export function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const v = useCountUp(value, inView);
  return (
    <span ref={ref} className={cn("tabnum", className)}>
      {prefix}
      {v.toLocaleString("it-IT", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

/* ---------------- Etichette & righe ---------------- */
export function Tag({
  children,
  className,
  tone = "ink",
}: {
  children: ReactNode;
  className?: string;
  tone?: "ink" | "coral" | "bone";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] uppercase",
        tone === "ink" && "border-ink/25 text-ink/70",
        tone === "coral" && "border-coral bg-coral text-bone",
        tone === "bone" && "border-bone/35 text-bone/75",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Rule({ className, dotted = false }: { className?: string; dotted?: boolean }) {
  return (
    <div
      className={cn("h-px w-full", dotted ? "border-t border-dashed border-ink/30" : "bg-ink/15", className)}
      aria-hidden="true"
    />
  );
}

export function LiveDot({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex h-1.5 w-1.5", className)}>
      <span className="absolute inset-0 animate-pulse-dot rounded-full bg-coral" />
    </span>
  );
}

/* ---------------- Testata di sezione ---------------- */
export function SectionHead({
  numeral,
  kicker,
  title,
  lead,
  dark = false,
  aside,
  className,
}: {
  numeral: string;
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  dark?: boolean;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-8 border-t pt-6 md:grid-cols-12 md:gap-10",
        dark ? "border-bone/25" : "border-ink/20",
        className,
      )}
    >
      <div className="md:col-span-4 lg:col-span-3">
        <div className="flex items-baseline gap-3">
          <span
            className={cn(
              "font-mono text-[11px] tracking-[0.3em] uppercase",
              dark ? "text-coral" : "text-coral",
            )}
          >
            {numeral}
          </span>
          <span
            className={cn(
              "font-mono text-[11px] tracking-[0.22em] uppercase",
              dark ? "text-bone/60" : "text-ink/55",
            )}
          >
            {kicker}
          </span>
        </div>
      </div>
      <div className="md:col-span-8 lg:col-span-6">
        <h2
          data-reveal="mask"
          className={cn(
            "text-[clamp(1.85rem,4.2vw,3.35rem)] leading-[0.98] font-extrabold tracking-[-0.03em] uppercase",
            dark ? "text-bone" : "text-ink",
          )}
        >
          {title}
        </h2>
        {lead && (
          <p
            data-reveal="up"
            style={{ transitionDelay: "120ms" }}
            className={cn(
              "mt-5 max-w-2xl text-[15px] leading-relaxed md:text-base",
              dark ? "text-bone/70" : "text-inksoft/85",
            )}
          >
            {lead}
          </p>
        )}
      </div>
      {aside && <div className="md:col-span-12 lg:col-span-3 lg:pl-4">{aside}</div>}
    </div>
  );
}

/* ---------------- Marquee consumi / erogazioni ---------------- */
export function Marquee({
  items,
  reverse = false,
  className,
  itemClassName,
  separator = "◆",
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
  separator?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={cn("ticker-mask relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max items-center gap-8 whitespace-nowrap will-change-transform",
          reverse ? "animate-marquee-rev" : "animate-marquee",
        )}
      >
        {row.map((t, i) => (
          <span
            key={i}
            className={cn(
              "flex items-center gap-8 font-mono text-[11px] tracking-[0.14em] uppercase",
              itemClassName,
            )}
          >
            {t}
            <span className="marquee-sep text-coral">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Cornice 1:1 con marche di registro ---------------- */
export function RegFrame({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("reg-frame", className)}>{children}</div>;
}
