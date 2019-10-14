import React, { useEffect, useState } from "react";
import "./FormRegister.css";
import { useDispatch, useSelector } from "react-redux";
import { modalActions, userActions, csrfTokenActions } from "../../../actions";
import closeIcon from "../../../img/icons/close.png";

const FormRegister = () => {
  const dispatch = useDispatch();
  const user = null;

  useEffect(() => {
    dispatch(csrfTokenActions.create(user));
  }, [dispatch]);

  const [enteredFirstName, setFirstName] = useState("");
  const [enteredLastName, setLastName] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [enteredConfirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const csrfToken = useSelector(state => state.csrfProtection);

  const { token, fetchingToken, tokenFetched } = csrfToken;

  const submitHandler = event => {
    event.preventDefault();
    const user = {
      lastName: enteredLastName,
      firstName: enteredFirstName,
      email: enteredEmail,
      password: enteredPassword
    };

    const formChecker = {
      confirmPassword: enteredConfirmPassword,
      isSubmitted: submitted
    };

    const CSRFTokenObject = {
      token: token,
      user: null
    };

    if (
      user.firstName &&
      user.lastName &&
      user.email &&
      user.password &&
      formChecker.confirmPassword &&
      user.password === formChecker.confirmPassword &&
      tokenFetched
    ) {
      dispatch(userActions.register(user, CSRFTokenObject));
      dispatch(modalActions.displayConfirmPageRegister());
    }
  };

  return (
    <div className="form">
      <div className="form-toggle" />
      <div className="form-panel one">
        <div className="form-header">
          <h1>Créer un compte</h1>
        </div>
        <div className="form-content">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="firstName">Prénom</label>
              <input
                id="firstName"
                name="firstName"
                required="required"
                type="text"
                value={enteredFirstName}
                onChange={event => setFirstName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Nom</label>
              <input
                id="lastName"
                name="lastName"
                required="required"
                type="text"
                value={enteredLastName}
                onChange={event => setLastName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Adresse E-Mail</label>
              <input
                id="email"
                name="email"
                required="required"
                type="email"
                value={enteredEmail}
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                id="password"
                name="password"
                required="required"
                type="password"
                value={enteredPassword}
                onChange={event => setPassword(event.target.value)}
              />
            </div>
            <div
              className={
                "form-group" +
                (submitted && !enteredPassword ? " has-error" : "")
              }
            >
              <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                required="required"
                type="password"
                value={enteredConfirmPassword}
                onChange={event => setConfirmPassword(event.target.value)}
              />
            </div>
            <button
              className="form-close-button"
              type="button"
              onClick={() => dispatch(modalActions.hideModal())}
            >
              <img src={closeIcon} alt="" />
            </button>
            <div className="form-group">
              <button type="submit">S'enregistrer</button>
              {/* {registering && (
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                )} */}
            </div>
          </form>
        </div>
        <button
          className="form-register-button"
          type="button"
          onClick={() => dispatch(modalActions.displayLoginForm())}
        >
          Se connecter
        </button>
      </div>
    </div>
  );
};
export default FormRegister;
