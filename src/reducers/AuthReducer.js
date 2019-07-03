import {
  EMAIL_SIGNUP,
  PASSWORD_SIGNUP,
  SIGNUP_USER,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "../actions/Types";

// default state
const INITIAL_STATE = {
  email: "",
  password: "",
  user: null,
  error: "",
  loading: false
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
        user: action.payload,
        loading: false
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        error: "Account already exists",
        loading: false
      };
    default:
      return state;
  }
};
