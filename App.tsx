import { lazy, Suspense } from "react";
import LenisProvider from "./components/LenisProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollProgress from "./components/ScrollProgress";
import LoadingScreen from "./components/LoadingScreen";

const CustomCursor = lazy(() => import("./components/CustomCursor"));
const SvgNoiseBackground = lazy(() => import("./components/SvgNoiseBackground"));
const Work = lazy(() => import("./components/Work"));
const About = lazy(() => import("./components/About"));
const Brands = lazy(() => import("./components/Brands"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const BackToTop = lazy(() => import("./components/BackToTop"));
const AccentPicker = lazy(() => import("./components/AccentPicker"));

export default function App() {
  return (
    <LenisProvider>
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      <div className="min-h-screen bg-bg-primary text-text-primary font-body antialiased relative">
        <LoadingScreen />
        <ScrollProgress />
        <Suspense fallback={null}>
          <SvgNoiseBackground />
        </Suspense>
        <div className="gradient-mesh" />
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={null}>
            <Work />
            <About />
            <Brands />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <BackToTop />
          <AccentPicker />
        </Suspense>
      </div>
    </LenisProvider>
  );
}
