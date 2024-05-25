import React, { useRef, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

function Contact() {
  const form = useRef();

  function handleEmail() {
    window.location.href = `mailto:natnaelabebe1994@gmail.com`;
  }
  function handlePhone() {
    window.location.href = `tel:+251975434719`;
  }

  return (
    <div
      id="Contacts"
      className="h-screen w-full flex flex-col justify-between"
    >
      <AnimatedCursor
        innerSize={0}
        outerSize={20}
        color="201,253,116"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={["a", "p", "button"]}
      />
      <div className="text-[#c9fd74] flex flex-col justify-center items-center h-full gap-y-20 md:gap-y-30">
        <div className="text-center text-sm tracking-widest ">
          I'M ALWAYS HAPPY TO TALK. <br />
          AVAILABLE FOR FREELANCE WORK
        </div>
        <p onClick={handleEmail} className="capitalize text-6xl send">
          <span className="font-Migra">send</span>{" "}
          <span className="font-MigraItalic lowercase font-light">an</span>{" "}
          <span className="font-Migra lowercase">email</span>
        </p>
      </div>

      <div className="flex  flex-col md:flex-row md:justify-between ">
        <div className="ml-4 uppercase text-[#c9fd74] flex gap-x-6 pb-12">
          <a href="https://x.com/Natnael163260" target="_blank" className="">
            twitter
          </a>
          <a
            href="https://www.instagram.com/nathaniel_abebe/"
            target="_blank"
            className=""
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/natnael-abebe-57a079295/"
            target="_blank"
            className=""
          >
            Linkedin
          </a>
        </div>
        <div className="text-[#c9fd74] flex gap-x-4 uppercase  ml-4">
          <a href="https://t.me/NatnaelAbebe" target="_blank" className="">
            By Natnaels
          </a>
          <a onClick={handlePhone} className="">
            Call Me
          </a>
          <span className="">&copy;2024</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
