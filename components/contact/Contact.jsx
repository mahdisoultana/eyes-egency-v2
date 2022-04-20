import React, { useState } from "react";
import Slide from "../AnimComponents/Slide";
import Location from "./Location";
import Header from "./Header";
import Social from "./Social";
import Form from "./Form";

function ContactC() {
  return (
    <>
      <Header />
      <Social />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-28 mt-2 ">
        <Slide>
          <Form />
        </Slide>
        <Slide direction={-1}>
          <div className="relative p-2 w-full h-[90vh] bg-indigo-700 shadow-lg rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d105913.52093275677!2d-6.9340513!3d33.9463353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76cdb80527cdd%3A0x8c9c0b3655aa197d!2sH%C3%B4pital%20Cheikh%20Zayd!5e0!3m2!1sfr!2sma!4v1642617582553!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
            <div className="bg-white p-2 border-indigo-700 border-4 absolute -bottom-16 -left-4 w-[70%]  flex flex-wrap py-2 rounded shadow-md">
              <div className="lg:w-1/2 px-2">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Hôpital Cheikh Zayd : Av. Allal Al Fassi, Rabat 10000
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  contact@draniss.ma
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">(+212) 661 166 699</p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}

export default ContactC;
