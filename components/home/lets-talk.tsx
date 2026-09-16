"use client";

import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { home } from "@/lib/copy";
import { routes } from "@/lib/site";

export function LetsTalk() {
  return (
    <section
      className="border-b border-cream/10 bg-navy px-6 py-40 text-center text-cream lg:px-16 lg:py-56"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <h2
            id="contact-heading"
            className="font-serif text-6xl leading-[1.05] tracking-tight md:text-8xl lg:text-[8rem]"
          >
            {home.cta.heading}
          </h2>
          <Link
            href={routes.contact}
            className="mt-20 inline-flex h-20 items-center justify-center bg-gold px-16 text-sm font-semibold tracking-[0.2em] text-navy uppercase transition-colors hover:bg-cream"
          >
            {home.cta.button}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
