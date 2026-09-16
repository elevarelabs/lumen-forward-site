import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { privacyPage } from "@/lib/copy";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legal} handles messages sent through this site.`,
};

export default function PrivacyPage() {
  return (
    <article className="bg-cream">
      <div className="mx-auto w-full max-w-3xl px-6 py-24 lg:py-32">
        <Reveal>
          <h1 className="font-serif text-4xl text-navy sm:text-5xl">{privacyPage.heading}</h1>
          <div className="mt-8 mb-12 h-1 w-12 bg-gold" aria-hidden />
          <p className="text-navy/80">Last updated: {privacyPage.updated}</p>
        </Reveal>
        <div className="mt-12 space-y-8 leading-relaxed text-navy/80">
          {privacyPage.sections.map((section) => (
            <Reveal key={section.title}>
              <section>
                <h2 className="mb-4 font-serif text-2xl text-navy">{section.title}</h2>
                <p>{section.body}</p>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
