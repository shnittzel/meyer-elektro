import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, Siren } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Meyer Elektro in Hannover kontaktieren: Kontaktformular, Telefon, E-Mail und separater Elektro-Notdienst. Familienbetrieb seit 1978.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-20">
          <SectionHeading as="h1" kicker="Kontakt" title="So erreichen Sie uns">
            Schreiben Sie uns über das Formular oder melden Sie sich direkt – was
            Ihnen lieber ist. Für Notfälle gibt es eine eigene Nummer.
          </SectionHeading>
        </Container>
      </section>

      {/* Notdienst zuerst und auffällig */}
      <section className="bg-white">
        <Container className="pt-12">
          <Reveal>
            <div className="flex flex-col gap-4 rounded-2xl bg-accent p-6 text-ink sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Siren className="h-7 w-7 shrink-0" aria-hidden />
                <div>
                  <p className="text-base font-bold uppercase tracking-wide">
                    Elektro-Notdienst
                  </p>
                  <p className="text-sm text-ink/80">
                    Störung, Stromausfall oder Brandgeruch an der Verteilung?
                    Rund um die Uhr erreichbar.
                  </p>
                </div>
              </div>
              <a
                href={site.emergencyPhone.href}
                className="shrink-0 text-2xl font-bold tracking-tight underline-offset-4 hover:underline sm:text-3xl"
              >
                {site.emergencyPhone.display}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_360px] lg:gap-16">
          <Reveal>
            <h2 className="text-2xl">Nachricht schreiben</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Wir melden uns in der Regel innerhalb eines Werktags zurück.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="space-y-6 rounded-2xl border border-border bg-surface p-6">
              <div>
                <h2 className="text-lg">Direkt erreichbar</h2>
              </div>

              <ContactRow icon={Phone} label="Telefon">
                <a
                  href={site.phone.href}
                  className="font-semibold text-ink hover:text-accent-strong"
                >
                  {site.phone.display}
                </a>
              </ContactRow>

              <ContactRow icon={Mail} label="E-Mail">
                <a
                  href={`mailto:${site.email}`}
                  className="break-all font-semibold text-ink hover:text-accent-strong"
                >
                  {site.email}
                </a>
              </ContactRow>

              <ContactRow icon={MapPin} label="Adresse">
                <span className="text-ink">
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                </span>
              </ContactRow>

              <ContactRow icon={Clock} label="Erreichbarkeit">
                <ul className="space-y-1 text-ink">
                  {site.hours.map((h) => (
                    <li key={h.days}>
                      <span className="font-medium">{h.days}:</span> {h.time}
                    </li>
                  ))}
                </ul>
              </ContactRow>

              <p className="border-t border-border pt-4 text-xs leading-relaxed text-ink-soft">
                Alle Angaben sind Platzhalter für dieses Übungsprojekt.
              </p>
            </aside>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 text-sm">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-accent-strong">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-ink-soft">{label}</p>
        <div className="mt-0.5">{children}</div>
      </div>
    </div>
  );
}
