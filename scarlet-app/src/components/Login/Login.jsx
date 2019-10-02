import React, { useEffect } from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";

import LoginButtons from "./LoginButtons/LoginButtons";
import FormLogin from "./FormLogin/FormLogin";
import FormRegister from "./FormRegister/FormRegister";

import { modalActions } from "../../actions/modal.actions";

import { userActions } from "../../actions";
import { history } from "../../helpers";

const Login = () => {
  return (
    <div className="l-signup">
      <div className="signup-form signup-section">
        <LoginButtons />
      </div>
      <div className="signup-image signup-section" />
    </div>
  );
};
export default Login;
