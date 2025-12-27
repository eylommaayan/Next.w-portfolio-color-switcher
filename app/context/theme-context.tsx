"use client";

import React, { createContext, useContext, useEffect, useReducer } from "react";
import themeReducer from "./themeReducer";

type ThemeState = { primary: string; background: string };

type ThemeContextValue = {
  themeState: ThemeState;
  themeHandler: (className: string) => void;
};

const defaultTheme: ThemeState = { primary: "color-1", background: "bg-1" };

const ThemeContext = createContext<ThemeContextValue | null>(null);

function initThemeState(): ThemeState {
  if (typeof window === "undefined") return defaultTheme;

  try {
    const saved = window.localStorage.getItem("themeSettings");
    return saved ? JSON.parse(saved) : defaultTheme;
  } catch {
    return defaultTheme;
  }
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeState, dispatchTheme] = useReducer(
    themeReducer,
    defaultTheme,
    initThemeState
  );

  const themeHandler = (className: string) => {
    dispatchTheme({ type: className });
  };

  useEffect(() => {
    window.localStorage.setItem("themeSettings", JSON.stringify(themeState));
  }, [themeState]);

  return (
    <ThemeContext.Provider value={{ themeState, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("useThemeContext must be used within ThemeProvider");
  return ctx;
};

export default ThemeContext;
