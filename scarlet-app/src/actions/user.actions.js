import { userConstants } from "../constants";
import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers";

export const userActions = {
  login,
  logout,
  register,
  getAll,
  getUser,
  delete: _delete,
  resetPassword
};

function login(email, password, CSRFTokenObject) {
  return dispatch => {
    dispatch(request({ email }));
    userService.login(email, password, CSRFTokenObject).then(
      user => {
        dispatch(success(user));
        history.push("/dashboard");
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }

  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }

  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  history.push("/");
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    userService.register(user).then(
      user => {
        dispatch(success(user));
        history.push("/");
        dispatch(alertActions.success("Registration successful"));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }

  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }

  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

function getAll() {
  return dispatch => {
    dispatch(request());

    userService
      .getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error))
      );
  };

  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }

  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }

  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
}

function getUser(id) {
  return dispatch => {
    dispatch(request());
    userService.getUser(id).then(
      user => dispatch(success(user)),
      error => {
        dispatch(failure(error));
        logout();
        history.push("/");
      }
    );
  };

  function request() {
    return { type: userConstants.GETUSER_REQUEST };
  }

  function success(user) {
    return { type: userConstants.GETUSER_SUCCESS, user };
  }

  function failure(error) {
    return { type: userConstants.GETUSER_FAILURE, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    userService.delete(id).then(
      user => {
        dispatch(success(id));
      },
      error => {
        dispatch(failure(id, error));
      }
    );
  };

  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id };
  }

  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id };
  }

  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error };
  }
}

function resetPassword(email, CSRFTokenObject) {
  return dispatch => {
    dispatch(request({ email }));
    userService.resetPassword(email, CSRFTokenObject).then(
      user => dispatch(success(user)),
      error => {
        dispatch(failure(error));
      }
    );
  };

  function request(email) {
    return { type: userConstants.RESET_PASSWORD_REQUEST, email };
  }

  function success(email) {
    return { type: userConstants.RESET_PASSWORD_SUCCESS, email };
  }

  function failure(error) {
    return { type: userConstants.RESET_PASSWORD_FAILURE, error };
  }
}
