import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import "./Components/CSS/App.css";

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
