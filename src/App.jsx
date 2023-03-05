import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/components/css/App.css";
import Projects from "./components/Projects.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Navbar from "./components/Navbar.jsx";

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
