import React from "react";
import "./EmailCard.css";

const EmailCard = props => {
  const { title, img, link } = props;
  return (
    <div className="email-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img alt="email-services" src={img}></img>
      </a>

      <h3>{title}</h3>
    </div>
  );
};

export default EmailCard;
