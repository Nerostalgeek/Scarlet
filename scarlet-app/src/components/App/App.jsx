import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import rentCarsPage from "../rentCarsPage/rentCarsPage";
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
          <Route
          path='/login'
          render={(props) => <Login {...props}/>}
        />
          <Route path="/rent-cars" component={rentCarsPage} />
          <Footer links={this.state.navBarLinks} />
        </div>
      </Router>
    );
  }
}

export default App;
