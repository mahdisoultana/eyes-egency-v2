import React from "react";
import Image from "next/image";
import FlshBtn from "../../AnimComponents/FlshBtn";
import LanguageProvider from "../../../hooks/languages/LanguageProvider";
function Consulter() {
  return (
    <LanguageProvider>
      {(home) => (
        <section className="bg-secondary dark:bg-white  text-white dark:text-secondary text-center p-4 ">
          <div className="rounded-full r-img p-1 bg-white dark:bg-brand  w-[100px] h-[100px] md:w-[180px] md:h-[180px] m-auto border-2 border-red-400">
            <Image
              src="https://draniss.ma/wp-content/uploads/2021/12/Logos.jpg"
              width={100}
              height={100}
              layout="responsive"
              alt="image"
            />
          </div>
          <h4 className="uppercase font-semibold  text-white dark:text-brand text-xl  md:text-3xl my-8 mt-4">
            {home["consulter:title"]}
          </h4>
          <h4 className="uppercase font-semibold text-sm text-white dark:text-brand  my-8 mt-4">
            {home["consulter:title-lg"]}
          </h4>
          <button className=" inline-block  mb-12 text-xl  px-12 py-4  font-serif tracking-wider text-white   shadow-gray-900/20 shadow-sm  bg-gradient-to-tl from-secondary   to-brand hover:bg-gradient-to-br transition-all duration-100 hover:scale-105 rounded-sm font-medium hover:shadow-xl">
            <FlshBtn> {home["consulter:btn"]}</FlshBtn>
          </button>
        </section>
      )}
    </LanguageProvider>
  );
}

export default Consulter;
