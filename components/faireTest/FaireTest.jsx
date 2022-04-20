import React, { useState } from "react";
import Image from "next/image";
import Test1 from "./testComponent/test1/Test1";
import Intro from "./testComponent/Intro/IntoTabs";
import FnTestEyes from "./testComponent/fnTestEyes/FnTestEyes";

function FaireTest() {
  const objJSX = [
    { label: "Intro", src: "/icons/optometrist.png" },
    { label: "Etape 1", src: "/icons/LetterE.png" },
    { label: "Etape 2", src: "/icons/LetterE.png" },
    { label: "Interpreter", src: "/icons/LetterE.png" },
  ];
  const [index, setIndex] = useState(0);
  return (
    <div className="bg-gray-100 rounded-xl xl:overflow-hidden ">
      <nav className="    w-full min-h-20 lg:rounded-lg rounded-tl-none ">
        <ul className=" flex-wrap-reverse flex justify-between lg:w-3/4 w-full m-auto items-center  h-full">
          {objJSX.map((item, key) => (
            <li
              key={key}
              onClick={() => {
                if (index >= key) {
                  setIndex(key);
                }
              }}
              disabled={index <= key ? true : false}
              className={`${
                index < key
                  ? "bg-brand cursor-not-allowed opacity-30"
                  : key !== index
                  ? "bg-green-800 cursor-pointer"
                  : "bg-gray-800 cursor-pointer"
              } h-full pt-2 justify-center rounded-lg overflow-hidden  relative flex items-center cursor-pointer disabled:cursor-not-allowed px-2 flex-col`}
            >
              <div
                className={`rounded-full z-10 r-img p-[8px]  bg-white w-12 h-12 md:w-12 md:h-12 m-auto border-[1px] border-brand ${
                  index < key
                    ? "border-brand cursor-not-allowed"
                    : key !== index
                    ? "border-green-800 cursor-pointer"
                    : "border-gray-800 cursor-pointer"
                }`}
              >
                <Image
                  src={item.src}
                  width={100}
                  height={100}
                  layout="responsive"
                  alt="image"
                />
              </div>
              <p className="text-gray-100 z-10 text-center  text-sm font-medium capitlize">
                {item.label}
              </p>
              <div
                className={`${
                  index < key
                    ? "bg-brand cursor-not-allowed"
                    : key !== index
                    ? "bg-green-800 cursor-pointer"
                    : "bg-gray-800 cursor-pointer"
                } absolute inset-0  `}
              ></div>
            </li>
          ))}
        </ul>
      </nav>
      <>
        <div className="w-full min-h-[85vh] bg-gray-100 lg:rounded-lg rounded-tl-none">
          <FnTestEyes setIndex={setIndex} index={index} />
        </div>
      </>
    </div>
  );
}

export default FaireTest;
