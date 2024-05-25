import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./Lamp";

export default function LampDemo() {
  return (
    <div id="Skills">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="-mt-4 bg-gradient-to-br from-slate-300 to-slate-500 font-sans py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-6xl"
        >
          My Skill Arsenal: <br />A Journey of Mastery
        </motion.h1>
      </LampContainer>
    </div>
  );
}
