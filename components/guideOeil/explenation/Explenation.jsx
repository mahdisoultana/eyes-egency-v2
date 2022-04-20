import Link from "next/link";
const Explenation = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 dark:text-white uppercase rounded-full bg-teal-accent-400">
                GUIDE DE L’ŒIL
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl sm:leading-none">
              BIEN CONNAÎTRE
              <br className=" md:block" />
              <span className="max-w-lg mb-6 font-sans text-xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-2xl">
                L’ŒIL HUMAIN,
              </span>
              <span className="inline-block dark:text-white text-3xl text-deep-purple-accent-400">
                C’EST MIEUX LE PROTÉGER
              </span>
            </h2>
            <p className="text-base dark:text-white text-gray-700 md:text-lg">
              L’œil est un organe complexe qui capte les images vues et les
              transforme en signal électrique vers le nerf optique. Ce signal
              est par la suite traduit par le cerveau, qui nous renvoie l’image
              traitée et permet ainsi l’interprétation de notre environnement.
            </p>
          </div>
          <div className="flex flex-col dark:text-white items-center md:flex-row space-x-8">
            {/* <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none  bg-brand"
            >
              <span className="mr-3">Start Shopping</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4"
              >
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  points="4,4 22,4 19,14 4,14 "
                />
                <circle
                  cx="4"
                  cy="22"
                  r="2"
                  strokeLinejoin="miter"
                  strokeLinecap="square"
                  stroke="none"
                  fill="currentColor"
                />
                <circle
                  cx="20"
                  cy="22"
                  r="2"
                  strokeLinejoin="miter"
                  strokeLinecap="square"
                  stroke="none"
                  fill="currentColor"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  points="1,1 4,4 4,14 2,18 23,18 "
                />
              </svg>
            </a> */}

            <Link
              href="/propos"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 dark:text-white"
            >
              Dr Aniss Regragui
            </Link>
            <img
              src="/images/signature.png"
              alt="sinature"
              className="w-28 h-16 pl-4 "
            />
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="img"
          />
          <a
            rel="noreferrer"
            href="https://www.youtube.com/"
            target="_blank"
            aria-label="Play Video"
            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-secondary bg-opacity-50 group hover:bg-opacity-25"
          >
            <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
              <svg
                className="w-10 text-secondary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Explenation;
