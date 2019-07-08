import firebase from "firebase";

import {
  INPUT_UPDATE,
  START_AUTHENTICATE,
  AUTH_SUCCESS,
  AUTH_FAIL
} from "./Types";

export const inputUpdate = ({ prop, value }) => {
  return {
    type: INPUT_UPDATE,
    payload: { prop, value }
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
    dispatch({ type: START_AUTHENTICATE });

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => authSuccess(dispatch, user))
      .catch(() =>
        authFail(dispatch, {
          prop: "errorSignUp",
          value: "Email already exists"
        })
      );
  };
};

export const signUserIn = (email, password) => {
  return dispatch => {
    dispatch({ type: START_AUTHENTICATE });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => authSuccess(dispatch, user))
      .catch(() =>
        authFail(dispatch, {
          prop: "errorSignIn",
          value: "Wrong email or password. Try again"
        })
      );
  };
};

/**
 * When user sign up successfully, this private function will be called.
 *
 * @param {*} dispatch
 * @param {*} user user status
 */
const authSuccess = (dispatch, user) => {
  return dispatch({
    type: AUTH_SUCCESS,
    payload: user
  });
};

/**
 * When sign up process fails, this function will be called.
 *
 * @param {*} dispatch
 */
const authFail = (dispatch, { prop, value }) => {
  return dispatch({
    type: AUTH_FAIL,
    payload: { prop, value }
  });
};
