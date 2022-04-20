import React, { useEffect, useState } from "react";

function useScrollPosition(init = 200) {
  const [inVeiw, setInVeiw] = useState(false);
  useEffect(() => {
    function sroll() {
      if (window.scrollY < init) {
        setInVeiw(false);
      } else {
        setInVeiw(true);
      }
    }
    window.addEventListener("scroll", sroll);
    () => {
      window.removeEventListener("scroll", sroll);
    };
  }, []);
  return { inVeiw };
}

export default useScrollPosition;
