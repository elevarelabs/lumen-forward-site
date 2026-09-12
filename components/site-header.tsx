"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, routes, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] w-full max-w-[1120px] items-center justify-between px-6 sm:px-8">
        <Link href={routes.home} className="font-serif text-[1.2rem] tracking-[-0.02em] text-ink">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.8125rem] tracking-[0.01em] text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={routes.contact}
            className="bg-accent px-4 py-2 text-[0.8125rem] font-medium tracking-[0.01em] text-canvas transition-colors hover:bg-accent-hover"
          >
            {site.cta}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 block h-px w-5 bg-ink transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-px w-5 bg-ink transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-ink transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-canvas lg:hidden">
          <nav className="mx-auto flex max-w-[1120px] flex-col gap-1 px-6 py-5 sm:px-8" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2.5 text-[1.05rem] text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={routes.contact}
              className="mt-3 inline-flex w-fit bg-accent px-5 py-3 text-[0.9375rem] text-canvas"
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
