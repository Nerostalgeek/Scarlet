import { carConstants } from "../constants";
import { carService } from "../services";
import { alertActions } from "./";

export const carActions = {
  register
};

function register(car, CSRFTokenObject) {
  console.log(CSRFTokenObject);
  return dispatch => {
    carService.register(car, CSRFTokenObject).then(
      car => {
        dispatch(success(car));
        dispatch(alertActions.success("New car successfully added"));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
}

function success(user) {
  return { type: carConstants.REGISTER_SUCCESS, user };
}

function failure(error) {
  return { type: carConstants.REGISTER_FAILURE, error };
}
