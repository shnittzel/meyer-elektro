import type { Metadata } from "next";
import { HandshakeIcon, Lightbulb, ShieldCheck, Users } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { MediaFrame } from "@/components/media-frame";
import { ContactCta } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Meyer Elektro ist ein Familienbetrieb aus Hannover, gegründet 1978. Heute ein eingespieltes Team von über sechs Fachkräften – mit Erfahrung und offen für moderne Technik.",
};

const timeline = [
  {
    year: "1978",
    title: "Gründung als Ein-Mann-Betrieb",
    text: "Friedrich Meyer meldet seinen Elektrobetrieb in Hannover an und arbeitet vor allem für Privathaushalte im Stadtteil.",
  },
  {
    year: "1995",
    title: "Umzug in die heutige Werkstatt",
    text: "Mit dem wachsenden Kundenkreis kommen größere Räume, ein Lager und die ersten Gesellen dazu.",
  },
  {
    year: "2009",
    title: "Übergabe an die zweite Generation",
    text: "Tochter und Sohn übernehmen den Betrieb, der Schwerpunkt verschiebt sich Richtung Gewerbekunden und wiederkehrende Prüfungen.",
  },
  {
    year: "Heute",
    title: "Team von über sechs Fachkräften",
    text: "Elektroinstallation, Notdienst, Smart Home und E-Mobilität – mit Meisterqualität und festen Ansprechpartnern.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Zuverlässigkeit",
    text: "Zugesagte Termine werden gehalten. Wenn etwas dazwischenkommt, erfahren Sie es früh – nicht erst, wenn niemand auftaucht.",
  },
  {
    icon: Users,
    title: "Erfahrung",
    text: "Über 45 Jahre im selben Handwerk am selben Ort. Viele Anlagen in Hannover haben wir schon einmal gesehen.",
  },
  {
    icon: Lightbulb,
    title: "Offen für Neues",
    text: "Smart Home, Wallbox, moderne Messtechnik: Wir bilden uns weiter, statt beim Gewohnten stehenzubleiben.",
  },
  {
    icon: HandshakeIcon,
    title: "Ehrliche Beratung",
    text: "Wir empfehlen, was Sie brauchen – nicht das teuerste Paket. Auch wenn das manchmal heißt: „Das lohnt sich für Sie nicht.“",
  },
];

const team = [
  { name: "Sabine Meyer", role: "Geschäftsführung & Planung" },
  { name: "Thomas Meyer", role: "Geschäftsführung & Bauleitung" },
  { name: "Team Privatkunden", role: "Installation & Smart Home" },
  { name: "Team Gewerbe & Prüfung", role: "Wartung & DGUV V3" },
];

export default function UeberUnsPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              as="h1"
              kicker="Über uns"
              title="Ein Familienbetrieb, der mit seiner Aufgabe gewachsen ist"
            >
              Seit {site.foundedYear} steht der Name Meyer für Elektrohandwerk in
              Hannover. Aus dem Ein-Mann-Betrieb von damals ist ein eingespieltes
              Team geworden – die Haltung ist dieselbe geblieben.
            </SectionHeading>
          </div>
          <Reveal delay={0.1}>
            <MediaFrame
              icon={Users}
              alt="Symbolbild: Team eines Elektrofachbetriebs vor der Werkstatt"
              aspect="aspect-[4/3]"
            />
          </Reveal>
        </Container>
      </section>

      {/* Firmengeschichte */}
      <section className="border-b border-border bg-white">
        <Container className="py-16 sm:py-24">
          <SectionHeading kicker="Firmengeschichte" title="Von 1978 bis heute" />
          <ol className="mt-12 space-y-8 border-l border-border pl-6">
            {timeline.map((entry, i) => (
              <Reveal key={entry.year} delay={i * 0.05}>
                <li className="relative">
                  <span className="absolute -left-[31px] top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-accent bg-white" />
                  <p className="text-sm font-bold uppercase tracking-wide text-accent-strong">
                    {entry.year}
                  </p>
                  <h3 className="mt-1 text-lg">{entry.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                    {entry.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Werte */}
      <section className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-24">
          <SectionHeading kicker="Wofür wir stehen" title="Vier Grundsätze" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={i * 0.05}>
                  <div className="flex h-full gap-4 rounded-2xl border border-border bg-white p-6">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-tint text-accent-strong">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg">{value.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {value.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="border-b border-border bg-white">
        <Container className="py-16 sm:py-24">
          <SectionHeading kicker="Team" title="Wer bei Ihnen vorbeikommt">
            Feste Ansprechpartner statt wechselnder Subunternehmer. Die Fotos
            folgen – hier stehen zunächst die Rollen im Betrieb.
          </SectionHeading>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-white p-5">
                  <MediaFrame
                    icon={Users}
                    alt={`Symbolbild: ${member.role}`}
                    aspect="aspect-square"
                    className="rounded-xl"
                  />
                  <h3 className="mt-4 text-base">{member.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta
        title="Lernen Sie uns kennen"
        text="Am einfachsten bei einem kurzen Gespräch. Rufen Sie an oder schreiben Sie uns, worum es geht."
      />
    </>
  );
}
