import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosEye } from "react-icons/io";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { RiEyeCloseLine } from "react-icons/ri";
import AppModel from "../../../modelComponent/Model";
import styled from "styled-components";

const degs = [
  {
    dir: "up",
    deg: "0",
  },
  {
    dir: "right",
    deg: "180",
  },

  {
    dir: "left",
    deg: "0",
  },
  {
    dir: "down",
    deg: "90",
  },
];
const ElementTest = styled.div`
  > * {
    transform: rotate(${(p) => p.deg || "0"}) scale(${(p) => p.scale || 1});
  }
`;
function Indication({ count, deg, setIndex, setCounter }) {
  return (
    <>
      <div className="bg-secondary dark:bg-brand shadow-xl  pt-4">
        <p
          className="font-medium   prose
        m-auto text-bold text-white my-4 leading-relaxed w-29 text-center "
        >
          Indications
          <span className="underline block w-[70%] ml-0 mt-3"></span>
        </p>
        <ElementTest
          className={`rounded-full z-10  r-img p-[1px] bg-white w-12 h-12 md:w-16 md:h-16 m-auto border-[2px] border-yellow-400  `}
          deg={deg}
        >
          <Image
            src="/icons/LetterE.png"
            width={100}
            height={100}
            layout="responsive"
            alt="image"
          />
        </ElementTest>
        <div className="p-4 pt-0">
          <ul>
            <li
              className="font-lighter   prose
        m-auto text-xl list-disc list-inside text-white my-4 leading-relaxed w-29  "
            >
              Masquez votre œil{" "}
              <span className="text-md p-4  font-semibold text-brand lg:text-2xl dark:text-white">
                {count == 0 ? "Gauche" : count == 1 ? "Droit" : "Les Deux Yeux"}
              </span>
            </li>{" "}
            <li
              className="font-lighter   prose
        m-auto text-xl list-disc list-inside text-white my-4 leading-relaxed w-29  "
            >
              Placez-vous à exactement 1 mètre
            </li>{" "}
          </ul>
        </div>

        <p
          className="font-lighter
        gap-3 text- text-white mt-4 p-4 pt-0 dark:first-letter:text-secondary first-letter:text-brand first-letter:text-4xl first-letter:inline  "
        >
          Stage :{" "}
          <span className="text-green-500 text-6xl inline-block ml-4 font-black text-center">
            {count}
          </span>
        </p>
      </div>
    </>
  );
}

export default Indication;
