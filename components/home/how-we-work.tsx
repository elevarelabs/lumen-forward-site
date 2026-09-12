import { Container } from "@/components/container";
import { home } from "@/lib/copy";

export function HowWeWork() {
  return (
    <section id="how-we-work" className="scroll-mt-24 border-b border-line py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-ink md:text-5xl">
            {home.howWeWork.heading}
          </h2>
          <p className="mt-6 font-serif text-2xl leading-snug text-ink">{home.howWeWork.subhead}</p>
        </div>
        <ol className="mt-16 divide-y divide-line border-y border-line">
          {home.howWeWork.steps.map((step, index) => (
            <li key={step.title} className="grid gap-4 py-10 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-10">
              <p className="font-serif text-3xl text-accent">0{index + 1}</p>
              <div>
                <h3 className="font-serif text-2xl leading-snug tracking-[-0.02em] text-ink">{step.title}</h3>
                <p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-12 max-w-2xl font-serif text-2xl leading-snug text-ink">{home.howWeWork.closing}</p>
      </Container>
    </section>
  );
}
