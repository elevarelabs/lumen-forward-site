import { CtaLink } from "@/components/cta-link";
import { Container } from "@/components/container";
import { home } from "@/lib/copy";
import { routes } from "@/lib/site";

export function AboutJen() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] text-ink md:text-5xl">
            {home.about.heading}
          </h2>
        </div>
        <div>
          <p className="text-[1.08rem] leading-relaxed text-muted">{home.about.body}</p>
          <p className="mt-8 font-serif text-2xl leading-snug text-ink">{home.about.oneLiner}</p>
          <div className="mt-10">
            <CtaLink href={routes.about} variant="secondary">
              More about Jen
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
