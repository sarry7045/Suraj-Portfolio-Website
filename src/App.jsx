import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../src/components/css/App.css";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Route exact path="/">
          <AboutMe />
        </Route>

        <Route exact path="/projects">
          <Projects />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/skills">
          <Skills />
        </Route>

        <Route exact path="/experience">
          <Experience />
        </Route>
        <Route path="*" element={<AboutMe />} />
      </Router>
    </div>
  );
}

export default App;
