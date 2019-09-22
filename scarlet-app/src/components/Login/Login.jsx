import React, {Component} from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import FormLogin from "../FormLogin/FormLogin.jsx";
import FormRegister from "../FormRegister/FormRegister";
import "./login.css";
import {connect} from "react-redux";
import {modalActions} from "../../actions/modal.actions";
import Modal from "react-modal";
import googleIcon from "../../img/icons/google-icon.png";
import mailIconWhite from "../../img/icons/mail-white.png";

Modal.setAppElement("#root");
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

class Login extends Component {

    onShowModal = () => {
        this.props.onShowModal();
    };

    onDisplayForm = () => {
        this.props.onDisplayForm();
    };

    responseFacebook = () => {
        console.log("Bouton Facebook cliqué");
    };

    render() {
        const {loggingIn} = this.props;

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
                                callback={this.responseFacebook}
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
                                        <img
                                            className="login-button-image"
                                            src={googleIcon}
                                            alt=""
                                        />
                                        Connexion avec Google
                                    </button>
                                )}
                                clientId="399431441363-edqd6pdbm8icg7gjm7d27sffg2uuntha.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                                buttonText="Login with Google"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                            />
                            <h3 id="register-separator">OU</h3>
                            <button
                                className="signin-item-button"
                                id="signin-mail-button"
                                onClick={() => {
                                    this.onShowModal();
                                    this.onDisplayForm();
                                }}
                            >
                                <img
                                    className="login-button-image"
                                    src={mailIconWhite}
                                    alt=""
                                />
                                Connexion / Inscription par E-Mail
                            </button>
                            {this.props.showModal.open && (
                                <Modal
                                    isOpen={this.props.showModal.open}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    {this.props.displayForm.formValue === "login" && (
                                        <FormLogin displayForm={this.props.displayForm}/>
                                    )}
                                    {this.props.displayForm.formValue === "register" && (
                                        <FormRegister displayForm={this.props.displayForm}/>
                                    )}
                                </Modal>
                            )}
                        </div>
                    </div>
                </div>
                <div className="signup-image signup-section"/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {showModal: state.displayModal, displayForm: state.displayForm};
};

const mapActionsToProps = {
    onShowModal: modalActions.showModal,
    onDisplayForm: modalActions.displayLoginForm
};
export default connect(
    mapStateToProps,
    mapActionsToProps
)(Login);
