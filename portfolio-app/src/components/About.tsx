import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" className="section container">
      <div className="section-header">
        <p className="section-tag">Overview</p>
        <h2>About Me</h2>
      </div>
      <div className="glass-card about-card">
        <p>
          I am a motivated Entry-Level Full Stack Developer and MCA candidate at
          P. R. Pote Patil College of Engineering & Management, Amravati. I have
          hands-on proficiency in engineering full-lifecycle web applications
          using the
          <strong>
            {" "}
            MERN Stack (MongoDB, Express.js, React.js, Node.js)
          </strong>{" "}
          and <strong>Java / Spring Boot</strong>.
        </p>
        <p>
          My work emphasizes designing resilient, secure RESTful APIs with
          fine-grained role-based access control, integrating external
          Generative AI models (Groq API, Llama 3.3, Llama 4 Vision), and
          implementing clean architectural patterns. I bring a solid foundation
          in core computer science competencies including Data Structures,
          Algorithms, DBMS, and Object-Oriented design.
        </p>
      </div>
    </section>
  );
};
