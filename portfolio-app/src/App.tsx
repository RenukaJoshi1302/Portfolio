import React from "react";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Examinations } from "./components/Examinations";
import { ContactForm } from "./components/ContactForm";
import "./App.css";

export const App: React.FC = () => {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Examinations />
        <ContactForm />
      </main>
      <footer className="footer">
        <p>
          MCA Teacher's Assessment 2 | P. R. Pote Patil College of Engineering &
          Management, Amravati
        </p>
        <p className="footer-sub">
          Designed with React, TypeScript & Modern CSS
        </p>
      </footer>
    </div>
  );
};

export default App;
