import { paradox } from "../copy";
import { Reveal } from "./Reveal";

export function Stewardship() {
  return (
    <section className="section section--navy" id="paradox" aria-labelledby="paradox-heading">
      <div className="wrap paradox">
        <Reveal>
          <p className="eyebrow eyebrow--gold">{paradox.kicker}</p>
          <h2 id="paradox-heading">{paradox.heading}</h2>
        </Reveal>
        <blockquote className="paradox__rail">
          <p>{paradox.pull}</p>
        </blockquote>
        <Reveal className="paradox__copy" delay={0.08}>
          {paradox.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="paradox__close">{paradox.close}</p>
        </Reveal>
      </div>
    </section>
  );
}
