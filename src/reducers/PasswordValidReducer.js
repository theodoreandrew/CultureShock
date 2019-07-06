import { PASSWORD_INVALID, PASSWORD_VALID } from "../actions/Types";

const INITIAL_STATE = { isPasswordValid: null, passwordError: "" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PASSWORD_INVALID:
      return {
        ...state,
        isPasswordValid: false,
        passwordError: "Password is required"
      };
    case PASSWORD_VALID:
      return {
        ...state,
        ...INITIAL_STATE,
        isPasswordValid: true
      };
    default:
      return state;
  }
};
