import React from "react";
import type { CertificationCategory } from "../types";

const certGroups: CertificationCategory[] = [
  {
    category: "Web & Full-Stack",
    items: [
      "Full-Stack Web Development (Udemy)",
      "Node.js Bootcamp (LetsUpgrade)",
      "React JS (Great Learning)",
      "JavaScript (Udemy)",
    ],
  },
  {
    category: "Programming & Core CS",
    items: [
      "OOPs in Java (Simplilearn)",
      "Workshop AI-ML (NXTGEN AI Academy)",
      "Prompt Engineering (Norai Connect)",
    ],
  },
  {
    category: "Professional Development",
    items: [
      "TCS iON Career Edge – Young Professional",
      "Soft Skill & Personality (NPTEL)",
      "Entrepreneurship & Small Business (HCLTech)",
    ],
  },
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section container">
      <div className="section-header">
        <p className="section-tag">Accomplishments</p>
        <h2>Certifications</h2>
      </div>
      <div className="grid-responsive grid-3">
        {certGroups.map((group, idx) => (
          <div key={idx} className="glass-card cert-card">
            <h3>{group.category}</h3>
            <ul className="cert-list">
              {group.items.map((item, iIdx) => (
                <li key={iIdx}>
                  <span className="bullet-icon">✦</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="cert-verify-box">
        <a
          href="https://drive.google.com/drive/folders/1bIXUpkAQC_8KmYq5cpgke9nKEHJphT9R?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          View All Verified Credentials on Google Drive ↗
        </a>
      </div>
    </section>
  );
};
