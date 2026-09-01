import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="bg-white">
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-strong">
          Fehler 404
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl">Diese Seite gibt es nicht</h1>
        <p className="mt-4 max-w-md text-ink-soft">
          Der Link ist vielleicht veraltet oder enthält einen Tippfehler. Von der
          Startseite aus finden Sie alles Weitere.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" size="lg">
            Zur Startseite
          </ButtonLink>
          <ButtonLink href="/kontakt" variant="secondary" size="lg">
            Kontakt aufnehmen
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
