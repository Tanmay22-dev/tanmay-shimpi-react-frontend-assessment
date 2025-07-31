import React from "react";
import { Check, Palette } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext/ThemeContext";
import { ThemeId } from "../../types/theme";
import "./ThemeSelector.css";

export const ThemeSelector: React.FC = () => {
  const { currentTheme, themes, switchTheme } = useTheme();

  const handleThemeChange = (themeId: ThemeId) => {
    switchTheme(themeId);
  };

  return (
    <section className="theme-selector">
      <div className="container">
        <div className="theme-selector-header">
          <Palette className="section-icon" size={24} />
          <h2>Choose Your Theme</h2>
          <p>
            Select from our carefully crafted themes to personalize your
            experience
          </p>
        </div>

        <div className="themes-grid">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className={`theme-card ${
                currentTheme.id === theme.id ? "active" : ""
              }`}
              onClick={() => handleThemeChange(theme.id as ThemeId)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleThemeChange(theme.id as ThemeId);
                }
              }}
              aria-label={`Switch to ${theme.name} theme`}
            >
              <div className="theme-preview">
                <div
                  className="color-bar primary"
                  style={{ backgroundColor: theme.colors.primary }}
                />
                <div
                  className="color-bar secondary"
                  style={{ backgroundColor: theme.colors.secondary }}
                />
                <div
                  className="color-bar accent"
                  style={{ backgroundColor: theme.colors.accent }}
                />
              </div>

              <div className="theme-info">
                <div className="theme-header">
                  <h3>{theme.name}</h3>
                  {currentTheme.id === theme.id && (
                    <Check className="check-icon" size={16} />
                  )}
                </div>
                <p>{theme.description}</p>
              </div>

              <div className="theme-colors">
                <div
                  className="color-dot"
                  style={{ backgroundColor: theme.colors.primary }}
                  title="Primary color"
                />
                <div
                  className="color-dot"
                  style={{ backgroundColor: theme.colors.secondary }}
                  title="Secondary color"
                />
                <div
                  className="color-dot"
                  style={{ backgroundColor: theme.colors.accent }}
                  title="Accent color"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
