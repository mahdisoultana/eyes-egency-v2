import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Consigns from "./consigns/Consigns";
import Intro from "./Intro";

function IntroTab({ setIndex }) {
  const [i, setI] = useState(0);
  const TabIntro = [
    <Intro key={1} setI={setI} />,
    <Consigns key={2} setIndex={setIndex} />,
  ];

  ///Rendered
  return <AnimatePresence>{TabIntro[i]}</AnimatePresence>;
}

export default IntroTab;
