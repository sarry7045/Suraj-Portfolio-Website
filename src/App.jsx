import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../src/Components/CSS/App.css";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Skills from "./Components/Skills.jsx";
import Experience from "./Components/Experience.jsx";
import Navbar from "./Components/Navbar.jsx";

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
