import React, { useState } from "react";

import "./Counter.css";

const Counter = props => {
  const { initialCount, incrementCounter, decrementCounter } = props;

  return (
    <div className="counter">
      <button
        onClick={event => {
          event.preventDefault();
          decrementCounter();
        }}
        className="counter-button decrement-button"
      >
        -
      </button>
      <h2 className="counter-value">{initialCount}</h2>
      <button
        onClick={event => {
          event.preventDefault();
          incrementCounter();
        }}
        className="counter-button increment-button"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
