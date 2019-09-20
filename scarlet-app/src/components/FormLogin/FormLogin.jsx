import React, { Component } from "react";
import "./formLogin.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { modalActions, userActions } from "../../actions";
import closeIcon from "../../img/icons/close.png";

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.onHideModal = this.onHideModal.bind(this);
    this.onDisplayRegisterForm = this.onDisplayRegisterForm.bind(this);

    this.state = {
      email: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onHideModal() {
    this.props.onHideModal();
  }

  onDisplayRegisterForm() {
    this.props.onDisplayRegisterForm();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      this.props.login(email, password);
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;
    return (
      <div className="form">
        <div className="form-toggle" />
        <div className="form-panel one">
          <div className="form-header">
            <h1>Account Login</h1>
          </div>
          <div className="form-content">
            <form onSubmit={this.handleSubmit}>
              <div
                className={
                  "form-group" + (submitted && !email ? " has-error" : "")
                }
              >
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={this.handleChange}
                />
                {submitted && !email && (
                  <div className="help-block">L'E-Mail est requis</div>
                )}
              </div>
              <div
                className={
                  "form-group" + (submitted && !password ? " has-error" : "")
                }
              >
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                {submitted && !password && (
                  <div className="help-block">Le mot de passe est requis</div>
                )}
              </div>
              <div className="form-group">
                <label className="form-remember">
                  <input type="checkbox" />
                  Se souvenir de moi
                </label>
                <a className="form-recovery" href="#">
                  Mot de passe oublié ?
                </a>
              </div>
              <div className="form-group">
                <button type="submit">Se connecter</button>
                {/* {loggingIn && (
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                )} */}
              </div>
            </form>
            <button
              className="form-close-button"
              type="button"
              onClick={() => this.onHideModal()}
            >
              <img src={closeIcon} alt="" />
            </button>
          </div>
          <button
            className="form-register-button"
            type="button"
            onClick={() => this.onDisplayRegisterForm()}
          >
            Créer un compte
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hideModal: state.displayModal,
    displayRegisterForm: state.displayRegisterForm,
    loggingIn: state.authentication
  };
};
const mapActionsToProps = {
  onHideModal: modalActions.hideModal,
  onDisplayRegisterForm: modalActions.displayRegisterForm,
  login: userActions.login,
  logout: userActions.logout
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(FormLogin);
