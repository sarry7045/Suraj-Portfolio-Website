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
        <input type="checkbox" id="click" />
        <label for="click" className="menu-btn">
          <i className="fa fa-bars"></i>
        </label>
        <ul>
          <li>
            <NavLink className="active" title="About me" to="/">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" title="Skills">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" title="Projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" title="Experience">
              Experiences
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" title="Contact">
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
