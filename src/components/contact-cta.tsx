import { site } from "@/lib/site";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";
import { NotdienstPlate } from "@/components/notdienst-plate";

/*
  Kontakt-Abschnitt direkt vor dem Footer, auf mehreren Seiten eingebunden.
  Graphit-Flaeche: Telefon und E-Mail stehen gross und klickbar als Zeilen
  einer Liste, darunter das Notdienst-Schild (Kunden im Notfall suchen
  zuerst nach der Nummer).
*/
export function ContactCta({
  title = "Was steht bei Ihnen an?",
  text = "Rufen Sie an oder schreiben Sie uns. Sie bekommen eine ehrliche Einschätzung und ein Angebot mit klaren Positionen.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink text-white">
      <Container className="grid gap-14 py-20 sm:py-24 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <h2 className="text-5xl leading-[0.95] text-white sm:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">
            {text}
          </p>
          <div className="mt-8">
            <ButtonLink href="/kontakt" size="lg">
              Anfrage schicken
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-7">
          <dl className="border-t border-white/25">
            <div className="grid gap-1 border-b border-white/25 py-5 sm:grid-cols-[8rem_1fr] sm:items-baseline">
              <dt className="text-base text-white/70">Telefon</dt>
              <dd>
                <a
                  href={site.phone.href}
                  className="font-display text-4xl font-semibold leading-none tabular-nums text-white underline-offset-8 hover:underline focus-visible:underline sm:text-6xl"
                >
                  {site.phone.display}
                </a>
              </dd>
            </div>
            <div className="grid gap-1 border-b border-white/25 py-5 sm:grid-cols-[8rem_1fr] sm:items-baseline">
              <dt className="text-base text-white/70">E-Mail</dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all font-display text-2xl font-semibold leading-tight text-white underline-offset-8 hover:underline focus-visible:underline sm:text-4xl"
                >
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>

          <NotdienstPlate className="mt-8 max-w-xl" />
        </div>
      </Container>
    </section>
  );
}
