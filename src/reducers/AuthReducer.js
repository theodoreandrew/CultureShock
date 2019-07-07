import {
  INPUT_SIGNUP_UPDATE,
  START_AUTHENTICATE,
  AUTH_SUCCESS,
  AUTH_FAIL
} from "../actions/Types";

// default state
const INITIAL_STATE = {
  email: "",
  password: "",
  retypePassword: "",
  firstName: "",
  lastName: "",
  user: null,
  errorSignIn: "",
  errorSignUp: "",
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
    case INPUT_SIGNUP_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case START_AUTHENTICATE:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: true,
        errorSignIn: "",
        errorSignUp: ""
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      };
    case AUTH_FAIL:
      return {
        ...state,
        email: "",
        loading: false,
        [action.payload.prop]: [action.payload.value]
      };
    default:
      return state;
  }
};
