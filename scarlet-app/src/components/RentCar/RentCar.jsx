import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalActions, userActions, csrfTokenActions } from "../../actions";

import "./RentCar.css";

import * as vehicles_props from "../../../databases/vehicles_props.json";
import { carActions } from "../../actions/car.actions";

// import LoginButtons from "../Login/LoginButtons/LoginButtons";

const RentCar = () => {
  const dispatch = useDispatch();
  const userIsConnected = useSelector(state => state.authentication.loggedIn);

  const car = null;

  useEffect(() => {
    dispatch(csrfTokenActions.create(car));
  }, [dispatch]);

  const dbVehicles = { ...vehicles_props };

  const [brandSelected, setBrand] = useState("test");
  const [modelSelected, setModel] = useState("test");
  const [yearSelected, setYear] = useState("1995");
  const [engineSelected, setEngine] = useState("test");
  const [transmissionSelected, setTransmission] = useState("test");
  const [kilometersNumber, setKilometers] = useState("195000");
  const [seatsNumber, setSeats] = useState("4");
  const [registeredYear, setRegisteredYear] = useState("test");
  const [registeredCountry, setRegisteredCountry] = useState("test");
  const [options, setOptions] = useState("test");
  const [price, setPrice] = useState("90");
  const [description, setDescription] = useState("test");
  const [type, setType] = useState("test");
  const [submitted, setSubmitted] = useState(false);

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

    const previousValue = event.target.value;

    // Push to state

    switch (previousFieldName) {
      case "make":
        setBrand(previousValue);
        break;
      case "model":
        setModel(previousValue);
        break;
      case "year":
        setYear(previousValue);
        break;
      case "engine":
        setEngine(previousValue);
        break;
      case "transmission":
        setTransmission(previousValue);
        break;
      case "kilometers":
        setKilometers(previousValue);
        break;
      case "seats":
        setSeats(previousValue);
        break;
      case "registeredYear":
        setRegisteredYear(previousValue);
        break;
      case "registeredCountry":
        setRegisteredCountry(previousValue);
        break;
      default:
        break;
    }

    nextElementNumber++;

    const nextElementToShow = document.getElementById(
      `rentForm${nextElementNumber}`
    );
    if (nextElementToShow !== null) {
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
          if (
            !nextArr.includes(dbVehicles.default[arrayIterator][fieldToShow])
          ) {
            nextArr.push(dbVehicles.default[arrayIterator][fieldToShow]);
          }
        }
      }

      // TODO : VIDER LES OPTIONS SAUF LE PREMIER
      // AVANT DE PUSH LES OPTIONS

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
    }
  };

  const csrfToken = useSelector(state => state.csrfProtection);

  const submitHandler = event => {
    event.preventDefault();
    console.log("oui");

    setSubmitted(true);

    const newCarInformations = {
      owner: "test",
      brand: brandSelected,
      model: modelSelected,
      year: yearSelected,
      engine: engineSelected,
      transmission: transmissionSelected,
      kilometer: kilometersNumber,
      seatsNumber: seatsNumber,
      registeredYear: registeredYear,
      registrationCountry: registeredCountry,
      options: options,
      price: price,
      description: description,
      type: type
    };

    dispatch(carActions.register(newCarInformations, csrfToken));
  };

  const listItems = brandArr.map(brand => <option key={brand}>{brand}</option>);

  return (
    <div className="l-rent-car">
      <div className="rent-car-content">
        <div className="rent-car-form">
          <form onSubmit={submitHandler}>
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

            <div className="form-rent-row">
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
                  onChange={inputSelected}
                  className="rent-car-input rent-select"
                >
                  <option>Sélectionnez le modèle de votre véhicule</option>
                </select>
              </div>
            </div>
            <div className="form-rent-row">
              <div id="rentForm4" className="form-rent-car-item">
                <h4>Moteur :</h4>
                <select
                  data-field-name="engine"
                  data-number="4"
                  onChange={inputSelected}
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
                  data-field-name="transmission"
                  data-number="5"
                  onChange={inputSelected}
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
            <div className="form-rent-row">
              <div id="rentForm6" className="form-rent-car-item">
                <h4>Nombre de kilomètres</h4>
                <select
                  data-field-name="kilometers"
                  data-number="6"
                  onChange={inputSelected}
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
                  onChange={inputSelected}
                  className="rent-car-input"
                />
              </div>
            </div>
            <div className="form-rent-row">
              <div id="rentForm8" className="form-rent-car-item">
                <h4>Année d'enregistrement</h4>
                <input
                  type="text"
                  data-field-name="registeredYear"
                  data-number="8"
                  onChange={inputSelected}
                  className="rent-car-input"
                />
              </div>
              <div id="rentForm9" className="form-rent-car-item">
                <h4>Pays d'enregistrement</h4>
                <input
                  type="text"
                  data-field-name="registeredCountry"
                  data-number="9"
                  onChange={inputSelected}
                  className="rent-car-input"
                />
              </div>
            </div>
            <div className="form-rent-row">
              <div id="rentForm10" className="form-rent-car-item">
                <h4>Options</h4>
                <input
                  type="checkbox"
                  name="favorite_pet"
                  value="Dogs"
                  id="dogs"
                />
                <label for="dogs">Dogs</label>
                <input
                  type="checkbox"
                  name="favorite_pet"
                  value="Dogs"
                  id="dogs"
                />
                <label for="dogs">Dogs</label>
                <input
                  type="checkbox"
                  name="favorite_pet"
                  value="Dogs"
                  id="dogs"
                />
                <label for="dogs">Dogs</label>
                <input
                  type="checkbox"
                  name="favorite_pet"
                  value="Dogs"
                  id="dogs"
                />
                <label for="dogs">Dogs</label>
              </div>
              <div id="rentForm11" className="form-rent-car-item">
                <h4>Prix a la journée</h4>
                <input
                  type="text"
                  data-field-name="price"
                  data-number="11"
                  onChange={inputSelected}
                  className="rent-car-input"
                />
              </div>
            </div>
            <div className="form-rent-row">
              <div id="rentForm12" className="form-rent-car-item">
                <h4>Description additionnelle</h4>
                <input
                  type="text"
                  data-field-name="price"
                  data-number="12"
                  onChange={inputSelected}
                  className="rent-car-input"
                />
              </div>
              <div id="rentForm13" className="form-rent-car-item">
                <h4>Type de véhicule </h4>
                <input
                  type="text"
                  data-field-name="type"
                  data-number="13"
                  onChange={inputSelected}
                  className="rent-car-input"
                />
              </div>
            </div>
            <input className="rentSubmitInput" type="submit" value="Valider" />
          </form>
        </div>
        <div className="rent-car-image"></div>
      </div>
    </div>
  );
};

export default RentCar;
