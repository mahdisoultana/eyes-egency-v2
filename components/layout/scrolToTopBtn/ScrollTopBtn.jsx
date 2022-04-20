import React from "react";
import useScrollPosition from "../../../hooks/useScrollPosition";
import { motion, AnimatePresence } from "framer-motion";
import { slideDown } from "../../AnimComponents/variants";
function ScrollTopBtn({ className, children }) {
  const { inVeiw } = useScrollPosition();
  return (
    <AnimatePresence>
      {inVeiw && (
        <motion.button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          variants={slideDown}
          initial="initial"
          animate="animate"
          exit="exit"
          whileTap={{ scale: 2, opacity: 0 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
          className={
            "bg-brand w-12 z-[222]  inline-block h-12 rounded-full " + className
          }
        >
          <motion.svg
            className="inline-block w-3 ml-2 text-white"
            fill="currentColor"
            viewBox="0 0 12 12"
            animate={{
              x: -5,
              y: -5,
              scale: 1.4,
              rotate: "-90deg",
              transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
              },
            }}
            initial={{ x: -5, y: 1, rotate: "-90deg" }}
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </motion.svg>
          {children}
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollTopBtn;
