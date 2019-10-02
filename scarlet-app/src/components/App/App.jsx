import React, { useEffect, useState } from "react";
import { Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { alertActions } from "../../actions";
import { PrivateRoute } from "../PrivateRoute";
import NavBar from "../NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import { history } from "../../helpers";
import OffersCarsPage from "../OffersCarsPage/OffersCarsPage";
import RentCar from "../RentCar/RentCar";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";

import "./App.css";

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
      <div className="App">
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/cars-offers" component={OffersCarsPage} />
        <Route path="/rent-my-car" component={RentCar} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/logout" />
        <Footer />
      </div>
    </Router>
  );
};
export default App;
