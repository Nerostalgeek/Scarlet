import React, { Component } from "react";
import "./ConnectPage.css";
import Register from "../Register/Register";
import Login from "../Login/Login";

class Connection extends Component {
  state = {
    userChoice: ""
  };

  handleClick = event => {
    this.setState({
      userChoice: event.target.name
    });
  };

  render() {
    return (
      <div className="l-signup">
        <div className="signup-form signup-section">
          <div className="signup-form-action">
            <button
              onClick={this.handleClick}
              name="register"
              className="signup-form-action-item"
            >
              Se connecter
            </button>
            <button
              onClick={this.handleClick}
              name="login"
              className="signup-form-action-item"
            >
              S'inscrire
            </button>
            {this.state.userChoice === "register" && <Register />}
            {this.state.userChoice === "login" && <Login />}
          </div>
        </div>

        <div className="signup-image signup-section" />
      </div>
    );
  }
}

export default Connection;
