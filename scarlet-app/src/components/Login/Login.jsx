import React, {Component} from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import FormLogin from "../FormLogin/FormLogin.jsx";
import "./login.css";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    ...state
});

class Login extends Component {

    state = {
        isHidden: true
    };

    loginModalAction = (event) => {
        // console.log("alors ?", this.loginModalAction());
        this.props.loginModalAction();
    };

    responseFacebook = () => {
        console.log('Bouton Facebook cliqué');
    };

    toggleModal = () => {
        console.log("STATE HIDDEN ?", this.state.isHidden);
        this.setState({
            isHidden: !this.state.isHidden
        })
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
                                // onClick={this.loginModalAction}
                                onClick={this.toggleModal}
                            >
                                Connexion/Inscription par email
                            </button>
                            {!this.state.isHidden && <FormLogin/>}

                        </div>
                    </div>
                </div>
                <div className="signup-image signup-section"/>
            </div>

        );
    }
}

export default connect(mapStateToProps)(Login);
