import { motion, useReducedMotion } from "framer-motion";
import { credibility } from "../copy";
import { Reveal } from "./Reveal";

export function Credibility() {
  const reduce = useReducedMotion();

  return (
    <section className="section section--cream" id="record" aria-labelledby="record-heading">
      <div className="wrap">
        <Reveal className="section__intro">
          <p className="eyebrow">{credibility.kicker}</p>
          <h2 id="record-heading">{credibility.heading}</h2>
          <p className="lede">{credibility.intro}</p>
        </Reveal>

        <ul className="record-grid">
          {credibility.marks.map((mark, index) => (
            <motion.li
              key={mark.title}
              className="record-card"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <h3>{mark.title}</h3>
              <p>{mark.body}</p>
            </motion.li>
          ))}
        </ul>

        <Reveal className="section__close" delay={0.08}>
          <p>{credibility.close}</p>
        </Reveal>
      </div>
    </section>
  );
}
