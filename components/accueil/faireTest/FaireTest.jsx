import Lottie from "../../AnimComponents/Lottie";
import FlshBtn from "../../AnimComponents/FlshBtn";
import Tilt from "react-parallax-tilt";
import LanguageProvider from "../../../hooks/languages/LanguageProvider";

function FaireTest() {
  return (
    <LanguageProvider>
      {(home) => (
        <section className="p-16 grid lg:grid-cols-2 gap-4 dark:bg-brand bg-secondary lg:gap-16 items-center ">
          <article className="rounded-lg order-2 bg-brand dark:bg-white ">
            <Tilt
              perspective={2500}
              glareEnable={false}
              glareMaxOpacity={0}
              glarePosition="all"
              scale={1.02}
            >
              <Lottie />
            </Tilt>
          </article>
          <article className="prose">
            <h1 className="font-medium text-3xl text-white  dark:text-white lg:w-[90%]">
              {home["test:title"][0]}
              <span className="font-black text-3xl text-white dark:text-white">
                {" "}
                {home["test:title"][1]}
              </span>
            </h1>
            <p className="font-bold text-base text-white dark:text-gray-100 textleading-relaxed">
              {home["test:p"]}
            </p>
            <button className="btn shadow-white">
              <FlshBtn href="/test"> {home["test:btn"]}</FlshBtn>
            </button>
          </article>
        </section>
      )}
    </LanguageProvider>
  );
}
// https://assets2.lottiefiles.com/packages/lf20_tutvdkg0.json
// ts7.lottiefiles.com/packages/lf20_cacfi55s.json
export default FaireTest;
