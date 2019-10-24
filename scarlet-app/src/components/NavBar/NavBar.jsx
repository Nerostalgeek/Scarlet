import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./NavBar.css";
import logo from "../../img/logo.png";

import { Link } from "react-router-dom";
import { userActions } from "../../actions";

const NavBar = () => {
  const dispatch = useDispatch();
  const [navBarLinks, setNavBarLinks] = useState([]);
  const isAuthenticated = useSelector(state => state.authentication);
  useEffect(() => {
    let links = [
      {
        name: "Accueil",
        url: "/",
        customId: ""
      },
      {
        name: "Louer une voiture",
        url: "/rent-cars",
        customId: ""
      },
      {
        name: "Mettre ma voiture en location",
        url: "#",
        customId: ""
      },
      {
        name: "Se connecter",
        url: "/login",
        customId: ""
      }
    ];
    if (isAuthenticated.loggedIn) {
      links = [
        {
          name: "Accueil",
          url: "/",
          customId: ""
        },
        {
          name: "Louer une voiture",
          url: "/rent-cars",
          customId: ""
        },
        {
          name: "Mettre ma voiture en location",
          url: "#",
          customId: ""
        },
        {
          name: "Mon profil",
          url: "/dashboard",
          customId: ""
        },
        {
          name: "Se déconnecter",
          url: "/logout",
          customId: "",
          onClick: () => dispatch(userActions.logout())
        }
      ];
    }
    setNavBarLinks(links);
  }, [isAuthenticated, dispatch]);

  const fetchLinks = navBarLinks.map(link => (
    <Link
      className="NavBar-link"
      key={`NavBar-${link.name}`}
      id={link.customId}
      to={link.url}
      onClick={link.onClick}
    >
      {link.name}
    </Link>
  ));

  return (
    <div className="l-NavBar">
      {
        <div className="NavBar-logo-container">
          <img src={logo} alt="logo" />
        </div>
      }
      <div className="NavBar-links-container">{fetchLinks}</div>
    </div>
  );
};

export default NavBar;
