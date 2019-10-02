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
        <p>La page la putain de ta race</p>
      </div>
    );
  } else {
    return <LoginButtons />;
  }
};

export default RentCar;
