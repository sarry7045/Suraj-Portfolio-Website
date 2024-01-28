import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Navbar.css";

const Navbar = () => {
  const Portfolio = "<PortFolio/>";
  return (
    <>
      <nav>
        <NavLink to="/" className="logo" title="Suraj Yadav">
          {Portfolio}
        </NavLink>

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
            <a href="/skills" title="Skills">
              Skills
            </a>
          </li>
          <li>

            <a href="/projects" title="Projects">
              Projects
            </a>
          </li>
          <li>

            <a href="/experience" title="Experience">
              Experiences
            </a>
          </li>
          <li>

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
