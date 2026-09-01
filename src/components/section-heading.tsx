import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

/*
  Wiederkehrender Kopf einer Sektion: kleine Kicker-Zeile in Gelb,
  darunter die Ueberschrift, optional ein kurzer Einleitungstext.
  Sorgt fuer gleiche Abstaende und Typografie auf allen Seiten.
*/
export function SectionHeading({
  kicker,
  title,
  children,
  align = "left",
  as: TitleTag = "h2",
}: {
  kicker?: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      {kicker ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent-strong">
          {kicker}
        </p>
      ) : null}
      <TitleTag className="text-3xl sm:text-4xl">{title}</TitleTag>
      {children ? (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{children}</p>
      ) : null}
    </Reveal>
  );
}
