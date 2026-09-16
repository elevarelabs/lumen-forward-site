"use client";

import { FormEvent, useState } from "react";
import { contactPage } from "@/lib/copy";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

function mailtoHref(name: string, email: string, note: string) {
  const subject = encodeURIComponent(`Let's Talk: ${name || "Founder"}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nWhat's the priority?\n${note}`);
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
      setError(contactPage.errorIncomplete);
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
      setError(contactPage.errorSend);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <h3 className="font-serif text-3xl text-navy">{contactPage.successHeading}</h3>
        <p className="mt-6 max-w-md text-navy/70">{contactPage.success}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 border-b border-gold pb-1 text-sm font-semibold tracking-wide text-navy hover:text-gold"
        >
          {contactPage.another}
        </button>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full border border-navy/15 bg-cream px-4 py-3 text-[1rem] text-navy placeholder:text-navy/35 focus:border-gold focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <input type="hidden" name="_subject" value="Let's Talk: Lumen Forward" />
      <label className="block">
        <span className="font-medium text-navy">{contactPage.fields.name}</span>
        <input className={fieldClass} type="text" name="name" autoComplete="name" required />
      </label>
      <label className="block">
        <span className="font-medium text-navy">{contactPage.fields.email}</span>
        <input className={fieldClass} type="email" name="email" autoComplete="email" required />
      </label>
      <label className="block">
        <span className="font-medium text-navy">{contactPage.fields.note}</span>
        <textarea
          className={`${fieldClass} min-h-[150px] resize-y`}
          name="note"
          placeholder="Growth is exposing our handoffs. We need to untangle roles..."
          required
        />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="h-14 w-full bg-navy text-sm font-semibold tracking-wide text-cream uppercase transition-colors hover:bg-navy-soft disabled:opacity-70"
      >
        {status === "submitting" ? contactPage.sending : contactPage.submit}
      </button>
      {status === "error" ? <p className="text-sm text-navy">{error}</p> : null}
    </form>
  );
}
