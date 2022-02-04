import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../src/components/css/App.css";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import AboutMe from "./components/AboutMe.js";
import Skills from "./components/Skills.js";
import Experience from "./components/Experience.js";
import Navbar from "./components/Navbar.js";

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
      </Router>
    </div>
  );
}

export default App;
