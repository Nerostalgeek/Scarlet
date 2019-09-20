import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import RentCarsPage from "../rentCarsPage/RentCarsPage";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";

import "./App.css";

class App extends Component {
  state = {
    navBarLinks: [
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
    ]
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar links={this.state.navBarLinks} />
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/rent-cars" component={RentCarsPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Footer links={this.state.navBarLinks} />
        </div>
      </Router>
    );
  }
}

export default App;
