import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const roles = [
    "Full Stack Developer 💻",
    "MERN Enthusiast 🌐",
    "AI Explorer 🤖",
    "Problem Solver 🧠",
    "Innovator 💡",
  ];

  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Cursor Dot Effect


  // Typewriter Effect
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < roles[roleIndex].length) {
        setCurrentText((prev) => prev + roles[roleIndex].charAt(charIndex));
        setCharIndex(charIndex + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCharIndex(0);
          setCurrentText("");
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 1500);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [charIndex, roleIndex]);

  // Cursor trail effect
  useEffect(() => {
  const cursor = document.createElement("div");
  cursor.className = "cursor-dot";
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  const move = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  const animate = () => {
    currentX += (mouseX - currentX) * 0.2;
    currentY += (mouseY - currentY) * 0.2;
    cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(animate);
  };

  window.addEventListener("mousemove", move);
  animate();

  return () => {
    window.removeEventListener("mousemove", move);
    document.body.removeChild(cursor);
  };
}, []);



  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const hero = document.querySelector(".hero-section");
      hero.style.backgroundPositionY = `${scrollY * 0.5}px`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container">
      {/* Navbar */}
      

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-left">
          <div className="intro-text">
            <h3 className="fade-in">Hi There , I'm</h3>
            <h1 className="glow-name">Vidharshana D</h1>
            <h2 className="typewriter">
              {currentText}
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description slide-up">
              Passionate Computer Science student skilled in MERN Stack and AI-based solutions.  
              Finalist in TNWIS Women Hackathon with innovative real-world implementations.
            </p>

            <div className="hero-buttons slide-in">
               <Link to="/pro" className="btn explore-btn">Explore Projects</Link>
               <Link to="/contact" className="btn contact-btn">Contact Me</Link>
            </div>
          </div>
        </div>
        
        <div className="hero-right">
          <div className="profile-container">
            <img
              src="assets/images/profile.jpeg"
              alt="Profile"
              className="profile-pic"
            />
            <div className="glow-circle"></div>
          </div>
        </div>
      </section>

      
      {/* Floating Background Particles */}
      <div className="floating-bg">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="particle"></span>
        ))}
      </div>
    </div>
  );
};

export default Home; 