"use client";

import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { home } from "@/lib/copy";

const offsets = ["md:w-[85%]", "md:ml-auto md:w-[85%]", "md:w-[85%]"] as const;

export function Scenarios() {
  return (
    <section id="growth" className="scroll-mt-28 bg-navy px-6 py-32 text-cream lg:px-16 lg:py-48" aria-labelledby="growth-heading">
      <div className="mx-auto w-full max-w-[1500px]">
        <Reveal className="mb-28 lg:mb-44">
          <p className="max-w-[18ch] font-serif text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
            {home.scenarios.opening}
          </p>
        </Reveal>

        <div className="relative flex flex-col items-start gap-16 lg:flex-row lg:gap-32">
          <div className="w-full shrink-0 lg:sticky lg:top-40 lg:w-5/12">
            <Reveal>
              <h2
                id="growth-heading"
                className="font-serif text-6xl leading-[1.05] tracking-tight text-balance md:text-7xl lg:text-[5.5rem]"
              >
                {home.scenarios.heading}
              </h2>
              <div className="mt-12 h-px w-24 bg-gold" aria-hidden />
              <p className="mt-12 max-w-md text-xl font-light leading-relaxed text-cream/70">
                {home.scenarios.intro}
              </p>
              <Link
                href={home.scenarios.reportHref}
                className="group relative mt-16 inline-flex items-center pb-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase transition-colors hover:text-cream"
              >
                {home.scenarios.reportCta}
                <span className="absolute bottom-0 left-0 h-px w-full bg-gold/30 transition-colors group-hover:bg-cream" />
              </Link>
            </Reveal>
          </div>

          <ol className="flex w-full flex-col gap-24 pb-16 lg:w-7/12 lg:gap-40 lg:pt-20">
            {home.scenarios.items.map((item, index) => (
              <Reveal key={item.number} delay={0.08 * (index + 1)} className={`w-full ${offsets[index]}`}>
                <li className="border-t border-cream/20 pt-10">
                  <div className="mb-10 flex items-center gap-6">
                    <span className="text-sm font-semibold tracking-[0.2em] text-gold uppercase">{item.number}</span>
                    <div className="h-px w-24 bg-cream/20" aria-hidden />
                  </div>
                  <h3 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">{item.title}</h3>
                  <p className="mt-8 text-xl font-light leading-relaxed text-cream/70 lg:text-2xl">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
