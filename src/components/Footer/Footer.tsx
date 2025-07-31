import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import "./Footer.css";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Tanmay Shimpi</h3>
            <p>React Frontend Developer Assessment</p>
            <p className="company">Submitted to Hipster Inc</p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/Tanmay22-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/tanmay-shimpi-9371631b8"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:tanmayshimpi22@gmail.com"
              className="footer-link"
              aria-label="Email Contact"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              © {currentYear} Built with{" "}
              <Heart className="heart-icon" size={14} /> using React &
              TypeScript
            </p>
            <p className="tech-stack">
              Vite • React 18 • TypeScript • CSS3 • Lucide Icons
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
