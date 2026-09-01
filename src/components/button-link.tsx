import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/*
  Einheitliche Buttons/Links fuer die ganze Seite.
  - "primary":   gelber Akzent-Button, dunkle Schrift (Haupt-Aktion)
  - "secondary": weisser Button mit Rahmen (Neben-Aktion)
  - "ghost":     nur Text mit Pfeil (dezente Aktion, z. B. "Mehr erfahren")
  Fuehrt automatisch das richtige Element: <Link> bei interner href,
  <a> bei tel:/mailto:/externem Link.
*/

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-ink hover:bg-accent-strong focus-visible:outline-accent-strong",
  secondary:
    "bg-white text-ink border border-border hover:border-ink hover:bg-surface focus-visible:outline-ink",
  ghost:
    "text-ink hover:text-accent-strong underline-offset-4 hover:underline px-0",
};

const sizes: Record<Size, string> = {
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & Omit<ComponentProps<"a">, "href" | "className">;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: Props) {
  const classes = `${base} ${variants[variant]} ${
    variant === "ghost" ? "" : sizes[size]
  } ${className}`;

  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
