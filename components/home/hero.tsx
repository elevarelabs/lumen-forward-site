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
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative overflow-hidden bg-cream" aria-labelledby="hero-heading">
      <div className="paper-grain pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="relative grid lg:min-h-[calc(100svh-4rem)] lg:grid-cols-12">
        <div className="relative order-1 flex items-end px-6 py-16 sm:px-10 lg:order-2 lg:col-span-7 lg:px-16 lg:py-20 xl:px-20">
          <div
            className="absolute right-8 top-10 hidden font-serif text-[11rem] leading-none text-navy/[0.06] lg:block"
            aria-hidden
          >
            LF
          </div>
          <motion.div className="relative max-w-4xl" {...fade(0.05)}>
            <h1
              id="hero-heading"
              className="mt-6 font-serif text-[clamp(2.7rem,6.4vw,6.4rem)] leading-[0.94] tracking-[-0.03em] text-navy"
            >
              <span className="block">{home.hero.h1LineOne}</span>
              <span className="mt-4 block italic text-navy">{home.hero.h1LineTwo}</span>
            </h1>
            <div className="mt-10 h-px w-24 bg-gold" />
          </motion.div>
        </div>

        <aside className="relative order-2 flex flex-col justify-between bg-navy px-6 py-10 text-cream sm:px-10 lg:order-1 lg:col-span-5 lg:px-12 lg:py-16 xl:px-16">
          <p className="eyebrow text-gold">{home.hero.spine}</p>

          <div className="my-12 max-w-md lg:my-0">
            <div className="mb-8 h-px w-12 bg-gold" />
            <p className="eyebrow text-gold">{home.hero.kicker}</p>
            <motion.p
              className="mt-6 font-serif text-[1.65rem] leading-snug text-cream sm:text-[1.85rem]"
              {...fade(0.1)}
            >
              {home.hero.deck}
            </motion.p>
            <motion.p className="mt-6 text-[0.98rem] leading-relaxed text-cream/80" {...fade(0.2)}>
              {home.hero.body}
            </motion.p>
            <motion.div className="mt-10" {...fade(0.32)}>
              <Link
                href={home.hero.ctaHref}
                className="inline-flex bg-gold px-6 py-3.5 text-[0.78rem] font-semibold tracking-[0.16em] text-navy uppercase transition-colors hover:bg-cream"
              >
                {home.hero.cta}
              </Link>
            </motion.div>
          </div>

          <p className="text-[0.7rem] tracking-[0.14em] text-gold uppercase">{home.hero.meta}</p>
        </aside>
      </div>
    </section>
  );
}
