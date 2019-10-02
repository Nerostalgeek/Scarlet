import React from "react";

import landingIllustration from "../../img/assets/landing/landing-car-illustration.svg";
import "./HomePage.css";

import FormReservation from "./FormReservation/FormReservation";

const HomePage = () => {
  return (
    <div className="l-homepage">
      <div className="homepage-landing">
        <div className="homepage-landing-text">
          <h2 id="homepage-landing-title">
            Commencez à économiser grâce à Scarlet
          </h2>
          <p id="homepage-landing-description">
            Que vous souhaitez gagner de l'argent avec votre véhicule ou trouver
            un véhicule abordable pour votre week-end, vous êtes au bon endroit
            !
          </p>
          <button className="landing-cta">
            Explorer les voitures disponibles
          </button>
          <button className="landing-cta">Mettre ma voiture en location</button>
        </div>
        <div className="homepage-reservation">
          <FormReservation />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
