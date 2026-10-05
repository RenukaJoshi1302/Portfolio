import React from "react";
import type { ProjectItem } from "../types";

const projectData: ProjectItem[] = [
  {
    title: "Sahyog AI Smart Farming Platform",
    date: "June 2026",
    techStack: [
      "React 18",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Groq API",
      "Tailwind CSS",
    ],
    description: [
      "Architected a full-stack smart agriculture platform covering 34+ districts and 200+ markets with live price trends via Recharts.",
      "Engineered an asynchronous image processing pipeline with Multer and Groq API (Llama 4 Scout Vision) for rapid crop disease diagnosis.",
      "Implemented real-time advisory chat utilizing Llama 3.3 70B, with schema-validated MongoDB context persistence.",
      "Enforced zero-trust API security using JWT, bcrypt, Helmet headers, and express-rate-limit.",
    ],
  },
  {
    title: "Academia Portal Academic Management Suite",
    date: "May 2026",
    techStack: [
      "React 18",
      "Vite",
      "Spring Boot",
      "MySQL",
      "REST APIs",
      "Tailwind CSS",
      "Hibernate",
    ],
    description: [
      "Engineered a single-page management application with sub-second page loads via code-splitting and optimized lifecycles.",
      "Constructed secure REST API integrations with central Axios interceptors for token attachment and state persistence.",
      "Structured relational data models in MySQL with Hibernate ORM, executing indexed queries to eliminate redundancy.",
      "Implemented Role-Based Access Control (RBAC) across Student, Faculty, and Admin interfaces.",
    ],
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section container">
      <div className="section-header">
        <p className="section-tag">Work & Architecture</p>
        <h2>Featured Projects</h2>
      </div>
      <div className="projects-list">
        {projectData.map((project, idx) => (
          <div key={idx} className="glass-card project-card">
            <div className="project-top">
              <h3>{project.title}</h3>
              <span className="project-date">{project.date}</span>
            </div>
            <div className="tech-tags">
              {project.techStack.map((tech, tIdx) => (
                <span key={tIdx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="project-bullets">
              {project.description.map((bullet, bIdx) => (
                <li key={bIdx}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
