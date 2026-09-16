"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, routes, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/92 backdrop-blur-md">
      <div className="mx-auto flex h-[4.75rem] w-full max-w-[1400px] items-center justify-between px-6 sm:px-10 lg:px-14">
        <Link href={routes.home} className="font-serif text-[1.35rem] tracking-[-0.02em] text-navy">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.75rem] font-medium tracking-[0.08em] text-navy-soft uppercase transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={routes.contact}
            className="bg-navy px-4 py-2 text-[0.78rem] font-medium tracking-[0.12em] text-cream uppercase transition-colors hover:bg-navy-soft"
          >
            {site.cta}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 block h-px w-5 bg-navy transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 block h-px w-5 bg-navy transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 block h-px w-5 bg-navy transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-navy/10 bg-cream lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col gap-1 px-5 py-5 sm:px-8" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2.5 text-[1.05rem] text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={routes.contact}
              className="mt-3 inline-flex w-fit bg-navy px-5 py-3 text-[0.9rem] text-cream"
              onClick={() => setOpen(false)}
            >
              {site.cta}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
