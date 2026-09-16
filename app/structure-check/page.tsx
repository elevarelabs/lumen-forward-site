import type { Metadata } from "next";
import { StructureCheckQuiz } from "@/components/structure-check-quiz";
import { structureCheckPage } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Structure Check",
  description: structureCheckPage.lede,
  openGraph: {
    title: "Structure Check",
    description: structureCheckPage.lede,
  },
};

export default function StructureCheckPage() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-navy-soft">{structureCheckPage.eyebrow}</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-navy md:text-6xl">
            {structureCheckPage.heading}
          </h1>
          <p className="mt-8 text-[1.08rem] leading-relaxed text-navy-soft">{structureCheckPage.lede}</p>
          <p className="mt-4 font-serif text-2xl leading-snug text-navy">{structureCheckPage.tagline}</p>
        </div>
        <div className="mt-14 max-w-3xl">
          <StructureCheckQuiz />
        </div>
      </div>
    </section>
  );
}
