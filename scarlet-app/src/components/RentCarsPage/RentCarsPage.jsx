import React, { useState } from "react";
import fourxfour from "../../img/assets/rent-page/cars-icons/4x4.png";
import citadine from "../../img/assets/rent-page/cars-icons/citadine.png";
import spacieuse from "../../img/assets/rent-page/cars-icons/spacieuse.png";
import utilitaire from "../../img/assets/rent-page/cars-icons/utilitaire.png";

import "./RentCarsPage.css";
const RentCarsPage = () =>  {
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
              <div class="rentCars-car-item">
                <div className="car-item-image">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/02/27/08/27/car-2102367_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="car-item-description">
                  <div className="car-item-description-left">
                    <h3>Fiat 500</h3>
                    <h3>5 / 5</h3>
                  </div>
                  <div className="car-item-description-right">
                    <p>65€ / Jour</p>
                  </div>
                </div>
              </div>
              <div class="rentCars-car-item">
                <div className="car-item-image">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/02/27/08/27/car-2102367_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="car-item-description">
                  <div className="car-item-description-left">
                    <h3>Fiat 500</h3>
                    <h3>5 / 5</h3>
                  </div>
                  <div className="car-item-description-right">
                    <p>65€ / Jour</p>
                  </div>
                </div>
              </div>{" "}
              <div class="rentCars-car-item">
                <div className="car-item-image">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/02/27/08/27/car-2102367_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="car-item-description">
                  <div className="car-item-description-left">
                    <h3>Fiat 500</h3>
                    <h3>5 / 5</h3>
                  </div>
                  <div className="car-item-description-right">
                    <p>65€ / Jour</p>
                  </div>
                </div>
              </div>{" "}
              <div class="rentCars-car-item">
                <div className="car-item-image">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/02/27/08/27/car-2102367_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="car-item-description">
                  <div className="car-item-description-left">
                    <h3>Fiat 500</h3>
                    <h3>5 / 5</h3>
                  </div>
                  <div className="car-item-description-right">
                    <p>65€ / Jour</p>
                  </div>
                </div>
              </div>{" "}
              <div class="rentCars-car-item">
                <div className="car-item-image">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/02/27/08/27/car-2102367_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="car-item-description">
                  <div className="car-item-description-left">
                    <h3>Fiat 500</h3>
                    <h3>5 / 5</h3>
                  </div>
                  <div className="car-item-description-right">
                    <p>65€ / Jour</p>
                  </div>
                </div>
              </div>{" "}
              <div class="rentCars-car-item">
                <div className="car-item-image">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/02/27/08/27/car-2102367_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="car-item-description">
                  <div className="car-item-description-left">
                    <h3>Fiat 500</h3>
                    <h3>5 / 5</h3>
                  </div>
                  <div className="car-item-description-right">
                    <p>65€ / Jour</p>
                  </div>
                </div>
              </div>{" "}
              <div class="rentCars-car-item">
                <div className="car-item-image">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/02/27/08/27/car-2102367_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="car-item-description">
                  <div className="car-item-description-left">
                    <h3>Fiat 500</h3>
                    <h3>5 / 5</h3>
                  </div>
                  <div className="car-item-description-right">
                    <p>65€ / Jour</p>
                  </div>
                </div>
              </div>{" "}
              <div class="rentCars-car-item">
                <div className="car-item-image">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/02/27/08/27/car-2102367_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="car-item-description">
                  <div className="car-item-description-left">
                    <h3>Fiat 500</h3>
                    <h3>5 / 5</h3>
                  </div>
                  <div className="car-item-description-right">
                    <p>65€ / Jour</p>
                  </div>
                </div>
              </div>{" "}
              <div class="rentCars-car-item">
                <div className="car-item-image">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/02/27/08/27/car-2102367_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="car-item-description">
                  <div className="car-item-description-left">
                    <h3>Fiat 500</h3>
                    <h3>5 / 5</h3>
                  </div>
                  <div className="car-item-description-right">
                    <p>65€ / Jour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RentCarsPage;
