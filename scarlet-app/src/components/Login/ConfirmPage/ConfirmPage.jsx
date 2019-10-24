import React, { useState } from "react";
import EmailCard from "./EmailCard/EmailCard";
import "./ConfirmPage.css";
import googleLogo from "../../../img/assets/confirmPage/gmail-logo.png";
import outlookLogo from "../../../img/assets/confirmPage/outlook-logo.png";
import yahooLogo from "../../../img/assets/confirmPage/yahoo-logo.png";
import iCloudLogo from "../../../img/assets/confirmPage/icloud-logo.png";
import closeIcon from "../../../img/icons/close.png";

import { useSelector, useDispatch } from "react-redux";

import { modalActions } from "../../../actions/modal.actions";

const ConfirmPage = props => {
  const dispatch = useDispatch();

  let title;

  if (props.page === "confirmPageResetPassword") {
    title =
      "Un email contenant un lien de réinitialisation de mot de passe vous a été envoyé.";
  }
  if (props.page === "confirmPageRegister") {
    title = "Un email contenant un lien d'activation vous a été envoyé.";
  }

  return (
    <div className="l-signup">
      <div className="signup-form signup-section">
        <h1 id="register-title">{title}</h1>
        <div className="email-all-cards">
          <EmailCard
            title="Gmail"
            img={googleLogo}
            link="https://mail.google.com"
          />
          <EmailCard
            title="Outlook"
            img={outlookLogo}
            link="https://outlook.live.com"
          />
          <EmailCard
            title="Yahoo"
            img={yahooLogo}
            link="https://mail.yahoo.com"
          />
          <EmailCard
            title="Apple iCloud"
            img={iCloudLogo}
            link="https://icloud.com/mail"
          />
        </div>
      </div>
      <button
        className="form-close-button"
        type="button"
        onClick={() => dispatch(modalActions.hideModal())}
      >
        <img src={closeIcon} alt="" />
      </button>
    </div>
  );
};

export default ConfirmPage;
