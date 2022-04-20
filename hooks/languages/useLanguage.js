import create from "zustand";
import { persist } from "zustand/middleware";
import { FRANCAIS } from "./locales/francais";
import { ENGLISH } from "./locales/english";
import { ARABE } from "./locales/arabe";

const useLanguages = create(
  persist(
    (set) => ({
      current: FRANCAIS,
      setLanguage: (languageId) => {
        switch (languageId) {
          case "francais":
            return set({ current: FRANCAIS });
          case "english":
            return set({ current: ENGLISH });
          case "arabe":
            return set({ current: ARABE });
          default:
            return FRANCAIS;
        }
      },
    }),
    {
      name: "language",
    },
  ),
);

export default useLanguages;
