import { userConstants } from "../constants/";

export function resetPassword(
  state = {},
  { type, email, user, resetToken, error }
) {
  switch (type) {
    case userConstants.RESET_PASSWORD_REQUEST:
      return {
        loading: true,
        email: email
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

    case userConstants.CHECK_RESET_TOKEN_REQUEST:
      return {
        loading: true,
        resetToken: resetToken
      };
    case userConstants.CHECK_RESET_TOKEN_SUCCESS:
      return {
        isChecked: true,
        email: user.email,
        message: user.message
      };
    case userConstants.CHECK_RESET_TOKEN_FAILURE:
      return {
        error: error
      };

    case userConstants.UPDATE_PASSWORD_REQUEST:
      return {
        loading: true,
        email: email
      };
    case userConstants.UPDATE_PASSWORD_SUCCESS:
      return {
        updatePassword: true,
        email: email
      };
    case userConstants.UPDATE_PASSWORD_FAILURE:
      return {
        error: error
      };
    default:
      return state;
  }
}
