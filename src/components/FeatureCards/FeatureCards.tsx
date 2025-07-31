import React from "react";
import {
  Smartphone,
  Monitor,
  Palette,
  Zap,
  Shield,
  Heart,
  Code,
  Sparkles,
} from "lucide-react";
import "./FeatureCards.css";

const features = [
  {
    icon: Palette,
    title: "Dynamic Themes",
    description:
      "Switch between carefully crafted themes with smooth transitions and beautiful color palettes.",
    color: "var(--color-primary)",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Perfectly optimized for all devices - mobile, tablet, and desktop with fluid layouts.",
    color: "var(--color-secondary)",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Built with modern React patterns and optimized for lightning-fast performance.",
    color: "var(--color-accent)",
  },
  {
    icon: Shield,
    title: "Accessible",
    description:
      "WCAG compliant with proper contrast ratios and keyboard navigation support.",
    color: "var(--color-success)",
  },
  {
    icon: Monitor,
    title: "Modern UI",
    description:
      "Clean, modern interface with smooth animations and micro-interactions.",
    color: "var(--color-warning)",
  },
  {
    icon: Heart,
    title: "User Friendly",
    description:
      "Intuitive design focused on providing the best user experience possible.",
    color: "var(--color-error)",
  },
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Well-structured, documented code following React best practices and TypeScript.",
    color: "var(--color-primary)",
  },
  {
    icon: Sparkles,
    title: "Persistent Storage",
    description:
      "Your theme preference is saved and restored automatically across sessions.",
    color: "var(--color-secondary)",
  },
];

export const FeatureCards: React.FC = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <h2>Powerful Features</h2>
          <p>Discover what makes this theme switcher special</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon-wrapper">
                <feature.icon
                  className="feature-icon"
                  size={24}
                  style={{ color: feature.color }}
                />
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
