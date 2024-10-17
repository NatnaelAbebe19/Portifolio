import React, { useEffect, useRef, useState } from "react";
import Cube from "./Cube";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineMailOutline } from "react-icons/md";

function Hero() {
  const buttonRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (buttonRect.top < 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    if (!isVisible) {
      window.removeEventListener("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonVariants = {
    visible: {
      bottom: 0, // Centered horizontally
      right: 0, // Centered vertically (adjust based on hero section height)
    },
    hidden: {
      bottom: 20, // Anchored to right with 50px padding
      right: 20, // Anchored to bottom with 50px padding
    },
  };

  const fadeInAnimationVariants2 = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.7, duration: 0.6 },
    },
  };

  function handleClick() {
    console.log("clicked");
  }
  return (
    <div
      id="Home"
      className="z-10 text-[rgb(255,255,255)] flex justify-around lg:justify-between flex-col lg:flex-row items-center mx-auto  h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] w-[80%]"
    >
      <motion.div
        variants={fadeInAnimationVariants2}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="uppercase text-center lg:text-left font-bold md:p-7 p-4 leading-10 md:text-5xl sm:text-4xl text-3xl stroke">
          <span className="hover:italic">T</span>
          <span>r</span>
          <span>a</span>
          <span>n</span>
          <span>s</span>
          <span>f</span>
          <span>o</span>
          <span>r</span>
          <span>m</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          <span>&nbsp;</span>
          <span className="hover:italic">I</span>
          <span>d</span>
          <span>e</span>
          <span>a</span>
          <span>s</span>
          <br />
          <span>I</span>
          <span>n</span>
          <span className="hover:italic">t</span>
          <span>o</span>
          <span>&nbsp;</span>
          <span className="hover:italic">D</span>
          <span>i</span>
          <span>g</span>
          <span>i</span>
          <span className="hover:italic">t</span>
          <span>a</span>
          <span>l</span>
          <span>&nbsp;</span>
          <span className="hover:italic">R</span>
          <span>e</span>
          <span>a</span>
          <span>l</span>
          <span>i</span>
          <span>t</span>
          <span className="hover:italic">y</span>
        </div>
        <div className="text-xl ml-6 mt-4 md:max-w-[505px] text-center lg:text-left md:mx-auto lg:mx-0  lg:ml-6">
          Hey! 🖐I'm{" "}
          <span className="text-[#c9fd74] font-Wallpoet">
            &lt;Natnael /&gt;
          </span>
          &nbsp;Creative Full-Stack Developer, This portfolio showcases my
          journey as a creative force. Let's collaborate and bring your vision
          to life.
        </div>
        <motion.div
          ref={buttonRef}
          variants={buttonVariants}
          animate={isVisible ? "visible" : "hidden"}
          layoutId="bubble"
          className="flex justify-center cursor-pointer items-center  lg:justify-start relative z-[444]"
        >
          <motion.div
            layoutId="busbble"
            // transition={{ duration: 2 }}
            className={`px-4  ${
              isVisible
                ? "relative w-[180px] lg:w-[240px] rounded-xl "
                : "fixed  right-4 bottom-4 lg:right-24 w-[60px] rounded-full"
            }   bg-[#c9fd74] hover:scale-105 ml-6 text-2xl h-[60px] text-black text-center leading-4 flex justify-center items-center my-8`}
            onClick={handleClick}
            id="callToAction"
          >
            {isVisible ? (
              <span className="">
                <a href="#Contacts">Let's talk</a>
              </span>
            ) : (
              <a href="#Contacts">
                <MdOutlineMailOutline className="h-7 w-7 bg-[#c9fd74] rounded-full" />
              </a>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="container flex justify-center h-[54%] items-center w-[94%] lg:w-[65%]">
        <Cube className="block h-full" />
      </div>
    </div>
  );
}

export default Hero;
