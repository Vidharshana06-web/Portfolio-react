import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Smart Script AI",
    image: "/assets/images/smart.jpg",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "SpringBoot", "AI"],
    shortDesc:
      "SmartScript.ai is an AI-powered platform designed to help users generate high-quality, structured, and publication-ready content effortlessly.",
    longDesc:
      "Users can select the intended structure, formatting style, or target journal/university guidelines, allowing SmartScript.ai to tailor content for academic papers, professional reports, or creative writing.",
     github: "https://github.com/Vidharshana06-web/SmartScript-Ai-/tree/178aa1b087382c5345b3baf76ccc9d1a68c961e2",
    demo: "https://smartscriptai-demo.netlify.app",
  },
  {
    title: "LapZone - Laptop E-Commerce Website",
    image: "/assets/images/lapzone.png",
    tech: ["React", "Express.js", "Node.js", "MongoDB"],
    shortDesc:
      "A modern e-commerce website for browsing, comparing, and purchasing laptops with advanced filtering and cart functionality.",
    longDesc:
     "LapZone is a full-stack MERN application that allows users to explore laptops with real-time specifications, dynamic product cards, and integrated cart management using Redux. It features secure authentication, responsive design, advanced search with smart recommendations, and seamless payment gateway integration for a complete e-commerce experience.",
    github: "https://github.com/Vidharshana06-web/Mern-Ecommerce-project/tree/d8e8700a0fda8a92209538fe14c0f9bd320feaa8",
    demo: "https://lapzone-demo.netlify.app",
  },
  {
    title: "Voice-Based Task Reminder System",
    image: "/assets/images/voice-reminder.jpg",
    tech: ["Flutter", "Dart", "Speech Recognition", "TTS & STT"],
    shortDesc:
      "A productivity tool that takes tasks as text input and reminds users via voice output at scheduled times.",
    longDesc:
      "This voice-assisted reminder app is built in Flutter to help users manage their daily routines efficiently. It uses text-to-speech and speech-to-text functionality to provide natural-sounding audio reminders and allows users to add, edit, and remove tasks easily. Designed for accessibility and simplicity, the app ensures a seamless and interactive user experience across mobile devices.",
    github: "https://github.com/yourusername/voice-task-reminder",
    demo: "https://voice-reminder-demo.netlify.app",
  },
  {
    title: "NeuroCode - Interactive Learning Platform",
    image: "/assets/images/duet.jpg",
    tech: ["Flutter", "Dart", "Firebase", "Judge0 API"],
    shortDesc:
    
      "NeuroCode is an innovative mobile application designed to provide coders with an immersive, room-based problem-solving environment.",
    longDesc:
     "The app enables two users to join the same virtual room and solve coding problems independently, allowing for simultaneous practice without collaborative interference. It is built with Flutter for a responsive and dynamic UI and integrates Firebase for secure authentication, real-time room management, and persistent data storage.",
    github: "https://github.com/Vidharshana06-web/NeuroCode-Android-Project/tree/593684a170b12fc32d65198d290c391634232647",
    demo: "https://codeduet-demo.netlify.app",
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <h3 className="project-title">{project.title}</h3>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span className="tech-pill" key={i}>{tech}</span>
              ))}
            </div>

            <p className="project-desc">{project.shortDesc}</p>

            {expandedIndex === index && (
              <p className="project-long-desc">{project.longDesc}</p>
            )}

            <div className="button-group">
              <button className="more-btn" onClick={() => toggleMore(index)}>
                {expandedIndex === index ? "Show Less" : "More About"}
              </button>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                View on GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-btn">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
