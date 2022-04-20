import create from "zustand";
import { persist } from "zustand/middleware";

const useMode = create(
  persist(
    (set, get) => ({
      dark: false,
      setMode: () => set({ dark: !get().dark }),
    }),
    {
      name: "dark",
    },
  ),
);

export default useMode;
