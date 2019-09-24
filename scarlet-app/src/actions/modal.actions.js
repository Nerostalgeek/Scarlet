import { modalConstants } from "../constants";

export const modalActions = {
  showModal,
  hideModal,
  displayLoginForm,
  displayRegisterForm
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
    formValue: "login"
  };
}

function displayRegisterForm() {
  return {
    type: modalConstants.DISPLAY_REGISTER_FORM,
    formValue: "register"
  };
}
