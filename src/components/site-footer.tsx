import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "@/components/container";
import { Wordmark } from "@/components/wordmark";

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marke */}
          <div>
            <Wordmark className="text-2xl" />
            <p className="mt-2 text-sm text-ink-soft">{site.tagline}</p>
            <p className="mt-4 max-w-xs text-sm text-ink-soft">
              Familienbetrieb seit {site.foundedYear}. Elektrotechnik für
              Privathaushalte, Betriebe und den Notfall in der {site.address.region}.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer-Navigation">
            <p className="text-sm font-semibold text-ink">Seiten</p>
            <ul className="mt-3 space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontakt */}
          <div>
            <p className="text-sm font-semibold text-ink">Kontakt</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
              </li>
              <li>
                <a href={site.phone.href} className="transition-colors hover:text-ink">
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-ink"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Zeiten */}
          <div>
            <p className="text-sm font-semibold text-ink">Erreichbarkeit</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              {site.hours.map((h) => (
                <li key={h.days}>
                  <span className="block font-medium text-ink">{h.days}</span>
                  {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-6 rounded-lg bg-accent-tint px-4 py-3 text-xs leading-relaxed text-ink-soft">
          Hinweis: „Meyer Elektro“ ist ein fiktives Beispielunternehmen. Diese
          Website ist ein Konzept-/Übungsprojekt von Habiko. Alle Namen,
          Kontaktdaten, Projekte und Fotos sind Platzhalter bzw. Symbolbilder.
        </p>
      </Container>
    </footer>
  );
}
