import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { engagementsPage } from "@/lib/copy";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engagements",
  description: engagementsPage.intro,
  openGraph: {
    title: engagementsPage.heading,
    description: engagementsPage.intro,
  },
};

export default function EngagementsPage() {
  return (
    <article className="bg-cream">
      <section className="border-b border-navy/10 px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h1 className="font-serif text-5xl leading-tight text-navy text-balance md:text-6xl">
              {engagementsPage.heading}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-navy/70">{engagementsPage.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <ol className="divide-y divide-navy/10 border-y border-navy/10">
            {engagementsPage.rungs.map((rung, index) => (
              <li key={rung.name} className="grid gap-6 py-14 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-12">
                <p className="text-sm font-semibold tracking-[0.2em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="text-sm font-semibold tracking-[0.2em] text-gold uppercase">{rung.label}</p>
                  <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">{rung.name}</h2>
                  <p className="mt-2 text-lg text-navy/60">{rung.meta}</p>
                  {"note" in rung && rung.note ? (
                    <p className="mt-2 text-xs font-semibold tracking-[0.16em] text-navy/50 uppercase">{rung.note}</p>
                  ) : null}
                  <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-navy/70">{rung.body}</p>
                  <div className="mt-8">
                    <CtaLink
                      href={rung.href}
                      variant={rung.cta === "Let's Talk" ? "primary" : "quiet"}
                      className={rung.cta === "Let's Talk" ? "" : "text-navy"}
                    >
                      {rung.cta}
                    </CtaLink>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-navy/10 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="mb-16 text-center font-serif text-4xl text-navy">{engagementsPage.fitHeading}</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <Reveal delay={0.06}>
              <h3 className="mb-6 font-serif text-2xl text-navy">{engagementsPage.goodHeading}</h3>
              <ul className="space-y-4">
                {engagementsPage.good.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-navy/80">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="mb-6 font-serif text-2xl text-navy">{engagementsPage.notHeading}</h3>
              <ul className="space-y-4">
                {engagementsPage.not.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-navy/80">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-navy/30" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-24 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl text-cream">{engagementsPage.closeHeading}</h2>
          <div className="mt-8">
            <CtaLink href={routes.contact}>{engagementsPage.cta}</CtaLink>
          </div>
        </Reveal>
      </section>
    </article>
  );
}
