import { userConstants } from "../constants/";

export function resetPassword(state = {}, { type, email, error }) {
  switch (type) {
    case userConstants.RESET_PASSWORD_REQUEST:
      return {
        loading: true
      };
    case userConstants.RESET_PASSWORD_SUCCESS:
      return {
        resetPassword: true,
        email: email
      };
    case userConstants.RESET_PASSWORD_FAILURE:
      return {
        error: error
      };
    default:
      return state;
  }
}
