import React, {Component} from "react";
import "./FormRegister.css";
import {connect} from "react-redux";
import {modalActions, userActions} from "../../actions";


class FormRegister extends Component {
    constructor(props) {
        super(props);
        this.onHideModal = this.onHideModal.bind(this);
        this.onDisplayForm = this.onDisplayForm.bind(this);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
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
    return {hideModal: state.displayModal, displayForm: state.displayForm, registering: state.registration}
};
const mapActionsToProps = {
    onHideModal: modalActions.hideModal,
    onDisplayForm: modalActions.displayLoginForm,
    register: userActions.register
};
export default connect(mapStateToProps, mapActionsToProps)(FormRegister);
