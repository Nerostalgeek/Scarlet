import React, {Component} from "react";
import "./FormRegister.css";
import {connect} from "react-redux";
import {modalActions, userActions} from "../../actions";


class FormRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                role: 'renter'
            },
            confirmPassword: '',
            passwordMatch: false,
            submitted: false
        };
        this.onHideModal = this.onHideModal.bind(this);
        this.onDisplayForm = this.onDisplayForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleChange(event) {
        const {name, value} = event.target;
        const {user, confirmPassword} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            },
            ...confirmPassword, [name]: value,
        });
    }


    handleSubmit(event) {
        event.preventDefault();
        const {user, confirmPassword, passwordMatch} = this.state;
        this.setState({submitted: true});

        if (confirmPassword === user.password) {
            this.setState({passwordMatch: true});
        }


        if (user.firstName && user.lastName && user.email && user.password && confirmPassword && passwordMatch) {

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
        const {registering} = this.props;
        const {user, confirmPassword, passwordMatch, submitted} = this.state;
        return (

            <div className="form">
                <div className="form-toggle"/>
                <div className="form-panel one">
                    <div className="form-header">
                        <h1>Register Account</h1>
                    </div>
                    <div className="form-content">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <input id="firstName" name="firstName" required="required" type="text"
                                       value={user.firstName} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <input id="lastName" name="lastName" required="required" type="text"
                                       value={user.lastName} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input id="email" name="email" required="required" type="email"
                                       value={user.email} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input id="password" name="password" required="required" type="password"
                                       value={user.password} onChange={this.handleChange}/>
                            </div>
                            <div className={"form-group" + (submitted && !user.password ? ' has-error' : '')}>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input id="confirmPassword" name="confirmPassword" required="required" type="password"
                                       value={confirmPassword} onChange={this.handleChange}/>
                                {submitted && !passwordMatch &&
                                <div className="help-block">Passwords don't match</div>
                                }
                            </div>
                            <div className="form-group">
                                <button type="submit">Register</button>
                                {registering &&
                                <img
                                    src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                                }
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
