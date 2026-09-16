import { motion, useReducedMotion } from "framer-motion";
import { problems } from "../copy";
import { Reveal } from "./Reveal";

export function Problems() {
  const reduce = useReducedMotion();

  return (
    <section className="section section--cream" id="work" aria-labelledby="work-heading">
      <div className="wrap">
        <Reveal className="section__intro">
          <p className="eyebrow">{problems.kicker}</p>
          <h2 id="work-heading">{problems.heading}</h2>
          <p className="lede">{problems.intro}</p>
        </Reveal>

        <ol className="scenario-grid">
          {problems.scenarios.map((scenario, index) => (
            <motion.li
              key={scenario.num}
              className="scenario"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? undefined : { y: -6 }}
            >
              <p className="scenario__num">{scenario.num}</p>
              <h3>{scenario.title}</h3>
              <p>{scenario.body}</p>
            </motion.li>
          ))}
        </ol>

        <Reveal className="section__close" delay={0.1}>
          <p>{problems.close}</p>
        </Reveal>
      </div>
    </section>
  );
}
