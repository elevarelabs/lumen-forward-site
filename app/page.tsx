import { ClientExample } from "@/components/home/client-example";
import { Credibility } from "@/components/home/credibility";
import { Hero } from "@/components/home/hero";
import { LetsTalk } from "@/components/home/lets-talk";
import { Scenarios } from "@/components/home/scenarios";
import { Work } from "@/components/home/work";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.meta.description,
  url: site.url,
  slogan: site.h1,
  founder: {
    "@type": "Person",
    name: site.founder,
    jobTitle: "Founder",
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Scenarios />
      <Work />
      <Credibility />
      <ClientExample />
      <LetsTalk />
    </>
  );
}
