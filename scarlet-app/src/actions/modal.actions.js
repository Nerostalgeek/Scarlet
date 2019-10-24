import { modalConstants } from "../constants";

export const modalActions = {
  showModal,
  hideModal,
  displayLoginForm,
  displayRegisterForm,
  displayForgotPasswordForm,
  displayConfirmPagePassword,
  displayConfirmPageRegister
};

function showModal() {
  return {
    type: modalConstants.SHOW_MODAL,
    open: true
  };
}

function hideModal() {
  return {
    type: modalConstants.HIDE_MODAL,
    open: false
  };
}

function displayLoginForm() {
  return {
    type: modalConstants.DISPLAY_LOGIN_FORM,
    pageValue: "login"
  };
}

function displayRegisterForm() {
  return {
    type: modalConstants.DISPLAY_REGISTER_FORM,
    pageValue: "register"
  };
}

function displayForgotPasswordForm() {
  return {
    type: modalConstants.DISPLAY_FORGOT_PASSWORD_FORM,
    pageValue: "forgotPassword"
  };
}

function displayConfirmPagePassword() {
  return {
    type: modalConstants.DISPLAY_CONFIRM_PAGE_FORGOT_PASSWORD,
    pageValue: "confirmPageResetPassword"
  };
}

function displayConfirmPageRegister() {
  return {
    type: modalConstants.DISPLAY_CONFIRM_PAGE_REGISTER,
    pageValue: "confirmPageRegister"
  };
}
