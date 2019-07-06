import { EMAIL_INVALID, EMAIL_VALID } from "../actions/Types";

const INITIAL_STATE = { isEmailValid: null, emailError: "" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_INVALID:
      return {
        ...state,
        isEmailValid: false,
        emailError: "Email is required"
      };
    case EMAIL_VALID:
      return {
        ...state,
        ...INITIAL_STATE,
        isEmailValid: true
      };
    default:
      return state;
  }
};
