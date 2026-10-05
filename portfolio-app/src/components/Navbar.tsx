import React from "react";

export const Navbar: React.FC = () => {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <a href="#profile" className="brand-logo">
          <span>&lt;</span>Renuka<span>.dev /&gt;</span>
        </a>
        <ul className="nav-menu">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#certifications">Certificates</a>
          </li>
          <li>
            <a href="#examinations">Academics</a>
          </li>
          <li>
            <a href="#contact" className="nav-cta">
              Connect
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
