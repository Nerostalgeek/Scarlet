import React, { useState } from "react";
import fourxfour from "../../img/assets/rent-page/cars-icons/4x4.png";
import citadine from "../../img/assets/rent-page/cars-icons/citadine.png";
import spacieuse from "../../img/assets/rent-page/cars-icons/spacieuse.png";
import utilitaire from "../../img/assets/rent-page/cars-icons/utilitaire.png";

import ListCars from "../ListCars/ListCars";

import "./RentCarsPage.css";
const RentCarsPage = () => {
  return (
    <div className="l-rentCars">
      <div className="rentCars-header"></div>
      <div className="rentCars-allCars">
        <div className="allCars-type">
          <div className="cars-type-item">
            <img className="cars-type-item-image" src={citadine} alt="" />
            <h3>CITADINE</h3>
          </div>
          <div className="cars-type-item">
            <img className="cars-type-item-image" src={spacieuse} alt="" />
            <h3>SPACIEUSE</h3>
          </div>
          <div className="cars-type-item">
            <img className="cars-type-item-image" src={fourxfour} alt="" />
            <h3>4 X 4</h3>
          </div>
          <div className="cars-type-item">
            <img className="cars-type-item-image" src={utilitaire} alt="" />
            <h3>UTILITAIRE</h3>
          </div>
        </div>
        <div className="allCars-container">
          <div className="allCars-filters"></div>
          <div className="allCars-cars">
            <ListCars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentCarsPage;
