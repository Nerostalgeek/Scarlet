import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions, csrfTokenActions } from "../../../actions";

const ValidateAccount = props => {
  const user = null;

  const dispatch = useDispatch();
  const accountValidator = useSelector(state => state.validateAccount);

  const csrfToken = useSelector(state => state.csrfProtection);
  const title =
    "Votre compte a bien été activé ! Vous pouvez désormais vous connecter afin de profiter de nos services !";
  const { token } = csrfToken;

  const url = props.location.pathname.split("/");
  const validationToken = url[2];

  const CSRFTokenObject = {
    token: token,
    user: user
  };

  useEffect(() => {
    dispatch(csrfTokenActions.create(user));
  }, [dispatch]);

  useEffect(() => {
    dispatch(userActions.validateAccount(validationToken, CSRFTokenObject));
  }, []);

  return (
    <div className="l-signup">
      <div className="signup-form signup-section">
        {accountValidator.validatedAccount && (
          <h1 id="register-title">{title}</h1>
        )}
      </div>
    </div>
  );
};

export default ValidateAccount;
