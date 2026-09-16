"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { home } from "@/lib/copy";

export function Credibility() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-navy/10 bg-cream" aria-labelledby="credibility-heading">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-navy-soft">{home.credibility.eyebrow}</p>
          <h2 id="credibility-heading" className="mt-5 font-serif text-4xl leading-tight text-navy sm:text-5xl">
            {home.credibility.heading}
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-10 md:grid-cols-3">
          {home.credibility.stats.map((stat, index) => (
            <motion.li
              key={stat.label}
              className="border-t border-gold pt-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-serif text-4xl tabular-nums text-navy">{stat.value}</p>
              <p className="mt-2 text-[0.78rem] font-medium tracking-[0.16em] text-navy uppercase">{stat.label}</p>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-navy-soft">{stat.detail}</p>
            </motion.li>
          ))}
        </ul>

        <Reveal className="mt-20 grid gap-10 border-t border-navy/10 pt-16 lg:grid-cols-[0.8fr_1.4fr]" delay={0.08}>
          <div>
            <p className="eyebrow text-navy-soft">{home.credibility.aboutEyebrow}</p>
            <h3 className="mt-4 font-serif text-3xl text-navy sm:text-4xl">{home.credibility.aboutHeading}</h3>
          </div>
          <div className="space-y-5">
            {home.credibility.about.map((paragraph) => (
              <p key={paragraph.slice(0, 28)} className="text-[1.08rem] leading-relaxed text-navy-soft">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
