import { csrfTokenConstants } from "../constants";
import { csrfTokenService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers";

export const csrfTokenActions = {
  create,
  _delete
};

function create(user) {
  return dispatch => {
    dispatch(request());
    csrfTokenService.create(user).then(
      token => {
        dispatch(success(token));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: csrfTokenConstants.CREATE_REQUEST };
  }

  function success(token) {
    return { type: csrfTokenConstants.CREATE_SUCCESS, token };
  }

  function failure(error) {
    return { type: csrfTokenConstants.CREATE_FAILURE, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return async dispatch => {
    await dispatch(request(id));

    await csrfTokenService.delete(id).then(
      token => {
        dispatch(success(id));
      },
      error => {
        dispatch(failure(id, error));
      }
    );
  };

  function request(id) {
    return { type: csrfTokenConstants.DELETE_REQUEST, id };
  }

  function success(id) {
    return { type: csrfTokenConstants.DELETE_SUCCESS, id };
  }

  function failure(id, error) {
    return { type: csrfTokenConstants.DELETE_FAILURE, id, error };
  }
}
