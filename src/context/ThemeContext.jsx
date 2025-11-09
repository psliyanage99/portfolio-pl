import React, { createContext, useContext, useEffect, useState } from "react";

// Create Context
const ThemeContext = createContext();

// Custom hook for easy access
export const useTheme = () => useContext(ThemeContext);

// useEffect(() => {
//   document.documentElement.classList.remove("light", "dark");
//   document.documentElement.classList.add(theme);
// }, [theme]);

// Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  // Update <html> class when theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
