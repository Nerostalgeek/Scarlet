import React from "react";
import landingIllustration from "../../img/assets/landing/landing-car-illustration.svg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="l-homepage">
      <div className="homepage-landing">
        <div className="homepage-landing-text">
          <h2 id="homepage-landing-title">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p id="homepage-landing-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            harum nulla ratione eius eveniet laborum tempora sunt perspiciatis
            rem id!
          </p>
          <button className="landing-cta">Explorer les voitures</button>
          <button className="landing-cta">Comment ça marche ?</button>
        </div>
        <div className="homepage-landing-image">
          <img src={landingIllustration} alt="" />
        </div>
      </div>
      <div className="homepage-available-cars" />
    </div>
  );
};

export default HomePage;
