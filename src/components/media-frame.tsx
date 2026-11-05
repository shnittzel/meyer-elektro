import Image from "next/image";
import type { LucideIcon } from "lucide-react";

/*
  Bild-Rahmen mit zwei Zustaenden:
  - src gesetzt  -> echtes Symbolfoto ueber next/image (optimiert, kein Layout-Sprung)
  - src leer     -> gestaltete Platzhalterflaeche in Markenfarben mit Icon

  So kann die Seite jetzt schon vollstaendig gebaut werden; sobald die
  freigegebenen Symbolfotos vorliegen, wird nur "src" gesetzt – kein Umbau.

  Alle Fotos auf der Seite sind Symbolbilder (fiktiver Uebungskunde);
  der Hinweis "Symbolbild" wird deshalb sichtbar eingeblendet.
*/
export function MediaFrame({
  src,
  alt,
  icon: Icon,
  aspect = "aspect-[4/3]",
  priority = false,
  labelAt = "bottom",
  className = "",
}: {
  src?: string;
  alt: string;
  icon?: LucideIcon;
  aspect?: string;
  priority?: boolean;
  /* Wo "Symbolbild" sitzt – oben, wenn unten etwas ueber das Foto ragt */
  labelAt?: "top" | "bottom";
  className?: string;
}) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-md border border-border bg-surface ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 640px"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          {/* dezentes Muster im Hintergrund */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
          {Icon ? (
            <Icon
              className="relative h-14 w-14 text-ink-soft"
              strokeWidth={1.5}
              aria-hidden
            />
          ) : null}
        </div>
      )}

      <span
        className={`absolute right-2 rounded bg-ink/80 px-2 py-1 text-[11px] font-medium text-white backdrop-blur-sm ${
          labelAt === "top" ? "top-2" : "bottom-2"
        }`}
      >
        Symbolbild
      </span>
    </div>
  );
}
