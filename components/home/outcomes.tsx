"use client";

import { Reveal } from "@/components/reveal";
import { home } from "@/lib/copy";

export function Outcomes() {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-32 text-cream lg:px-16 lg:py-48" aria-labelledby="outcomes-heading">
      <div className="mx-auto w-full max-w-[1500px] border-y border-cream/10 py-32 lg:py-48">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-24">
          <Reveal className="lg:col-span-5">
            <h2
              id="outcomes-heading"
              className="font-serif text-6xl leading-[1.05] tracking-tight text-balance md:text-7xl lg:text-[5.5rem]"
            >
              {home.outcomes.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
            <div className="mb-16 h-px w-24 bg-gold" aria-hidden />
            <ol className="space-y-14">
              {home.outcomes.items.map((item, index) => (
                <li key={item} className="flex items-start gap-8">
                  <span className="pt-2 text-sm font-semibold tracking-[0.2em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-serif text-3xl leading-tight text-cream/90 md:text-4xl lg:text-5xl">{item}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
