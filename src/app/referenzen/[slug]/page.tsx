import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { MediaFrame } from "@/components/media-frame";
import { ContactCta } from "@/components/contact-cta";

// Erzeugt zur Build-Zeit eine statische Seite pro Projekt.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/referenzen/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} (Beispielprojekt)`,
    description: project.scope,
  };
}

const blocks = [
  { key: "situation", label: "Ausgangslage" },
  { key: "solution", label: "Unsere Lösung" },
  { key: "result", label: "Ergebnis" },
] as const;

export default async function ProjektPage(
  props: PageProps<"/referenzen/[slug]">,
) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <section className="border-b border-border bg-surface">
        <Container className="py-14 sm:py-16">
          <Link
            href="/referenzen"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Alle Referenzen
          </Link>

          <Reveal className="mt-6 max-w-3xl">
            <span className="inline-block rounded-md bg-accent px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
              Beispielprojekt
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl">{project.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-soft">
              <span className="font-semibold text-accent-strong">
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                {project.location}
              </span>
              <span>{project.year}</span>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-16">
            <div className="space-y-10">
              <Reveal>
                <MediaFrame
                  alt={`Symbolbild: ${project.title}`}
                  aspect="aspect-[16/9]"
                />
              </Reveal>

              {blocks.map((block, i) => (
                <Reveal key={block.key} delay={i * 0.05}>
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-strong">
                      {block.label}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-ink-soft">
                      {project[block.key]}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <aside className="rounded-2xl border border-border bg-surface p-6 lg:sticky lg:top-24">
                <p className="text-sm font-semibold text-ink">Projekt in Zahlen</p>
                <dl className="mt-4 space-y-4">
                  {project.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-xs uppercase tracking-wide text-ink-soft">
                        {fact.label}
                      </dt>
                      <dd className="text-lg font-bold text-ink">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-ink-soft">
                  Fiktives Projekt zu Demonstrationszwecken. Zahlen und Orte sind
                  frei gewählt.
                </p>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
