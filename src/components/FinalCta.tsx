import { useState, type FormEvent } from "react";
import { cta, site } from "../copy";
import { Reveal } from "./Reveal";

export function FinalCta() {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const situation = String(data.get("situation") ?? "").trim();
    const subject = encodeURIComponent(`Lumen Forward inquiry${name ? ` from ${name}` : ""}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, "", situation].join("\n"),
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <section className="section section--cta" id="connect" aria-labelledby="connect-heading">
      <div className="wrap cta-grid">
        <Reveal>
          <p className="eyebrow">{cta.kicker}</p>
          <h2 id="connect-heading">{cta.heading}</h2>
          <article className="case">
            <p className="case__label">{cta.exampleLabel}</p>
            <p>{cta.example}</p>
          </article>
        </Reveal>

        <Reveal className="form-panel" delay={0.08}>
          <p className="lede">{cta.formIntro}</p>
          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              {cta.fields.name}
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label>
              {cta.fields.email}
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              {cta.fields.situation}
              <textarea name="situation" rows={5} required />
            </label>
            <button className="btn" type="submit">
              {cta.fields.submit}
            </button>
            {opened ? (
              <p className="form-note" role="status">
                If a mail window did not open, copy {site.email} and send the note directly.
              </p>
            ) : null}
            <p className="form-note">{cta.previewNote}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
