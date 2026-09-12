import Link from "next/link";
import { footerLinks, routes, site } from "@/lib/site";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link href={routes.home} className="font-serif text-xl tracking-[-0.02em] text-ink">
            {site.name}
          </Link>
          <p className="mt-3 font-serif text-lg leading-snug text-ink">{site.h1}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-[0.875rem] text-muted">
          {footerLinks.map((item) => (
            <Link key={`${item.href}-${item.label}`} href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
