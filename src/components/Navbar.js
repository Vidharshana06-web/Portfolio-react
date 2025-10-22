// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "../pages/Home.css"; // (optional if your CSS is in a separate file)

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section - Logo */}
      <div className="nav-left">
        <h2 className="logo">VIDHARSHANA</h2>
      </div>

      {/* Center Links */}
      <div className="nav-center">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Home
        </NavLink>

        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          About
        </NavLink>

        <NavLink 
          to="/skills" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Skills
        </NavLink>

        <NavLink 
          to="/pro" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Projects
        </NavLink>

        <NavLink 
          to="/achieve" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Achievements
        </NavLink>

        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Contact
        </NavLink>
      </div>

      {/* Right Section - Resume Button */}
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
