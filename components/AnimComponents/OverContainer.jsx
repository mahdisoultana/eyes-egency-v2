import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
function OverContainer({ children }) {
  const variant = {
    exit: { x: "100%" },
    anime: {
      x: 0,
    },
    initial: { x: "-100%" },
  };
  return (
    <motion.div className="relative overflow-hidden">
      <motion.p
        variants={variant}
        animate="anime"
        initial="initial"
        exit="exit"
        className="absolute"
      >
        {children}
      </motion.p>
    </motion.div>
  );
}

export default OverContainer;
