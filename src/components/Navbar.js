import React from "react";
import "../Components/CSS/Navbar.css";

const Nav = () => {
  const Portfolio = "<PortFolio/>";
  return (
    <>
      <nav>
        <a href="/" className="logo">
          {Portfolio}
        </a>
        <input type="checkbox" id="click" />
        <label for="click" className="menu-btn">
          <i className="fa fa-bars"></i>
        </label>
        <ul>
          <li>
            <a className="active" href="/">
              About Me
            </a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/experience">Experience</a>
          </li>
          <li>
            <a href="/contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
