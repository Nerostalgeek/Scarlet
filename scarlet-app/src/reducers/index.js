import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { resetPassword } from "./resetPassword.reducer";
import { validateAccount } from "./accountValidation.reducer";
import { users } from "./users.reducer";
import { navBar } from "./navBar.reducer";
import { alert } from "./alert.reducer";
import { csrfProtection } from "./csrfToken.reducer";
import { displayModal, displayPage } from "./modal.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  displayModal,
  displayPage,
  navBar,
  csrfProtection,
  resetPassword,
  validateAccount
});

export default rootReducer;
