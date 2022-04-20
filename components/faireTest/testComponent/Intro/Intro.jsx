import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import Silde from "../../../AnimComponents/Slide";
export const Button = styled.button`
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    background: linear-gradient(rgb(59 130 246), #0033c0);
    top: -300%;
    transition: 0.3s cubic-bezier(0.27, 1.05, 0.69, 0.71) all;
    left: 0;
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 300%;
    border-bottom-left-radius: 50em;
    border-bottom-right-radius: 50em;
  }
  &:hover {
    &::after {
      top: 0;
    }
  }
`;
function Intro({ setIndex, setI }) {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  const [allowed, setAllowed] = useState(true);

  return (
    (client && (
      <Silde toHover={false}>
        <div className="text-black w-full pt-4 text-center">
          <div className="rounded-full z-10  r-img p-[1px] bg-black w-24 h-24 md:w-28 md:h-28 m-auto border-[2px] border-brand">
            <Image
              alt="image"
              src="https://draniss.ma/wp-content/uploads/2021/12/Logos.jpg"
              width={100}
              height={100}
              layout="responsive"
              priority
            />
          </div>
          <h1 className="text-xl pt-2">
            DÉCOUVREZ CE QUE VOS{" "}
            <span className="text-brand">YEUX ONT À VOUS DIRE</span>
          </h1>

          <div className="underline w-[50%] m-auto h-[2px] mt-4"></div>
          <p
            className="font-medium   prose
       m-auto text-bold text-gray-900 mt-4 leading-relaxed"
          >
            Dr Aniss Regragui vous propose un test de vue en ligne pour évaluer
            votre vision.
          </p>
          <>
            <section className="  grid md:grid-cols-2 gap-4 lg:py-6 lg:gap-16 lg:p-24 p-8 py-8  ">
              <article className="rounded-lg ">
                <Tilt
                  perspective={2500}
                  glareEnable={false}
                  glareMaxOpacity={0}
                  glarePosition="all"
                  scale={1.02}
                >
                  <img
                    alt="image"
                    src="https://draniss.ma/wp-content/uploads/2021/12/Groupe-107.png  "
                  />
                </Tilt>
              </article>
              <article className="prose">
                <p className="font-medium text-left w-text-sm text-gray-900 leading-relaxed">
                  Cet outil n’a qu’une valeur indicative et seuls les tests
                  réalisés professionnellement par votre ophtalmologue
                  permettent d’établir vos besoins réels en correction optique.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    setI(1);
                  }}
                >
                  <label
                    htmlFor="accept"
                    className="flex items-center space-x-4"
                  >
                    <input
                      type="checkbox"
                      value={allowed}
                      onChange={(e) => {
                        setAllowed(!e.target.checked);
                      }}
                      id="accept"
                      className="font-lighter rounded-md w-6 h-6 text-brand focus:ring-2 focus:ring-brand focus:ring-offset-4 focus:ring-offset-gray-800"
                    />
                    <p className="text-gray-900">
                      J'ai lu et accepte{" "}
                      <span className="font-lighter text-brand">
                        {" "}
                        la clause de non-responsabilité
                      </span>
                    </p>
                  </label>
                  <Button
                    disabled={allowed}
                    className={`btn from-brand z-10 via-brand to-brand disabled:opacity-50`}
                  >
                    Continue
                  </Button>
                </form>
              </article>
            </section>
          </>
        </div>
      </Silde>
    )) ||
    ""
  );
}

export default Intro;
