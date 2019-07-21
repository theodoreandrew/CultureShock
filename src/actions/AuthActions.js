import firebase from "firebase";

import {
  INPUT_UPDATE,
  START_AUTHENTICATE,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_NAV
} from "./Types";
import { Actions } from "react-native-router-flux";
// import console = require("console");

export const inputUpdate = ({ prop, value }) => {
  return {
    type: INPUT_UPDATE,
    payload: { prop, value }
  };
};

export const inputWhenNavigate = () => {
  return {
    type: AUTH_NAV
  };
};

/**
 * This is action creator to sign user up.
 *
 * @param {String} email user's email
 * @param {String} password user's password
 */
export const signUserUp = (firstName, lastName, email, password) => {
  return dispatch => {
    dispatch({ type: START_AUTHENTICATE });

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(handleAuthSuccess(user));
        registerName(firstName, lastName); // Change name according to user input
        Actions.main(); // Navigate to home feed page if sign up is successful
        Actions.welcomePage({ user, firstName, lastName });
      })
      .catch(() => {
        dispatch(
          handleAuthFail({
            prop: "errorSignUp",
            value: "Email already exists"
          })
        );
      });
  };
};

export const signUserIn = (email, password) => {
  return dispatch => {
    dispatch({ type: START_AUTHENTICATE });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(handleAuthSuccess(user));
        Actions.main(); // Navigate to home feed page if sign up is successful
        // authSuccess(dispatch, user);
      })
      .catch(() =>
        dispatch(
          handleAuthFail({
            prop: "errorSignIn",
            value: "Wrong email or password. Try again"
          })
        )
      );
  };
};

const registerName = (firstName, lastName) => {
  const currentUser = firebase.auth().currentUser;

  return currentUser.updateProfile({
    displayName: firstName + " " + lastName
  });
};

/**
 * When user sign up successfully, this private function will be called.
 *
 * @param {*} user user status
 */
const handleAuthSuccess = user => {
  // console.log(user);
  return {
    type: AUTH_SUCCESS,
    payload: user
  };
};

const authSuccess = (dispatch, user) => {
  dispatch({
    type: AUTH_SUCCESS,
    payload: user
  });

  Actions.main();
};

/**
 * When sign up process fails, this function will be called.
 *
 * @param {*} prop is the prop that we want to update
 * @param {*} value is the value that we want to update to prop
 *
 */
const handleAuthFail = ({ prop, value }) => {
  return {
    type: AUTH_FAIL,
    payload: { prop, value }
  };
};
