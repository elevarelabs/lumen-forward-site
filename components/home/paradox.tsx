import { Reveal } from "@/components/reveal";
import { home } from "@/lib/copy";

export function Paradox() {
  return (
    <section id="paradox" className="scroll-mt-20 bg-cream" aria-labelledby="paradox-heading">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-32">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow text-navy-soft">{home.paradox.eyebrow}</p>
          <h2 id="paradox-heading" className="mt-5 font-serif text-4xl leading-tight text-navy sm:text-5xl">
            {home.paradox.heading}
          </h2>
          <blockquote className="mt-10 border-l-2 border-gold pl-6 font-serif text-3xl italic leading-snug text-navy sm:text-4xl">
            {home.paradox.pull}
          </blockquote>
        </Reveal>
        <div className="space-y-6 lg:col-span-7 lg:pt-16">
          {home.paradox.body.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 0.08}>
              <p className="text-[1.08rem] leading-relaxed text-navy-soft">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
