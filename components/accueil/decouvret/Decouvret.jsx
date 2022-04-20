import React from "react";
import Image from "next/image";
import FaireTest from "../faireTest/FaireTest";
import Tilt from "react-parallax-tilt";

import LanguageProvider from "../../../hooks/languages/LanguageProvider";
function Decouvret() {
  return (
    <LanguageProvider>
      {(home) => (
        <section className="p-16  grid md:grid-cols-2 gap-4 lg:gap-16  ">
          <article className="rounded-lg ">
            <Tilt
              tiltMaxAngleX={40}
              tiltMaxAngleY={40}
              perspective={800}
              transitionSpeed={1500}
              scale={1.1}
              gyroscope={true}
            >
              <Image
                src="/images/accueilSection1.png"
                width="100"
                height="100"
                layout="responsive"
                alt="image"
              />
            </Tilt>
          </article>
          <article className="prose">
            {/* {console.log(home)} */}
            <h1 className="font-medium text-3xl text-secondary dark:text-white lg:w-[90%]">
              {home["decouvert:title"][0] || " DÉCOUVREZ CE QUE"}{" "}
              <span className="font-black text-3xl text-secondary dark:text-white">
                {" "}
                {home["decouvert:title"][1] || "  VOS  YEUX ONT À  VOUS DIRE"}
              </span>
            </h1>
            <p className="font-medium text-sm text-gray-600  dark:text-gray-200 leading-relaxed">
              {home["decouvert:p"] ||
                `Dr Aniss Regragui vous propose un test de vue en ligne pour évaluer
            votre vision. Cet outil n’a qu’une valeur indicative et seuls les
            tests réalisés professionnellement par votre ophtalmologue
            permettent d’établir vos besoins réels en correction optique.`}
            </p>
            <div className="grid lg:grid-cols-2  gap-6 mt-16 dark:text-white">
              {home["decouvert:maps"].map((item, key) => (
                <div className="min-h-[130px] " key={key}>
                  <h5 className="font-bold text-normal text-secondary dark:text-white ">
                    {item.title}
                  </h5>
                  <p>{item.p}</p>
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
export default Decouvret;
