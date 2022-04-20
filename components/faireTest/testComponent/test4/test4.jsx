import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";

import Indication from "./Indication";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import NumberTest from "./NumberTest";
import { toast } from "react-toastify";
export const Grid = styled.article`
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  grid-template-rows: 100px 1fr 100px;
  button:nth-child(1) {
    grid-column: 1/-1;
  }
  button:nth-child(2) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  button:nth-child(3) {
    grid-column: 3/4;
    grid-row: 2/3;
  }
  button:nth-child(4) {
    grid-column: 1/-1;
    grid-row: 3/4;
  }
  .show {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    background: linear-gradient(rgb(59 130 246), #0033c0);
    top: -300%;
    transition: 0.3s cubic-bezier(0.27, 1.05, 0.69, 0.71) all;
    left: 0;
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 300%;
    border-bottom-left-radius: 50em;
    border-bottom-right-radius: 50em;
  }
  &:hover:disabled {
    &::after {
      top: -300%;
    }
  }
  &:hover {
    &::after {
      top: 0;
    }
  }
`;
const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 320px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
const lines = [
  {
    scale: 1.5,
    text: "Bien voir, à toutes distances, sans avoir besoin de manipuler",
  },

  {
    scale: 1,
    text: "Bien voir, à toutes distances, sans avoir besoin de manipuler",
  },
  {
    scale: 0.5,
    text: "Bien voir, à toutes distances, sans avoir besoin de manipuler",
  },
  {
    scale: 0.4,
    text: "Bien voir, à toutes distances, sans avoir besoin de manipulers",
  },
];

function Test4({ setIndex }) {
  const { width, height } = useWindowSize();
  const [value, setValue] = useState("");
  const [celebrate, setCelebrate] = useState(false);
  useEffect(() => {
    // this changes the scrolling behavior to "smooth"
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [celebrate]);
  return (
    <Container className=" bg-green-100/20 w-full min-h-[90vh]  gap-4  ">
      <div className="text-center mt-5 self-center">
        <NumberTest lines={lines} />
      </div>

      <Indication setIndex={setIndex} value={value} />
      {celebrate && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={500}
          gravity={0.3}
        />
      )}
    </Container>
  );
}

export default Test4;
