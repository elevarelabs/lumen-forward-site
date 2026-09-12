import { Container } from "@/components/container";
import { home } from "@/lib/copy";

export function Outcomes() {
  return (
    <section id="outcomes" className="scroll-mt-24 border-b border-line py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-ink md:text-5xl">
            {home.outcomes.heading}
          </h2>
          <p className="mt-6 text-[1.08rem] leading-relaxed text-muted">{home.outcomes.intro}</p>
        </div>
        <dl className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {home.outcomes.items.map((item) => (
            <div key={item.title} className="border-t border-line pt-6">
              <dt className="font-serif text-2xl tracking-[-0.02em] text-ink">{item.title}</dt>
              <dd className="mt-3 text-[1.02rem] leading-relaxed text-muted">{item.body}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
