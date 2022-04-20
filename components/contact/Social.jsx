import { ImWhatsapp } from "react-icons/im";
import { MdMarkEmailUnread } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
const Social = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            direct Contactez
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="f51618fb-0edb-4bcb-b35a-ffc770941286"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#f51618fb-0edb-4bcb-b35a-ffc770941286)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{" "}
          Détails et Infos Contact.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Vous pouvez prendre visite avec Dr Aniss Regragui à l’Hôpital Cheikh
          Zayd, ou le contacter par mail, par téléphone ou via WhatsApp.
        </p>
      </div>
      <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
        <div className="relative text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
            <ImWhatsapp size="4rem" />
          </div>
          <h6 className="mb-2 text-2xl font-extrabold">
            Messages via WhatsApp
          </h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            (+212) 661 166 699
          </p>
          <span
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-blue-accent-400 hover:text-deep-blue-800"
          >
            <a href="https://wa.me/message/HRP6WU4CZH7XC1" target="_blanck">
              Applez-Moi
            </a>
          </span>
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <svg
              className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="15,5 22,12 15,19 "
              />
            </svg>
          </div>
        </div>
        <div className="relative text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
            <svg
              className="w-12 h-12 text-deep-blue-accent-400 sm:w-16 sm:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-2xl font-extrabold">Address</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Hôpital Cheikh Zayd : Av. Allal Al Fassi, Rabat 10000
          </p>
          <span
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-blue-accent-400 hover:text-deep-blue-800"
          >
            voir le Map
          </span>
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <svg
              className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="15,5 22,12 15,19 "
              />
            </svg>
          </div>
        </div>
        <div className="relative text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
            <MdMarkEmailUnread size="4rem" />
          </div>
          <h6 className="mb-2 text-2xl font-extrabold">Email</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            contact@draniss.ma
          </p>
          <span
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-blue-accent-400 hover:text-deep-blue-800"
          >
            <a href="mailto:mahdisoultana@gmail.com">Envoyez Email</a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Social;
