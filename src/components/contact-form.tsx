"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";

/*
  Kontaktformular mit:
  - Pflichtfeld-Prüfung direkt am Feld (klare Fehlermeldungen)
  - sofortiger Reaktion auf den Klick (Button zeigt Ladezustand)
  - freundlicher Erfolgsmeldung an Ort und Stelle (keine Weiterleitung)
  - unsichtbarem Honeypot-Feld gegen Spam-Bots
*/

type Errors = Partial<
  Record<"name" | "email" | "message" | "consent" | "form", string>
>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function validate(fd: FormData): Errors {
    const next: Errors = {};
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const consent = fd.get("consent") === "on";

    if (!name) next.name = "Bitte geben Sie Ihren Namen an.";
    if (!email) next.email = "Bitte geben Sie Ihre E-Mail-Adresse an.";
    else if (!EMAIL_RE.test(email))
      next.email = "Diese E-Mail-Adresse sieht nicht korrekt aus.";
    if (message.length < 10)
      next.message = "Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen).";
    if (!consent) next.consent = "Bitte stimmen Sie der Verarbeitung zu.";

    return next;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);

    const found = validate(fd);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Zum ersten fehlerhaften Feld springen
      const firstKey = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          message: fd.get("message"),
          consent: fd.get("consent") === "on",
          company: fd.get("company"), // Honeypot
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { errors?: Errors }
          | null;
        setErrors(
          data?.errors ?? {
            form: "Das Senden hat nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
          },
        );
        setStatus("idle");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setErrors({
        form: "Verbindungsproblem. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
      });
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-border bg-accent-tint p-6 sm:p-8">
        <CheckCircle2 className="h-8 w-8 text-accent-strong" aria-hidden />
        <h2 className="mt-4 text-xl">Danke für Ihre Nachricht!</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Wir haben Ihre Anfrage erhalten und melden uns in der Regel innerhalb
          eines Werktags. Wenn es dringend ist, rufen Sie uns gern direkt an.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface"
        >
          Weitere Nachricht schreiben
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
      {errors.form ? (
        <p className="rounded-lg border border-accent-strong bg-accent-tint px-4 py-3 text-sm text-ink">
          {errors.form}
        </p>
      ) : null}

      <Field label="Name" name="name" error={errors.name} autoComplete="name" required />
      <Field
        label="E-Mail"
        name="email"
        type="email"
        error={errors.email}
        autoComplete="email"
        required
      />
      <Field
        label="Telefon (optional)"
        name="phone"
        type="tel"
        autoComplete="tel"
      />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Ihre Nachricht <span className="text-accent-strong">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`mt-1.5 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm transition-colors placeholder:text-ink-soft/60 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong ${
            errors.message ? "border-accent-strong" : "border-border"
          }`}
          placeholder="Worum geht es? Je konkreter, desto besser können wir einschätzen."
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-accent-strong">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot – für echte Besucher unsichtbar */}
      <div aria-hidden className="absolute left-[-9999px] top-[-9999px]" tabIndex={-1}>
        <label>
          Firma
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink-soft">
          <input
            type="checkbox"
            name="consent"
            required
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
          />
          <span>
            Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung
            meiner Anfrage verarbeitet werden. Hinweise dazu in der{" "}
            <Link
              href="/datenschutz"
              className="font-medium text-ink underline underline-offset-2"
            >
              Datenschutzerklärung
            </Link>
            . <span className="text-accent-strong">*</span>
          </span>
        </label>
        {errors.consent ? (
          <p id="consent-error" className="mt-1.5 text-sm text-accent-strong">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Wird gesendet …
          </>
        ) : (
          "Nachricht senden"
        )}
      </button>

      <p className="text-xs text-ink-soft">
        Mit <span className="text-accent-strong">*</span> markierte Felder sind
        Pflichtfelder.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label} {required ? <span className="text-accent-strong">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`mt-1.5 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong ${
          error ? "border-accent-strong" : "border-border"
        }`}
      />
      {error ? (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-accent-strong">
          {error}
        </p>
      ) : null}
    </div>
  );
}
