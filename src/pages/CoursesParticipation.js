import React, { useState } from "react";
import "./CoursesParticipation.css";

const CoursesParticipation = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  // --- Courses Data ---
  const courses = [
    {
      id: 1,
      title: "What Is Generative AI?",
      issuer: "LinkedIn Learning",
      image: "assets/images/generative-ai.png",
      description:
        "A course exploring the fundamentals of Generative AI, including its key concepts, tools, and practical applications in modern AI. It provides insights into leveraging AI for creative and problem-solving tasks.",
      skills: ["Generative AI Tools", "Artificial Intelligence (AI)", "Generative AI"],
      link: "assets/certificates/generative.png.jpeg",
    },
    {
      id: 2,
      title: "Cloud Foundations",
      issuer: "Great Learning Academy",
      image: "assets/images/cloud-foundations.png",
      description:
        "An introductory course covering core cloud computing concepts, infrastructure, and deployment models, providing a solid foundation for cloud-based solutions and services.",
      skills: ["Cloud Computing", "Virtualization", "Networking"],
      link: "assets/certificates/cloud.jpeg",
    },
    {
      id: 3,
      title: "Java Programming Fundamentals",
      issuer: "Geekster",
      image: "assets/images/java-course.png",
      description:
        "A comprehensive course on the basics of Java programming, covering core concepts, object-oriented principles, and practical coding skills for application development.",
      skills: ["Java concepts", "Practical Coding", "Problem Solving"],
      link: "assets/certificates/java.jpeg",
    },
  ];

  // --- Participation Data ---
  const participation = [
    {
      id: 1,
      title: "Technical Quiz – FIESTAA’25",
      event: "KPR College, Fiestaa'25",
      image: "assets/images/quiz.png",
      description:
        "Participated in the Technical Quiz event conducted during FIESTAA’25 on March 14, 2025, demonstrating strong problem-solving and domain knowledge.",
      details: ["Technical Knowledge", "Teamwork", "Problem Solving"],
      link: "assets/certificates/kpr.jpeg",
    },


    {
      id: 3,
      title: "Connection Event-2nd place",
      event: "KIT College, UDHAYAM’25",
      image: "assets/images/connection.png.jpeg",
      description:
        "Secured 2nd place in the Connection event during UDHAYAM’25, an intercollegiate technical and cultural fest held on March 1, 2025.",
      details: ["Event Recognition", "Creative Thinking", "Collaboration"],
      link: "assets/certificates/kit2.jpeg",
    },
    {
      id: 2,
      title: "Logical Rivera – UDHAYAM’25",
      event: "KIT College, UDHAYAM’25",
      image: "assets/images/logical.png",
      description:
        "Participated in the Logical Rivera event at UDHAYAM’25, an intercollegiate technical and cultural fest held on March 1, 2025.",
      details: ["Logic Building", "Analytical Skills", "Event Participation"],
      link: "assets/certificates/kit1.jpeg",
    },
   
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="courses-participation-section">
      <div className="columns">
        {/* Left Column - Courses */}
        <div className="column">
          <h2 className="section-title">Courses</h2>
          <div className="card-container">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`card ${index === 2 ? "center-card" : ""}`}
                onClick={() => handleCardClick(course)}
              >
                <img src={course.image} alt={course.title} className="card-img" />
                <div className="card-content">
                  <h3>{course.title}</h3>
                  <p>{course.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Participation */}
        <div className="column">
          <h2 className="section-title purple">Participation</h2>
          <div className="card-container">
            {participation.map((event, index) => (
              <div
                key={event.id}
                className={`card ${index === 2 ? "center-card" : ""}`}
                onClick={() => handleCardClick(event)}
              >
                <img src={event.image} alt={event.title} className="card-img" />
                <div className="card-content">
                  <h3>{event.title}</h3>
                  <p>{event.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCard.image} alt={selectedCard.title} className="modal-img" />
            <h3>{selectedCard.title}</h3>
            <p className="issuer">{selectedCard.issuer || selectedCard.event}</p>
            <p className="desc">{selectedCard.description}</p>

            <div className="skills">
              {(selectedCard.skills || selectedCard.details).map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={selectedCard.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Certificate
            </a>
            <button className="close-btn" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesParticipation;
