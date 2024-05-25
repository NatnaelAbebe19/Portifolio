import React from "react";
import Menu from "./Menu";

function Navbar({ scrollToSection }) {
  return (
    <nav className="">
      <div className="font-bold">
        <a
          href="#"
          className="font-Megrim fixed text-[#c9fd74] font-bold md:py-7 py-4 px-4 md:px-0 md:text-3xl text-2xl z-[25515255]"
        >
          natnaels
        </a>
      </div>
      <Menu scrollToSection={scrollToSection} />
    </nav>
  );
}

export default Navbar;
