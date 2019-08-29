import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import Footer from "../Footer/Footer";
import ConnectPage from "../ConnectPage/ConnectPage";

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
        url: "#",
        customId: ""
      },
      {
        name: "Mettre ma voiture en location",
        url: "#",
        customId: ""
      },
      {
        name: "Comment ça marche",
        url: "#",
        customId: ""
      },
      {
        name: "Connexion",
        url: "login",
        customId: ""
      },
      {
        name: "Contact",
        url: "#",
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
          <Route path="/login" component={ConnectPage} />
          <Footer links={this.state.navBarLinks} />
        </div>
      </Router>
    );
  }
}

export default App;
