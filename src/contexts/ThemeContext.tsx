import { createContext, useContext, useState, JSX } from "react";

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
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ToggleThemeContext value={toggleTheme}>
      <ThemeContext value={theme}>{children}</ThemeContext>
    </ToggleThemeContext>
  );
};
