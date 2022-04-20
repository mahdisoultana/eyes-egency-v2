import React from "react";
import { motion } from "framer-motion";
import Img from "./Img";
import styled from "styled-components";

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
const btns = [
  {
    dir: "up",
  },
  {
    dir: "right",
  },

  {
    dir: "left",
  },
  {
    dir: "down",
  },
];
function BtnsRotate({ i, degs, deg, setI }) {
  return (
    <motion.div layout className="flex items-center justify-center py-8">
      <Grid className="    m-auto mt-4   lg:w-[600px] lg:h-[400px]">
        {btns.map((btn, key) => (
          <div key={key} className="flex items-center justify-center ">
            <button
              className=" btn rounded-md hover:bg-indigo-700 shadow-xl  active:opacity-20  hover:text-white font-lighter text-lg uppercase flex w-40 justify-center items-center h-20 "
              onClick={() => {
                // setCounter((prevS) => counter + 1);
                if (i >= degs.length - 1) {
                  setI(0);
                } else {
                  setI((prevS) => prevS + 1);
                }
              }}
            >
              {btn.dir}
            </button>
          </div>
        ))}

        <ElementTest deg={deg} className="show h-full b-full  ">
          <Img i={i} />
        </ElementTest>
      </Grid>
    </motion.div>
  );
}

export default BtnsRotate;
