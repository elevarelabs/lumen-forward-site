"use client";

import { Reveal } from "@/components/reveal";
import { home } from "@/lib/copy";

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 bg-navy text-cream" aria-labelledby="work-heading">
      <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 lg:px-14 lg:py-36">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold">{home.work.eyebrow}</p>
          <h2
            id="work-heading"
            className="mt-6 font-serif text-[2.6rem] leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[3.6rem]"
          >
            {home.work.heading}
          </h2>
          <p className="mt-7 max-w-xl text-[1.06rem] leading-[1.75] text-cream/80">{home.work.intro}</p>
        </Reveal>

        <ol className="mt-20 grid gap-14 md:grid-cols-3 md:gap-12">
          {home.work.beats.map((beat, index) => (
            <Reveal key={beat.name} delay={index * 0.06}>
              <li className="border-t border-gold/40 pt-8">
                <p className="font-sans text-[0.7rem] font-medium tracking-[0.22em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-serif text-[1.85rem] leading-snug">{beat.name}</h3>
                <p className="mt-5 text-[1.04rem] leading-[1.75] text-cream/80">{beat.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
