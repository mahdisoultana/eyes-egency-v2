import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";

import Model from "./Model";
import { AnimatePresence, motion } from "framer-motion";
import ModelSuccess from "./ModelSuccess";
import ModelFinTest from "./ModelFinTest";

import Indication from "./Indication";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { IoIosEye } from "react-icons/io";
import { RiEyeCloseLine } from "react-icons/ri";
import BtnsRotate from "./BtnsRotate";

export const Grid = styled.article`
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  grid-template-rows: 100px 1fr 100px;
  & > div:nth-child(1) {
    grid-column: 1/-1;
  }

  & > div:nth-child(2) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  & > div:nth-child(3) {
    grid-column: 3/4;
    grid-row: 2/3;
  }
  & > div:nth-child(4) {
    grid-column: 1/-1;
    grid-row: 3/4;
  }
  .show {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const ElementTest = styled.div`
  > * {
    width: ${(p) => p.w}cm;
    height: ${(p) => p.h}cm;
    transform: rotate(${(p) => p.deg || "0"}) scale(${(p) => p.scale || 1});
  }
`;
const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 320px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
const degs = [
  {
    dir: "up",
    deg: "-90deg",
  },
  {
    dir: "right",
    deg: "180deg",
  },

  {
    dir: "left",
    deg: "0deg",
  },
  {
    dir: "down",
    deg: "90deg",
  },
  {
    dir: "down",
    deg: "90deg",
  },
];

function Test5({ setIndex }) {
  const [deg, setDeg] = useState("0");

  const [isFin, setIsFin] = useState(false);

  const [showNext, setShowNext] = useState(false);

  const [congrat, setCongrat] = useState(false);

  const [counter, setCounter] = useState(0);
  const [i, setI] = useState(0);
  const { width, height } = useWindowSize();

  ////"_"//Score
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  ////"_"//
  // console.log(counter);
  useEffect(() => {
    setI(0);

    if (counter > 2) {
      setIndex(0);
      setI(0);
      setCounter(0);
      setIsFin(true);
    }
  }, [counter, setIndex]);
  ////"_"//
  useEffect(() => {
    setDeg(degs[i].deg);
  }, [i]);

  //://
  const score = i + 1;
  console.log(score1, "SCORE1");
  console.log(score2, "SCORE2");
  useEffect(() => {
    if (counter == 1) {
      setScore1(score);
    } else if (counter == 2) {
      setScore2(score);
    }
  }, [counter]);

  return (
    <Container className=" bg-gray-100 w-full   ">
      <div className=" h-[80vh] flex relative items-center justify-center flex-col">
        <h1 className="left-[10%] bg-brand px-4 py-2 rounded-lg shadow-lg text-white translate-x-[-50%] text-center  text-3xl top-14 absolute  ">
          {(counter == 0 && " œil Droit") ||
            (counter == 1 && "œil Gauche") ||
            (counter == 2 && " Congratulation")}
        </h1>
        <BtnsRotate i={i} degs={degs} deg={deg} setI={setI} />

        <h1 className="text-center text-secondary text-3xl">
          Arrivez-vous à voir le signe ?
        </h1>
        <div className="flex justify-center items-center"></div>
        <div className=" space-x-4 flex items-center justify-center ">
          <button
            className="btn lg:w-[40vw] w-[90vw] rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={counter >= 2}
            onClick={() => {
              if (counter <= 2) {
                setShowNext(true);
                setIndex((prevS) => prevS + 1);
                setCounter((prevState) => {
                  if (counter <= 2) {
                    return prevState + 1;
                  } else {
                    return 0;
                  }
                });
              }
            }}
          >
            NON
          </button>
        </div>
      </div>

      <Indication
        count={counter}
        setIndex={setIndex}
        deg={deg}
        setCounter={setCounter}
      />
      {/* {showNext && <Model counter={counter} setShowNext={setShowNext} />} */}
      {showNext && (
        <ModelSuccess
          counter={counter}
          setShowNext={setShowNext}
          setCounter={setCounter}
          setIndex={setIndex}
          showNext={showNext}
          setIsFin={setIsFin}
        />
      )}
      {isFin && (
        <ModelFinTest
          counter={counter}
          setShowNext={setCongrat}
          setCounter={setCounter}
          setIsFin={setIsFin}
          setIndex={setIndex}
          isFin={isFin}
          score1={score1}
          score2={score2}
          EyeIcon={IoIosEye}
        />
      )}
      {isFin && (
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

export default Test5;
//  <button
//    className="btn"
//    onClick={() => {
//      setCongrat(true);
//      if (counter >= 1) {
//        console.log("fin de test");
//        setIsFin(true);
//      }
//    }}
//  >
//    OUI
//  </button>;
