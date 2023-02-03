import React from "react";
import "../components/css/Navbar.css";

const Nav = () => {
  const Portfolio = "<PortFolio/>";
  return (
    <>
      <nav>
        <a href="/" className="logo" title="Suraj Yadav">
          {Portfolio}
        </a>
        <input type="checkbox" id="click" />
        <label for="click" className="menu-btn">
          <i className="fa fa-bars"></i>
        </label>
        <ul>
          <li>
            <a className="active" title="About me" href="/">
              About Me
            </a>
          </li>
          <li>
            <a href="/skills" title="Skills">Skills</a>
          </li>
          <li>
            <a href="/projects" title="Projects">Projects</a>
          </li>
          <li>
            <a href="/experience" title="Experience">Experiences</a>
          </li>
          <li>
            <a href="/contact" title="Contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
