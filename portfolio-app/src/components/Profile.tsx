import React, { useState } from "react";
import type { ContactInfo } from "../types";
import profileImg from "../assets/profile.png"; // Direct asset import for Vite

const contactData: ContactInfo = {
  name: "Renuka Rajesh Joshi", //[cite: 3]
  role: "Full Stack Developer & MCA Candidate", //[cite: 3]
  email: "renukajoshi1302@gmail.com", //[cite: 3]
  phone: "+91-9209469210", //[cite: 3]
  location: "Amravati, Maharashtra", //[cite: 3]
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  certDriveUrl: "https://drive.google.com", //[cite: 3]
};

export const Profile: React.FC = () => {
  const [imageError, setImageError] = useState<boolean>(false);

  return (
    <section id="profile" className="hero-section">
      <div className="hero-glow"></div>
      <div className="hero-content">
        {/* Profile Image / Avatar Container */}
        <div className="avatar-wrapper">
          {!imageError ? (
            <img
              src={profileImg}
              alt="Renuka Rajesh Joshi"
              className="profile-avatar"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="profile-avatar-fallback">RJ</div>
          )}
          <span
            className="status-indicator"
            title="Open to opportunities"
          ></span>
        </div>
        <span className="hero-badge">
          P. R. Pote Patil College of Engg. & Management
        </span>{" "}
        {/*[cite: 1, 3] */}
        <h1 className="hero-title">
          Hi, I'm <span className="highlight-text">{contactData.name}</span>{" "}
          {/*[cite: 3] */}
        </h1>
        <h2 className="hero-subtitle">{contactData.role}</h2> {/*[cite: 3] */}
        <p className="hero-desc">
          Building end-to-end scalable web applications using the MERN stack,
          Java, Spring Boot, and AI/LLM integrations. {/*[cite: 3] */}
        </p>
        <div className="hero-links">
          <a href={`mailto:${contactData.email}`} className="contact-chip">
            ✉ {contactData.email} {/*[cite: 3] */}
          </a>
          <span className="contact-chip">📍 {contactData.location}</span>{" "}
          {/*[cite: 3] */}
          <span className="contact-chip">📞 {contactData.phone}</span>{" "}
          {/*[cite: 3] */}
        </div>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Explore Projects
          </a>
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            LinkedIn Profile ↗
          </a>
          <a
            href={contactData.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            GitHub Repository ↗
          </a>
        </div>
      </div>
    </section>
  );
};
