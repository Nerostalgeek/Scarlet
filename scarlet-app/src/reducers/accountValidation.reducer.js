import { userConstants } from "../constants/";

export function validatedAccount(
  state = {},
  { type, user, validationToken, error }
) {
  switch (type) {
    case userConstants.VALIDATE_ACCOUNT_REQUEST:
      return {
        validating: true,
        validationToken: validationToken
      };
    case userConstants.VALIDATE_ACCOUNT_SUCCESS:
      return {
        validatedAccount: true,
        email: user.email,
        message: user.message
      };
    case userConstants.VALIDATE_ACCOUNT_FAILURE:
      return {
        error: error
      };
    default:
      return state;
  }
}
