/*
  Die Wortmarke: nur Schrift, kein Logo (so mit Luan abgestimmt).
  Der Schlusspunkt ist ein gelbes Quadrat – eine Klemme im Verteiler.
*/
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display font-bold leading-none tracking-tight text-ink ${className}`}
    >
      Meyer Elektro
      <span
        aria-hidden
        className="ml-[0.08em] inline-block h-[0.2em] w-[0.2em] bg-accent"
      />
    </span>
  );
}
