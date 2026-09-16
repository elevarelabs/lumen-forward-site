import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { contactPage } from "@/lib/copy";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Let's Talk",
  description: contactPage.intro,
  openGraph: {
    title: "Let's Talk",
    description: contactPage.intro,
  },
};

export default function ContactPage() {
  return (
    <article className="bg-cream px-6 py-24 lg:py-32">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 md:flex-row">
        <div className="w-full md:w-5/12">
          <Reveal>
            <h1 className="font-serif text-5xl text-navy">{contactPage.heading}</h1>
            <div className="mt-6 mb-8 h-1 w-12 bg-gold" aria-hidden />
            <p className="mb-8 text-lg leading-relaxed text-navy/80">{contactPage.intro}</p>
            <p className="text-lg leading-relaxed text-navy/80">{contactPage.body}</p>
            <div className="mt-16 border-t border-navy/10 pt-8">
              <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-gold uppercase">{contactPage.direct}</p>
              <a href={`mailto:${site.email}`} className="block font-serif text-xl text-navy transition-colors hover:text-gold">
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>
        <div className="w-full md:w-7/12">
          <Reveal delay={0.1} className="border border-navy/10 bg-cream p-8 sm:p-12">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </article>
  );
}
