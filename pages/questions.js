import Layout from "../components/layout/Layout";
import React, { useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <div className="overflow-hidden">
        <Faq />
      </div>
    </Layout>
  );
}

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AnimateSharedLayout>
      <motion.div
        className="border-b hover:bg-brand hover:text-white
       "
      >
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.p className="text-lg font-medium">{title}</motion.p>
          <motion.svg
            viewBox="0 0 24 24"
            className={`w-3  transform transition-transform duration-200 hover:bg-brand text-white ${
              isOpen ? "rotate-180 text-black" : ""
            }`}
          >
            <motion.polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </motion.svg>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="p-4 pt-0 bg-brand/40 border-2 border-brand rounded-lg shadow-lg shadow-gray-400/40"
              initial={{
                y: ((Math.random() > 0.5 ? -1 : 1) * 100).toString() + "%",
                opacity: 0,
              }}
              exit={{
                y: ((Math.random() > 0.5 ? -1 : 1) * 100).toString() + "%",
                opacity: 0,
              }}
              animate={{ y: "0%", x: 0, opacity: 1 }}
            >
              <motion.p className="p-4  pb-0  text-black font-bold">
                {children}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimateSharedLayout>
  );
};
export const Faq = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      exit={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 "
    >
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-secondary uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="232db96b-4aa2-422f-9086-5a77996d1df1"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{" "}
            quick, brown fox jumps over a lazy dog
          </h2>
          <p className="text-base text-gray-700 md:text-lg ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
        >
          <Item title="The quick, brown fox jumps over a lazy dog?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="The first mate and his Skipper too will do?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="Is the Space Pope reptilian!?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="How much money you got on you?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
        </motion.div>
      </div>
    </motion.div>
  );
};
