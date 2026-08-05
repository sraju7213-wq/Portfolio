import { lazy, Suspense } from "react";
import LenisProvider from "./components/LenisProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollProgress from "./components/ScrollProgress";
import LoadingScreen from "./components/LoadingScreen";

const CustomCursor = lazy(() => import("./components/CustomCursor"));
const Services = lazy(() => import("./components/Services"));
const Work = lazy(() => import("./components/Work"));
const About = lazy(() => import("./components/About"));
const Brands = lazy(() => import("./components/Brands"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const BackToTop = lazy(() => import("./components/BackToTop"));

export default function App() {
  return (
    <LenisProvider>
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      <div className="min-h-screen bg-[#09090b] text-[#fafafa] font-body antialiased relative selection:bg-[#ff4800]/25 selection:text-[#ff4800]">
        <LoadingScreen />
        <ScrollProgress />
        {/* Subtle architectural background grid */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Suspense fallback={null}>
            <Services />
            <Work />
            <About />
            <Brands />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <BackToTop />
        </Suspense>
      </div>
    </LenisProvider>
  );
}
