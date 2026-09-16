import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { aboutPage } from "@/lib/copy";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: aboutPage.heading,
  openGraph: {
    title: `About ${site.founder}`,
    description: aboutPage.heading,
  },
};

export default function AboutPage() {
  return (
    <article className="bg-cream">
      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-16 md:flex-row">
          <div className="w-full md:w-1/3">
            <Reveal>
              <div className="relative aspect-[3/4] border border-navy/10 bg-navy/5 p-4">
                <div className="flex h-full w-full items-center justify-center">
                  <p className="font-serif text-lg text-navy/20 italic">{site.founder}</p>
                </div>
                <div className="absolute -top-4 -right-4 h-16 w-16 border-t-2 border-r-2 border-gold" />
                <div className="absolute -bottom-4 -left-4 h-16 w-16 border-b-2 border-l-2 border-gold" />
              </div>
            </Reveal>
          </div>
          <div className="w-full md:w-2/3">
            <Reveal delay={0.08}>
              <h1 className="font-serif text-5xl leading-tight text-navy text-balance">{aboutPage.heading}</h1>
              <div className="mt-8 space-y-6 text-lg leading-relaxed font-medium text-navy/80">
                {aboutPage.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-navy/[0.03] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="mb-12 text-center font-serif text-3xl text-navy">{aboutPage.trackHeading}</h2>
          </Reveal>
          <ol className="divide-y divide-navy/10 border-y border-navy/10">
            {aboutPage.track.map((item) => (
              <Reveal key={item.org}>
                <li className="grid gap-4 py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-10">
                  <div>
                    <div className="mb-5 h-1 w-8 bg-gold" aria-hidden />
                    <h3 className="font-serif text-2xl text-navy">{item.org}</h3>
                    <p className="mt-2 text-sm font-semibold tracking-wide text-navy/60 uppercase">{item.role}</p>
                  </div>
                  <p className="text-[1.02rem] leading-relaxed text-navy/80">{item.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </article>
  );
}
