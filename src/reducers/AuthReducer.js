import {
  FIRST_NAME_SIGNUP,
  LAST_NAME_SIGNUP,
  EMAIL_SIGNUP,
  PASSWORD_SIGNUP,
  SIGNUP_USER,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  FIRST_NAME_INVALID,
  LAST_NAME_INVALID
} from "../actions/Types";

// default state
const INITIAL_STATE = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  user: null,
  error: "",
  loading: false,
  isFirstNameValid: true,
  firstNameError: "",
  lastNameError: ""
};

/**
 * This is AuthReducer. If user types email, email state will be assigned to action.payload,
 * which is the email that user types in TextInputs. Then, email state will be updated and
 * components will re-render.
 *
 * If the reducer hit the default case, do not do anything with the state and return the current
 * state.
 */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIRST_NAME_SIGNUP:
      return { ...state, firstName: action.payload };
    case LAST_NAME_SIGNUP:
      return { ...state, lastName: action.payload };
    case EMAIL_SIGNUP:
      return { ...state, email: action.payload };
    case PASSWORD_SIGNUP:
      return { ...state, password: action.payload };
    case SIGNUP_USER:
      return { ...state, ...INITIAL_STATE, loading: true, error: "" };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        error: "Account already exists"
      };
    // case FIRST_NAME_INVALID:
    //   return {
    //     ...state,
    //     ...INITIAL_STATE,
    //     firstNameError: "First name is required"
    //   };
    // case LAST_NAME_INVALID:
    //   return {
    //     ...state,
    //     ...INITIAL_STATE,
    //     lastNameError: "Last name is required"
    //   };
    default:
      return state;
  }
};
