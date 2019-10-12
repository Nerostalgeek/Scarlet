import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ForgotPassword = () => {
  const [enteredEmail, setEmail] = useState("");
  const [showError, setError] = useState(false);
  const [messageFromServer, setMessageFromServer] = useState("");

  const sendEmail = event => {
    event.preventDefault();
    if (enteredEmail === "") {
      setError(false);
      setMessageFromServer("");
    } else {
    }
  };
};
