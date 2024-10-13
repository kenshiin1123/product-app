import { create } from "zustand";
import { getDarkModeCookies, setDarkModeCookies } from "../utils/cookieManager";

export const useGlobalStore = create((set) => ({
  darkMode: getDarkModeCookies(),
  setDarkMode: () => {
    set((state) => {
      const newDarkMode = !state.darkMode;
      setDarkModeCookies(newDarkMode);
      return { darkMode: newDarkMode };
    });
  },
}));
