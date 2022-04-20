import Link from "next/link";

const Item = ({
  p,
  title,
  month,
  inverse = false,
  url = "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
}) => {
  return (
    <div className=" py-4 mx-auto sm:max-w-xl md:max-w-full lg:w-full  lg:py-4">
      <div className="flex flex-col w-full overflow-hidden bg-white border  shadow-sm lg:flex-row sm:mx-auto">
        <div className={`relative lg:w-1/2 ${inverse && "order-2"}`}>
          <img
            src={url}
            alt="picutre"
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className={`absolute top-0 ${
              inverse ? "-left-2 rotate-180" : "-right-2"
            } hidden h-full text-white lg:inline-block`}
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-secondary  uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h5 className="mb-3 text-secondary text-3xl font-extrabold leading-none sm:text-4xl">
            {title || "  Le fonctionnement et anatomie de l'œil humain."}
          </h5>
          <p className="mb-5 text-gray-800 ">
            {p ||
              "dolor sit amet,consectetur adipiscing elit. Etiam sem neque, molestie sit amet venenatis et, dignissim ut erat. Sed aliquet velit id dui eleifend,sed consequat odio sollicitudin."}
          </p>
          <div className="flex items-center">
            <button
              // href="/contact"
              className="inline-block items-center justify-center h-12 px-6 mr-6 font-medium bg-brand tracking-wide   transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 text-white  focus:shadow-outline focus:outline-none hover:bg-secondary"
            >
              Disponible en {month}
            </button>
            <Link
              href="/rendez-vous"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-900 transition-colors duration-200  hover:text-deep-purple-800  "
            >
              <>
                Rendez-Vous
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
