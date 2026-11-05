import type { CSSProperties } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";
import { MediaFrame } from "@/components/media-frame";
import { NotdienstPlate } from "@/components/notdienst-plate";
import { ContactCta } from "@/components/contact-cta";

/*
  Startseite. Bildsprache: Verteilerkasten und Typenschild.
  - Die Ueberschrift ist das Plakat (schmale Schilderschrift, sehr gross).
  - Das gelbe Notdienst-Schild haengt ueber dem Foto und ist das einzige
    wirklich laute Element; alles andere bleibt ruhig.
  - Leistungen als Verzeichnis (wie das Stromkreisverzeichnis im Kasten),
    Zahlen als Datenblatt, Ablauf als Leitung mit Klemmen.
*/

const facts = [
  { label: "Seit", value: "1978", note: "als Ein-Mann-Betrieb in Hannover" },
  {
    label: "Team",
    value: site.employees,
    note: "Fachkräfte, vom Gesellen bis zum Meister",
  },
  {
    label: "Qualität",
    value: "100 %",
    note: "Arbeit in Meisterqualität, mit Prüfprotokoll",
  },
  { label: "Notdienst", value: "24/7", note: "365 Tage im Jahr erreichbar" },
];

const steps = [
  {
    title: "Beratung",
    text: "Sie schildern Ihr Anliegen, am Telefon oder vor Ort. Wir hören zu und sagen ehrlich, was sinnvoll ist.",
  },
  {
    title: "Angebot",
    text: "Sie bekommen ein schriftliches Angebot mit klaren Positionen. Keine versteckten Kosten.",
  },
  {
    title: "Umsetzung",
    text: "Wir arbeiten zum vereinbarten Termin, halten die Baustelle sauber und erklären, was wir gemacht haben.",
  },
  {
    title: "Abnahme und Service",
    text: "Gemeinsame Abnahme mit Prüfprotokoll. Danach bleiben wir Ihr Ansprechpartner für Wartung und Erweiterungen.",
  },
];

const line = (i: number) => ({ "--i": i }) as CSSProperties;

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------------ Hero */}
      <section className="bg-white">
        <Container className="grid gap-14 pb-20 pt-10 sm:pt-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16 lg:pb-28 lg:pt-16">
          <div>
            <h1 className="text-[clamp(3.5rem,17vw,9rem)] font-bold leading-[0.88] tracking-[-0.01em] lg:text-[clamp(5rem,10vw,7.6rem)]">
              <span className="hero-line" style={line(0)}>
                <span>Elektrik</span>
              </span>{" "}
              <span className="hero-line" style={line(1)}>
                <span>für Hannover</span>
              </span>{" "}
              <span className="hero-line" style={line(2)}>
                <span>seit {site.foundedYear}.</span>
              </span>
            </h1>

            <p className="mt-9 max-w-[34rem] text-lg leading-relaxed text-ink-soft">
              Wir installieren, prüfen und reparieren Elektroanlagen in
              Wohnungen, Häusern und Betrieben. Familienbetrieb seit{" "}
              {site.foundedYear}, heute auch für Wallbox und Smart Home.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/kontakt" size="lg">
                Angebot anfragen
              </ButtonLink>
              <ButtonLink href="/leistungen" variant="secondary" size="lg">
                Unsere Leistungen
              </ButtonLink>
            </div>
          </div>

          <div>
            <MediaFrame
              src="/images/hero-elektroinstallation.jpg"
              alt="Symbolbild: Elektriker bei der Arbeit an einer Elektroverteilung"
              aspect="aspect-[4/3] lg:aspect-[4/5]"
              labelAt="top"
              priority
            />
            <NotdienstPlate className="plate-in relative z-10 -mt-14 ml-4 mr-4 sm:ml-8 sm:mr-8" />
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------ Leistungen */}
      <section id="leistungen" className="border-t border-border bg-white">
        <Container className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
          <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <h2 className="text-5xl leading-[0.95] sm:text-6xl">
              Vier Bereiche, ein Betrieb
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-ink-soft">
              Zuhause, im Betrieb, im Notfall oder an der Ladestation: Sie
              haben immer denselben Ansprechpartner.
            </p>
          </div>

          <ul className="border-t-2 border-ink lg:col-span-8">
            {services.map((service) => (
              <li key={service.slug} className="border-b border-border">
                <Link
                  href={`/leistungen#${service.slug}`}
                  className="group relative block py-8 focus-visible:outline-offset-[-2px] sm:py-10"
                >
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-0 bg-accent transition-[width] duration-300 group-hover:w-2 group-focus-visible:w-2 motion-reduce:transition-none"
                  />
                  <div className="transition-transform duration-300 group-hover:translate-x-6 group-focus-visible:translate-x-6 motion-reduce:transition-none">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <h3 className="text-4xl leading-none sm:text-5xl">
                        {service.title}
                      </h3>
                      {service.slug === "notdienst" ? (
                        <span className="rounded bg-accent px-2 py-0.5 text-sm font-semibold text-ink">
                          Rund um die Uhr
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-4 max-w-xl text-lg leading-snug text-ink-soft">
                      {service.summary}
                    </p>
                    <span className="mt-5 inline-block font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 group-hover:decoration-ink">
                      Mehr erfahren
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ------------------------------------------------------- Datenblatt */}
      <section className="bg-ink text-white">
        <Container className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
          <div className="lg:col-span-4">
            <h2 className="text-5xl leading-[0.95] text-white sm:text-6xl">
              Meyer Elektro in Zahlen
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-white/75">
              Fast fünfzig Jahre am selben Ort. Bei vielen Anlagen in Hannover
              haben wir schon einmal in den Verteiler geschaut.
            </p>
          </div>

          <dl className="border-t border-white/25 lg:col-span-8">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid gap-x-8 gap-y-1 border-b border-white/25 py-6 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-baseline lg:grid-cols-[7rem_minmax(0,13rem)_minmax(0,1fr)]"
              >
                <dt className="text-base text-white/70">{fact.label}</dt>
                <dd className="font-display text-7xl font-bold leading-none tabular-nums text-accent">
                  {fact.value}
                </dd>
                <dd className="max-w-xs text-white/75 sm:col-start-2 lg:col-start-3">
                  {fact.note}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ------------------------------------------------- So arbeiten wir */}
      <section className="bg-surface">
        <Container className="py-20 lg:py-28">
          <h2 className="max-w-xl text-5xl leading-[0.95] sm:text-6xl">
            So läuft ein Auftrag ab
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Vier Schritte, damit Sie jederzeit wissen, woran Sie sind.
          </p>

          <ol className="mt-16 grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <li key={step.title} className="relative pl-16 lg:pl-0 lg:pt-16">
                {/* Leitung zur naechsten Klemme */}
                {i < steps.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute left-[calc(1.25rem-1.5px)] top-10 h-full w-[3px] bg-ink lg:left-10 lg:top-[calc(1.25rem-1.5px)] lg:h-[3px] lg:w-[calc(100%-0.5rem)]"
                  />
                ) : null}
                {/* Klemme mit Schrittnummer: der Ablauf ist eine echte Reihenfolge */}
                <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center border-[3px] border-ink bg-accent font-display text-xl font-bold leading-none">
                  {i + 1}
                </span>
                <h3 className="text-3xl leading-none">{step.title}</h3>
                <p className="mt-3 max-w-xs leading-relaxed text-ink-soft">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
