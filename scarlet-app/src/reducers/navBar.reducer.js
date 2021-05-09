import { navBarConstants } from "../constants/";

export function navBar(state = {}, { type, user, error }) {
  switch (type) {
    case navBarConstants.GETUSER_REQUEST:
      return {
        loading: true
      };
    case navBarConstants.GETUSER_SUCCESS:
      return {
        user
      };
    case navBarConstants.GETUSER_FAILURE:
      return {
        error: error
      };

    default:
      return state;
  }
}
