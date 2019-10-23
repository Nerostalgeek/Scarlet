import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions, csrfTokenActions } from "../../actions";

const InvalidatedAccount = () => {
  const loggedInUser = useSelector(state => state.users.user);
  const user = useSelector(state => state.authentication.user.id);
  const dispatch = useDispatch();
  const errorTitle =
    "Vous devez vérifier votre compte afin de pouvoir utiliser nos services.";
  const csrfToken = useSelector(state => state.csrfProtection);
  const { token, fetchingToken, tokenFetched } = csrfToken;

  const CSRFTokenObject = {
    token: token,
    user: user
  };

  useEffect(() => {
    dispatch(csrfTokenActions.create(user));
  }, [dispatch, user]);

  return (
    <div>
      <div className="l-signup">
        <div className="signup-form signup-section">
          <h1 id="register-title">{errorTitle}</h1>
          <h3>Vous n'avez pas reçu d'email ?</h3>
          <button
            type="button"
            onClick={() =>
              dispatch(
                userActions.resendValidationEmail(
                  loggedInUser.email,
                  CSRFTokenObject
                )
              )
            }
          >
            Renvoyer l'email de confirmation.
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvalidatedAccount;
