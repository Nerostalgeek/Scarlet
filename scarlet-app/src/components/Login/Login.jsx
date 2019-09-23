import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import FormLogin from "./FormLogin/FormLogin.jsx";
import FormRegister from "./FormRegister/FormRegister";
import "./login.css";
import { modalActions } from "../../actions/modal.actions";
import Modal from "react-modal";
import { useModal } from "react-modal-hook";
import googleIcon from "../../img/icons/google-icon.png";
import mailIconWhite from "../../img/icons/mail-white.png";
import { userActions } from "../../actions";

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
  const isModalOpened = useSelector(state => state.displayModal);
  console.log('IS MODALE OPENED => => =>', isModalOpened);
  const displayForm = useSelector(state => state.displayForm);
  const dispatch = useDispatch();
  const [showModal, hideModal] = useModal(() => (

      <Modal isOpen={isModalOpened}
             style={customStyles}
      >
        {displayForm.formValue === "login" && (
            <FormLogin displayForm={displayForm} />
        )}
        {displayForm.formValue === "register" && (
            <FormRegister displayForm={displayForm} />
        )}
      </Modal>
  ),
  console.log("COUCOU CA VA MOI CA VA WALLAH", isModalOpened)
  );

  const responseFacebook = () => {
    console.log("Bouton Facebook cliqué");
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
              appId="460733124511623"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
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
              onClick={showModal}
            >
              <img className="login-button-image" src={mailIconWhite} alt="" />
              Connexion / Inscription par E-Mail
            </button>
            {/*{isModalOpened && (*/}
            {/* */}
            {/*)}*/}
          </div>
        </div>
      </div>
      <div className="signup-image signup-section" />
    </div>
  );
};

// const mapStateToProps = state => {
//     return {showModal: state.displayModal, displayForm: state.displayForm};
// };
//
// const mapActionsToProps = {
//     onShowModal: modalActions.showModal,
//     onDisplayForm: modalActions.displayLoginForm
// };
export default Login;
