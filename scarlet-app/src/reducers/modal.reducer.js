import { modalConstants } from "../constants";

export function displayModal(state = {}, { type, open }) {
  switch (type) {
    case modalConstants.SHOW_MODAL:
      return {
        open
      };
    case modalConstants.HIDE_MODAL:
      return {
        open
      };
    default:
      return state;
  }
}

export function displayForm(state = {}, { type, formValue }) {
  switch (type) {
    case modalConstants.DISPLAY_LOGIN_FORM:
      return {
        formValue
      };
    case modalConstants.DISPLAY_REGISTER_FORM:
      return {
        formValue
      };
    default:
      return state;
  }
}
