import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../src/Components/CSS/App.css";
import Projects from "./Components/Projects.js";
import Contact from "./Components/Contact.js";
import AboutMe from "./Components/AboutMe.js";
import Skills from "./Components/Skills.js";
import Experience from "./Components/Experience.js";
import Navbar from "./Components/Navbar.js";

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
