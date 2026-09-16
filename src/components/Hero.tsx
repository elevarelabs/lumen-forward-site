import { motion, useReducedMotion } from "framer-motion";
import { hero } from "../copy";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero__grid">
        <div className="hero__copy">
          <motion.p
            className="eyebrow"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.eyebrow}
          </motion.p>
          <motion.h1
            id="hero-heading"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero__line">{hero.lineOne}</span>
            <span className="hero__line hero__line--shift">{hero.lineTwo}</span>
          </motion.h1>
        </div>

        <motion.aside
          className="hero__panel"
          initial={reduce ? false : { opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero__honor">{hero.honor}</p>
          <p className="hero__lede">{hero.lede}</p>
          <p className="hero__meta">{hero.meta}</p>
          <div className="hero__actions">
            <a className="btn btn--gold" href="#connect">
              {hero.primaryCta}
            </a>
            <a className="text-link text-link--cream" href="#work">
              {hero.secondaryCta}
            </a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
