import React from "react";
import "./App.css";

import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";

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

        <Route exact path="/about">
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
