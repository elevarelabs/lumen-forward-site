import { Credibility } from "@/components/home/credibility";
import { Hero } from "@/components/home/hero";
import { ImageBreak } from "@/components/home/image-break";
import { LetsTalk } from "@/components/home/lets-talk";
import { Outcomes } from "@/components/home/outcomes";
import { Scenarios } from "@/components/home/scenarios";
import { Work } from "@/components/home/work";
import { home } from "@/lib/copy";
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
      <ImageBreak src={home.officeBreak.src} alt={home.officeBreak.alt} />
      <Work />
      <Outcomes />
      <Credibility />
      <ImageBreak
        src={home.teamBreak.src}
        alt={home.teamBreak.alt}
        className="h-[50vh] md:h-[70vh]"
      />
      <LetsTalk />
    </>
  );
}
