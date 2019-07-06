import firebase from "firebase";

import {
  FIRST_NAME_SIGNUP,
  LAST_NAME_SIGNUP,
  EMAIL_SIGNUP,
  PASSWORD_SIGNUP,
  RETYPE_PASSWORD_SIGNUP,
  SIGNUP_USER,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "./Types";

/**
 * This is action creator when user types his first name in TextInput.
 *
 * @param {String} firstName user's first name
 */
export const firstNameSignup = firstName => {
  return {
    type: FIRST_NAME_SIGNUP,
    payload: firstName
  };
};

/**
 * This is action creator when user types his last name in TextInput.
 *
 * @param {String} firstName user's last name
 */
export const lastNameSignup = lastName => {
  return {
    type: LAST_NAME_SIGNUP,
    payload: lastName
  };
};

/**
 * This is action creator when user types email in TextInput.
 *
 * @param {String} email user's email
 */
export const emailForSignUp = email => {
  return {
    type: EMAIL_SIGNUP,
    payload: email
  };
};

/**
 * This is action creator when user types his password in TextInput.
 *
 * @param {String} password user's password
 */
export const passwordForSignUp = password => {
  return {
    type: PASSWORD_SIGNUP,
    payload: password
  };
};

/**
 * This is action creator when user types his password in TextInput.
 *
 * @param {String} password user's password
 */
export const retypePasswordForSignUp = retypePassword => {
  return {
    type: RETYPE_PASSWORD_SIGNUP,
    payload: retypePassword
  };
};

/**
 * This is action creator to sign user up.
 *
 * @param {String} email user's email
 * @param {String} password user's password
 */
export const signUserUp = (email, password) => {
  return dispatch => {
    dispatch({ type: SIGNUP_USER });

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => signUpSuccess(dispatch, user))
      .catch(() => {
        signUpFail(dispatch);
      });
  };
};

/**
 * When user sign up successfully, this private function will be called.
 *
 * @param {*} dispatch
 * @param {*} user user status
 */
const signUpSuccess = (dispatch, user) => {
  return dispatch({
    type: SIGNUP_SUCCESS,
    payload: user
  });
};

/**
 * When sign up process fails, this function will be called.
 *
 * @param {*} dispatch
 */
const signUpFail = dispatch => {
  return dispatch({
    type: SIGNUP_FAIL
  });
};
