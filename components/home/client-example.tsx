import { Reveal } from "@/components/reveal";
import { home } from "@/lib/copy";

export function ClientExample() {
  return (
    <section id="example" className="scroll-mt-24 border-t border-navy/10 bg-cream" aria-labelledby="example-heading">
      <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 lg:px-14 lg:py-36">
        <Reveal>
          <article className="grid gap-10 lg:grid-cols-[0.7fr_1.4fr] lg:gap-24">
            <div>
              <p className="eyebrow text-navy-soft">{home.example.eyebrow}</p>
              <h2 id="example-heading" className="mt-5 font-serif text-3xl leading-snug text-navy sm:text-4xl">
                {home.example.heading}
              </h2>
            </div>
            <p className="max-w-2xl font-serif text-2xl leading-snug text-navy sm:text-[1.85rem]">{home.example.body}</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
