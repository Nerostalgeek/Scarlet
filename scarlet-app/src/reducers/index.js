import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { navBar } from "./navBar.reducer";
import { alert } from "./alert.reducer";
import { csrfProtection } from "./csrfToken.reducer";
import { displayModal, displayForm } from "./modal.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  displayModal,
  displayForm,
  navBar,
  csrfProtection
});

export default rootReducer;
