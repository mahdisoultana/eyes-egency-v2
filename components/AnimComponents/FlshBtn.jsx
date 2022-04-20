import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ImInfinite } from "react-icons/im";

function FlshBtn({ children, href }) {
  const rndN = (init = 3) => Math.random() * init;
  return (
    <Link href={href || "/contact"} passHref>
      <motion.div
        href="/"
        aria-label=""
        className="inline-flex  cursor-pointer items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
      >
        {children || "Contactez-Moi"}
        <motion.svg
          initial={{ x: rndN(9) + 7, y: 1 }}
          animate={{ x: rndN(-5), y: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            type: "spring",
            duration: 2,
            // stiffness: 100,
          }}
          className="inline-block w-3 ml-2"
          fill="currentColor"
          viewBox="0 0 12 12"
        >
          <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
        </motion.svg>
      </motion.div>
    </Link>
  );
}

export default FlshBtn;
