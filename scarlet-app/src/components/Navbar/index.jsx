import React from "react";
import "./NavBar.css";
import logo from "../../img/logo.png";

const NavBar = props => {
  const links = props.links;

  const NavBarLinks = links.map(link => (
    <a
      className="NavBar-link"
      key={`NavBar-${link.name}`}
      href={link.url}
      id={link.customId}
    >
      {link.name}
    </a>
  ));

  return (
    <div className="l-NavBar">
      <div className="NavBar-logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="NavBar-links-container">{NavBarLinks}</div>
    </div>
  );
};

export default NavBar;
