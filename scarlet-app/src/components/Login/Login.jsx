import React, { useEffect } from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";

import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import FormLogin from "./FormLogin/FormLogin";
import FormRegister from "./FormRegister/FormRegister";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ConfirmPage from "./ConfirmPage/ConfirmPage";
import { modalActions } from "../../actions/modal.actions";
import ReactModal from "react-modal";
import googleIcon from "../../img/icons/google-icon.png";
import mailIconWhite from "../../img/icons/mail-white.png";
import { userActions, csrfTokenActions } from "../../actions";
import { history } from "../../helpers";
import config from "../../../../config.default";

ReactModal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const Login = () => {
  
  const dispatch = useDispatch();
  const isModalOpened = useSelector(state => state.displayModal.open);
  const displayPage = useSelector(state => state.displayPage.pageValue);

  const facebookResponse = response => {
    const facebookToken = { access_token: response.accessToken };
    if (facebookToken) {
      dispatch(userActions.facebookLogin(facebookToken));
    }
  };

  const googleResponse = response => {
    const tokenBlob = { access_token: response.accessToken };
    const options = {
      method: "POST",
      body: tokenBlob,
      mode: "cors",
      cache: "default"
    };
    fetch("https://localhost:6200/users/auth/google", options).then(r => {
      const token = r.headers.get("x-auth-token");
      r.json().then(user => {
        if (token) {
          this.setState({ isAuthenticated: true, user, token });
        }
      });
    });
  };

  // const {loggingIn} = this.props;

  return (
    <div className="l-signup">
      <div className="signup-form signup-section">
        <h1 id="register-title">
          Rejoignez la communauté Scarlet et commencez à économiser !
        </h1>
        <div className="l-signin">
          <div className="signin-buttons">
            <FacebookLogin
              cssClass="signin-item-button facebook-button"
              appId={config.facebookAuth.clientID}
              autoLoad={false}
              fields="first_name, last_name, email, picture"
              callback={facebookResponse}
              icon="fa-facebook-square"
              textButton="Connexion avec Facebook"
            />
            <GoogleLogin
              render={renderProps => (
                <button
                  className="signin-item-button google-button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <img className="login-button-image" src={googleIcon} alt="" />
                  Connexion avec Google
                </button>
              )}
              clientId="399431441363-edqd6pdbm8icg7gjm7d27sffg2uuntha.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
              buttonText="Login with Google"
              onSuccess={"success"}
              onFailure={"error"}
            />
            <h3 id="register-separator">OU</h3>
            <button
              className="signin-item-button"
              id="signin-mail-button"
              onClick={() => {
                dispatch(modalActions.showModal());
                dispatch(modalActions.displayLoginForm());
              }}
            >
              <img className="login-button-image" src={mailIconWhite} alt="" />
              Connexion / Inscription par E-Mail
            </button>
            <ReactModal isOpen={isModalOpened} style={customStyles}>
              {displayPage === "login" && <FormLogin />}
              {displayPage === "register" && <FormRegister />}
              {displayPage === "forgotPassword" && <ForgotPassword />}
              {displayPage === "confirmPageResetPassword" && (
                <ConfirmPage page={displayPage} />
              )}
              {displayPage === "confirmPageRegister" && (
                <ConfirmPage page={displayPage} />
              )}
            </ReactModal>
          </div>
        </div>
      </div>
      <div className="signup-image signup-section" />
    </div>
  );
};
export default Login;
