import { csrfTokenConstants } from "../constants/";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export function csrfProtection(state = initialState, { type, token }) {
  switch (type) {
    case csrfTokenConstants.CREATE_REQUEST:
      return {
        fetchingToken: true,
      };
    case csrfTokenConstants.CREATE_SUCCESS:
      return {
        tokenFetched: true,
        id: token.CSRFToken._id,
        token: token.CSRFToken.token,
        user: user ? user : null
      };
    case csrfTokenConstants.CREATE_FAILURE:
      return {};

    case csrfTokenConstants.DELETE_REQUEST:
      return {
        deletingToken: true
      };
    case csrfTokenConstants.DELETE_SUCCESS:
      return {
        tokenDeleted: true
      };
    case csrfTokenConstants.DELETE_FAILURE:
      return {};
    default:
      return state;
  }
}
