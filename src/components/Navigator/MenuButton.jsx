import React from "react";
import { motion } from "framer-motion";

export default function MenuButton({ isActive, setIsActive }) {
  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className="h-[40px] w-[100px] rounded-[25px] cursor-pointer absolute overflow-hidden top-0 right-0"
    >
      <motion.div
        className={`absolute w-full h-full slider`}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="w-[100%] h-[100%] bg-[#c9fd74] uppercase">
          <PerspepctiveText label="Menu" />
        </div>
        <div className="w-[100%] h-[100%] absolute top-[100%] bg-[#000] text-[#fff] uppercase">
          <PerspepctiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspepctiveText({ label }) {
  return (
    <div className="h-full w-full flex justify-center items-center PerspepctiveText">
      <p className="perspectiveParagraph">{label}</p>
      <p className="absolute perspectiveParagraph">{label}</p>
    </div>
  );
}
