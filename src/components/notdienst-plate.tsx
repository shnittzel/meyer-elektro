import { site } from "@/lib/site";

/*
  Das Notdienst-Schild.
  Gebaut wie ein Typenschild: gelbe Flaeche, kraeftiger Graphit-Rahmen,
  darin Zeilen, die durch Linien getrennt sind. Die Rufnummer ist das
  Groesste auf dem Schild und ein direkter tel:-Link.
  Wird auf der Startseite (ueber dem Foto) und im Kontaktabschnitt
  vor dem Footer benutzt.
*/
export function NotdienstPlate({ className = "" }: { className?: string }) {
  return (
    <div
      className={`@container overflow-hidden rounded-xl border-[3px] border-ink bg-accent text-ink ${className}`}
    >
      <div className="flex items-center gap-3 border-b-[3px] border-ink px-5 py-3">
        <svg
          viewBox="0 0 32 28"
          className="h-6 w-7 shrink-0"
          aria-hidden
          focusable="false"
        >
          <path
            d="M16 2.5 29.5 25.5H2.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M17.4 9.5 11.8 17.6h3.7l-1.4 5.1 6.1-8.4h-3.8z" fill="currentColor" />
        </svg>
        <p className="font-display text-xl font-bold leading-none">
          Elektro-Notdienst
        </p>
      </div>

      <a
        href={site.emergencyPhone.href}
        className="block whitespace-nowrap px-5 py-4 font-display text-[clamp(1.75rem,11.5cqw,4.25rem)] font-bold leading-none tracking-tight tabular-nums underline-offset-[0.12em] hover:underline focus-visible:underline"
        aria-label={`Elektro-Notdienst anrufen: ${site.emergencyPhone.display}`}
      >
        {site.emergencyPhone.display}
      </a>

      <dl className="grid grid-cols-2 divide-x-[3px] divide-ink border-t-[3px] border-ink text-sm">
        <div className="px-5 py-3">
          <dt className="font-medium text-ink/70">Erreichbar</dt>
          <dd className="font-semibold">Rund um die Uhr</dd>
        </div>
        <div className="px-5 py-3">
          <dt className="font-medium text-ink/70">Einsatzgebiet</dt>
          <dd className="font-semibold">Region Hannover</dd>
        </div>
      </dl>
    </div>
  );
}
