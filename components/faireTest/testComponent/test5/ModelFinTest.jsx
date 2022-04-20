import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideDown } from "../../../AnimComponents/variants";
function Model({
  setShowNext,
  counter,
  setCounter,
  isFin,
  setIsFin,
  setIndex,
  score1,
  score2,
  EyeIcon,
}) {
  console.log(score2, "score2");
  console.log(score1, "score1");
  return (
    <motion.div variants={slideDown}>
      <div className="bg-gray-900/50 overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 p-4  flex z-50 justify-center items-center h-modal md:h-full md:inset-0 h-[100vh]">
        <div className="relative  w-full max-w-2xl h-full md:h-auto p-4">
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -100, opacity: 0 }}
            className="absolute top-[50%]  translate-y-[-50%] bg-white rounded-lg shadow dark:bg-gray-700"
          >
            <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                Interprétez vos résultats
              </h3>
              <button
                type="button"
                onClick={() => {
                  setCounter(0);
                  setIsFin(false);
                  setShowNext(false);
                  setIndex(0);
                }}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6 capitalize">
              <div className="flex items-center justify-around  ">
                <div className="flex items-center justify-center flex-col  ">
                  <p className="flex items-center justify-center">
                    <span className="inline-block mx-3">
                      <EyeIcon size="2rem" className=" text-blue-500" />
                    </span>
                    Score pour l'Oeil gauche
                  </p>
                  <p className="font-serif text-4xl">
                    <span className="text-6xl leading-relaxed text-green-500 dark:text-gray-200">
                      {score1}
                    </span>
                    <span>/</span>
                    <span>5</span>
                  </p>
                </div>
                <div className="h-24 w-[4px] bg-blue-500"></div>
                <div className="flex items-center justify-center flex-col  ">
                  <p className="flex items-center justify-center">
                    {" "}
                    <span className="inline-block mx-3">
                      <EyeIcon size="2rem" className="text-blue-500" />
                    </span>
                    Score pour l'Oeil droit
                  </p>
                  <p className="font-serif text-4xl">
                    <span className="text-6xl leading-relaxed text-green-500 dark:text-gray-200">
                      {score2}
                    </span>
                    <span>/</span>
                    <span>5</span>
                  </p>
                </div>
              </div>
            </div>
            <p className="text-lg  p-4 lg:p-8 leading-relaxed text-gray-900 dark:text-gray-400">
              Votre acuité visuelle est dans la moyenne, avec un score de{" "}
              <span className="text-6xl leading-relaxed text-brand dark:text-gray-200">
                {(score2 + score1) / 2}/5
              </span>
              . Continuez à gardez vos yeux en bonne santé en suivant nos
              conseils sur Youtube et sur notre blog
            </p>

            <div className="flex p-6  justify-around  flex-wrap  rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5  text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                <Link href="/questions"> Voir conseils</Link>
              </button>

              <button
                data-href="https://developers.facebook.com/docs/plugins/"
                data-layout="button_count"
                data-size="large"
                type="button"
                className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
              >
                <svg
                  className="mr-2 -ml-1 w-4 h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                  ></path>
                </svg>
                <a
                  target="_blank"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://github.com/Mahdi-Soultana"
                  rel="noreferrer"
                  className="fb-xfbml-parse-ignore"
                >
                  Share with Facebook
                </a>
              </button>
              <button
                type="button"
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <svg
                  className="mr-2 -ml-1 w-4 h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/Mahdi-Soultana">
                  Share with LinkedIn
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Model;
