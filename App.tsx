import Navbar from "./components/Navbar";
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

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-body antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Brands />
        <Portfolio />
        <PersonalProjects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
