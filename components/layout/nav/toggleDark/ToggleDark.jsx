import React, { useEffect, useLayoutEffect, useState } from "react";
import useMode from "../../../../hooks/useMode";
import { BsFillCloudMoonFill } from "react-icons/bs";
import { WiSunrise } from "react-icons/wi";

function ToggleDark() {
  const dark = useMode((state) => state.dark);

  const setMode = useMode((state) => state.setMode);
  const [mode, setModeS] = useState(() => {
    return localStorage.getItem("dark")?.state?.dark || false;
  });
  useLayoutEffect(() => {
    setModeS(localStorage.getItem("dark")?.state?.dark);
  }, []);

  useLayoutEffect(() => {
    document.querySelector("html").classList.toggle("dark");
    setMode();
  }, [mode, setMode]);
  return (
    <label htmlFor="mode" className="flex items-center justify-center ">
      <label
        htmlFor="mode"
        className=" px-6 rounded-full relative flex items-center  bg-gray-100 border-2"
      >
        <input
          type="checkbox"
          name="toggle"
          id="mode"
          // value={dark}
          checked={dark}
          onChange={(e) => setModeS(e.target.checked)}
          className={`checked:bg-yellow-500 outline-none focus:outline-none -left-4 checked:left-2  duration-200 ease-in absolute block w-6 mx-4 h-6 rounded-full ${
            dark ? "border-yellow-500" : "border-yellow-500 "
          }  bg-gray-100 border-2 appearance-none cursor-pointer`}
        />
        <label className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
      </label>
      <span className="flex items-center justify-center ">
        {dark ? (
          <BsFillCloudMoonFill size="1.5rem" className="text-secondary" />
        ) : (
          <WiSunrise size="1.5rem" className="text-yellow-500" />
        )}
      </span>
    </label>
  );
}

export default ToggleDark;
