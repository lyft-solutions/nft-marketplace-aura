import React from "react";
import { createContext, useContext, useState } from "react";
import { themes } from "../theme";

type ThemeContextType = {
  theme: typeof themes.default;
  setTheme: (themeName: keyof typeof themes) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState(themes.default);

  const setTheme = (themeName: keyof typeof themes) => {
    setThemeState(themes[themeName]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
