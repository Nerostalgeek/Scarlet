import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions, userActions, csrfTokenActions } from "../../../actions";

import closeIcon from "../../../img/icons/close.png";

const ForgotPassword = () => {
  const [enteredEmail, setEmail] = useState("");
  const [showError, setError] = useState(false);

  const dispatch = useDispatch();
  const user = null;

  useEffect(() => {
    dispatch(csrfTokenActions.create(user));
  }, [dispatch]);

  const [submitted, setSubmitted] = useState(false);

  const csrfToken = useSelector(state => state.csrfProtection);

  const { token, fetchingToken, tokenFetched } = csrfToken;

  const sendEmail = event => {
    event.preventDefault();

    setSubmitted(true);
    const email = enteredEmail;
    const CSRFTokenObject = {
      token: token,
      user: null
    };
    if (email && tokenFetched) {
      dispatch(userActions.resetPassword(email, CSRFTokenObject));
      dispatch(modalActions.displayConfirmPagePassword());
    }
  };

  // const { loggingIn } = this.props;
  return (
    <div className="form">
      <div className="form-toggle" />
      {!fetchingToken && tokenFetched && (
        <div className="form-panel one">
          <div className="form-header">
            <h1>Forgot Password</h1>
          </div>
          <div className="form-content">
            <form onSubmit={sendEmail}>
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
              <div className="form-group">
                <button type="submit">Reset Password</button>
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
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
