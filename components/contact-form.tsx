"use client";

import { FormEvent, useState } from "react";
import { contactPage } from "@/lib/copy";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

function mailtoHref(name: string, email: string, priority: string) {
  const subject = encodeURIComponent(`Let's Talk — ${name || "Founder"}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nWhat's the priority?\n${priority}`);
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
    const priority = String(data.get("priority") || "").trim();

    if (!name || !email || !priority) {
      setError("Please complete all three fields.");
      setStatus("error");
      return;
    }

    const action = process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION;
    setStatus("submitting");
    setError("");

    if (!action) {
      window.location.href = mailtoHref(name, email, priority);
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
      setError("The form didn't send. You can write directly instead.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="border border-line bg-surface px-6 py-8 font-serif text-2xl leading-snug text-ink">
        {contactPage.success}
      </p>
    );
  }

  const fieldClass =
    "w-full border border-line bg-surface px-4 py-3 text-[1rem] text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <input type="hidden" name="_subject" value="Let's Talk — Lumen Forward" />
      <label className="block">
        <span className="mb-2 block text-[0.8125rem] text-muted">{contactPage.fields.name}</span>
        <input className={fieldClass} type="text" name="name" autoComplete="name" required />
      </label>
      <label className="block">
        <span className="mb-2 block text-[0.8125rem] text-muted">{contactPage.fields.email}</span>
        <input className={fieldClass} type="email" name="email" autoComplete="email" required />
      </label>
      <label className="block">
        <span className="mb-2 block text-[0.8125rem] text-muted">{contactPage.fields.priority}</span>
        <textarea className={`${fieldClass} min-h-40 resize-y`} name="priority" required />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-accent px-6 py-3 text-[0.9375rem] font-medium text-canvas transition-colors hover:bg-accent-hover disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : contactPage.submit}
      </button>
      {status === "error" ? <p className="text-sm text-ink">{error}</p> : null}
      <p className="text-sm leading-relaxed text-muted">{contactPage.underForm}</p>
    </form>
  );
}
