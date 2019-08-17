import React from "react";
import "./NavBar.css";
import logo from "../../img/logo.png";

import { Link } from "react-router-dom";


const NavBar = props => {
  const links = props.links;

  const navBarLinks = links.map(link => (
    <Link to={link.url}>
      <a
        className="NavBar-link"
        key={`NavBar-${link.name}`}
        id={link.customId}
      >
        {link.name}
      </a>
    </Link>
  ));

  return (
    <div className="l-NavBar">
      <div className="NavBar-logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="NavBar-links-container">{navBarLinks}</div>
    </div>
  );
};

export default NavBar;
