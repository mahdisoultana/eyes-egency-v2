//tobedone
import React from "react";

import { motion } from "framer-motion";

function Fade({ children, delay, transition }) {
  let variants = {
    initial: { opacity: 0 },
    exit: { opacity: 0 },
    animate: { opacity: 1, transition: { delay } },
  };
  if (transition?.type || transition?.duration) {
    variants = {
      initial: { opacity: 0 },
      exit: { opacity: 0 },
      animate: { opacity: 1, transition },
    };
  }
  return (
    <motion.div
      variants={variants}
      exit="exit"
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
}

export default Fade;
