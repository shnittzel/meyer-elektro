import { Container } from "@/components/container";

/*
  Schmaler Hinweisbalken ganz oben: macht sofort klar, dass dies ein
  Beispielprojekt mit einem fiktiven Kunden ist (siehe Briefing:
  "deutlich als Beispielprojekt kennzeichnen"). Scrollt mit weg, danach
  uebernimmt die klebende Kopfzeile. Zum Entfernen einfach in
  layout.tsx die <DemoBanner />-Zeile loeschen.
*/
export function DemoBanner() {
  return (
    <div className="bg-ink text-white">
      <Container className="flex items-center justify-center gap-x-2 gap-y-1 py-2 text-center text-xs sm:text-[13px]">
        <span className="font-semibold text-accent">Beispielprojekt</span>
        <span className="text-white/50" aria-hidden>
          ·
        </span>
        <span className="text-white/80">
          „Meyer Elektro“ ist ein fiktiver Kunde – umgesetzt von{" "}
          <a
            href="https://habiko.de"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white underline underline-offset-2 hover:text-accent"
          >
            Habiko
          </a>
        </span>
      </Container>
    </div>
  );
}
