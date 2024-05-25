import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navigator/Navbar";
import About from "./components/About/About";
import HeroParallax from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import { BrowserRouter } from "react-router-dom";
import Hello from "./components/Hello/Hello";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const sectionRefs = useRef([]);

  const scrollToSection = (index) => {
    sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  return loading ? (
    <Hello />
  ) : (
    <BrowserRouter>
      <div className={`w-full max-w-[1200px] mx-auto overflow-hidden  fade-in`}>
        <ParticlesBackground />
        <div className="flex justify-center items-start h-screen ">
          <Navbar
            className="z-30000 border-b-2 "
            scrollToSection={scrollToSection}
          />
          <Hero className="z-29 " />
        </div>
        <div className="mx-auto">
          <About />
        </div>
        {/* <div className="mx-auto">
          <Projects />
        </div> */}
        <div>
          <HeroParallax />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
