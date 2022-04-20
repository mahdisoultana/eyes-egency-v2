import React from "react";
import useLanguage from "./useLanguage";
function LanguageProvider({ children, state = (state) => state.current.home }) {
  const page = useLanguage(state);
  return (
    <section dir={(page.id == "arabe" && "rtl") || "ltr"}>
      {children(page)}
    </section>
  );
}

export default LanguageProvider;
