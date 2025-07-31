import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext";
import { Header } from "./components/Header/Header";
import { ThemeSelector } from "./components/ThemeSelector/ThemeSelector";
import { FeatureCards } from "./components/FeatureCards/FeatureCards";
import { Footer } from "./components/Footer/Footer";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <ThemeSelector />
          <FeatureCards />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
