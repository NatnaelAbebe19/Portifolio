import React from "react";
import Menu from "./Menu";

function Navbar() {
  return (
    <nav className="">
      <div className="font-bold">
        <div className="font-Megrim fixed text-[#c9fd74] font-bold md:py-7 py-4 px-4 md:px-0 md:text-3xl text-2xl ">
          natnaels
        </div>
      </div>
      <Menu />
    </nav>
  );
}

export default Navbar;
