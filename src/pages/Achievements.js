import React, { useState } from "react";
import "./Achievements.css";
import { AiOutlineRocket, AiOutlineCalendar, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import CoursesParticipation from "./CoursesParticipation";

const certificateLinks = {
  tnw: "/assets/certificates/hackathon.png",
  mern: "/assets/certificates/intern.png"
};

const data = [
  {
    title: "Finalist — TNWIS Women Hackathon",
    role: "Finalist",
    date: "Sep 2024",
    description:
      "Selected as a finalist in the TNWIS Women Hackathon for building an innovative solution addressing (brief problem). Showcased project demo to judges; gained recognition for problem-solving and execution.",
    highlight: true,
    certificate: certificateLinks.tnw,
  },
  {
    title: "MERN Stack Internship — App Innovation Technologies Pvt Ltd",
    role: "Intern",
    date: "June 2025",
    description:
      "Completed a MERN Stack internship where I actively contributed to full-stack development projects, implementing features, debugging issues, and collaborating with the team to deliver quality code. Demonstrated professionalism and technical skills throughout the internship.",
    highlight: true,
    certificate: certificateLinks.mern,
  },
];

const AchievementCard = ({ item, side, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`timeline-item ${side}`}>
      <div className={`spoke ${item.highlight ? "spoke-highlight" : ""}`}>
        <div className="spoke-icon">
          {item.highlight ? <AiOutlineRocket /> : <AiOutlineCalendar />}
        </div>
      </div>

      {/* DATE OUTSIDE CARD */}
      <div className="card-date">{item.date}</div>

      <div
        className={`card ${item.highlight ? "card-highlight" : "card-muted"}`}
        style={{ animationDelay: `${index * 0.15}s` }}
      >
        <div className="card-header">
          <div className="card-title">{item.title}</div>
          <div className="card-role">{item.role}</div>
        </div>

        <div className="card-body">
          <p className="card-desc">{item.description}</p>

          {item.certificate && (
            <div className="card-actions">
              <a
                href={item.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="btn cert-btn"
              >
                View Certificate
              </a>
            </div>
          )}
        </div>

        <button className="toggle-btn" onClick={() => setOpen(!open)}>
          {open ? <><AiOutlineUp /> Less</> : <><AiOutlineDown /> More</>}
        </button>

        {open && (
          <div className={`extra ${open ? "show" : ""}`}>
            <ul>
              <li><strong>Role:</strong> {item.role}</li>
              <li><strong>Takeaways:</strong> Enhanced technical skills, teamwork, and professional conduct.</li>
              <li><strong>Impact:</strong> Contributed to projects with meaningful results and gained recognition.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};


const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <h2 className="achieve-heading">Achievement & Experience</h2>

      <div className="timeline">
        {data.map((item, i) => (
          <AchievementCard
            key={i}
            item={item}
            index={i}
            side={i % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>

        <CoursesParticipation />
    </section>
  );
};




export default Achievements;
