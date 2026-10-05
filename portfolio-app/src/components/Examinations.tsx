import React from "react";
import type { ExamItem } from "../types";

const examRecords: ExamItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "P.R. Pote Patil College of Engineering & Management",
    location: "Amravati, India",
    period: "Sept 2025 – Expected June 2027",
    score: "7.82 CGPA (First Year)",
  },
  {
    degree: "Bachelor of Science in Computer Science (B.Sc. CS)",
    institution: "Smt. Radhabai Sarda Arts, Commerce & Science College",
    location: "Amravati, India",
    period: "Aug 2023 – May 2025",
    score: "7.83 CGPA",
  },
  {
    degree: "Higher Secondary Certificate (HSC Science)",
    institution: "Mahatma Jyotiba Phule Junior College",
    location: "Amravati, India",
    period: "June 2021 – March 2022",
    score: "79.83%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Pragatik Vidyalaya",
    location: "Amravati, India",
    period: "June 2019 – March 2020",
    score: "87.60%",
  },
];

export const Examinations: React.FC = () => {
  return (
    <section id="examinations" className="section container">
      <div className="section-header">
        <p className="section-tag">Education</p>
        <h2>Examinations & Academic Background</h2>
      </div>
      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Qualification / Examination</th>
              <th>Institution & Location</th>
              <th>Academic Period</th>
              <th>Score / CGPA</th>
            </tr>
          </thead>
          <tbody>
            {examRecords.map((exam, idx) => (
              <tr key={idx}>
                <td className="highlight-cell">{exam.degree}</td>
                <td>
                  <div>{exam.institution}</div>
                  <small className="sub-location">📍 {exam.location}</small>
                </td>
                <td>{exam.period}</td>
                <td>
                  <span className="grade-badge">{exam.score}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
