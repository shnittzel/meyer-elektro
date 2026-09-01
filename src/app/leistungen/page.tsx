import type { Metadata } from "next";
import { Check } from "lucide-react";
import { services } from "@/lib/services";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/button-link";
import { MediaFrame } from "@/components/media-frame";
import { ContactCta } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Elektroinstallation für Privat- und Gewerbekunden, 24/7-Notdienst und Wallbox-Installation für E-Mobilität – Meyer Elektro in der Region Hannover.",
};

export default function LeistungenPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            as="h1"
            kicker="Leistungen"
            title="Alles rund um Ihre Elektrik – aus einer Hand"
          >
            Wir arbeiten für vier Zielgruppen, mit demselben Anspruch: sauber
            geplant, fachgerecht ausgeführt, verständlich erklärt.
          </SectionHeading>

          <Reveal delay={0.1}>
            <nav className="mt-8 flex flex-wrap gap-2" aria-label="Leistungsbereiche">
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </Reveal>
        </Container>
      </section>

      {services.map((service, i) => {
        const Icon = service.icon;
        const imageFirst = i % 2 === 1; // Layout wechselt ab
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 border-b border-border ${
              i % 2 === 1 ? "bg-surface" : "bg-white"
            }`}
          >
            <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
              <Reveal className={imageFirst ? "lg:order-2" : ""}>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-tint text-accent-strong">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h2 className="mt-5 text-2xl sm:text-3xl">{service.title}</h2>
                <p className="mt-1 text-sm font-semibold text-accent-strong">
                  {service.tagline}
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  {service.intro}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-ink">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <ButtonLink href="/kontakt" variant="secondary">
                    {service.title} anfragen
                  </ButtonLink>
                </div>
              </Reveal>

              <Reveal
                delay={0.1}
                className={imageFirst ? "lg:order-1" : ""}
              >
                <MediaFrame
                  src={service.image}
                  icon={Icon}
                  alt={service.imageAlt}
                  aspect="aspect-[4/3]"
                />
              </Reveal>
            </Container>
          </section>
        );
      })}

      <ContactCta
        title="Nicht sicher, in welchen Bereich Ihr Anliegen fällt?"
        text="Kein Problem – beschreiben Sie einfach, worum es geht. Wir ordnen das ein und melden uns mit dem passenden Vorschlag zurück."
      />
    </>
  );
}
