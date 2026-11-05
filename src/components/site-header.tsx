"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/container";
import { Wordmark } from "@/components/wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Kopfzeile bekommt beim Scrollen einen weissen Hintergrund + feine Linie
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menue wird beim Klick auf einen Link geschlossen (siehe closeMenu unten).
  const closeMenu = () => setMenuOpen(false);

  // Body-Scroll sperren, solange das mobile Menue offen ist
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled || menuOpen
          ? "border-b border-border bg-white"
          : "border-b border-transparent bg-white/90 backdrop-blur-sm"
      }`}
    >
      <Container className="flex h-[4.25rem] items-center justify-between gap-3 md:gap-6">
        <Link href="/" aria-label="Meyer Elektro, zur Startseite">
          <Wordmark className="text-[1.65rem]" />
        </Link>

        {/* Navigation – Desktop */}
        <nav
          className="ml-auto hidden items-center gap-8 md:flex"
          aria-label="Hauptnavigation"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`py-1 text-[15px] font-medium underline decoration-2 underline-offset-[10px] transition-colors ${
                isActive(item.href)
                  ? "text-ink decoration-accent"
                  : "text-ink-soft decoration-transparent hover:text-ink hover:decoration-border"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Notdienst – Desktop: immer in Reichweite */}
        <a
          href={site.emergencyPhone.href}
          className="hidden items-baseline gap-2.5 rounded-md bg-accent px-4 py-2 text-ink transition-colors hover:bg-accent-hover md:inline-flex"
          aria-label={`Elektro-Notdienst anrufen: ${site.emergencyPhone.display}`}
        >
          <span className="text-sm font-semibold">Notdienst</span>
          <span className="font-display text-xl font-bold leading-none tabular-nums">
            {site.emergencyPhone.display}
          </span>
        </a>

        {/* Notdienst – Mobil: ein Tipp ruft direkt an */}
        <a
          href={site.emergencyPhone.href}
          className="ml-auto inline-flex h-11 items-center gap-2 rounded-md bg-accent px-3.5 text-[15px] font-semibold text-ink md:hidden"
          aria-label={`Elektro-Notdienst anrufen: ${site.emergencyPhone.display}`}
        >
          <Phone className="h-4 w-4" aria-hidden />
          Notdienst
        </a>

        {/* Menue-Schalter – Mobil */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border-2 border-ink text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Navigation – Mobil */}
      {menuOpen ? (
        <div id="mobile-menu" className="md:hidden">
          <Container className="pb-6 pt-2">
            <nav aria-label="Hauptnavigation" className="border-t border-border">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center justify-between border-b border-border py-4 font-display text-3xl font-semibold ${
                    isActive(item.href) ? "text-ink" : "text-ink-soft"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) ? (
                    <span aria-hidden className="h-3 w-3 bg-accent" />
                  ) : null}
                </Link>
              ))}
            </nav>
            <a
              href={site.emergencyPhone.href}
              onClick={closeMenu}
              className="mt-5 flex items-baseline justify-between gap-3 rounded-md bg-accent px-4 py-3 text-ink"
            >
              <span className="text-sm font-semibold">Notdienst</span>
              <span className="font-display text-2xl font-bold leading-none tabular-nums">
                {site.emergencyPhone.display}
              </span>
            </a>
            <a
              href={site.phone.href}
              onClick={closeMenu}
              className="mt-3 flex items-baseline justify-between gap-3 rounded-md border-2 border-ink px-4 py-3 text-ink"
            >
              <span className="text-sm font-semibold">Zentrale</span>
              <span className="font-display text-2xl font-bold leading-none tabular-nums">
                {site.phone.display}
              </span>
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
