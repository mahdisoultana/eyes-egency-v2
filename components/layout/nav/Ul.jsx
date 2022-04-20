import React, { useState } from "react";
import Link from "next/link";
import FlshBtn from "../../AnimComponents/FlshBtn";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useRouter } from "next/router";
import useClient from "../../../hooks/useClient";
import Translator from "./translator/Translator";
function Ul() {
  const { client } = useClient();
  const router = useRouter();
  // console.log(router);
  const [selected, setSelected] = useState(() => {
    if (router.asPath == "/") {
      return "accueil";
    } else {
      return router.asPath.replace("/", "");
    }
  });

  return (
    <AnimateSharedLayout>
      <motion.ul className="flex grow px-4 flex-wrap  mt-auto  items-center justify-evenly  duration-200">
        {[
          "accueil",
          "test",
          "specialite",
          "propos",
          "blogs",
          "questions",
          "contact",
          "guide-oeil",
        ].map((item, key) => {
          return (
            <Link
              key={key}
              href={item !== "accueil" ? "/" + item : "/"}
              shallow={true}
              passHref
            >
              <motion.li
                key={key.toString()}
                onClick={() => setSelected(item)}
                className={`text-sm text-center duration-200 cursor-pointer font-semibold text-gray-800 dark:text-white ${
                  selected == item && " text-brand font-black text-lg"
                }text-center capitalize basis-16`}
              >
                {item == "guide-oeil" ? "Guide D'Oeil" : item}

                {selected == item && (
                  <motion.div
                    key={key.toString()}
                    initial={{
                      y: 10,
                      scale: 1.4,
                    }}
                    animate={{
                      y: 0,
                      scale: 1,

                      transition: {
                        repeat: Infinity,
                        repeatType: "mirror",
                        type: "spring",
                        duration: 1.5,
                        stiffness: 300,
                      },
                    }}
                    layoutId={key.toString()}
                    className={`m-auto w-2 h-2 flex items-center  duration-200 justify-center rounded-full   bg-brand`}
                  ></motion.div>
                )}
              </motion.li>
            </Link>
          );
        })}

        <li
          className="
             uppercase font-bold text-gray-100 dark:text-white"
        >
          <motion.button className=" duration-200 px-4 py-3 inline-block shadow-gray-900/40 shadow-sm  bg-gradient-to-br  from-secondary  via-secondary to-secondary/90 hover:bg-gradient-to-tl transition-all   dark:from-brand  dark:via-brand dark:to-brand/90   hover:scale-105 rounded-sm font-medium hover:shadow-lg  xl:mr-auto hover:shadow-gray-900/50 ">
            <FlshBtn href="/rendez-vous">Rendez-Vous</FlshBtn>
          </motion.button>
        </li>
        <li>{client && <Translator />}</li>
      </motion.ul>
    </AnimateSharedLayout>
  );
}

export default Ul;
