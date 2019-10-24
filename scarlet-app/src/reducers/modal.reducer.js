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

export function displayPage(state = {}, { type, pageValue }) {
  switch (type) {
    case modalConstants.DISPLAY_LOGIN_FORM:
      return {
        pageValue
      };
    case modalConstants.DISPLAY_REGISTER_FORM:
      return {
        pageValue
      };
    case modalConstants.DISPLAY_CONFIRM_PAGE_FORGOT_PASSWORD:
      return {
        pageValue
      };
    case modalConstants.DISPLAY_CONFIRM_PAGE_REGISTER:
      return {
        pageValue
      };
    case modalConstants.DISPLAY_FORGOT_PASSWORD_FORM:
      return {
        pageValue
      };
    case modalConstants.CLOSE_FORM:
      return {
        pageValue
      };
    default:
      return state;
  }
}
