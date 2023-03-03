import React from "react";
import { Link } from "react-router-dom";
import "../components/css/Navbar.css";

const Nav = () => {
  const Portfolio = "<PortFolio/>";
  return (
    <>
      <nav>
        <Link to="/" className="logo" title="Suraj Yadav">
          {Portfolio}
        </Link>
        <input type="checkbox" id="click" />
        <label for="click" className="menu-btn">
          <i className="fa fa-bars"></i>
        </label>
        <ul>
          <li>
            <Link className="active" title="About me" to="/">
              About Me
            </Link>
          </li>
          <li>
            <Link to="/skills" title="Skills">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" title="Projects">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/experience" title="Experience">
              Experiences
            </Link>
          </li>
          <li>
            <Link to="/contact" title="Contact">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
