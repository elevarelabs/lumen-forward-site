import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { routes, site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="border-b border-line py-24 md:py-32">
      <Container className="max-w-2xl">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-[-0.035em] text-ink">
          {site.h1}
        </h1>
        <p className="mt-6 text-[1.08rem] leading-relaxed text-muted">This page is not on the site.</p>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
          <CtaLink href={routes.contact}>{site.cta}</CtaLink>
          <CtaLink href={routes.home} variant="secondary">
            Back home
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
