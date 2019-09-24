import { navBarConstants } from "../constants";
import { userService } from "../services";

export const navBarActions = {
  getUser
};

function getUser(id) {
  return dispatch => {
    dispatch(request());
    userService.getUser(id).then(
      user => dispatch(success(user)),
      error => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: navBarConstants.CHECK_LOGIN_REQUEST };
  }

  function success(user) {
    return { type: navBarConstants.CHECK_LOGIN_SUCCESS, user };
  }

  function failure(error) {
    return { type: navBarConstants.CHECK_LOGIN_FAILURE, error };
  }
}
