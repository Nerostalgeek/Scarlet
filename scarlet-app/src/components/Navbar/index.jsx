import React from "react";
import "./NavBar.css";
import logo from "../../img/logo.png";

const NavBar = props => {
  const links = props.links;

  const navbarLinks = links.map(link => (
    <a
      className="navbar-link"
      key={`navbar-${link.name}`}
      href={link.url}
      id={link.customId}
    >
      {link.name}
    </a>
  ));

  return (
    <div className="l-navbar">
      <div className="navbar-logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-links-container">{navbarLinks}</div>
    </div>
  );
};

export default NavBar;
