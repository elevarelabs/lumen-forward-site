import Link from "next/link";
import { routes, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy py-24 text-cream lg:py-32">
      <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-16">
        <div className="mb-32 grid grid-cols-1 gap-16 md:grid-cols-12 lg:gap-8">
          <div className="md:col-span-5 lg:col-span-4">
            <Link href={routes.home} className="mb-8 block font-serif text-3xl tracking-wide text-cream">
              {site.name}
            </Link>
            <p className="max-w-sm text-lg font-light leading-relaxed text-cream/60">
              {site.tagline} For founder-led businesses when growth outpaces structure.
            </p>
          </div>

          <div className="md:col-span-3 lg:col-span-2 lg:col-start-8">
            <h2 className="mb-8 text-xs font-semibold tracking-[0.2em] text-gold uppercase">Practice</h2>
            <ul className="space-y-6 text-base font-light text-cream/70">
              <li>
                <Link href={routes.engagements} className="transition-colors hover:text-cream">
                  Engagements
                </Link>
              </li>
              <li>
                <Link href={routes.structureCheck} className="transition-colors hover:text-cream">
                  Structure Check
                </Link>
              </li>
              <li>
                <Link href={routes.about} className="transition-colors hover:text-cream">
                  About Jen Zils
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="mb-8 text-xs font-semibold tracking-[0.2em] text-gold uppercase">Connect</h2>
            <ul className="space-y-6 text-base font-light text-cream/70">
              <li>
                <Link href={routes.contact} className="transition-colors hover:text-cream">
                  {site.cta}
                </Link>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-cream">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-cream/20 pt-8 text-sm font-light text-cream/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {site.legal}.</p>
          <Link href={routes.privacy} className="transition-colors hover:text-cream">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
