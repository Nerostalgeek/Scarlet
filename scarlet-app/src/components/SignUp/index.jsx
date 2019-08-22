import React, { Component } from "react";

import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import "./signup.css";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div className="l-signin">
        <div className="signin-buttons">
          <FacebookLogin
            cssClass="signin-item-button facebook-button"
            appId="460733124511623"
            autoLoad={true}
            fields="name,email,picture"
            callback={this.responseFacebook}
            icon="fa-facebook"
            textButton="Connexion avec Facebook"
          />

          <GoogleLogin
            render={renderProps => (
              <button
                className="signin-item-button google-button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                icon="fa-google"
              >
                Connexion avec Google
              </button>
            )}
            clientId="399431441363-edqd6pdbm8icg7gjm7d27sffg2uuntha.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
            buttonText="Login with Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
          <button className="signin-item-button">S'inscrire par Mail</button>
        </div>
      </div>
    );
  }
}

export default SignUp;
