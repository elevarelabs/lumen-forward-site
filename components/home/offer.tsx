import { CtaLink } from "@/components/cta-link";
import { Container } from "@/components/container";
import { home } from "@/lib/copy";
import { routes } from "@/lib/site";

export function Offer() {
  return (
    <section className="border-b border-line py-24 md:py-32">
      <Container className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
        <div>
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-ink md:text-5xl">
            {home.offer.heading}
          </h2>
          <p className="mt-6 text-[1.08rem] leading-relaxed text-muted">{home.offer.body}</p>
          <p className="mt-8 text-[1.05rem] leading-relaxed text-ink">{home.offer.ladder}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{home.offer.feeNote}</p>
          <div className="mt-10">
            <CtaLink href={routes.contact}>{home.offer.cta}</CtaLink>
          </div>
        </div>
        <ul className="border-t border-line">
          {home.offer.includes.map((item) => (
            <li key={item} className="border-b border-line py-4 text-[1.02rem] leading-relaxed text-ink">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
