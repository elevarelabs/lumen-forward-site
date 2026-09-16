"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { home } from "@/lib/copy";

export function Hero() {
  const reduce = useReducedMotion();
  const fade = reduce
    ? undefined
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section
      className="relative flex min-h-[calc(100svh-6rem)] flex-col border-b border-navy/10 md:flex-row md:items-stretch"
      aria-labelledby="hero-heading"
    >
      <div className="order-2 flex w-full flex-col justify-center px-6 py-16 sm:px-10 md:order-1 md:w-[55%] md:py-24 lg:px-16">
        <motion.div className="max-w-xl" {...fade}>
          <h1
            id="hero-heading"
            className="font-serif text-[clamp(3.1rem,8vw,8.5rem)] leading-[0.9] font-medium tracking-tight text-navy text-balance"
          >
            {home.hero.h1}
          </h1>
          <p className="mt-10 max-w-lg font-serif text-3xl leading-snug text-navy/80 md:text-4xl">
            {home.hero.deck}
          </p>
          <div className="mt-8 h-px w-full max-w-sm bg-navy/20" aria-hidden />
          <p className="mt-8 max-w-md text-lg leading-relaxed font-medium text-navy/70">
            {home.hero.body}
          </p>
          <div className="mt-14 flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-12">
            <Link
              href={home.hero.ctaHref}
              className="inline-flex h-16 items-center justify-center bg-navy px-12 text-xs font-semibold tracking-[0.2em] text-cream uppercase transition-colors hover:bg-navy-soft"
            >
              {home.hero.cta}
            </Link>
            <Link
              href={home.hero.secondaryHref}
              className="group relative pb-2 text-sm font-semibold tracking-[0.2em] text-navy uppercase transition-colors hover:text-gold"
            >
              {home.hero.secondaryCta}
              <span className="absolute bottom-0 left-0 h-px w-full bg-navy/20 transition-colors group-hover:bg-gold" />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="relative order-1 h-[50vh] w-full border-navy/10 md:order-2 md:h-auto md:min-h-[calc(100svh-6rem)] md:w-[45%] md:border-l">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={home.hero.imageSrc}
          alt={home.hero.imageAlt}
          className="h-full w-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-navy/5 mix-blend-multiply" />
      </div>
    </section>
  );
}
