import React, { useEffect, useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { alertActions } from "../../actions";
import { PrivateRoute } from "../PrivateRoute";
import NavBar from "../NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import { history } from "../../helpers";
import RentCarsPage from "../RentCarsPage/RentCarsPage";
import RentCar from "../RentCar/RentCar";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import ResetPassword from "../Login/ResetPassword/ResetPassword";
import validateAccount from "../Login/ValidateAccount/ValidateAccount";
import "./App.css";
require("dotenv").config();

const App = () => {
  const dispatch = useDispatch();

  // componentDidMount behavior, if no array dependencies, act like componentDidUpdate
  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, [dispatch]);

  return (
    <Router history={history}>
      <Switch>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/rent-cars" component={RentCarsPage} />
          <Route path="/rent-my-car" component={RentCar} />
          <Route path="/validate-account" component={validateAccount} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/logout" />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
};
export default App;
