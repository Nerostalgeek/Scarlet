import React, { useEffect, useState } from "react";
import "./ResetPassword.css";
import { useDispatch, useSelector } from "react-redux";
import { modalActions, userActions, csrfTokenActions } from "../../../actions";

const ResetPassword = props => {
  const dispatch = useDispatch();
  const user = null;
  const [enteredPassword, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const url = props.location.pathname.split("/");
  const resetToken = url[2];

  useEffect(() => {
    console.log("props -> ", props);

    dispatch(userActions.checkResetToken(resetToken));
    dispatch(csrfTokenActions.create(user));
  }, [dispatch]);

  const csrfToken = useSelector(state => state.csrfProtection);
  const responseResetToken = useSelector(state => state.resetPassword);

  const { token, fetchingToken, tokenFetched } = csrfToken;
  const { isChecked, email } = responseResetToken;

  const submitHandler = event => {
    event.preventDefault();

    setSubmitted(true);
    const user = email;
    const password = enteredPassword;
    const CSRFTokenObject = {
      token: token,
      user: null
    };
    if (user && password && tokenFetched && isChecked) {
      dispatch(userActions.updatePassword(user, password, CSRFTokenObject));
    }
  };

  return (
    <div className="form">
      <div className="form-toggle" />
      {!fetchingToken && tokenFetched && (
        <div className="form-panel one">
          <div className="form-header">
            <h1>Reset your Password</h1>
          </div>
          <div className="form-content">
            <form onSubmit={submitHandler}>
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
              <div className="form-group"></div>
              <div className="form-group">
                <button type="submit">Reset password</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
