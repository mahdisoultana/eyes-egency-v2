import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import useMutate from "../../hooks/useMutate";
function Form() {
  const { response, mutate } = useMutate("/api/contact", "POST");
  const [allowed, setAllowed] = useState(false);
  console.log(response);
  if (response?.success) {
    toast.success("Check you InBox 🥰");
  }
  async function handelSubmit(e) {
    e.preventDefault();

    console.log("submit");
    // toast.warn("nous allons vous contcter bientôt");
    try {
      mutate({
        email: e.target.email.value,
        name: e.target.name.value,
        type: "contact",
      });
    } catch (e) {
      console.log(e);
      toast.error(e.message);
    }
  }
  return (
    <form
      onSubmit={handelSubmit}
      className="bg-white max-w-lg xl:max-w-xl w-full pt-4 p-8 rounded-lg space-y-4  xl:grid xl:grid-cols-2 items-baseline gap-6"
    >
      <h1 className="font-bold text-3xl  text-gray-800 font-mono col-span-2 text-center">
        Contactez-Moi
      </h1>
      <label htmlFor="name" className="block">
        <span className="mb-1 block font-bold text-lg text-gray-700">Nom</span>
        <input
          type="text"
          className="w-full p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4  focus:ring-2 focus:ring-indigo-500  focus:border-gray-500 "
          placeholder="Name"
          id="name"
        />
      </label>
      <label htmlFor="email" className="block">
        <span className="mb-1 block font-bold text-lg text-gray-700">
          Email
        </span>
        <input
          type="email"
          id="email"
          className={`w-full p-2 rounded-lg border-[3px] focus:outline-none focus:ring-offset-4 focus:ring-2 focus:ring-indigo-500 focus:border-gray-500   `}
          placeholder="Email"
        />
      </label>

      <label htmlFor="able" className="block">
        <span className="mb-1 block font-bold text-lg text-gray-700">
          Status ?
        </span>
        <div className="grid gap-3 grid-cols-2  justify-items-between justify-content-between">
          <label htmlFor="green">
            <input
              type="checkbox"
              name="able"
              value="green"
              className=" p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4  focus:ring-2 text-green-500 focus:ring-green-500  focus:border-gray-500 "
              placeholder="Name"
              id="green"
            />
            <span className="inline-block mx-2 uppercase text-gray-500 font-medium">
              pas mal
            </span>
          </label>
          <label htmlFor="purpule">
            <span className="inline-block mx-2 uppercase text-gray-500 font-medium">
              Bien
            </span>
            <input
              type="checkbox"
              name="purpule"
              value="purpule"
              className=" p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4  focus:ring-2 text-indigo-500 focus:ring-indigo-500  focus:border-gray-500 "
              placeholder="Name"
              id="purpule"
            />
          </label>
          <label htmlFor="Red">
            <input
              type="checkbox"
              name="Red"
              value="Red"
              className=" p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4 text-red-500 focus:ring-2 focus:ring-red-500  focus:border-gray-500 "
              placeholder="Name"
              id="Red"
            />
            <span className="inline-block mx-2 uppercase text-gray-500 font-medium">
              Urgent
            </span>
          </label>
          <label htmlFor="Yellow">
            <span className="inline-block mx-2 uppercase text-gray-500 font-medium">
              mal
            </span>
            <input
              type="checkbox"
              name="Yellow"
              value="Yellow"
              className=" p-2 rounded-lg border-[3px] text-yellow-500 focus:outline-none focus:ring-offset-4  focus:ring-2 focus:ring-yellow-500  focus:border-gray-500 "
              placeholder="Name"
              id="Yellow"
            />
          </label>
        </div>
      </label>
      <label htmlFor="able" className="block">
        <span className="mb-1 block font-bold text-lg text-gray-700">
          voulez vous que je vous Apple ?
        </span>
        <input
          type="radio"
          name="able"
          value="yes"
          className=" p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4  focus:ring-2 focus:ring-green-500  text-green-500  focus:border-gray-500 "
          placeholder="Name"
          id="able"
        />
        <span className="inline-block mx-2 uppercase text-gray-500 font-medium">
          Yes
        </span>
        <input
          type="radio"
          name="able"
          value="no"
          className=" p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4  focus:ring-2 focus:ring-red-500  text-red-500  focus:border-gray-500 "
          placeholder="Name"
          id="no"
        />
        <label htmlFor="no">
          <span className="inline-block mx-2 uppercase text-gray-500 font-medium">
            No
          </span>
        </label>
      </label>
      {/* <label htmlFor="stack" className="block">
        <span className="mb-1 block font-bold text-lg text-gray-700">
          Your stack :
        </span>
        <select
          name="stack"
          id="stack"
          className="w-full p-2 rounded-lg border-[3px] focus:outline-none focus:ring-offset-4 focus:ring-2 focus:ring-indigo-500 focus:border-gray-500   "
        >
          <option value="Mern">MERN</option>
          <option value="Mern">MEAN</option>
          <option value="Mern">MEVN</option>

          <option value="Mern">Other</option>
        </select>
      </label> */}
      <label htmlFor="tel" className="block col-span-2">
        <span className="mb-1 block font-bold text-lg text-gray-700">
          Telephone
        </span>
        <input
          type="tel"
          id="tel"
          className={`w-full p-2 rounded-lg border-[3px] focus:outline-none focus:ring-offset-4 focus:ring-2 focus:ring-indigo-500 focus:border-gray-500   `}
          placeholder="0603371647"
        />
      </label>
      {/* <label htmlFor="avatar" className="block">
        <span className="mb-1 block font-bold text-lg text-gray-700">
          Avatar
        </span>
        <input
          type="file"
          id="avatar"
          className={` p-1 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4 file:bg-violet-50 file:border-2  file:mr-4 file:py-2 file:px-4 block w-full text-sm font-bold  italic shadow-md shadow-slate-100 text-gray-500
      file:rounded-full file:border-none
      file:text-sm file:font-semibold
       border-x file:text-violet-700  hover:file:text-violet-100
      hover:file:bg-violet-800  focus:ring-2 focus:ring-indigo-500  focus:border-gray-500 file:shadow-sm border-gray-500 `}
        />
      </label> */}
      <label
        htmlFor="accept"
        className="flex items-center col-span-2 space-x-4"
      >
        <input
          type="checkbox"
          value={allowed}
          onChange={(e) => {
            setAllowed(!e.target.checked);
          }}
          id="accept"
          className="font-lighter rounded-md w-6 h-6 text-indigo-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-4 focus:ring-offset-gray-800"
        />
        <p>
          J'ai lu{" "}
          <span className="font-lighter text-blue-800"> et j' accepte </span>
        </p>
      </label>
      <button
        type="submit"
        disabled={allowed}
        className="col-span-2  bg-indigo-700 text-white text-lg font-bold inline-block w-full p-3 rounded-md mt-8 disabled:opacity-10 tracking-wider hover:bg-indigo-500"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
