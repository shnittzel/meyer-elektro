import { Mail, Phone, Siren } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button-link";

/*
  Kontakt-Abschnitt direkt vor dem Footer.
  Wird auf mehreren Seiten eingebunden. Dunkle Flaeche (Anthrazit),
  damit Telefon/E-Mail deutlich hervorstechen; Notdienst zusaetzlich
  in Gelb abgesetzt, weil Kunden im Notfall zuerst danach suchen.
*/
export function ContactCta({
  title = "Lassen Sie uns über Ihr Vorhaben sprechen",
  text = "Ob kurze Frage oder konkrete Anfrage – melden Sie sich. Wir schauen uns Ihr Anliegen an und geben eine ehrliche Einschätzung.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink text-white">
      <Container className="py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">{text}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={site.phone.href}
            className="group flex items-center gap-4 rounded-xl border border-white/15 bg-white/[0.04] p-5 transition-colors hover:border-white/40"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-ink">
              <Phone className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm text-white/60">Anrufen</span>
              <span className="block text-lg font-semibold text-white">
                {site.phone.display}
              </span>
            </span>
          </a>

          <a
            href={`mailto:${site.email}`}
            className="group flex items-center gap-4 rounded-xl border border-white/15 bg-white/[0.04] p-5 transition-colors hover:border-white/40"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-ink">
              <Mail className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm text-white/60">E-Mail schreiben</span>
              <span className="block break-all text-lg font-semibold text-white">
                {site.email}
              </span>
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-4 flex flex-col gap-4 rounded-xl bg-accent p-5 text-ink sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Siren className="h-6 w-6 shrink-0" aria-hidden />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide">
                  Elektro-Notdienst
                </p>
                <p className="text-sm text-ink/80">
                  Rund um die Uhr erreichbar – auch nachts und am Wochenende.
                </p>
              </div>
            </div>
            <a
              href={site.emergencyPhone.href}
              className="shrink-0 text-2xl font-bold tracking-tight text-ink underline-offset-4 hover:underline"
            >
              {site.emergencyPhone.display}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8">
            <ButtonLink href="/kontakt" variant="secondary" size="lg">
              Zum Kontaktformular
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
