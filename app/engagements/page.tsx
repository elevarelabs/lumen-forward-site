import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
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
    <article className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="max-w-2xl">
          <h1 className="font-serif text-5xl leading-[1.05] text-navy md:text-6xl">{engagementsPage.heading}</h1>
          <p className="mt-8 text-[1.08rem] leading-relaxed text-navy-soft">{engagementsPage.intro}</p>
        </Reveal>

        <ol className="mt-16 divide-y divide-navy/10 border-y border-navy/10">
          {engagementsPage.rungs.map((rung, index) => (
            <li key={rung.name} className="grid gap-4 py-12 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-10">
              <p className="font-sans text-sm font-medium tracking-[0.2em] text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <p className="eyebrow text-navy-soft">{rung.meta}</p>
                <h2 className="mt-3 font-serif text-3xl text-navy">{rung.name}</h2>
                <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-navy-soft">{rung.body}</p>
                <div className="mt-6">
                  <CtaLink
                    href={rung.href}
                    variant={rung.cta === "Let's Talk" ? "secondary" : "quiet"}
                    className={rung.cta === "Let's Talk" ? "" : "text-navy"}
                  >
                    {rung.cta}
                  </CtaLink>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <section id="report" className="scroll-mt-24 mt-20 border-t border-navy/10 pt-16">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-navy-soft">{engagementsPage.report.eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">{engagementsPage.report.heading}</h2>
            <p className="mt-6 text-[1.08rem] leading-relaxed text-navy-soft">{engagementsPage.report.lede}</p>
          </Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-3">
            {engagementsPage.report.sections.map((section) => (
              <Reveal key={section.title}>
                <h3 className="font-serif text-2xl text-navy">{section.title}</h3>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-navy-soft">{section.body}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 max-w-2xl text-[1.05rem] leading-relaxed text-navy">{engagementsPage.report.close}</p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
            <CtaLink href={routes.structureCheck} variant="quiet" className="text-navy">
              Take the Structure Check
            </CtaLink>
            <CtaLink href={routes.contact} variant="secondary">
              {engagementsPage.cta}
            </CtaLink>
          </div>
        </section>

        <Reveal className="mt-20 max-w-2xl">
          <h2 className="font-serif text-3xl text-navy">{engagementsPage.fit.heading}</h2>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-navy-soft">{engagementsPage.fit.good}</p>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-navy-soft">{engagementsPage.fit.not}</p>
        </Reveal>
      </div>
    </article>
  );
}
