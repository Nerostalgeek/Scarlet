import React, {Component} from "react";
import "./formLogin.css";
import {connect} from "react-redux";
import {modalActions} from "../../actions/modal.actions";


class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.onHideModal = this.onHideModal.bind(this);
        this.onDisplayRegisterForm = this.onDisplayRegisterForm.bind(this);
    }

    onHideModal() {
        this.props.onHideModal();
    }

    onDisplayRegisterForm() {
        this.props.onDisplayRegisterForm()
    }


    render() {
        return (

            <div className="form">
                <div className="form-toggle"/>
                <div className="form-panel one">
                    <div className="form-header">
                        <h1>Account Login</h1>
                    </div>
                    <div className="form-content">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input id="username" name="username" required="required" type="text"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input id="password" name="password" required="required" type="password"/>
                            </div>
                            <div className="form-group">
                                <label className="form-remember">
                                    <input type="checkbox"/>
                                    Remember Me
                                </label>
                                <a className="form-recovery" href="#">Forgot Password?</a>
                            </div>
                            <div className="form-group">
                                <button type="submit">Log In</button>
                            </div>
                        </form>
                        <button type="button" onClick={() => this.onHideModal()}>Close</button>
                    </div>
                    <button type="button" onClick={() => this.onDisplayRegisterForm()} >Register</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {hideModal: state.displayModal, displayRegisterForm: state.displayRegisterForm}
};
const mapActionsToProps = {
    onHideModal: modalActions.hideModal,
    onDisplayRegisterForm: modalActions.displayRegisterForm,
};
export default connect(mapStateToProps, mapActionsToProps)(FormLogin);
