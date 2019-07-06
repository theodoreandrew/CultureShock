import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer";
import FirstNameValidReducer from "./FirstNameValidReducer";
import LastNameValidReducer from "./LastNameValidReducer";
import EmailValidReducer from "./EmailValidReducer";
import PasswordValidReducer from "./PasswordValidReducer";

/**
 * This function combines all reducers in one object that later will be App level state.
 */
export default combineReducers({
  auth: AuthReducer,
  firstNameValidation: FirstNameValidReducer,
  lastNameValidation: LastNameValidReducer,
  emailValidation: EmailValidReducer,
  passwordValidation: PasswordValidReducer
});
