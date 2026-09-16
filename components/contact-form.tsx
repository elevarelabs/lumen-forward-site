"use client";

import { FormEvent, useState } from "react";
import { home } from "@/lib/copy";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

function mailtoHref(name: string, email: string, note: string) {
  const subject = encodeURIComponent(`Discovery conversation: ${name || "Founder"}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nWhat is going on in the business?\n${note}`);
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const note = String(data.get("note") || "").trim();

    if (!name || !email || !note) {
      setError(home.cta.errorIncomplete);
      setStatus("error");
      return;
    }

    const action = process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION;
    setStatus("submitting");
    setError("");

    if (!action) {
      window.location.href = mailtoHref(name, email, note);
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const response = await fetch(action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!response.ok) {
        throw new Error("send-failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setError(home.cta.errorSend);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="border border-gold/50 bg-navy px-6 py-8 font-serif text-2xl leading-snug text-cream">
        {home.cta.success}
      </p>
    );
  }

  const fieldClass =
    "w-full border border-cream/25 bg-navy px-4 py-3 text-[1rem] text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <input type="hidden" name="_subject" value="Discovery conversation: Lumen Forward" />
      <label className="block">
        <span className="mb-2 block text-[0.78rem] tracking-[0.12em] text-cream/70 uppercase">{home.cta.fields.name}</span>
        <input className={fieldClass} type="text" name="name" autoComplete="name" required />
      </label>
      <label className="block">
        <span className="mb-2 block text-[0.78rem] tracking-[0.12em] text-cream/70 uppercase">{home.cta.fields.email}</span>
        <input className={fieldClass} type="email" name="email" autoComplete="email" required />
      </label>
      <label className="block">
        <span className="mb-2 block text-[0.78rem] tracking-[0.12em] text-cream/70 uppercase">{home.cta.fields.note}</span>
        <textarea className={`${fieldClass} min-h-36 resize-y`} name="note" required />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-gold px-6 py-3.5 text-[0.78rem] font-semibold tracking-[0.16em] text-navy uppercase transition-colors hover:bg-cream disabled:opacity-70"
      >
        {status === "submitting" ? home.cta.sending : home.cta.submit}
      </button>
      {status === "error" ? <p className="text-sm text-cream">{error}</p> : null}
      <p className="text-sm leading-relaxed text-cream/65">{home.cta.underForm}</p>
    </form>
  );
}
