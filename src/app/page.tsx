import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  ClipboardList,
  PhoneCall,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/button-link";
import { MediaFrame } from "@/components/media-frame";
import { ContactCta } from "@/components/contact-cta";

const stats = [
  { value: "Seit 1978", label: "Familienbetrieb in zweiter Generation" },
  { value: `${site.employees}`, label: "Mitarbeiterinnen und Mitarbeiter" },
  { value: "100 %", label: "Arbeiten in Meisterqualität" },
  { value: "24 / 7", label: "Erreichbarer Elektro-Notdienst" },
];

const steps = [
  {
    icon: PhoneCall,
    title: "Beratungsgespräch",
    text: "Sie schildern Ihr Anliegen – am Telefon oder vor Ort. Wir hören zu und sagen ehrlich, was sinnvoll ist.",
  },
  {
    icon: ClipboardList,
    title: "Angebot",
    text: "Sie bekommen ein schriftliches Angebot mit klaren Positionen. Keine versteckten Kosten, keine Überraschungen.",
  },
  {
    icon: Wrench,
    title: "Umsetzung",
    text: "Wir arbeiten zum vereinbarten Termin, halten die Baustelle sauber und erklären, was wir gemacht haben.",
  },
  {
    icon: CalendarCheck,
    title: "Abnahme & Service",
    text: "Gemeinsame Abnahme mit Prüfprotokoll. Danach bleiben wir Ihr Ansprechpartner für Wartung und Erweiterungen.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent-tint blur-3xl"
        />
        <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-sm font-medium text-ink-soft">
                <Zap className="h-4 w-4 text-accent-strong" aria-hidden />
                Elektrofachbetrieb aus Hannover · seit {site.foundedYear}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
                Tradition im Handwerk,{" "}
                <span className="text-accent-strong">moderne Technik</span> im Haus.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                Seit 1978 kümmert sich Meyer Elektro um die Elektrik in
                Privathaushalten und Betrieben in der Region Hannover – von der
                klassischen Installation über Smart Home bis zur Wallbox. Und wenn
                es brennt, sind wir im Notdienst für Sie da.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/kontakt" size="lg">
                  Angebot anfragen
                </ButtonLink>
                <ButtonLink href="/leistungen" variant="secondary" size="lg">
                  Unsere Leistungen
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-sm text-ink-soft">
                Notfall?{" "}
                <a
                  href={site.emergencyPhone.href}
                  className="font-semibold text-ink underline underline-offset-4 hover:text-accent-strong"
                >
                  Elektro-Notdienst {site.emergencyPhone.display}
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <MediaFrame
              src="/images/hero-elektroinstallation.jpg"
              icon={Zap}
              alt="Symbolbild: Elektriker bei der Arbeit an einer Elektroverteilung"
              aspect="aspect-[4/5]"
              priority
            />
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------------- Leistungen */}
      <section className="border-t border-border bg-white">
        <Container className="py-16 sm:py-24">
          <SectionHeading kicker="Was wir machen" title="Vier Bereiche, ein Ansprechpartner">
            Egal ob Zuhause, Betrieb oder Notfall – Sie haben immer denselben
            Fachbetrieb an der Seite.
          </SectionHeading>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={i * 0.05}>
                  <Link
                    href={`/leistungen#${service.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-colors hover:border-ink"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-tint text-accent-strong">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-xl">{service.title}</h3>
                    <p className="mt-1 text-sm font-medium text-accent-strong">
                      {service.tagline}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                      {service.intro}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                      Mehr erfahren
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------- Kennzahlen */}
      <section className="bg-ink text-white">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Warum Meyer Elektro
            </p>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.05}>
                <p className="text-4xl font-bold tracking-tight text-accent sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* --------------------------------------------------- So arbeiten wir */}
      <section className="border-t border-border bg-surface">
        <Container className="py-16 sm:py-24">
          <SectionHeading kicker="So arbeiten wir" title="In vier Schritten zum fertigen Auftrag">
            Ein klarer Ablauf, damit Sie jederzeit wissen, woran Sie sind.
          </SectionHeading>

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 0.05}>
                  <li className="flex h-full flex-col rounded-2xl border border-border bg-white p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="text-sm font-semibold text-accent-strong">
                        Schritt {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {step.text}
                    </p>
                  </li>
                </Reveal>
              );
            })}
          </ol>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent-strong" aria-hidden />
                Innungsbetrieb
              </span>
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-accent-strong" aria-hidden />
                Meisterbetrieb
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent-strong" aria-hidden />
                Geprüft nach DGUV V3
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
