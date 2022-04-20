import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import AppModel from "../../../modelComponent/Model";
import Indication from "./Indication";
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
const ElementTest = styled.div`
  > * {
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
function Test1({ setIndex }) {
  const [deg, setDeg] = useState("0");
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
  ];
  const [counter, setCounter] = useState(0);

  const initScale = 4;
  useEffect(() => {
    if (counter > initScale - 3) {
      setCounter(0);
    }
  }, [counter]);

  let scale = (initScale - counter) / initScale;
  const Model = <AppModel />;
  return (
    <Container className=" bg-green-100/20 w-full min-h-[90vh]  gap-4  ">
      <Grid className="shadow-xl   rounded-full overflow-hidden  m-auto    lg:w-[500px] lg:h-[500px]">
        {degs.map((btn, key) => (
          <button
            key={key}
            className="hover:bg-indigo-700 active:opacity-20  hover:text-white font-lighter text-lg uppercase"
            onClick={() => {
              setCounter((prevS) => counter + 1);
              setDeg(btn.deg);
            }}
          >
            {btn.dir}
          </button>
        ))}

        <ElementTest
          className="show h-full b-full  bg-white/90 "
          deg={deg}
          scale={scale}
        >
          <p className="text-3xl">🧸</p>
        </ElementTest>
      </Grid>
      <Indication
        count={initScale - counter}
        setIndex={setIndex}
        deg={deg}
        setCounter={setCounter}
      />
    </Container>
  );
}

export default Test1;
