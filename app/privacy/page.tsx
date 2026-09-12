import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { privacyPage } from "@/lib/copy";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: privacyPage.sections[0].body,
};

export default function PrivacyPage() {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <Container className="max-w-3xl">
        <p className="eyebrow">Updated {privacyPage.updated}</p>
        <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-[-0.035em] text-ink md:text-6xl">
          {privacyPage.heading}
        </h1>
        <div className="mt-12 space-y-10">
          {privacyPage.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-2xl tracking-[-0.02em] text-ink">{section.title}</h2>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">{section.body}</p>
            </section>
          ))}
        </div>
        <div className="mt-12">
          <CtaLink href={routes.contact} variant="secondary">
            {site.cta}
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
