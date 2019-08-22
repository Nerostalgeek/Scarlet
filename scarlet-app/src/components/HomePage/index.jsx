import React from "react";
import API from "../../utils/API.js";

import "./HomePage.css";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="l-homepage">
      <Link to="/login">
        <button className="homepage-button" type="primary">
          Se connecter
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
