import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./RentCar.css";

import LoginButtons from "../Login/LoginButtons/LoginButtons";

const RentCar = () => {
  let userIsConnected = useSelector(state => state.authentication.loggedIn);
  console.log(userIsConnected);

  if (userIsConnected) {
    return (
      <div className="l-rent-car">
        <p>Page de locations de voitures</p>
      </div>
    );
  } else {
    return <LoginButtons />;
  }
};

export default RentCar;
