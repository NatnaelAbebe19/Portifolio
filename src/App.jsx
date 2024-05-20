import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navigator/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import HeroParallax from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="w-full max-w-[1200px] mx-auto overflow-hidden">
      <ParticlesBackground />
      <div className="flex justify-center items-start h-screen ">
        <Navbar className="z-30000 border-b-2 " />
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
  );
}

export default App;
