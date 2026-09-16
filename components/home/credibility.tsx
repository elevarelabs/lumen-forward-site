"use client";

import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { home } from "@/lib/copy";
import { routes } from "@/lib/site";

export function Credibility() {
  return (
    <section
      id="about"
      className="scroll-mt-28 border-b border-navy/10 bg-cream px-6 py-32 text-navy lg:px-16 lg:py-48"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto w-full max-w-[1500px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-32">
          <div className="order-2 lg:col-span-4 lg:col-start-2 lg:order-1">
            <Reveal>
              <div className="relative mx-auto aspect-[3/4] w-full max-w-sm lg:mx-0">
                <div className="flex h-full w-full flex-col items-center justify-center border border-navy/20 bg-navy/5 p-8 text-center">
                  <span className="mb-4 text-xs font-semibold tracking-[0.2em] text-navy/50 uppercase">
                    {home.aboutTeaser.photoLabel}
                  </span>
                  <div className="h-px w-8 bg-gold/50" aria-hidden />
                </div>
                <div className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-3 border-t border-l border-gold opacity-60" />
                <div className="absolute right-0 bottom-0 h-8 w-8 translate-x-3 translate-y-3 border-r border-b border-gold opacity-60" />
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:col-span-6 lg:col-start-7 lg:order-2">
            <Reveal delay={0.06}>
              <h2 id="about-heading" className="font-serif text-6xl leading-[1.05] md:text-7xl lg:text-[5.5rem]">
                {home.aboutTeaser.heading}
              </h2>
              <div className="mt-12 h-px w-24 bg-gold" aria-hidden />
              <div className="mt-12 max-w-2xl space-y-8 font-serif text-2xl leading-relaxed text-navy/80 lg:text-3xl">
                {home.aboutTeaser.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              <Link
                href={routes.about}
                className="group relative mt-16 inline-flex items-center pb-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase transition-colors hover:text-navy"
              >
                {home.aboutTeaser.cta}
                <span className="absolute bottom-0 left-0 h-px w-full bg-gold/30 transition-colors group-hover:bg-navy" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
