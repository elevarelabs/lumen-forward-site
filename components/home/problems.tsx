import { Container } from "@/components/container";
import { home } from "@/lib/copy";

export function Problems() {
  return (
    <section className="border-b border-line py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-ink md:text-5xl">
            {home.problems.heading}
          </h2>
          <p className="mt-6 text-[1.08rem] leading-relaxed text-muted">{home.problems.intro}</p>
        </div>
        <ol className="mt-16 grid gap-px bg-line md:grid-cols-3">
          {home.problems.cards.map((card, index) => (
            <li key={card.title} className="bg-canvas px-0 py-10 md:px-8 md:py-12 first:md:pl-0 last:md:pr-0">
              <p className="eyebrow">0{index + 1}</p>
              <h3 className="mt-4 font-serif text-2xl leading-snug tracking-[-0.02em] text-ink">{card.title}</h3>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">{card.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">{home.problems.footnote}</p>
        <p className="mt-8 max-w-2xl font-serif text-2xl leading-snug text-ink">{home.problems.bridge}</p>
      </Container>
    </section>
  );
}
