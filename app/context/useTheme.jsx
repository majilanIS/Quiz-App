import React, { createContext, useState, useContext } from "react";
import { useColorScheme } from "react-native";
import { LightTheme, DarkTheme } from "../constants/Theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemTheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemTheme === "dark");

  const theme = isDark ? DarkTheme : LightTheme;

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);