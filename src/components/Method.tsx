import { method } from "../copy";
import { Reveal } from "./Reveal";

export function Method() {
  return (
    <section className="section section--method" id="method" aria-labelledby="method-heading">
      <div className="wrap method">
        <div className="method__sticky">
          <p className="eyebrow">{method.kicker}</p>
          <h2 id="method-heading">{method.heading}</h2>
          <p className="lede">{method.intro}</p>
        </div>

        <ol className="method__timeline">
          {method.phases.map((phase, index) => (
            <li key={phase.name} className="method__phase">
              <span className="method__marker" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Reveal delay={index * 0.04}>
                <div className="method__body">
                  <h3>
                    <span className="sr-only">Phase {index + 1}. </span>
                    {phase.name}
                  </h3>
                  <p>{phase.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
