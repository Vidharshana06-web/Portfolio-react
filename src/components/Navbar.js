// src/components/Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../pages/Home.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Left Section - Logo */}
      <div className="nav-left">
        <h2 className="logo">VIDHARSHANA</h2>
      </div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* Center Links */}
      <div className={`nav-center ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={closeMenu} className="nav-link">Home</NavLink>
        <NavLink to="/about" onClick={closeMenu} className="nav-link">About</NavLink>
        <NavLink to="/skills" onClick={closeMenu} className="nav-link">Skills</NavLink>
        <NavLink to="/pro" onClick={closeMenu} className="nav-link">Projects</NavLink>
        <NavLink to="/achieve" onClick={closeMenu} className="nav-link">Achievements</NavLink>
        <NavLink to="/contact" onClick={closeMenu} className="nav-link">Contact</NavLink>

        {/* Resume button for mobile view */}
        <a
          href="/Vidharshana_resume .pdf"
          download="Vidharshana_Resume.pdf"
          className="resume-btn mobile-btn"
          onClick={closeMenu}
        >
          Download Resume
        </a>
      </div>

      {/* Right Section - Resume Button (Desktop only) */}
      <div className="nav-right">
        <a
          href="/Vidharshana_resume .pdf"
          download="Vidharshana_Resume.pdf"
          className="resume-btn"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
