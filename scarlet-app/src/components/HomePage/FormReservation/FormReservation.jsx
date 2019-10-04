import React, { useState } from "react";
import Calendar from "react-calendar";
import Counter from "../../Counter/Counter";

import "./FormReservation.css";

const FormReservation = () => {
  const [citySelected, setCitySelected] = useState("");
  const [count, setCount] = useState(1);

  function incrementCounter(event) {
    setCount(count + 1);
  }
  function decrementCounter(event) {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  // Date for activeStartDate calendar
  let date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const todayDate = `${year},${month},${day}`;

  return (
    <div className="reservation-box">
      <h3 id="reservation-box-title">
        Trouvez le véhicule parfait dès aujourd'hui
      </h3>

      <form className="form-reservation" action="">
        <div className="form-reservation-row">
          <div className="reservation-row-item">
            <p className="reservation-label">Ville</p>
            <input
              type="text"
              value={citySelected}
              onChange={event => setCitySelected(event.target.value)}
            />
          </div>
        </div>
        <p className="reservation-label">Durée du trajet</p>
        <div className="form-reservation-row">
          <Calendar
            selectRange
            activeStartDate={new Date(todayDate)}
            minDate={new Date()}
          />
        </div>

        <div className="form-reservation-row">
          <div className="form-reservation-counter">
            <p className="reservation-label">Nombre de passager(s)</p>
            <Counter
              initialCount={count}
              incrementCounter={incrementCounter}
              decrementCounter={decrementCounter}
            />
          </div>
        </div>
        <input id="submitInput" type="submit" value="Rechercher" />
      </form>
    </div>
  );
};

export default FormReservation;
