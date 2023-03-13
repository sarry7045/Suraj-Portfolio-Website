import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  const Portfolio = "<PortFolio/>";
  return (
    <>
      <nav>
        <NavLink to="/" className="logo" title="Suraj Yadav">
          {Portfolio}
        </NavLink>

        {/* <a href="/" className="logo" title="Suraj Yadav">
          {Portfolio}
        </a> */}
        <input type="checkbox" id="click" />
        <label for="click" className="menu-btn">
          <i className="fa fa-bars"></i>
        </label>
        <ul>
          <li>
            {/* <NavLink className="active" title="About me" to="/">
              About Me
            </NavLink> */}

            <a className="active" title="About me" href="/">
              About Me
            </a>
          </li>
          <li>
            {/* <NavLink to="/skills" title="Skills">
              Skills
            </NavLink> */}
            <a href="/skills" title="Skills">
              Skills
            </a>
          </li>
          <li>
            {/* <NavLink to="/projects" title="Projects">
              Projects
            </NavLink> */}

            <a href="/projects" title="Projects">
              Projects
            </a>
          </li>
          <li>
            {/* <NavLink to="/experience" title="Experience">
              Experiences
            </NavLink> */}

            <a href="/experience" title="Experience">
              Experiences
            </a>
          </li>
          <li>
            {/* <NavLink to="/contact" title="Contact">
              Contact Me
            </NavLink> */}

            <a href="/contact" title="Contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
