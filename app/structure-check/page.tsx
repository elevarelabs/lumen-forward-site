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
    <section className="flex flex-grow items-center justify-center bg-cream px-6 py-12 md:py-24">
      <div className="mx-auto w-full max-w-3xl">
        <StructureCheckQuiz />
      </div>
    </section>
  );
}
