import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { contactPage } from "@/lib/copy";

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
    <section className="border-b border-line py-20 md:py-28">
      <Container className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-start">
        <div>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-[-0.035em] text-ink md:text-6xl">
            {contactPage.heading}
          </h1>
          <p className="mt-8 max-w-xl text-[1.08rem] leading-relaxed text-muted">{contactPage.intro}</p>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
