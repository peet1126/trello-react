import React from "react";
import {Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container">
      <div className="nav-wrapper red darken-1">
        <Link to="/" className="brand-logo">
          &nbsp;Trello Remake
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/list">All Todo's</Link>
          </li>
          <li>
            <Link to="/HowTo">How to use</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
