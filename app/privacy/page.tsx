import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { privacyPage } from "@/lib/copy";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles messages sent through this site.`,
};

export default function PrivacyPage() {
  return (
    <article className="bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <p className="eyebrow text-navy-soft">Updated {privacyPage.updated}</p>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-navy sm:text-6xl">{privacyPage.heading}</h1>
        </Reveal>
        <div className="mt-16 space-y-12">
          {privacyPage.sections.map((section) => (
            <Reveal key={section.title}>
              <section>
                <h2 className="font-serif text-2xl text-navy">{section.title}</h2>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-navy-soft">{section.body}</p>
              </section>
            </Reveal>
          ))}
        </div>
        <p className="mt-16">
          <Link href={routes.home} className="text-sm font-medium text-navy underline decoration-gold decoration-2 underline-offset-4">
            Back to the homepage
          </Link>
        </p>
      </div>
    </article>
  );
}
