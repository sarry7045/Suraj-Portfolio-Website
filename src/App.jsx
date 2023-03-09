import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Navbar from "./Components/Navbar";
import Skills from "./Components/SkillsSection/Skills";
import "./Components/CSS/App.css";

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
