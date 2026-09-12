import { CtaLink } from "@/components/cta-link";
import { Container } from "@/components/container";
import { home } from "@/lib/copy";
import { routes } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="paper-grain pointer-events-none absolute inset-0 opacity-[0.045]" />
      <Container className="relative grid min-h-[calc(100vh-4.25rem)] items-center py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="eyebrow">{home.hero.eyebrow}</p>
          <h1 className="mt-6 font-serif text-[3.15rem] leading-[1.02] tracking-[-0.035em] text-ink sm:text-6xl md:text-7xl lg:text-[5.15rem]">
            {home.hero.h1}
          </h1>
          <p className="mt-8 max-w-2xl font-serif text-2xl leading-snug text-ink sm:text-[1.85rem]">
            {home.hero.subhead}
          </p>
          <p className="measure mt-6 text-[1.08rem] leading-relaxed text-muted">{home.hero.supporting}</p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
            <CtaLink href={routes.contact}>{home.hero.primaryCta}</CtaLink>
            <CtaLink href={routes.structureCheck} variant="secondary">
              {home.hero.secondaryCta}
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
