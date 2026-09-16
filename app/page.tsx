import { Credibility } from "@/components/home/credibility";
import { DiscoveryCta } from "@/components/home/discovery-cta";
import { Hero } from "@/components/home/hero";
import { Method } from "@/components/home/method";
import { Paradox } from "@/components/home/paradox";
import { Scenarios } from "@/components/home/scenarios";
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
      <Method />
      <Paradox />
      <Credibility />
      <DiscoveryCta />
    </>
  );
}
