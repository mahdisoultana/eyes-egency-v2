import React from "react";
import Lottie from "../../AnimComponents/Lottie";
import Image from "next/image";
import { AiFillCheckCircle } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import LanguageProvider from "../../../hooks/languages/LanguageProvider";
function NotreCombat() {
  return (
    <LanguageProvider>
      {(home) => (
        <section className="p-16 overflow-hidden grid lg:grid-cols-2 gap-4 bg-secondary dark:bg-brand  lg:gap-16 items-center ">
          <article className="h-full w-full   divide-dashed divide-emerald-50">
            <div>
              <h5 className="uppercase text-brand font-normal text-md  ">
                {home["combat:title"]}
              </h5>
              <div className=" font-lighter  text-white  ">
                <h4 className="uppercase font-semibold  text-white my-8 mt-4">
                  {home["combat:title-lg"]}
                </h4>
                <p>{home["combat:p"]}</p>
                <ul className="grid lg:grid-cols-2  gap-6 mt-11">
                  {home["combat:maps"].map((item, key) => (
                    <li
                      key={key}
                      className=" flex items-center space-x-4 font-lighter text-sm text-white"
                    >
                      <AiFillCheckCircle
                        size="2rem"
                        className="text-green-500"
                      />{" "}
                      <p>{item.p}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 flex items-start flex-wrap  w-full bg-brand dark:bg-secondary rounded-md p-12 py-8">
              <div className="rounded-full r-img p-1 bg-white w-[80px] h-[80px] border-2 border-gray-600">
                <Image
                  src="https://draniss.ma/wp-content/uploads/2021/12/Logos.jpg"
                  width={100}
                  height={100}
                  layout="responsive"
                  alt="image"
                />
              </div>
              <div className="flex  flex-col items-center justify-center   ">
                <h1 className="font-bold text-sm text-white">
                  Dr. Aniss REGRAGUI
                </h1>
                <button className="my-6 px-6 py-2 ml-4 rounded-md text-sm text-white   shadow-gray-900/20 shadow-sm  bg-gradient-to-tl from-brand  to-brand hover:bg-gradient-to-br transition-all duration-100 hover:scale-105   font-medium hover:shadow-xl">
                  <a href="sms://+14035550185?body=I%27m%20interested%20in%20to%20to%20visit.%20Please%20contact%20me.">
                    {home["combat:btn-1"]}
                  </a>
                </button>
              </div>
              <button className="my-6 inline-block ml-auto  px-6 py-2 text-sm text-white   shadow-gray-900/20 shadow-sm  bg-gradient-to-tl from-brand   to-secondary hover:bg-gradient-to-br transition-all duration-100 hover:scale-105 rounded-sm font-bold tracking-wider hover:shadow-xl">
                {home["combat:btn-2"]}
              </button>
            </div>
          </article>
          <div className=" h-full w-full">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={800}
              transitionSpeed={2500}
              scale={1.1}
              gyroscope={true}
            >
              <Lottie
                src={
                  "https://assets2.lottiefiles.com/packages/lf20_cacfi55s.json"
                }
              />
            </Tilt>
          </div>
        </section>
      )}
    </LanguageProvider>
  );
}

export default NotreCombat;
