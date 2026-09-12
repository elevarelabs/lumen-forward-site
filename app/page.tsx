import { AboutJen } from "@/components/home/about-jen";
import { FinalCta } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { HowWeWork } from "@/components/home/how-we-work";
import { Offer } from "@/components/home/offer";
import { Outcomes } from "@/components/home/outcomes";
import { Problems } from "@/components/home/problems";
import { StructureCheckStrip } from "@/components/home/structure-check-strip";
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
    name: "Jen Zils",
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Problems />
      <Offer />
      <HowWeWork />
      <Outcomes />
      <StructureCheckStrip />
      <AboutJen />
      <FinalCta />
    </>
  );
}
