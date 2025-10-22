import React from "react";
import "./About.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div className="about-container" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        {/* Left Side: Image */}
        <div className="about-left">
          <img 
            src="/assets/images/about.jpg" 
            alt="Vidharshana D"
            className="about-image"
          />
        </div>

        {/* Right Side: Text */}
        <div className="about-right">
          <p className="about-text">
            I’m <span className="highlight">Vidharshana D</span>, a 
            <span className="highlight"> Computer Science and Engineering</span> student at 
            <span className="highlight"> Sri Shakthi Institute of Engineering and Technology</span>, Coimbatore.  
            I’m deeply passionate about combining <span className="highlight">AI</span> and 
            <span className="highlight"> full-stack web technologies</span> to create digital solutions that make an impact.
          </p>

          <p className="about-text">
            I specialize in the <span className="highlight">MERN stack</span> and enjoy transforming ideas into interactive, intelligent, and 
            user-friendly applications. I love challenges that require creativity, logic, and innovation.
          </p>

          <p className="about-text">
            One of my recent innovations, <span className="highlight">Smart Script AI</span>, is an 
            <span className="highlight"> AI-based research automation system</span> that transforms short project summaries 
            into well-formatted, detailed research papers — helping students and researchers accelerate their innovation journey.
          </p>

          <p className="about-text">
            I aspire to become a <span className="highlight">Full Stack AI Developer</span> — bridging intelligence with design, 
            and delivering solutions that are both <span className="highlight">innovative</span> and <span className="highlight">impactful</span>.
          </p>

          {/* Social Links */}
          <div className="about-social">
            <a href="https://github.com/Vidharshana06-web" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
            <a href="https://leetcode.com/Vidharshana_06" target="_blank" rel="noopener noreferrer">
              <SiLeetcode size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vidharshana08" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
