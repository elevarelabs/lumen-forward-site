"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { home } from "@/lib/copy";

export function Scenarios() {
  return (
    <section id="scenarios" className="scroll-mt-20 border-t border-navy/10 bg-cream" aria-labelledby="scenarios-heading">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-navy-soft">{home.scenarios.eyebrow}</p>
          <h2 id="scenarios-heading" className="mt-5 font-serif text-4xl leading-tight text-navy sm:text-5xl lg:text-[3.4rem]">
            {home.scenarios.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-[1.08rem] leading-relaxed text-navy-soft">{home.scenarios.intro}</p>
        </Reveal>

        <ol className="mt-16 grid gap-px bg-navy/10 sm:grid-cols-2">
          {home.scenarios.items.map((item, index) => (
            <motion.li
              key={item.number}
              className="group bg-cream p-8 sm:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2 }}
            >
              <p className="font-serif text-3xl text-gold">{item.number}</p>
              <h3 className="mt-5 font-serif text-[1.7rem] leading-snug text-navy">{item.title}</h3>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-navy-soft">{item.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
