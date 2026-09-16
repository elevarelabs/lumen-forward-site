import { Credibility } from "./components/Credibility";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Method } from "./components/Method";
import { Problems } from "./components/Problems";
import { Stewardship } from "./components/Stewardship";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Problems />
        <Method />
        <Stewardship />
        <Credibility />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
