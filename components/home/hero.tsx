"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { home } from "@/lib/copy";

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? undefined
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative overflow-hidden bg-cream" aria-labelledby="hero-heading">
      <div className="paper-grain pointer-events-none absolute inset-0 opacity-[0.035]" />

      <div className="relative grid lg:min-h-[calc(100svh-4.75rem)] lg:grid-cols-12">
        <div
          className="pointer-events-none absolute inset-y-0 z-10 hidden w-px bg-gold lg:left-[41.666%] lg:block"
          aria-hidden
        />

        <div className="relative order-1 flex items-end px-6 py-20 sm:px-10 lg:order-2 lg:col-span-7 lg:min-h-[calc(100svh-4.75rem)] lg:px-16 lg:py-24 xl:px-24">
          <motion.div className="relative max-w-[18ch]" {...fade(0.04)}>
            <h1
              id="hero-heading"
              className="font-serif text-[clamp(3.25rem,7.4vw,7.15rem)] leading-[0.9] tracking-[-0.035em] text-navy"
            >
              <span className="block">{home.hero.h1LineOne}</span>
              <span className="mt-2 block italic">{home.hero.h1LineTwo}</span>
            </h1>
          </motion.div>
        </div>

        <aside className="relative order-2 flex flex-col justify-between bg-navy px-6 py-14 text-cream sm:px-10 lg:order-1 lg:col-span-5 lg:px-14 lg:py-20 xl:px-16">
          <p className="eyebrow text-gold">{home.hero.spine}</p>

          <div className="my-16 max-w-[28rem] lg:my-0">
            <motion.p
              className="font-serif text-[1.55rem] leading-[1.28] text-cream sm:text-[1.75rem]"
              {...fade(0.1)}
            >
              {home.hero.deck}
            </motion.p>
            <motion.p className="mt-8 text-[1.02rem] leading-[1.75] text-cream/80" {...fade(0.18)}>
              {home.hero.body}
            </motion.p>
            <motion.div className="mt-12 flex flex-col items-start gap-6" {...fade(0.28)}>
              <Link
                href={home.hero.ctaHref}
                className="inline-flex bg-gold px-6 py-3.5 text-[0.78rem] font-semibold tracking-[0.16em] text-navy uppercase transition-colors hover:bg-cream"
              >
                {home.hero.cta}
              </Link>
              <Link
                href={home.hero.secondaryHref}
                className="text-[0.8rem] tracking-[0.06em] text-cream/80 underline decoration-gold/60 underline-offset-[0.35em] transition-colors hover:text-cream hover:decoration-gold"
              >
                {home.hero.secondaryCta}
              </Link>
            </motion.div>
          </div>

          <p className="text-[0.68rem] tracking-[0.16em] text-gold uppercase">{home.hero.meta}</p>
        </aside>
      </div>
    </section>
  );
}
