import { createContext, useContext, useState, JSX } from "react";
import { colors } from "../style";

// Create contexts for theme and theme update function
const ThemeContext = createContext("light");
const ToggleThemeContext = createContext(() => {});

export const useTheme = () => useContext(ThemeContext);
export const useToggleTheme = () => useContext(ToggleThemeContext);

interface ThemeProviderProps {
  children: JSX.Element;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = colors.black.backgroundColor;
    } else {
      setTheme("light");
      document.body.style.backgroundColor = colors.light.backgroundColor;
    }
  };

  return (
    <ToggleThemeContext value={toggleTheme}>
      <ThemeContext value={theme}>{children}</ThemeContext>
    </ToggleThemeContext>
  );
};
