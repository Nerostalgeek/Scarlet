import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { modalActions } from "../../../actions/modal.actions";

const ConfirmPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(state => state.displayPage.pageValue);

  let title;

  page === "confirmPageResetPassword"
    ? (title =
        "Un email contenant un lien de réinitialisation de mot de passe vous a été envoyé.")
    : (title = "Un email contenant un lien d'activation vous a été envoyé.");

  return (
    <div className="l-signup">
      <div className="signup-form signup-section">
        <h1 id="register-title">{title}</h1>
      </div>
      <div className="signup-image signup-section" />
    </div>
  );
};

export default ConfirmPage;
