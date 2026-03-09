import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustedBy } from "./components/TrustedBy";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { HowItWorks } from "./components/HowItWorks";
import { Gallery } from "./components/Gallery";
import { Reviews } from "./components/Reviews";
import { CTABanner } from "./components/CTABanner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <About />
        <HowItWorks />
        <Gallery />
        <Reviews />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
