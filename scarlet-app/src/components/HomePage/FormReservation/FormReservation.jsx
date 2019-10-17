import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Counter from "../../Counter/Counter";

import "./FormReservation.css";

const FormReservation = () => {
  const [citySelected, setCitySelected] = useState("");
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [selectedRange, setSelectedRange] = useState("");

  const incrementCounter = event => {
    setCount(count + 1);
  };

  const decrementCounter = event => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onChangeCalendarValue = date => {
    let newRange = [...date];
    newRange = [
      newRange[0].toLocaleDateString(),
      newRange[1].toLocaleDateString()
    ];
    setSelectedRange(newRange);
  };

  const submitSearchRequest = e => {
    e.preventDefault();

    let request = {
      citySelected: citySelected,
      selectedRange,
      count
    };
    console.log(request);
  };

  return (
    <div className="reservation-box">
      <h3 id="reservation-box-title">
        Trouvez le véhicule parfait dès aujourd'hui
      </h3>

      <form
        onSubmit={submitSearchRequest}
        className="form-reservation"
        action=""
      >
        <div className="form-reservation-row">
          <div className="reservation-row-item">
            <p className="reservation-label">Ville</p>
            <input
              type="text"
              id="selectCityInput"
              value={citySelected}
              onChange={event => setCitySelected(event.target.value)}
            />
          </div>
        </div>
        <p className="reservation-label">Durée du trajet</p>
        <div className="form-reservation-row">
          <Calendar
            returnValue={"range"}
            minDate={new Date()}
            onChange={onChangeCalendarValue}
            selectRange={true}
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
        <input
          className={
            citySelected && count !== 0 && selectedRange
              ? "submitInput input-enabled"
              : "submitInput input-disabled"
          }
          id="submitInput"
          type="submit"
          value="Valider"
        />
      </form>
    </div>
  );
};

export default FormReservation;
