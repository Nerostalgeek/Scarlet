import React from "react";

import "./Counter.css";

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-button">-</button>
      <h2>0</h2>
      <button className="counter-button">+</button>
    </div>
  );
};

export default Counter;
