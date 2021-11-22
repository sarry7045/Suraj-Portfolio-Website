import React from "react";
import { Link } from "react-router-dom";
import "../components/css/Navbar.css";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">Port-Folio</div>
        <input type="checkbox" id="click" />
        <label for="click" className="menu-btn">
          <i className="fa fa-bars"></i>
        </label>
        <ul>
          <li>
            <Link className="active navv" to="/">
              About Me
            </Link>
          </li>
          <li>
            <Link className="navv" to="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className="navv" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="navv" to="/experience">
              Experience
            </Link>
          </li>
          <li>
            <Link className="navv" to="/about">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
