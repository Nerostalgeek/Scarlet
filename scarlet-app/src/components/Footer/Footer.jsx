import React from "react";
import "./Footer.css";

import phoneLogo from "../../img/icons/phone.png";
import mailLogo from "../../img/icons/mail.png";
import addressLogo from "../../img/icons/placeholder.png";

const Footer = props => {
  const links = props.links;

  const footerLinks = links.map(link => (
    <a
      className="footer-link"
      key={`footer-${link.name}`}
      href={link.url}
      id={link.customId}
    >
      {link.name}
    </a>
  ));

  return (
    <div className="l-footer">
      <div className="footer-main">
        <div className="footer-part-one footer-part">
          <h4>Notre histoire</h4>
          <div className="footer-part-one-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <div className="footer-part-two footer-part">
          <div className="footer-part-two-links">
            <h4>Liens rapides</h4>
            <ul>{footerLinks}</ul>
          </div>
        </div>
        <div className="footer-part-three footer-part">
          <div className="footer-part-three-contact">
            <h4>Contactez-nous !</h4>
            <div className="contact-item">
              <img src={mailLogo} alt="Email" />
              <p>sample@scarlet.fr</p>
            </div>
            <div className="contact-item">
              <img src={phoneLogo} alt="Email" />
              <p>01 02 03 04 05 06</p>
            </div>
            <div className="contact-item">
              <img src={addressLogo} alt="Email" />
              <p>12, Allée de l'example</p>
            </div>
          </div>
        </div>
        <div className="footer-part-four footer-part">
          <h4>Inscrivez vous à notre newsletter</h4>
          <input placeholder="Entrer votre E-Mail" type="text" />
          <button type="submit">Valider</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
