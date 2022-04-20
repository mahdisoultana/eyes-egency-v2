import React, { useEffect, useState } from "react";
import useLanguages from "../../../../hooks/languages/useLanguage";
import { BsGlobe } from "react-icons/bs";
function Translator() {
  const id = useLanguages((state) => state.current.id);
  const [language, setLanguage] = useState(
    () => JSON.parse(localStorage.getItem("language"))?.state?.current?.id,
  );
  useEffect(() => {
    setLanguage(id);
  }, [id]);
  const setLanguageS = useLanguages((state) => state.setLanguage);

  useEffect(() => {
    setLanguageS(language);
  }, [language, setLanguageS]);
  return (
    <label
      htmlFor="translator"
      className="flex items-center  relative justify-center "
    >
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className=" border-none   ring-2 ring-yellow-500/50 rounded-lg"
      >
        <option value="francais">Francais</option>
        <option value="english">English</option>
        <option value="arabe">Arabe</option>
      </select>
      {/* <span className="flex ml-3 items-center justify-center  ">
        <BsGlobe size="1.5rem" className="text-brand" />
      </span> */}
    </label>
  );
}

export default Translator;
