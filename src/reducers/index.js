import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer";

/**
 * This function combines all reducers in one object that later will be App level state.
 */
export default combineReducers({
  auth: AuthReducer
});
