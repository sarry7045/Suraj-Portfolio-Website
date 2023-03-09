import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Skills from "./components/SkillsSection/Skills";
import "./components/CSS/App.css";

// const Projects = React.lazy(() => import("./components/Projects"));
// const AboutMe = React.lazy(() => import("./components/AboutMe"));
// const Contact = React.lazy(() => import("./components/Contact"));
// const Skills = React.lazy(() => import("./components/Skills"));
// const Experience = React.lazy(() => import("./components/Experience"));
// const Navbar = React.lazy(() => import("./components/Navbar"));

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
