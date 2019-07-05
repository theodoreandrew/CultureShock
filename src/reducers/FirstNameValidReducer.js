import { FIRST_NAME_INVALID, FIRST_NAME_VALID } from "../actions/Types";

const INITIAL_STATE = { isFirstNameValid: null, firstNameError: "" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIRST_NAME_INVALID:
      return {
        ...state,
        isFirstNameValid: false,
        firstNameError: "First Name is required"
      };
    case FIRST_NAME_VALID:
      return {
        ...state,
        ...INITIAL_STATE,
        isFirstNameValid: true
      };
    default:
      return state;
  }
};
