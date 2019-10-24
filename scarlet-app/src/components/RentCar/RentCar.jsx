import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./RentCar.css";

import * as vehicles_props from "../../../databases/vehicles_props.json";

// import LoginButtons from "../Login/LoginButtons/LoginButtons";

const RentCar = () => {
  const userIsConnected = useSelector(state => state.authentication.loggedIn);

  const dbVehicles = { ...vehicles_props };

  let brandArr = [];

  const populateBrandSelect = () => {
    for (let i = 0; i < dbVehicles.default.length; i++) {
      if (!brandArr.includes(dbVehicles.default[i].make)) {
        brandArr.push(dbVehicles.default[i].make);
      }
    }
    return brandArr.sort();
  };

  populateBrandSelect();

  const inputSelected = event => {
    let nextElementNumber = event.target.getAttribute("data-number");

    const previousFieldName = event.target.getAttribute("data-field-name");

    nextElementNumber++;

    const nextElementToShow = document.getElementById(
      `rentForm${nextElementNumber}`
    );

    const selectToPopulate = nextElementToShow.childNodes[1];

    const fieldToShow = selectToPopulate.getAttribute("data-field-name");

    const previousFieldValue = event.target.value;

    let nextArr = [];

    for (
      let arrayIterator = 0;
      arrayIterator < dbVehicles.default.length;
      arrayIterator++
    ) {
      if (
        dbVehicles.default[arrayIterator][previousFieldName] ===
        previousFieldValue
      ) {
        if (!nextArr.includes(dbVehicles.default[arrayIterator][fieldToShow])) {
          nextArr.push(dbVehicles.default[arrayIterator][fieldToShow]);
        }
      }
    }

    let selectLength = selectToPopulate.length;

    // EMPTY OPTIONS IF SELECT CHANGE (ça marche po)
    for (
      let selectIterator = 0;
      selectIterator < selectLength;
      selectIterator++
    ) {
      selectToPopulate.options[selectIterator] = null;
    }

    for (
      let pushOptionIterator = 0;
      pushOptionIterator < nextArr.length;
      pushOptionIterator++
    ) {
      let newOption = document.createElement("option");

      newOption.appendChild(
        document.createTextNode(`${nextArr[pushOptionIterator]}`)
      );
      newOption.value = `${nextArr[pushOptionIterator]}`;

      selectToPopulate.appendChild(newOption);
    }

    nextElementToShow.style.display = "block";
  };

  const listItems = brandArr.map(brand => <option key={brand}>{brand}</option>);


    return (
      <div className="l-rent-car">
        <div className="rent-car-content">
          <div className="rent-car-form">
            <form action="">
              <div id="rentForm1" className="form-rent-car-item">
                <h4>Marque du véhicule :</h4>
                <select
                  data-field-name="make"
                  data-number="1"
                  onChange={inputSelected}
                  className="rent-car-input rent-select"
                >
                  <option>Sélectionnez la marque de votre véhicule</option>
                  {listItems}
                </select>
              </div>

              <div class="form-rent-row">
                <div id="rentForm2" className="form-rent-car-item">
                  <h4>Modèle du véhicule :</h4>
                  <select
                    data-field-name="model"
                    data-number="2"
                    onChange={inputSelected}
                    className="rent-car-input rent-select"
                  >
                    <option>Sélectionnez le modèle de votre véhicule</option>
                  </select>
                </div>
                <div id="rentForm3" className="form-rent-car-item">
                  <h4>Année du véhicule :</h4>
                  <select
                    data-field-name="year"
                    data-number="3"
                    className="rent-car-input rent-select"
                  >
                    <option>Sélectionnez le modèle de votre véhicule</option>
                  </select>
                </div>
              </div>
              <div class="form-rent-row">
                <div id="rentForm4" className="form-rent-car-item">
                  <h4>Moteur :</h4>
                  <select
                    data-field-name="year"
                    data-number="4"
                    className="rent-car-input rent-select"
                  >
                    <option>
                      Sélectionnez le type de moteur de votre véhicule
                    </option>
                    <option>Essence</option>
                    <option>Disel</option>
                    <option>Electrique</option>
                  </select>
                </div>
                <div id="rentForm5" className="form-rent-car-item">
                  <h4>Transmission</h4>
                  <select
                    data-field-name="engine"
                    data-number="5"
                    className="rent-car-input rent-select"
                  >
                    <option>
                      Sélectionnez le type de moteur de votre véhicule
                    </option>
                    <option>Manuelle</option>
                    <option>Automatique</option>
                  </select>
                </div>
              </div>
              <div class="form-rent-row">
                <div id="rentForm6" className="form-rent-car-item">
                  <h4>Nombre de kilomètres</h4>
                  <select
                    data-field-name="kilometers"
                    data-number="6"
                    className="rent-car-input rent-select"
                  >
                    <option>
                      Sélectionnez le nombre de kilomètres de votre véhicule
                    </option>
                    <option>0 - 50 000</option>
                    <option>50 000 - 100 000</option>
                    <option>100 000 - 200 000</option>
                    <option>+ 200 000</option>
                  </select>
                </div>
                <div id="rentForm7" className="form-rent-car-item">
                  <h4>Nombre de sièges</h4>
                  <input
                    type="text"
                    data-field-name="seats"
                    data-number="7"
                    className="rent-car-input"
                  />
                </div>
              </div>
              <div class="form-rent-row">
                <div id="rentForm8" className="form-rent-car-item">
                  <h4>Année d'enregistrement</h4>
                  <input
                    type="text"
                    data-field-name="kilometers"
                    data-number="8"
                    className="rent-car-input"
                  />
                </div>
                <div id="rentForm9" className="form-rent-car-item">
                  <h4>Pays d'enregistrement</h4>
                  <input
                    type="text"
                    data-field-name="seats"
                    data-number="9"
                    className="rent-car-input"
                  />
                </div>
              </div>
              <input
                className="rentSubmitInput"
                type="submit"
                value="Valider"
              />
            </form>
          </div>
          <div className="rent-car-image"></div>
        </div>
      </div>
    );
};

export default RentCar;
