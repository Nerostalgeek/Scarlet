import React, { useEffect, useState } from "react";
import "./FormLogin.css";
import { useDispatch, useSelector } from "react-redux";
import { modalActions, userActions } from "../../../actions";
import closeIcon from "../../../img/icons/close.png";

const FormLogin = () => {
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const displayForm = useSelector(state => state.displayForm);
  const hideModal = useSelector(state => state.displayModal);

  const submitHandler = event => {
    event.preventDefault();

    setSubmitted(true);
    const email = enteredEmail;
    const password = enteredPassword;
    if (email && password) {
      dispatch(userActions.login(email, password));
      dispatch(modalActions.hideModal());
    }
  };

  // const { loggingIn } = this.props;

  return (
    <div className="form">
      <div className="form-toggle" />
      <div className="form-panel one">
        <div className="form-header">
          <h1>Account Login</h1>
        </div>
        <div className="form-content">
          <form onSubmit={submitHandler}>
            <div
              className={
                "form-group" + (submitted && !enteredEmail ? " has-error" : "")
              }
            >
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                value={enteredEmail}
                onChange={event => {
                  setEmail(event.target.value);
                }}
              />
              {submitted && !enteredEmail && (
                <div className="help-block">L'E-Mail est requis</div>
              )}
            </div>
            <div
              className={
                "form-group" +
                (submitted && !enteredPassword ? " has-error" : "")
              }
            >
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={enteredPassword}
                onChange={event => {
                  setPassword(event.target.value);
                }}
              />
              {submitted && !enteredPassword && (
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
            onClick={() => dispatch(modalActions.hideModal())}
          >
            <img src={closeIcon} alt="" />
          </button>
        </div>
        <button
          className="form-register-button"
          type="button"
          onClick={() => dispatch(modalActions.displayRegisterForm())}
        >
          Créer un compte
        </button>
      </div>
    </div>
  );
};

export default FormLogin;
