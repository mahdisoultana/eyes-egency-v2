import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosEye } from "react-icons/io";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { RiEyeCloseLine } from "react-icons/ri";
import AppModel from "../../../modelComponent/Model";
function Indication({ count = 0, deg = 0, setIndex, value }) {
  const [essaye, setEssaye] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (essaye == 2) {
      setIsOpen(true);
    }
  }, [essaye]);

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
        <p
          className={`flex font-bold
        gap-3 ${
          value == "manipulers" ? "text-green-600" : "text-white"
        } mt-4 p-4 pt-0   `}
        >
          <BsFillPatchCheckFill className=" text-2xl" />
          Both Eyes <IoIosEye size={"1.4rem"} /> <IoIosEye size={"1.4rem"} />
        </p>
        <div className="p-4 pt-0">
          <div
            className={`rounded-full z-10  r-img p-[1px] ${
              value == "manipulers"
                ? "border-green-400 border-[4px]"
                : "border-yellow-400 border-[2px]"
            } bg-green-100 w-12 h-12 md:w-16 md:h-16 m-auto    `}
          >
            <Image
              alt="image"
              src="/icons/lines.png"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <p
            className="font-bold
        m-auto text-sm text-white my-4 leading-relaxed w-29  "
          >
            Essayer Lire Le Text !
          </p>
        </div>
      </div>
      <AppModel
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        onClose={() => {
          console.log("closed");
          setIndex((prev) => prev + 1);
        }}
        dir={true}
      />
    </>
  );
}

export default Indication;
