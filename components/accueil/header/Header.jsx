import Image from "next/image";
import React, { useState, useEffect } from "react";
import Lottie from "../../AnimComponents/Lottie";
import { Revele } from "../../AnimComponents/Revele";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import useLanguage from "../../../hooks/languages/useLanguage";

import { motion } from "framer-motion";
export const Background = styled.div`
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: url("/images/PHOTO.png") no-repeat center center/cover;
  }
`;
function Header() {
  const home = useLanguage((state) => state.current.home);

  // console.log(home["header:title"][0]);
  // https://assets8.lottiefiles.com/packages/lf20_uhrsndot.jsonhttps://assets8.lottiefiles.com/packages/lf20_uhrsndot.json
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  let variants = {
    hidden: { y: 40, opacity: 0 },
    exit: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 1,
        when: "beforeChildren",
      },
    },
  };
  return (
    (client && (
      <motion.header
        dir={(home.id == "arabe" && "rtl") || "ltr"}
        variants={variants}
        animate="show"
        initial="hidden"
        exit="exit"
        className=" -mt-12 overflow-hidden font-serif lg:h-screen w-full  p-8 xl:p-16 relative flex items-center justify-between shadow-md "
      >
        <Background className="absolute inset-0  img z-0 selection:bg-red-500"></Background>
        <div className=" relative lg:ml-12 lg:max-w-[40vw] w-full selection:bg-red-500">
          <h1 className="">
            <Revele>
              <span className="block leading-10  text-5xl font-bold text-white ">
                {home["header:title"][0] || "Des Repense à vos"}
              </span>
            </Revele>
          </h1>
          <p>
            <Revele>
              <span className="block text-2xl leading-5  font-bold text-white ">
                {home["header:title"][1] || "questions sur la santé"}{" "}
              </span>
            </Revele>
          </p>
          <p>
            <Revele>
              <span className=" leading-3 text-xl block font-bold text-white ">
                {home["header:title"][2] || "de l'eoil"}
              </span>
            </Revele>
          </p>

          <p className="block p-4 mt-12 font-semibold text-white capitalize text-xl rounded-lg  w-auto bg-gray-600/40 backdrop-blur-2 shadow-lg bg-secondary ">
            {home["header:p"][0] || "de l'eoil"}
            <br />
            <span className="block">
              {" "}
              {home["header:p"][1] || "en explorant son fonctionnement"}
            </span>
          </p>
          <motion.ul
            variants={variants}
            className="flex   my-6 justify-between pt-8 flex-wrap "
          >
            <motion.li
              variants={variants}
              className="shadow-lg border-2 my-4 border-secondary  shadow-white/30  flex items-center justify-center w-24 h-24 bg-white rounded-full mx-4"
            >
              <a
                className="sr-only"
                href="https://www.flaticon.com/free-icons/vision"
                title="vision icons"
              >
                Vision icons created by Maxim Basinski Premium - Flaticon
              </a>
              <Image
                alt="image"
                width={40}
                height={40}
                className=" drop-shadow-2xl shadow-500 filter"
                src="/icon/icons/eye-chart@2x.png"
              />
            </motion.li>
            <motion.li
              variants={variants}
              className="shadow-lg border-2  my-4 border-secondary shadow-gray-100/40 flex items-center justify-center w-24 h-24 bg-white rounded-full"
            >
              <a
                className="sr-only"
                href="https://www.flaticon.com/free-icons/vision"
                title="vision icons"
              >
                Vision icons created by Umeicon - Flaticon
              </a>
              <Image
                alt="image"
                width={40}
                height={40}
                src="/icon/icons/Group 106@2x.png"
              />
            </motion.li>
            <motion.li
              variants={variants}
              className="shadow-lg border-2 my-4 border-secondary  shadow-gray-100/40 flex items-center justify-center w-24 h-24 bg-white rounded-full"
            >
              <a
                className="sr-only"
                href="https://www.flaticon.com/free-icons/optometrist"
                title="optometrist icons"
              >
                Optometrist icons created by Flat Icons - Flaticon
              </a>
              <Image
                alt="image"
                width={40}
                height={40}
                className=" drop-shadow-2xl shadow-500 filter"
                src="/icon/icons/Group 110@2x.png"
              />
            </motion.li>
            <motion.li
              variants={variants}
              className="shadow-lg border-2 my-4 border-secondary  shadow-gray-100/40 flex items-center justify-center w-24 h-24 bg-white rounded-full"
            >
              <a
                href="https://www.flaticon.com/free-icons/eye"
                className="sr-only"
                title="eye icons"
              >
                Eye icons created by Freepik - Flaticon
              </a>
              <Image
                alt="image"
                width={40}
                height={40}
                className=" drop-shadow-2xl shadow-500 filter"
                src="/icon/icons/Group 107@2x.png"
              />
            </motion.li>
          </motion.ul>
        </div>

        <div
          className={`hidden lg:block absolute inset-0 ${
            (home.id == "arabe" && "right-[50%]") || "left-[50%]"
          } scale-[.35]`}
        >
          <Tilt
            perspective={3500}
            glareEnable={false}
            glareMaxOpacity={0}
            glarePosition="all"
            scale={1}
            trackOnWindow={true}
          >
            <Lottie src="https://assets8.lottiefiles.com/packages/lf20_odlzihsl.json" />
          </Tilt>
        </div>
      </motion.header>
    )) ||
    ""
  );
}
//assets8.lottiefiles.com/packages/lf20_odlzihsl.json
export default Header;
