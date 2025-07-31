import React from "react";
import { Palette } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext/ThemeContext";
import "./Header.css";

export const Header: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Palette className="logo-icon" size={32} />
            <div className="logo-text">
              <h1>ThemeCraft</h1>
              <span className="logo-subtitle">Multi-Theme Experience</span>
            </div>
          </div>

          <div className="header-info">
            <div className="current-theme">
              <span className="theme-label">Current Theme:</span>
              <span className="theme-name">{currentTheme.name}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
