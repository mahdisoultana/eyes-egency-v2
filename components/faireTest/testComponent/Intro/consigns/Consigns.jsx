import React from "react";
import { Button } from "../Intro";
import Silde from "../../../../AnimComponents/Slide";
import { motion } from "framer-motion";
const decouvert = [
  {
    title: " Jaugez votre acuité",
    p: `Contrôlez votre acuité visuelle avec des lunettes correctrices si vous en avez`,
  },
  {
    title: "   Testez vos deux yeux",
    p: `Pour commencer avec l’œil droit, couvrez l’œil gauche sans le presser.`,
  },
  {
    title: "    Consultation recommandée",
    p: `Les résultats ne sont qu’une orientation, et non un diagnostic.`,
  },
  {
    title: "  Restez à distance",
    p: `placez-vous à environ 1 mètre du test.`,
  },
];

function Consigns({ setIndex }) {
  return (
    <Silde toHover={false}>
      <motion.article className=" lg:w-[60%] container w-full m-auto">
        {/* {console.log(home)} */}

        <div className="grid lg:grid-cols-2 items-center prose justify-center  gap-6 mt-16 dark:text-white">
          {decouvert.map((item, key) => (
            <div className="min-h-[130px] " key={key}>
              <h5 className="font-bold text-normal text-secondary dark:text-white ">
                {item.title}
              </h5>
              <p>{item.p}</p>
            </div>
          ))}
        </div>
        <Button
          onClick={() => {
            setIndex(1);
          }}
          className={`btn from-brand z-10 via-brand to-brand disabled:opacity-50 px-4`}
        >
          Commencez le Test
        </Button>
      </motion.article>
    </Silde>
  );
}

export default Consigns;
