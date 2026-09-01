import type { ReactNode } from "react";
import { Container } from "@/components/container";

/*
  Einheitliches Layout für die rechtlichen Seiten (Impressum, Datenschutz).
  Schmale Textspalte, ruhige Typografie, gut lesbar.
*/
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-white">
      <Container className="max-w-3xl py-16 sm:py-20">
        <h1 className="text-3xl sm:text-4xl">{title}</h1>
        {updated ? (
          <p className="mt-2 text-sm text-ink-soft">Stand: {updated}</p>
        ) : null}

        <div
          className="
            mt-10 space-y-6 text-[15px] leading-relaxed text-ink-soft
            [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:text-ink
            [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-ink
            [&_a]:font-medium [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-2
            [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5
            [&_strong]:font-semibold [&_strong]:text-ink
          "
        >
          {children}
        </div>
      </Container>
    </section>
  );
}

/* Deutlich sichtbarer Hinweis, dass Angaben noch fehlen / Platzhalter sind. */
export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-lg border border-accent-strong/40 bg-accent-tint px-4 py-3 text-sm text-ink">
      <strong>Noch auszufüllen:</strong> {children}
    </p>
  );
}
