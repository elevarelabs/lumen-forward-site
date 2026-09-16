"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { home } from "@/lib/copy";

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 bg-navy text-cream" aria-labelledby="work-heading">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-gold">{home.work.eyebrow}</p>
          <h2 id="work-heading" className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-[3.4rem]">
            {home.work.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-[1.08rem] leading-relaxed text-cream/80">{home.work.intro}</p>
        </Reveal>

        <ol className="mt-16 grid gap-12 md:grid-cols-3">
          {home.work.beats.map((beat, index) => (
            <motion.li
              key={beat.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-sans text-sm font-medium tracking-[0.22em] text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-3xl">{beat.name}</h3>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-cream/80">{beat.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
