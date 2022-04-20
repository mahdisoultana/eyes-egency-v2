import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImHeadphones } from "react-icons/im";
import FlshBtn from "../../AnimComponents/FlshBtn";
import useMutate from "../../../hooks/useMutate";
import useMode from "../../../hooks/useMode";

function Footer() {
  const dark = useMode((state) => state.dark);
  const { mutate } = useMutate("/api/contact", "POST");
  const [email, setEmail] = useState("");
  return (
    <>
      <section className="flex justify-between flex-wrap items-center min-h-48 py-8 md:px-32 px-8 bg-brand dark:bg-white shadow-lg shadow-gray-400/60 relative gradientImg">
        <article className="flex flex-wrap justify-between items-center space-y-4">
          <div className="flex items-center flex-wrap justify-center bg-white mr-8 rounded-full w-28  h-28 shadow-md shadow-gray-900/60">
            <ImHeadphones size="4rem" className="text-gray-700" />
          </div>
          <div className="space-y-8 md:space-y-4">
            <p className="text-xl text-white font-lighter capitalize max-w-lg">
              Vous souhaitez prendre rendez-vous avec Dr. Aniss ?
            </p>
            <h2 className="text-2xl text-white font-medium capitalize max-w-lg">
              Remplissez le formulaire de prise de rendez-vous en ligne.
            </h2>
          </div>
        </article>
        <button className="my-6 px-12 py-4 text-lg text-white   shadow-gray-900/20 shadow-sm  bg-gradient-to-tl from-secondary/90 via-secondary to-secondary hover:bg-gradient-to-br transition-all duration-100 hover:scale-105 rounded-sm font-medium hover:shadow-xl">
          <FlshBtn href="/rendez-vous"> Demandez RDV </FlshBtn>
        </button>
      </section>
      <footer
        className="bg-gray-100 dark:bg-secondary dark:text-white  py-16 pb-8 divide-y-2 space-y-8 px-4
     divide-secondary/20"
      >
        <section className="container m-auto grid px-8  gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4">
          <div className="w-full space-y-2">
            <div>
              <Image
                src={dark ? `/icon/icons/logodark.png` : `/icon/icons/logo.png`}
                width="150"
                height="60"
                alt="image"
              />
            </div>
            <p className="dark:text-white font-medium tracking-tigh text-base text-gray-900 md:w-[80%] md:ml-auto ml-4">
              Dr Aniss Regragui est ophtalmologiste rétinologue spécialiste de
              la chirurgie de la cataracte, la chirurgie vitréo rétinienne, le
              suivi diabétique ainsi que l’ophtalmologie pédiatrique et adulte.
            </p>
          </div>
          <div className="w-full">
            <h4 className="font-semibold text-xl dark:text-white w-[80%] md:ml-auto text-gray-800 p-1  ">
              Liens Utiles
            </h4>
            <div className="md:ml-16 ml-2 dark:bg-white  h-[3px] mb-5   w-[15%] bg-brand"></div>
            <ul className="list-outsie space-y-4">
              <li className="   font-lighter text-base dark:text-white text-gray-500 w-[80%] md:ml-auto">
                <FlshBtn href="/rendez-vous"> Demandez RDV </FlshBtn>
              </li>
              <li className="   font-lighter dark:text-white  text-base text-gray-500 w-[80%] md:ml-auto">
                <FlshBtn href="/contact"> Contact</FlshBtn>
              </li>
              <li className="   font-lighter dark:text-white  text-base text-gray-500 w-[80%] md:ml-auto">
                <FlshBtn href="/specialtie">Spécialités </FlshBtn>{" "}
              </li>
              <li className=" dark:text-white font-lighterdark:text-white   text-base text-gray-500 w-[80%] md:ml-auto">
                <FlshBtn href="/propos">A propos </FlshBtn>
              </li>
              <li className="  font-lighter dark:text-white  text-base text-gray-500 w-[80%] md:ml-auto">
                <FlshBtn href="/test"> A propos Test de vue </FlshBtn>
              </li>
              <li className="  font-lighter dark:text-white  text-base text-gray-500 w-[80%] md:ml-auto">
                <FlshBtn href="/guide-oeil"> Guide D'oeil </FlshBtn>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h4 className="font-semibold text-xl dark:text-white   w-[80%]  text-gray-800 p-1  ">
              Restez en Contact
            </h4>
            <div className="ml-2 h-[3px] mb-5   w-[15%] dark:bg-white bg-brand"></div>
            <ul className="list-outsie space-y-4">
              <li className=" dark:text-white font-lighter text-base text-gray-500 w-[80%]  flex items-start space-x-3 ">
                <FaMapMarkedAlt
                  size="3rem"
                  className="text-4xl dark:text-white text-brand "
                />
                <p>Hôpital Cheikh Zayd : Av. Allal Al Fassi, Rabat 10000</p>
              </li>

              <li className=" dark:text-white font-lighter text-base text-gray-500 w-[80%]  flex items-center space-x-3 ">
                <BsFillTelephoneFill
                  size="1.5rem"
                  className=" dark:text-whitetext-brand"
                />
                <a href="tel:0123456789">(+212) 661 166 699</a>
              </li>
              <li className=" dark:text-white font-lighter text-base text-gray-500 w-[80%]  flex items-center space-x-3 ">
                <MdOutlineLocalPostOffice
                  size="1.5rem"
                  className="text-yellow-800 dark:text-white"
                />
                <a href="mailto:mahdisoultana@gmail.com">conseil@draniss.ma</a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h4 className="font-semibold text-xl  dark:text-white w-[95%] md:ml-auto text-gray-800 p-1  ">
              Subscribe :
            </h4>
            <div className="underline dark:bg-white"></div>
            <label
              htmlFor="email"
              className="font-lighter space-y-2  text-base text-gray-500 w-[96%] md:ml-auto block"
            >
              <p className="font-bold text-base dark:text-white text-gray-500 ">
                Votre Email
              </p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@gmail.com"
                className="rounded-md w-full shadow-sm shadow-gray-900"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <button
                onClick={() => {
                  console.log(email);
                  if (email.trim().length > 10) {
                    console.log("he");
                    mutate({ email, type: "subscribe" });
                  }
                }}
                className=" inline-block  mb-12 text-md  px-6 py-2   tracking-wider text-white   shadow-indigo-600 shadow-md bg-gradient-to-tl  from-brand via-secondary to-brand hover:bg-gradient-to-br transition-all duration-100 hover:scale-105 rounded-lg font-medium hover:shadow-xl"
              >
                Subscribe
              </button>
            </label>
          </div>
        </section>
        <div>
          <p className="text-center font-medium text-sm dark:text-white mt-6 text-gray-900  ">
            Copyright © 2022 Developez par <a href='https://github.com/Mahdi-Soultana' target='_blank'>Mahdi Soultana </a>  et designer par  l'agence Digitaleaders. Tous droits
            réservés.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
