import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("app-theme") || "fem-dark",
  setTheme: (theme) => {
    localStorage.setItem("app-theme", theme);
    set({ theme });
  },
  darkMode: (theme) => {
    if (theme == "fem-dark") return true;
    if (theme == "fem-light") return false;
    return true;
  },
}));
