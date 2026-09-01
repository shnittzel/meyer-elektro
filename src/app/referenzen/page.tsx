import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/lib/projects";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { MediaFrame } from "@/components/media-frame";
import { ContactCta } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Beispielprojekte von Meyer Elektro: Elektrosanierung, Gewerbeinstallation, Wallbox-Montage und Notdiensteinsatz in der Region Hannover.",
};

export default function ReferenzenPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            as="h1"
            kicker="Referenzen"
            title="Ein Einblick in typische Aufträge"
          >
            Meyer Elektro ist ein fiktives Übungsprojekt. Die folgenden Projekte
            sind an realistischen Fällen orientiert, aber frei erfunden – sie
            zeigen, wie ein Auftrag bei uns abläuft. Echte Kundenreferenzen
            ergänzen wir hier, sobald sie vorliegen.
          </SectionHeading>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05}>
                <Link
                  href={`/referenzen/${project.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-colors hover:border-ink"
                >
                  <div className="relative">
                    <MediaFrame
                      alt={`Symbolbild: ${project.title}`}
                      aspect="aspect-[16/10]"
                      className="rounded-none border-0"
                    />
                    <span className="absolute left-3 top-3 rounded-md bg-accent px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
                      Beispielprojekt
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent-strong">
                      {project.category}
                      <span className="text-border">·</span>
                      <span className="text-ink-soft">{project.year}</span>
                    </div>
                    <h2 className="mt-2 text-lg">{project.title}</h2>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-ink-soft">
                      <MapPin className="h-3.5 w-3.5" aria-hidden />
                      {project.location}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                      {project.scope}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                      Projekt ansehen
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta
        title="Ein ähnliches Vorhaben?"
        text="Erzählen Sie uns davon. Wir sagen Ihnen, wie wir es angehen würden und was es ungefähr kostet."
      />
    </>
  );
}
