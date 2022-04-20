import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Confetti from "react-confetti";
import Indication from "./Indication";
import useWindowSize from "react-use/lib/useWindowSize";
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
const ElementTest = styled.p`
  transform: scale(${(p) => p.scale || 1});
  > * {
    transform: scale(${(p) => p.scale || 1});
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
function Test3({ setIndex }) {
  const { width, height } = useWindowSize();
  const [value, setValue] = useState("");
  const [congrat, setCongrat] = useState(false);
  return (
    <Container className=" bg-green-100/20 w-full min-h-[90vh]  gap-4  ">
      <div className="text-center mt-5 self-center">
        {lines.map((line, key) => (
          <ElementTest
            key={key}
            scale={line.scale}
            className="  block text-white  leading-relaxed"
          >
            {line.text}
          </ElementTest>
        ))}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCongrat(true);
          }}
        >
          <label htmlFor="accept" className=" block mt-8 ">
            <input
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              paceholder="voir le mot"
              autoComplete="off"
              id="accept"
              className="font-bold rounded-md  text-gray-900  focus:ring-2 focus:ring-yellow-400 focus:ring-offset-4 focus:ring-offset-gray-800"
            />
            <p className="text-gray-100 mt-4">
              Ecrivez{" "}
              <span className="font-bold text-blue-200">
                {" "}
                le derniers mot de la derniere paragraph !
              </span>
            </p>
          </label>
          <Button
            disabled={value.trim() !== "manipulers"}
            className={`btn from-yellow-700 z-10 via-yellow-600 disabled:cursor-not-allowed  to-yellow-300 disabled:opacity-50  hover:disabled:scale-100`}
          >
            Valider
          </Button>
        </form>
      </div>
      {congrat && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={500}
          gravity={0.3}
        />
      )}
      <Indication setIndex={setIndex} value={value} />
    </Container>
  );
}

export default Test3;
