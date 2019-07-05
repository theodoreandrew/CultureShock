import firebase from "firebase";

import {
  FIRST_NAME_SIGNUP,
  LAST_NAME_SIGNUP,
  EMAIL_SIGNUP,
  PASSWORD_SIGNUP,
  SIGNUP_USER,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  FIRST_NAME_INVALID,
  FIRST_NAME_VALID,
  LAST_NAME_INVALID,
  LAST_NAME_VALID
} from "./Types";

export const firstNameSignup = firstName => {
  return {
    type: FIRST_NAME_SIGNUP,
    payload: firstName
  };
};

export const lastNameSignup = lastName => {
  return {
    type: LAST_NAME_SIGNUP,
    payload: lastName
  };
};

/**
 * This is action creator when user types email in TextInput.
 *
 * @param {String} email the email that user types.
 */
export const emailForSignUp = email => {
  return {
    type: EMAIL_SIGNUP,
    payload: email
  };
};

export const passwordForSignUp = password => {
  return {
    type: PASSWORD_SIGNUP,
    payload: password
  };
};

export const checkFirstName = firstName => {
  if (firstName === "") {
    return {
      type: FIRST_NAME_INVALID,
      payload: false
    };
  }

  return {
    type: FIRST_NAME_VALID
  };

  // return dispatch => dispatch(signUserUp(email, password));
};

export const checkLastName = lastName => {
  if (lastName === "") {
    return {
      type: LAST_NAME_INVALID,
      payload: false
    };
  }

  return {
    type: LAST_NAME_VALID
  };
};

const signUserUp = (email, password) => {
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

const signUpSuccess = (dispatch, user) => {
  return dispatch({
    type: SIGNUP_SUCCESS,
    payload: user
  });
};

const signUpFail = dispatch => {
  return dispatch({
    type: SIGNUP_FAIL
  });
};
