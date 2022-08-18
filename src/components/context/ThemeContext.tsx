import { createContext } from "react";
import { theme } from "./theme";
import { ThemeContextProviderProps } from "./Theme.types";

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
