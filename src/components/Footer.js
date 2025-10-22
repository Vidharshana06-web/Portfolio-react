import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Social Links */}
      <div className="footer-socials">
        <a 
          href="https://github.com/Vidharshana06-web" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>

        <a 
          href="https://www.linkedin.com/in/vidharshana08" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>

        <a 
          href="mailto:vidharshanadevaraj06@gmail.com" 
          className="social-icon"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Footer Text */}
      <div className="footer-text">
        <p>©2025 Vidharshana D. All rights reserved.</p>
        <p className="crafted">Turning imagination into innovation</p>
      </div>
    </footer>
  );
};

export default Footer;

