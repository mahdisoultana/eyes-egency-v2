import React from "react";
import Image from "next/image";
import FaireTest from "../faireTest/FaireTest";
import { AiOutlineCheck } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import LanguageProvider from "../../../hooks/languages/LanguageProvider";
function Propos() {
  return (
    <LanguageProvider>
      {(home) => (
        <section className="p-16  grid md:grid-cols-2 gap-8 lg:gap-16  ">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={800}
            transitionSpeed={500}
            scale={1.1}
            gyroscope={true}
          >
            <article className="rounded-lg  relative lg:h-full h-96">
              <div className="absolute  top-0 left-0  sm:w-[60%] w-[80%] rounded-md z-20 overflow-hidden">
                <Image
                  src="/images/driss1.png"
                  width="100"
                  height="100"
                  layout="responsive"
                  alt="image"
                />
              </div>

              <div className="absolute bottom-0 -right-12 sm:right-0 sm:w-[50%] w-[70%] z-10 rounded-md overflow-hidden">
                <Image
                  src="/images/driss2.png"
                  width="100"
                  height="100"
                  layout="responsive"
                  alt="image"
                />
              </div>
              <div className="w-28 h-28 flex items-center justify-center border-black border-dashed dark:border-white border-2   rounded-full absolute p-3 bottom-16 left-36">
                <div className="w-16 h-16 rounded-full dark:bg-white  bg-red-500 "></div>
              </div>
            </article>
          </Tilt>
          <article className="prose">
            <h1 className="font-medium text-3xl text-secondary dark:text-white lg:w-[90%]">
              {home["propos:title"][0]}
              <span className="font-black text-3xl text-secondary dark:text-white">
                {" "}
                {home["propos:title"][1]}
              </span>
            </h1>
            <p className="font-medium text-sm text-gray-600 dark:text-gray-200  leading-relaxed">
              {home["propos:p"]}
            </p>
            <div className="grid gap-2 mt-6 ">
              {home["propos:maps"].map((item, key) => (
                <div key={key}>
                  <p className="flex items-center space-x-4 font-bold text-sm text-gray-900 dark:text-white  mt-1">
                    <AiOutlineCheck
                      size="2rem"
                      className="text-green-500 dark:text-brand mr-4"
                    />{" "}
                    {item.p}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>
      )}
    </LanguageProvider>
  );
}
// https://assets2.lottiefiles.com/packages/lf20_tutvdkg0.json
// https://assets7.lottiefiles.com/packages/lf20_cacfi55s.json
export default Propos;
