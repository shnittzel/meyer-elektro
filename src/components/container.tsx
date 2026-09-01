import type { ElementType, ReactNode } from "react";

/* Haelt den Inhalt zentriert und begrenzt die Breite – ueberall gleich. */
export function Container({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
