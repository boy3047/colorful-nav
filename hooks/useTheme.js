import { ThemeContext } from "../components/ThemeContex";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme() must be use inside a ThemeProvider");
  }

  return context;
};
