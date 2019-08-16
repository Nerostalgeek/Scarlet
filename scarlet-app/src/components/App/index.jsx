import React, { Component } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "./App.css";

class App extends Component {
  state = {
    navBarLinks: [
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
        <NavBar links={this.state.navBarLinks} />
        <Footer links={this.state.navBarLinks} />
      </div>
    );
  }
}

export default App;
