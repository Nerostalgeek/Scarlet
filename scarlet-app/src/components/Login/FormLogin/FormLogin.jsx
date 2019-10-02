import React, { useEffect, useState } from "react";
import "./FormLogin.css";
import { useDispatch, useSelector } from "react-redux";
import { modalActions, userActions, csrfTokenActions } from "../../../actions";
import closeIcon from "../../../img/icons/close.png";

const FormLogin = () => {
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const csrfToken = useSelector(state => state.csrfProtection);

  const { id, token, fetchingToken, tokenFetched } = csrfToken;
  const deletingToken = csrfToken.deletingToken;
  const tokenDeleted = csrfToken.tokenDeleted;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(csrfTokenActions.create());
  }, [dispatch]);

  const submitHandler = event => {
    event.preventDefault();

    setSubmitted(true);
    const email = enteredEmail;
    const password = enteredPassword;
    if (email && password && tokenFetched && id) {
      dispatch(csrfTokenActions._delete(id));
      dispatch(userActions.login(email, password));
      dispatch(modalActions.hideModal());
    }
  };

  // const { loggingIn } = this.props;
  return (
    <div className="form">
      <div className="form-toggle" />
      {!fetchingToken && tokenFetched && (
        <div className="form-panel one">
          <div className="form-header">
            <h1>Account Login</h1>
          </div>
          <div className="form-content">
            <form onSubmit={submitHandler}>
              <div
                className={
                  "form-group" +
                  (submitted && !enteredEmail ? " has-error" : "")
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
              <input
                type="hidden"
                className="form-control"
                name="csrfToken"
                value={token}
              />
              <div className="form-group">
                <button type="submit">Se connecter</button>
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
      )}
    </div>
  );
};

export default FormLogin;
