import React, {Component} from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import FormLogin from "../FormLogin/FormLogin.jsx";
import "./login.css";
import {connect} from "react-redux";
import {modalActions} from "../../actions/modal.actions"

const mapStateToProps = state => {
    return {showModal: state.displayModal}
};

const mapActionsToProps = {
    onShowModalLogin: modalActions.showModalLogin,
};


class Login extends Component {

    constructor(props) {
        super(props);
        this.onShowModalLogin = this.onShowModalLogin.bind(this);
    }

    onShowModalLogin() {
        this.props.onShowModalLogin();
    }


    responseFacebook = () => {
        console.log('Bouton Facebook cliqué');
    };

    render() {
        return (
            <div className="l-signup">
                <div className="signup-form signup-section">

                    <div className="l-signin">
                        <div className="signin-buttons">
                            <FacebookLogin
                                cssClass="signin-item-button facebook-button"
                                appId="460733124511623"
                                autoLoad={false}
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
                            <button
                                className="signin-item-button"
                                onClick={this.onShowModalLogin}
                            >
                                Connexion/Inscription par email
                            </button>
                            {this.props.showModal.payload &&
                            <FormLogin showModal={this.props.showModal.payload}/>}

                        </div>
                    </div>
                </div>
                <div className="signup-image signup-section"/>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Login);
