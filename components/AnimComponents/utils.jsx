import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./styles.css";

function UtilsParallax() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  console.log(entry);

  // const [isInViewport, setIsInViewport] = useState(false);

  //console.log(window.innerHeight);
  //let coso = useRef(null);

  // useEffect(() => {
  //   console.log(coso.current.offsetTop);
  //   if (
  //     coso.current.offsetTop > scrollY &&
  //     coso.current.offsetTop < window.innerHeight
  //   ) {
  //     setIsInViewport(true);
  //   } else {
  //     setIsInViewport(false);
  //   }
  // }, [coso]);
  // useEffect(() => {
  //   scrollY.onChange(v => console.log(v));
  // }, [scrollY]);

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };

  return (
    <>
      <motion.div className="box" style={{ y: y1, x: -50 }} />
      <motion.div
        className="box"
        style={{ y: y2, x: 50, background: "salmon" }}
      />
      <div style={{ height: 500 }} />
    </>
  );
}
export default UtilsParallax;
