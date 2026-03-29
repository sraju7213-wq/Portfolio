import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import DualHero from "./components/DualHero";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Brands from "./components/Brands";
import Portfolio from "./components/Portfolio";
import PersonalProjects from "./components/PersonalProjects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import LoadingScreen from "./components/LoadingScreen";
import NoiseOverlay from "./components/NoiseOverlay";

const Services = lazy(() => import("./components/Services"));
const Achievements = lazy(() => import("./components/Achievements"));
const CTABanner = lazy(() => import("./components/CTABanner"));
const FloatingParticles = lazy(() => import("./components/FloatingParticles"));

function LoadingFallback() {
  return <div className="min-h-screen" />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-body antialiased">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <NoiseOverlay />
      <Navbar />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <div className="hidden md:block">
            <FloatingParticles />
          </div>
        </Suspense>
        <DualHero />
        <About />
        <Suspense fallback={<LoadingFallback />}>
          <Services />
        </Suspense>
        <Skills />
        <Suspense fallback={<LoadingFallback />}>
          <Achievements />
        </Suspense>
        <Experience />
        <Brands />
        <Portfolio />
        <PersonalProjects />
        <Education />
        <Suspense fallback={<LoadingFallback />}>
          <CTABanner />
        </Suspense>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
