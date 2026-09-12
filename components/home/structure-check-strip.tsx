import { CtaLink } from "@/components/cta-link";
import { Container } from "@/components/container";
import { home } from "@/lib/copy";
import { routes } from "@/lib/site";

export function StructureCheckStrip() {
  return (
    <section className="border-b border-line py-24 md:py-32">
      <Container>
        <div className="border border-line bg-surface px-6 py-12 sm:px-12 sm:py-16 md:px-16">
          <p className="eyebrow">{home.structureCheck.kicker}</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] text-ink md:text-5xl">
            {home.structureCheck.heading}
          </h2>
          <p className="measure mt-6 text-[1.08rem] leading-relaxed text-muted">{home.structureCheck.body}</p>
          <p className="mt-6 font-serif text-2xl leading-snug text-ink">{home.structureCheck.tagline}</p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
            <CtaLink href={routes.structureCheck}>{home.structureCheck.primaryCta}</CtaLink>
            <p className="text-[0.95rem] text-muted">
              {home.structureCheck.secondaryLead}{" "}
              <CtaLink href={routes.contact} variant="ghost">
                {home.structureCheck.secondaryCta}
              </CtaLink>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
