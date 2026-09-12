import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { aboutPage } from "@/lib/copy";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Jen",
  description: aboutPage.body,
  openGraph: {
    title: "About Jen",
    description: aboutPage.body,
  },
};

export default function AboutPage() {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <Container className="max-w-3xl">
        <p className="eyebrow">{site.name}</p>
        <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-[-0.035em] text-ink md:text-6xl">
          {aboutPage.heading}
        </h1>
        <p className="mt-10 text-[1.12rem] leading-relaxed text-muted">{aboutPage.body}</p>
        <p className="mt-10 font-serif text-3xl leading-snug text-ink">{aboutPage.stance}</p>
        <p className="mt-12 text-[1.05rem] leading-relaxed text-ink">
          {aboutPage.closer}{" "}
          <CtaLink href={routes.contact} variant="ghost">
            {site.cta}
          </CtaLink>
        </p>
      </Container>
    </section>
  );
}
