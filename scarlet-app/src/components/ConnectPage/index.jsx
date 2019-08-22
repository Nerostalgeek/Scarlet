import React, { Component } from "react";
import "./ConnectPage.css";
import SignUp from "../SignUp";
import SignIn from "../SignIn";

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
              name="signUp"
              className="signup-form-action-item"
            >
              Se connecter
            </button>
            <button
              onClick={this.handleClick}
              name="signIn"
              className="signup-form-action-item"
            >
              S'inscrire
            </button>
            {this.state.userChoice === "signUp" && <SignUp />}
            {this.state.userChoice === "signIn" && <SignIn />}
          </div>
        </div>

        <div className="signup-image signup-section" />
      </div>
    );
  }
}

export default Connection;
