import React, { useState } from "react";
import Intro from "../Intro/IntoTabs";
import Test1 from "../test1/Test1";
import Test2 from "../test2/Test2";
import Test3 from "../test3/Test3";
import Test5 from "../test5/Test5";

function FnTestEyes({ setIndex, index }) {
  const pagesTest = [
    <Intro setIndex={setIndex} key={1} />,
    <Test5 setIndex={setIndex} key={2} />,
    <Test5 setIndex={setIndex} key={2} />,
    <Test5 setIndex={setIndex} key={2} />,
  ];

  ///Rendered
  return pagesTest[index];
}

export default FnTestEyes;
