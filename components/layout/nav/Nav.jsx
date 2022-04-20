import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdMarkEmailUnread } from "react-icons/md";
// import useMode from "../../../hooks/useMode";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineBars,
} from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Slide from "../../AnimComponents/Slide";
import Link from "next/link";
import Ul from "./Ul";

import ToggleDark from "./toggleDark/ToggleDark";
import SideBar from "../../sideBar/SideBar";
import useClient from "../../../hooks/useClient";
import useScrollPosition from "../../../hooks/useScrollPosition";

function Nav() {
  // const dark=useMode(state=>state.dark)
  const { client } = useClient();
  const { inVeiw } = useScrollPosition();
  let onTop = !inVeiw;
  const [open, setOpen] = useState(false);
  // const [onTop, setOnTop] = useState(true);
  // useEffect(() => {
  //   function sroll() {
  //     if (window.scrollY > 200) {
  //       setOnTop(false);
  //     } else {
  //       setOnTop(true);
  //     }
  //   }
  //   window.addEventListener("scroll", sroll);
  //   () => {
  //     window.removeEventListener("scroll", sroll);
  //   };
  // }, []);
  const variants = {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: -100 },
    exit: { opacity: 0, y: -100 },
  };
  return (
    <AnimateSharedLayout>
      {open && <SideBar setOpen={setOpen} />}
      <motion.nav className="dark:bg-secondary bg-white flex  fixed w-full top-0 left-0 z-50">
        <motion.div
          className={`${
            onTop ? "p-16" : "p-4"
          } px-16 bg-brand flex  justify-center items-center `}
        >
          <Image
            src="/icon/icons/logo.png"
            width={onTop ? "200" : "130"}
            height={onTop ? "80" : "50"}
            alt="image"
          />
        </motion.div>
        <motion.div className=" w-full flex shadow-md relative shadow-gray-900/60 z-50   items-between p-4  ">
          <motion.div className="hidden  lg:flex flex-col grow divide-y-2 divde-gray-300">
            <AnimatePresence>
              {onTop && (
                <>
                  <motion.ul
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={variants}
                    className="flex   flex-wrap items-center  p-4 space-x-12  "
                  >
                    <li className="text-sm font-semibold text-gray-600 dark:text-white text-center flex items-center space-x-3 ">
                      <MdMarkEmailUnread size="1.5rem" className="text-brand" />{" "}
                      <p>
                        <a href="mailto:mahdisoultana@gmail.com">
                          conseil@draniss.ma
                        </a>
                      </p>
                    </li>
                    <li className="text-sm    font-semibold dark:text-white text-gray-600 text-center capitalize flex items-center space-x-3 ">
                      <SiMinutemailer
                        size="1.5rem"
                        className="text-green-700 dark:text-green-400"
                      />
                      <p>
                        <a
                          href="https://wa.me/message/HRP6WU4CZH7XC1"
                          target="_blanck"
                        >
                          (+212) 661 166 699
                        </a>
                      </p>
                    </li>
                    <li className="grow   flex justify-end items-center space-x-4">
                      <span>
                        <a href="https://facebook.com">
                          <AiFillFacebook
                            size="1.6rem"
                            className="text-secondary dark:text-white shadow-sm"
                          />
                        </a>
                      </span>
                      <span>
                        <a href="https://instagram.com">
                          <AiFillInstagram
                            size="1.8rem"
                            className="text-fuchsia-700 shadow-sm"
                          />
                        </a>
                      </span>
                      <span>
                        <a href="https://youtube.com">
                          <AiFillYoutube
                            size="2rem"
                            className="text-red-500 shadow-sm"
                          />
                        </a>
                      </span>

                      <span>{client && <ToggleDark />}</span>
                    </li>
                  </motion.ul>
                </>
              )}
            </AnimatePresence>
            <Ul />
          </motion.div>
          <motion.button
            layout
            onClick={() => setOpen(true)}
            className="block  lg:hidden text-2xl font-bold xl:hidden ml-auto   bg-brand rounded-xl h-12 p-2"
          >
            <AiOutlineBars size="2rem" color="white" />
          </motion.button>
        </motion.div>
      </motion.nav>
    </AnimateSharedLayout>
  );
}

export default Nav;
