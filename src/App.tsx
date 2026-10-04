import { Experience } from "./components/Experience";
import { FeaturedMenu } from "./components/FeaturedMenu";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { MenuSection } from "./components/MenuSection";
import { Navbar } from "./components/Navbar";
import { Reels } from "./components/Reels";
import { Reviews } from "./components/Reviews";
import { VisitCta } from "./components/VisitCta";
import { WhyVisit } from "./components/WhyVisit";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <WhyVisit />
        <div id="menu">
          <FeaturedMenu />
          <MenuSection />
        </div>
        <Gallery />
        <Reels />
        <Experience />
        <Reviews />
        <Location />
        <VisitCta />
      </main>
      <Footer />
    </>
  );
}
