// src/components/Skills.js
import React from "react";
import "./Skills.css";
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiExpress } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skillsData = {
  "Programming Languages": [
   
    { name: "Java", icon: <FaJava /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
  ],
  Databases: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ],
  "Frameworks & Libraries": [
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Node.js", icon: <FaNodeJs /> },
  ],
  Tools: [
    { name: "GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <VscCode /> },
  ],
};

const Skills = () => {
  return (
    <div className="skills-container">
      {Object.keys(skillsData).map((category, idx) => (
        <div key={idx} className="skills-section">
          <h2 className="skills-heading">{category}</h2>
          <div className="skills-grid">
            {skillsData[category].map((skill, index) => (
              <div key={index} className="skill-card">
                {skill.icon && <div className="skill-icon">{skill.icon}</div>}
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
