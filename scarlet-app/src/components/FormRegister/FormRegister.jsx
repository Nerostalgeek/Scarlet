import React, {Component} from "react";
import "./FormRegister.css";
import {connect} from "react-redux";
import {modalActions} from "../../actions/modal.actions";


class FormRegister extends Component {
    constructor(props) {
        super(props);
        this.onHideModal = this.onHideModal.bind(this);
        this.onDisplayForm = this.onDisplayForm.bind(this);
    }

    onHideModal() {
        this.props.onHideModal();
    }

    onDisplayForm() {
        this.props.onDisplayForm()
    }


    render() {
        return (

            <div className="form">
                <div className="form-toggle"/>
                <div className="form-panel one">
                    <div className="form-header">
                        <h1>Register Account</h1>
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
                                <label htmlFor="cpassword">Confirm Password</label>
                                <input id="cpassword" name="cpassword" required="required" type="password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input id="email" name="email" required="required" type="email"/>
                            </div>
                            <div className="form-group">
                                <button type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                    <button type="button" onClick={() => this.onDisplayForm()}>Login</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {hideModal: state.displayModal, displayForm: state.displayForm}
};
const mapActionsToProps = {
    onHideModal: modalActions.hideModal,
    onDisplayForm: modalActions.displayLoginForm,
};
export default connect(mapStateToProps, mapActionsToProps)(FormRegister);
