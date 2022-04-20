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
  transform: rotate(${(p) => p.deg || "0"}) scale(${(p) => p.scale || 1});
`;
function Indication({ count, deg, setIndex, setCounter }) {
  const [essaye, setEssaye] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (count - 3 === 0) {
      if (essaye < 2 && degs[essaye].deg == deg.replace("deg", "")) {
        console.log("win");
        setEssaye((prev) => (prev < 2 ? prev + 1 : prev));
      } else {
        console.log("losed");
      }
    }
  }, [count, deg, essaye]);
  useEffect(() => {
    if (essaye == 2) {
      setIndex((prev) => prev + 1);
    }
  }, [essaye, setIndex]);
  console.log(degs[essaye].deg + "deg");
  return (
    <>
      <div className="bg-gray-800 shadow-xl  pt-4">
        <p
          className="font-medium   prose
        m-auto text-bold text-white my-4 leading-relaxed w-29 text-center "
        >
          Indications
          <span className="underline block w-[70%] ml-0 mt-3"></span>
        </p>
        <div className="p-4 pt-0">
          <p
            className="font-lighter   prose
        m-auto text-sm text-white my-4 leading-relaxed w-29  "
          >
            Essayer d'Indiquez la direction
          </p>{" "}
          <ElementTest
            className={`rounded-full z-10  r-img p-[1px] bg-white w-12 h-12 md:w-16 md:h-16 m-auto border-[2px] border-yellow-400 flex items-center justify-center text-3xl`}
            deg={degs[essaye].deg + "deg"}
          >
            🧸
          </ElementTest>
        </div>

        <p
          className="font-lighter
        gap-3 text- text-white mt-4 p-4 pt-0 first-letter:text-yellow-500 first-letter:text-4xl first-letter:inline  "
        >
          Number de tente Restez :{" "}
          <span className="text-green-500 text-6xl inline-block ml-4 font-black text-center">
            {count - 3}
          </span>
        </p>
        <p
          className={`flex font-bold
        gap-3 ${
          essaye >= 1 ? "text-green-600" : "text-white"
        } mt-4 p-4 pt-0   `}
        >
          <BsFillPatchCheckFill className=" text-2xl" />
          Left Eye <RiEyeCloseLine size={"1.4rem"} />{" "}
          <IoIosEye size={"1.4rem"} />
        </p>
        <p
          className={`flex font-bold
        gap-3   mt-4 p-4 pt-0 ${
          essaye >= 2
            ? "text-green-600"
            : essaye >= 1
            ? "text-white"
            : "text-white/20"
        }
          `}
        >
          <BsFillPatchCheckFill className=" text-2xl" />
          right Eye <IoIosEye size={"1.4rem"} />{" "}
          <RiEyeCloseLine size={"1.4rem"} />
        </p>
        <button
          onClick={() => {
            setEssaye(0);
            setCounter(0);
          }}
          className="btn   mt-2  p-6 rounded-full py-2 ml-8 shadow-gray-100 shadow-sm hover:shadow-md hover:shadow-gray-100/30 "
        >
          Rest
        </button>
      </div>
      {/* <AppModel
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        onClose={() => {
          console.log("closed");
          setIndex((prev) => prev + 1);
        }}
        dir={true}
      /> */}
    </>
  );
}

export default Indication;
