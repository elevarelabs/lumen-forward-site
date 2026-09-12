import { CtaLink } from "@/components/cta-link";
import { Container } from "@/components/container";
import { home } from "@/lib/copy";
import { routes } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="py-24 md:py-36">
      <Container className="max-w-3xl">
        <h2 className="font-serif text-5xl leading-[1.05] tracking-[-0.035em] text-ink md:text-6xl">
          {home.finalCta.heading}
        </h2>
        <p className="mt-8 text-[1.08rem] leading-relaxed text-muted">{home.finalCta.body}</p>
        <div className="mt-10">
          <CtaLink href={routes.contact}>{home.finalCta.cta}</CtaLink>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted">{home.finalCta.micro}</p>
      </Container>
    </section>
  );
}
