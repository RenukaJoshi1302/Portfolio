import React from "react";
import type { SkillCategory } from "../types";

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["JavaScript (ES6+)", "Java", "Python", "SQL", "C", "C++"],
  },
  {
    title: "Frontend Engineering",
    skills: [
      "React.js (v18)",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Responsive UI/UX",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "RESTful API Design",
      "Zero-Trust Security",
    ],
  },
  {
    title: "Databases & ORM",
    skills: ["MongoDB (Mongoose)", "MySQL", "Hibernate ORM", "Schema Indexing"],
  },
  {
    title: "Artificial Intelligence & Tooling",
    skills: [
      "Prompt Engineering",
      "Groq API",
      "Llama Models",
      "Claude",
      "Gemini",
      "ChatGPT",
    ],
  },
  {
    title: "Dev Tools & Methodologies",
    skills: [
      "Git & GitHub",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
      "PyCharm",
      "Eclipse",
      "OOP & DSA",
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section container">
      <div className="section-header">
        <p className="section-tag">Competencies</p>
        <h2>Technical Skills</h2>
      </div>
      <div className="grid-responsive grid-3">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="glass-card skill-box">
            <h3>{cat.title}</h3>
            <div className="skill-pills">
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
