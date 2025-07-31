export interface Theme {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    warning: string;
    error: string;
  };
}

export type ThemeId = "light" | "dark" | "ocean" | "forest" | "sunset";

export interface ThemeContextType {
  currentTheme: Theme;
  themes: Theme[];
  switchTheme: (themeId: ThemeId) => void;
}
