import React from "react";
import FlshBtn from "../../AnimComponents/FlshBtn";
import styled from "styled-components";
import LanguageProvider from "../../../hooks/languages/LanguageProvider";
export const Icon = styled.div`
  > div {
    background: url(${(p) => p.url || "/icon/icons/Group 108@2x.png"}) no-repeat
      center center/contain;
  }
`;
function Specialite() {
  return (
    <LanguageProvider>
      {(home) => (
        <section className="bg-gray-100  lg:p-16 p-8 min-h-screen text-center ">
          <h6 className=" font-normal text-base mb-4 tracking-tight text-brand">
            {home["specialites:title"]}
          </h6>
          <h5 className=" font-semibold text-3xl tracking-tight text-secondary">
            {home["specialites:title-lg"]}
          </h5>
          <h4 className=" font-extrabold text-4xl text-secondary tracking-tight">
            {home["specialites:title-xl"]}
          </h4>
          <article className=" grid lg:grid-cols-4 gap-8 my-8   md:grid-cols-3 sm:grid-cols-2">
            {home["specialites:maps"].map((item, key) => (
              <div className="min-h-[150px] text-center space-y-2 " key={key}>
                <Icon
                  className="w-32 h-32 rounded-full p-4 border-2 border-secondary/60  shadow-sm m-auto flex items-center justify-center"
                  url="/icon/icons/Group 107@2x.png"
                >
                  <div className="w-full h-full rounded-full"></div>
                </Icon>
                <h5 className=" font-semibold text-md text-secondary">
                  {item.title}
                </h5>
                <p className="font-medium text-gray-500 leading-5 text-base">
                  {item.p}
                </p>
              </div>
            ))}
          </article>
          <button className="my-6 px-12 py-4 text-lg text-white   shadow-gray-900/20 shadow-sm  bg-gradient-to-tl from-secondary  via-secondary to-secondary hover:bg-gradient-to-br transition-all duration-100 hover:scale-105 rounded-sm font-medium hover:shadow-xl">
            <FlshBtn href="/specialte"> {home["specialites:btn"]}</FlshBtn>
          </button>
        </section>
      )}
    </LanguageProvider>
  );
}

export default Specialite;
