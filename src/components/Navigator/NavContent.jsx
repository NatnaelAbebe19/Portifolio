import React from "react";
import { Navdata, FooterLinks } from "./Navdata";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },

  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35 },
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      opacity: { duration: 0.35 },
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

function NavContent({ scrollToSection, setIsActive }) {
  return (
    <div className="h-full pt-[100px] pr-[40px] pb-[50px] pl-[40px] box-border flex flex-col justify-between">
      <div className="flex flex-col gap-[10px]">
        {Navdata.map((Links, i) => {
          return (
            <div key={i} className="linkContainer">
              <motion.div
                custom={i}
                variants={perspective}
                animate="enter"
                exit="exit"
                initial="initial"
                className="cursor-pointer"
              >
                <a
                  className="text-black no-underline text-[40px]"
                  href={`#${Links.title}`}
                  onClick={() => {
                    setIsActive(false);
                  }}
                  // href={Link.href}
                >
                  {Links.title}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap">
        {FooterLinks.map((Links, i) => {
          return (
            <motion.a
              href={Links.href}
              key={`f_${i}`}
              custom={i}
              variants={slideIn}
              animate="enter"
              exit="exit"
              initial="initial"
              target="_blank"
              className="w-[50%] text-black no-underline"
            >
              {Links.title}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

export default NavContent;
