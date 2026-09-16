import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { home } from "@/lib/copy";

export function LetsTalk() {
  return (
    <section id="contact" className="scroll-mt-24 bg-navy text-cream" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-28 sm:px-10 lg:grid-cols-2 lg:gap-24 lg:px-14 lg:py-36">
        <Reveal>
          <p className="eyebrow text-gold">{home.cta.eyebrow}</p>
          <h2 id="contact-heading" className="mt-6 font-serif text-[2.6rem] leading-[1.08] sm:text-5xl">
            {home.cta.heading}
          </h2>
          <p className="mt-7 max-w-md text-[1.06rem] leading-[1.75] text-cream/80">{home.cta.body}</p>
          <p className="mt-8 text-[0.8rem] tracking-[0.08em] text-gold">{home.cta.micro}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
