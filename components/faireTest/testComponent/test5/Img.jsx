import React, { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";

const ElementTest = styled.img`
  > * {
    width: ${(p) => p.w}cm;
    height: ${(p) => p.h}cm;
    background-image: url(p=>p.src||"/icons/LetterE.png");
    transform: rotate(${(p) => p.deg || "0"}) scale(${(p) => p.scale || 1});
  }
`;

function Img({ i }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    let eventSize;
    eventSize = window.addEventListener("resize", (e) => {
      setWidth(e.target.innerWidth);
    });
  }, []);
  const scale = (function () {
    if (width > 2400) {
      return 1;
    } else if (width > 1800) {
      return 6;
    } else {
      return 9;
    }
  })();

  let downScale = 4 - i;
  downScale = downScale == 0 ? 0.1 : downScale;

  return (
    <img
      src="/icons/LetterE.png"
      style={{
        width: downScale * scale + "mm",
        height: downScale * scale + "mm",
      }}
    />
  );
}

export default Img;
