import type { ReactNode } from "react";

type SectionLabelProps = { children: ReactNode; tone?: "accent" | "coral" };

/** Rótulo pequeno em caixa alta acima dos títulos (ex.: "01 · Sobre"). */
export default function SectionLabel({
  children,
  tone = "accent",
}: SectionLabelProps) {
  return (
    <p
      className={
        "text-sm font-semibold uppercase tracking-[0.1em] " +
        (tone === "coral" ? "text-coral" : "text-accent")
      }
    >
      {children}
    </p>
  );
}
