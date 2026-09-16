import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { home } from "@/lib/copy";

export function DiscoveryCta() {
  return (
    <section id="contact" className="scroll-mt-20 bg-navy text-cream" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-32">
        <Reveal>
          <p className="eyebrow text-gold">{home.cta.eyebrow}</p>
          <h2 id="contact-heading" className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            {home.cta.heading}
          </h2>
          <p className="mt-6 max-w-xl text-[1.08rem] leading-relaxed text-cream/80">{home.cta.body}</p>
          <p className="mt-6 text-sm tracking-wide text-gold">{home.cta.micro}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
