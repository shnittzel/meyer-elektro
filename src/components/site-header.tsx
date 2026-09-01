"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/container";

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
          : "border-b border-transparent bg-white/80 backdrop-blur-sm"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-ink"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Meyer Elektro<span className="text-accent">.</span>
        </Link>

        {/* Navigation – Desktop */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors hover:text-ink ${
                isActive(item.href)
                  ? "font-semibold text-ink"
                  : "font-medium text-ink-soft"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Telefon – Desktop */}
        <a
          href={site.phone.href}
          className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-accent-strong md:inline-flex"
        >
          <Phone className="h-4 w-4" aria-hidden />
          {site.phone.display}
        </a>

        {/* Menue-Schalter – Mobil */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink md:hidden"
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
          <Container className="flex flex-col gap-1 pb-6 pt-2">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`rounded-lg px-3 py-3 text-base ${
                  isActive(item.href)
                    ? "bg-surface font-semibold text-ink"
                    : "font-medium text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phone.href}
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-base font-semibold text-ink"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {site.phone.display}
            </a>
            <a
              href={site.emergencyPhone.href}
              onClick={closeMenu}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-base font-semibold text-ink"
            >
              Notdienst: {site.emergencyPhone.display}
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
