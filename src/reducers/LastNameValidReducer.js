import { LAST_NAME_VALID, LAST_NAME_INVALID } from "../actions/Types";

const INITIAL_STATE = { isLastNameValid: null, lastNameError: "" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LAST_NAME_INVALID:
      return {
        ...state,
        isLastNameValid: false,
        lastNameError: "Last name is required"
      };
    case LAST_NAME_VALID:
      return { ...state, ...INITIAL_STATE, isLastNameValid: true };
    default:
      return state;
  }
};
