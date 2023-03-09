import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Contact from "./Components/Contact.jsx";
import Experience from "./Components/Experience.jsx";
import Navbar from "./Components/Navbar.jsx";
import Skills from "./Components/SkillsSection/Skills";
import "./Components/CSS/App.css";

// const Projects = React.lazy(() => import("./components/Projects.jsx"));
// const AboutMe = React.lazy(() => import("./components/AboutMe.jsx"));
// const Contact = React.lazy(() => import("./components/Contact.jsx"));
// const Skills = React.lazy(() => import("./components/Skills.jsx"));
// const Experience = React.lazy(() => import("./components/Experience.jsx"));
// const Navbar = React.lazy(() => import("./components/Navbar.jsx"));

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<AboutMe />}></Route>

          <Route path="/projects" element={<Projects />}></Route>

          <Route path="/contact" element={<Contact />}></Route>

          <Route path="/skills" element={<Skills />}></Route>

          <Route path="/experience" element={<Experience />}></Route>

          <Route path="*" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
