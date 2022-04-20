import React from "react";
import { motion } from "framer-motion";
function ModelSuccess({
  setShowNext,
  showNext,
  setIsFin,
  setCounter,
  counter = 1,
  setIndex,
}) {
  // console.log(showNext);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-gray-900/50 overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 h-[100vh] flex z-50 justify-center items-center h-modal md:h-full md:inset-0 p-4">
        <div className="relative  w-full max-w-2xl h-full md:h-auto">
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -400, opacity: 0 }}
            exit={{ y: -100, opacity: 0 }}
            className="absolute top-[50%]  translate-y-[-50%] bg-white rounded-lg shadow dark:bg-gray-700"
          >
            <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                Bravo !
              </h3>
              <button
                type="button"
                onClick={() => {
                  if (counter >= 2) {
                    setIsFin(true);
                  } else {
                    setShowNext(false);
                  }
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

            <div className="p-6 space-y-6">
              {counter < 2 ? (
                <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
                  Maintenant, cachez votre œil
                  <span className="text-md p-4  font-semibold text-brand lg:text-2xl dark:text-white">
                    {counter == 0 ? "Droit" : "Gauche"}
                  </span>
                  afin de faire le test de vue avec votre œil
                  <span className="text-md  p-4 font-semibold text-brand lg:text-2xl dark:text-white">
                    {counter == 0 ? "Gauche" : "Droit"}
                  </span>
                </p>
              ) : (
                <p className="text-xl leading-relaxed text-secondary dark:text-gray-400 capitalize">
                  Votre test est terminé, en fonction de votre passage du test
                  de vue, voici vos recommandations…
                </p>
              )}
            </div>

            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                onClick={() => {
                  if (counter >= 2) {
                    setIsFin(true);
                  } else {
                    setShowNext(false);
                  }
                }}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Continuer
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
function Msg(num) {
  let msg;
  switch (num) {
    case 0:
      msg = "cachez l'oeil Droit";
      break;
    case 1:
      msg = "ouvrir les yeux";
  }
  return msg;
}
export default ModelSuccess;
