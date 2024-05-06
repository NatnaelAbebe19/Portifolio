import React, { useState } from "react";
import MenuButton from "./MenuButton";
import { AnimatePresence, motion } from "framer-motion";
import NavContent from "./NavContent";
// import

const variants = {
  open: {
    width: 355,
    height: 650,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 100,
    height: 40,
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="fixed top-4 right-4 md:top-7 md:right-20  z-[565]">
      <motion.div
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        className={`relative w-[350px] h-[550px] bg-[#c9fd74] rounded-[25px]`}
      >
        <AnimatePresence>{isActive && <NavContent />}</AnimatePresence>
      </motion.div>
      <MenuButton
        className={`${isActive ? "relative top-[20px] right-[8px]" : ""}`}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
};

export default Menu;
