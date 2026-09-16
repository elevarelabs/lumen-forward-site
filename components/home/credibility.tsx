"use client";

import { Reveal } from "@/components/reveal";
import { home } from "@/lib/copy";

export function Credibility() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream" aria-labelledby="credibility-heading">
      <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 lg:px-14 lg:py-36">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-navy-soft">{home.credibility.eyebrow}</p>
          <h2
            id="credibility-heading"
            className="mt-6 font-serif text-[2.6rem] leading-[1.08] tracking-[-0.02em] text-navy sm:text-5xl"
          >
            {home.credibility.heading}
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-16">
          {home.credibility.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <li>
                <p className="font-serif text-[2.6rem] leading-none tabular-nums text-navy">{stat.value}</p>
                <p className="mt-3 text-[0.7rem] font-medium tracking-[0.18em] text-navy uppercase">{stat.label}</p>
                <p className="mt-5 text-[1.04rem] leading-[1.75] text-navy-soft">{stat.detail}</p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-24 grid gap-10 border-t border-navy/10 pt-20 lg:grid-cols-[0.75fr_1.35fr] lg:gap-20">
          <div>
            <p className="eyebrow text-navy-soft">{home.credibility.aboutEyebrow}</p>
            <h3 className="mt-5 font-serif text-3xl leading-snug text-navy sm:text-4xl">
              {home.credibility.aboutHeading}
            </h3>
          </div>
          <div className="space-y-6">
            {home.credibility.about.map((paragraph) => (
              <p key={paragraph.slice(0, 28)} className="text-[1.06rem] leading-[1.75] text-navy-soft">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
