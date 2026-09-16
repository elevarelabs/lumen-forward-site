"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, routes, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-24 w-full max-w-[1500px] items-center justify-between px-6 lg:px-16">
        <Link href={routes.home} className="font-serif text-2xl tracking-wide text-navy">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors ${
                pathname === item.href ? "text-gold" : "text-navy/60 hover:text-navy"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={routes.contact}
            className="ml-6 bg-navy px-10 py-4 text-xs font-semibold tracking-[0.2em] text-cream uppercase transition-colors hover:bg-navy-soft"
          >
            {site.cta}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-navy md:hidden"
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
        <div id="mobile-nav" className="border-t border-navy/10 bg-cream md:hidden">
          <nav className="mx-auto flex max-w-[1500px] flex-col items-start gap-6 px-6 py-10" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-serif text-4xl tracking-tight ${pathname === item.href ? "text-gold" : "text-navy"}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={routes.contact}
              className="mt-4 inline-flex bg-navy px-12 py-5 text-xs font-semibold tracking-[0.2em] text-cream uppercase"
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
