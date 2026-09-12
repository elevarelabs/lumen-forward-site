import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { engagementsPage } from "@/lib/copy";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engagements",
  description: engagementsPage.intro,
  openGraph: {
    title: "Engagements",
    description: engagementsPage.intro,
  },
};

export default function EngagementsPage() {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl leading-[1.05] tracking-[-0.035em] text-ink md:text-6xl">
            {engagementsPage.heading}
          </h1>
          <p className="mt-8 text-[1.08rem] leading-relaxed text-muted">{engagementsPage.intro}</p>
        </div>

        <ol className="mt-16 divide-y divide-line border-y border-line">
          {engagementsPage.rungs.map((rung, index) => (
            <li key={rung.name} className="grid gap-4 py-12 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-10">
              <p className="font-serif text-3xl text-accent">0{index + 1}</p>
              <div>
                <p className="eyebrow">{rung.meta}</p>
                <h2 className="mt-3 font-serif text-3xl tracking-[-0.02em] text-ink">{rung.name}</h2>
                <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted">{rung.body}</p>
                {"href" in rung && rung.href ? (
                  <div className="mt-6">
                    <CtaLink href={rung.href} variant="secondary">
                      {rung.cta}
                    </CtaLink>
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20 max-w-2xl">
          <h2 className="font-serif text-3xl tracking-[-0.02em] text-ink">{engagementsPage.fit.heading}</h2>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-muted">{engagementsPage.fit.good}</p>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">{engagementsPage.fit.not}</p>
        </div>

        <div className="mt-12">
          <CtaLink href={routes.contact}>{engagementsPage.cta}</CtaLink>
        </div>
      </Container>
    </section>
  );
}
