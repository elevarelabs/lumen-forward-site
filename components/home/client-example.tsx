import { Reveal } from "@/components/reveal";
import { home } from "@/lib/copy";

export function ClientExample() {
  return (
    <section id="example" className="scroll-mt-20 bg-navy text-cream" aria-labelledby="example-heading">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <article className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
            <div>
              <p className="eyebrow text-gold">{home.example.eyebrow}</p>
              <h2 id="example-heading" className="mt-4 font-serif text-3xl sm:text-4xl">
                {home.example.heading}
              </h2>
            </div>
            <p className="text-[1.08rem] leading-relaxed text-cream/85">{home.example.body}</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
