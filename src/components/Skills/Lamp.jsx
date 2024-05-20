"use client";
import React, { useState } from "react";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";
import { Cn } from "./Cn";

function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={Cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md mt-12 z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem]  -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>

      <div className="grid h-screen absolute top-36 z-[2000] place-content-center bg-transparent w-full">
        <button onClick={() => setOpen(true)} className="button text-2xl">
          Reveal
        </button>
        <DragCloseDrawer open={open} setOpen={setOpen} className="z-[200010]">
          <div className="mx-auto max-w-2xl space-y-4 text-neutral-400 z-[20000] flex flex-col gap-4">
            <div className="mt-4 ">
              <h2 className="text-2xl font-bold text-[#c9fd74] my-4">
                Languages
              </h2>
              <div className="mt-4 flex gap-3 flex-wrap overflow-hidden ">
                <motion.img
                  src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                  alt="HTML"
                  initial={{ y: "300%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
                <motion.img
                  src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                  alt="css3"
                  initial={{ y: "300%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
                <motion.img
                  src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                  alt="javascript"
                  initial={{ y: "300%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
                <motion.img
                  src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
                  alt="python"
                  initial={{ y: "300%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
                <motion.img
                  src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)"
                  alt="java"
                  initial={{ y: "300%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />

                <motion.img
                  src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
                  alt="c++"
                  initial={{ y: "300%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
                <img src="" alt="" />
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-[#c9fd74]">Frameworks</h2>
              <div className="mt-4 flex gap-3 flex-wrap overflow-hidden  ">
                <motion.img
                  src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                  alt="tailwindcss"
                  initial={{ y: "250%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
                <motion.img
                  src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                  alt="React"
                  initial={{ y: "250%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
                <motion.img
                  src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
                  alt="redux"
                  initial={{ y: "250%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-[#c9fd74]">Design</h2>
              <div className="mt-4 flex gap-3 flex-wrap overflow-hidden">
                <motion.img
                  src="https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6"
                  alt="Adobe XD"
                  initial={{ y: "200%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />

                <motion.img
                  src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
                  alt="Figma"
                  initial={{ y: "200%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
                <motion.img
                  src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue"
                  alt="Framer"
                  initial={{ y: "200%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
                <motion.img
                  src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white"
                  alt="Canva"
                  initial={{ y: "200%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#c9fd74]">
                Version Control
              </h2>
              <div className="mt-4 flex gap-3 flex-wrap overflow-hidden  ">
                <motion.img
                  src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
                  alt="git"
                  initial={{ y: "150%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
                <motion.img
                  src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                  alt="github"
                  initial={{ y: "150%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
              </div>
            </div>
            <div className="">
              <h2 className="text-2xl font-bold text-[#c9fd74]">
                Developer Forums
              </h2>
              <div className="mt-4 flex gap-3 flex-wrap overflow-hidden  ">
                <motion.img
                  src="https://img.shields.io/badge/-Hackerrank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white"
                  alt="Hacker Rank"
                  initial={{ y: "125%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
                <motion.img
                  src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06"
                  alt="LeetCode"
                  initial={{ y: "125%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />

                <motion.img
                  src="https://img.shields.io/badge/Quora-%23B92B27.svg?style=for-the-badge&logo=Quora&logoColor=white"
                  alt="Quora"
                  initial={{ y: "125%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
                <motion.img
                  src="https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white"
                  alt="Stackoverflow"
                  initial={{ y: "125%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
                <motion.img
                  src="https://img.shields.io/badge/Reddit-%23FF4500.svg?style=for-the-badge&logo=Reddit&logoColor=white"
                  alt="Reddit"
                  initial={{ y: "125%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-[#c9fd74]">
                Hosting/SaaS
              </h2>
              <div className="mt-4 flex gap-3 flex-wrap overflow-hidden  ">
                <motion.img
                  src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"
                  alt="netlify"
                  initial={{ y: "100%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
                <motion.img
                  src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
                  alt="vercel"
                  initial={{ y: "100%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
              </div>
            </div>
            <div className="">
              <h2 className="text-2xl font-bold text-[#c9fd74]">Others</h2>
              <div className="mt-4 flex gap-3 flex-wrap overflow-hidden  ">
                <motion.img
                  src="https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white"
                  alt="Arduino"
                  initial={{ y: "300%" }}
                  animate={{
                    y: "0%", // Animate vertically: 0px -> -20px -> 0px
                  }}
                  transition={{
                    duration: 1, // Animation duration in seconds
                    ease: "linear", // Easing function for smooth animation
                  }}
                />
              </div>
            </div>
          </div>
        </DragCloseDrawer>
      </div>
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70 "
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default LampDemo;
