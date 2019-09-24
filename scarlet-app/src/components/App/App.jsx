import React, { useEffect, useState } from "react";
import { Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { alertActions } from "../../actions";
import { PrivateRoute } from "../PrivateRoute";
import NavBar from "../NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import { history } from "../../helpers";
import RentCarsPage from "../RentCarsPage/RentCarsPage";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const [navBarLinks, setNavBarLinks] = useState([
    {
      name: "Accueil",
      url: "/",
      customId: ""
    },
    {
      name: "Louer une voiture",
      url: "rent-cars",
      customId: ""
    },
    {
      name: "Mettre ma voiture en location",
      url: "#",
      customId: ""
    },
    {
      name: "Connexion",
      url: "login",
      customId: ""
    },
    {
      name: "Mon profil",
      url: "dashboard",
      customId: ""
    }
  ]);

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
        <NavBar links={navBarLinks} />
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/rent-cars" component={RentCarsPage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Footer links={navBarLinks} />
      </div>
    </Router>
  );
};
export default App;
