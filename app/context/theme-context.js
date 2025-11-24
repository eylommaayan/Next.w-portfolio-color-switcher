"use client";

import { createContext, useContext, useReducer, useEffect, useState } from "react";
import themeReducer from "./themeReducer";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  const [themeState, dispatchTheme] = useReducer(
    themeReducer,
    { primary: "color-1", background: "bg-1" }
  );

  useEffect(() => {
    const saved = localStorage.getItem("themeSettings");

    if (saved && saved !== "undefined" && saved !== "null") {
      try {
        const parsed = JSON.parse(saved);

        // ודא שזה באמת אובייקט עם primary/background
        if (parsed?.primary && parsed?.background) {
          dispatchTheme({ type: "INIT", payload: parsed });
        }
      } catch (err) {
        console.warn("Invalid JSON in localStorage, resetting themeSettings");
        localStorage.removeItem("themeSettings");
      }
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("themeSettings", JSON.stringify(themeState));
    }
  }, [themeState, loaded]);

  const themeHandler = (buttonClassName) => {
    dispatchTheme({ type: buttonClassName });
  };

  return (
    <ThemeContext.Provider value={{ themeState, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
