import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container">
      <div className="nav-wrapper red darken-1">
        <div className="contaidner">
          <a className="brand-logo">&nbsp;Trello Remake</a>
        </div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/home">Home</Link>
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
