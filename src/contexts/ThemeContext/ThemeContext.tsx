import React, { createContext, useContext, useEffect, useState } from "react";
import { Theme, ThemeContextType, ThemeId } from "../../types/theme";
import { themes } from "./themes";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedThemeId = localStorage.getItem("theme") as ThemeId;
    if (savedThemeId) {
      const theme = themes.find((t) => t.id === savedThemeId);
      if (theme) {
        setCurrentTheme(theme);
      }
    }
  }, []);

  // Apply theme colors to CSS custom properties
  useEffect(() => {
    const root = document.documentElement;

    Object.entries(currentTheme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Update theme-color meta tag
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", currentTheme.colors.primary);
    } else {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = currentTheme.colors.primary;
      document.head.appendChild(meta);
    }
  }, [currentTheme]);

  const switchTheme = (themeId: ThemeId) => {
    const theme = themes.find((t) => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
      localStorage.setItem("theme", themeId);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, themes, switchTheme }}>
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
