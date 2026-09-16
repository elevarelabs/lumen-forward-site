"use client";

import { Reveal } from "@/components/reveal";
import { home } from "@/lib/copy";

export function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-28 border-b border-navy/10 bg-cream px-6 py-32 text-navy lg:px-16 lg:py-48"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto w-full max-w-[1500px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-40">
              <h2
                id="work-heading"
                className="font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl lg:text-[5.5rem]"
              >
                {home.work.heading}
              </h2>
              <div className="mt-12 h-px w-24 bg-gold" aria-hidden />
              <p className="mt-12 font-serif text-2xl leading-relaxed text-navy/80 lg:text-3xl">
                {home.work.intro}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
            <Reveal delay={0.12}>
              <p className="mb-16 text-sm font-semibold tracking-[0.2em] text-gold uppercase">{home.work.eyebrow}</p>
            </Reveal>
            <ol className="flex flex-col border-t border-navy/20">
              {home.work.stages.map((stage, index) => (
                <Reveal key={stage.number} delay={0.04 * index}>
                  <li className="flex flex-col items-start gap-6 border-b border-navy/20 py-12 md:flex-row md:items-center md:gap-12">
                    <span className="shrink-0 text-sm font-semibold tracking-[0.2em] text-gold">{stage.number}</span>
                    <h3 className="flex-grow font-serif text-3xl text-navy md:text-4xl">{stage.title}</h3>
                    <p className="shrink-0 font-serif text-lg leading-relaxed text-navy/70 md:w-1/2 lg:text-xl">
                      {stage.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
