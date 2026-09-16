"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { home } from "@/lib/copy";

export function Method() {
  return (
    <section id="method" className="scroll-mt-20 bg-navy text-cream" aria-labelledby="method-heading">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-gold">{home.method.eyebrow}</p>
          <h2 id="method-heading" className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-[3.4rem]">
            {home.method.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-[1.08rem] leading-relaxed text-cream/80">{home.method.intro}</p>
          <p className="mt-8 font-serif text-xl italic text-gold sm:text-2xl">
            Discern · Diagnose · Decide · Design · Develop · Deploy
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-12 md:grid-cols-2 xl:grid-cols-3">
          {home.method.steps.map((step, index) => (
            <motion.li
              key={step.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-sans text-sm font-medium tracking-[0.22em] text-gold">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-serif text-3xl">{step.name}</h3>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-cream/80">{step.body}</p>
            </motion.li>
          ))}
        </ol>

        <Reveal className="mt-24 border-t border-gold/40 pt-16" delay={0.1}>
          <article className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
            <div>
              <p className="eyebrow text-gold">{home.method.example.eyebrow}</p>
              <h3 className="mt-4 font-serif text-3xl sm:text-4xl">{home.method.example.heading}</h3>
            </div>
            <p className="text-[1.08rem] leading-relaxed text-cream/85">{home.method.example.body}</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
