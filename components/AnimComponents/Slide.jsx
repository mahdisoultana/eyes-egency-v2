import React from "react";
import { motion } from "framer-motion";

function Slide({
  children,
  direction = 1,
  distance = 300,
  delay,
  dir = "x",
  toHover = true,
}) {
  let variants = {
    initial: { opacity: 0, x: direction * distance },
    exit: { opacity: 0, x: distance * -direction },
    animate: { opacity: 1, x: 0, transition: { delay, type: "spring" } },
  };
  if (dir === "y") {
    variants = {
      initial: { opacity: 0, y: direction * distance },
      exit: {
        opacity: 0,
        y: -direction * distance,
        transition: { duration: 0.5, type: "spring", delay },
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, type: "spring", delay },
      },
    };
  }
  let whileHover = {};
  let whileTap = {};
  if (toHover) {
    let whileHover = {
      scale: 1.02,
      y: -8,
      transition: { duration: 0.5, type: "spring", delay },
    };
    let whileTtap = {
      scale: 0.98,
      y: 5,
      transition: { duration: 0.5, type: "spring", delay },
    };
  }
  return (
    <motion.div
      className="origin-center "
      variants={variants}
      exit="exit"
      initial="initial"
      animate="animate"
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </motion.div>
  );
}

export default Slide;
