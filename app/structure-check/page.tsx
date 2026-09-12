import type { Metadata } from "next";
import { Container } from "@/components/container";
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
    <section className="border-b border-line py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow">Free · ~3 minutes · six questions</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-[-0.035em] text-ink md:text-6xl">
            {structureCheckPage.heading}
          </h1>
          <p className="mt-8 text-[1.08rem] leading-relaxed text-muted">{structureCheckPage.lede}</p>
          <p className="mt-4 font-serif text-2xl leading-snug text-ink">{structureCheckPage.tagline}</p>
        </div>
        <div className="mt-14">
          <StructureCheckQuiz />
        </div>
      </Container>
    </section>
  );
}
