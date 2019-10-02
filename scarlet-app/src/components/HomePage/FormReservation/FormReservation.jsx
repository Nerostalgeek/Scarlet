import React from "react";
import Calendar from "react-calendar";
import Counter from "../../Counter/Counter";

import "./FormReservation.css";

const FormReservation = () => {
  return (
    <div className="reservation-box">
      <h3 id="reservation-box-title">
        Trouvez le véhicule parfait dès aujourd'hui
      </h3>

      <form className="form-reservation" action="">
        <div className="form-reservation-row">
          <div className="reservation-row-item">
            <p className="reservation-label">Region</p>
            <input type="text" />
          </div>
        </div>
        <div className="form-reservation-row">
          <div className="reservation-row-item">
            <p className="reservation-label">Départ</p>
            <input type="text" />
          </div>
          <div className="reservation-row-item">
            <p className="reservation-label">Retour</p>
            <input type="text" />
          </div>
        </div>

        <div className="form-reservation-row">
          <div className="form-reservation-counter">
            <p className="reservation-label">Nombre de passager(s)</p>
            <Counter />
          </div>
        </div>
        <input id="submitInput" type="submit" value="Rechercher" />
      </form>
    </div>
  );
};

export default FormReservation;
