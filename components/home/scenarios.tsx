"use client";

import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { home } from "@/lib/copy";
import { routes } from "@/lib/site";

export function Scenarios() {
  return (
    <section id="growth" className="scroll-mt-24 bg-cream" aria-labelledby="growth-heading">
      <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 lg:px-14 lg:py-36">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-navy-soft">{home.scenarios.eyebrow}</p>
          <h2
            id="growth-heading"
            className="mt-6 font-serif text-[2.6rem] leading-[1.08] tracking-[-0.02em] text-navy sm:text-5xl lg:text-[3.6rem]"
          >
            {home.scenarios.heading}
          </h2>
          <p className="mt-7 max-w-xl text-[1.06rem] leading-[1.75] text-navy-soft">{home.scenarios.intro}</p>
        </Reveal>

        <ol className="mt-20 grid gap-16 lg:grid-cols-3 lg:gap-x-14">
          {home.scenarios.items.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.05}>
              <li>
                <p className="font-sans text-[0.7rem] font-medium tracking-[0.22em] text-gold">{item.number}</p>
                <h3 className="mt-5 font-serif text-[1.85rem] leading-snug text-navy">{item.title}</h3>
                <p className="mt-5 text-[1.04rem] leading-[1.75] text-navy-soft">{item.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-20">
          <p className="text-[0.98rem] leading-relaxed text-navy-soft">
            {home.scenarios.reportLead}{" "}
            <Link
              href={routes.report}
              className="text-navy underline decoration-gold/80 decoration-1 underline-offset-[0.3em] transition-colors hover:decoration-gold"
            >
              {home.scenarios.reportCta}
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
