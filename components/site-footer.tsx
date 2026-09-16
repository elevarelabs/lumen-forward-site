import Link from "next/link";
import { footerLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-cream">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="font-serif text-lg text-navy">{site.name}</p>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.8rem] tracking-[0.08em] text-navy-soft uppercase">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-navy">
              {item.label}
            </Link>
          ))}
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-navy">
            {site.email}
          </a>
        </nav>
      </div>
    </footer>
  );
}
