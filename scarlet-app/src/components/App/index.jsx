import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./App.css";

class App extends Component {
  state = {
    navbarLinks: [
      {
        name: "Accueil",
        url: "#",
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
        url: "#",
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
      <div className="App">
        <Navbar links={this.state.navbarLinks} />
        <Footer links={this.state.navbarLinks} />
      </div>
    );
  }
}

export default App;
