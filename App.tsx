import LenisProvider from "./components/LenisProvider";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Brands from "./components/Brands";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import LoadingScreen from "./components/LoadingScreen";
import SvgNoiseBackground from "./components/SvgNoiseBackground";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <LenisProvider>
      <CustomCursor />
      <div className="min-h-screen bg-bg-primary text-text-primary font-body antialiased relative">
        <LoadingScreen />
        <ScrollProgress />
        <SvgNoiseBackground />
        <div className="gradient-mesh" />
        <Navbar />
        <main>
          <Hero />
          <Work />
          <About />
          <Brands />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </LenisProvider>
  );
}
