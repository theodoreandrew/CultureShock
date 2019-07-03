import { EMAIL_SIGNUP, PASSWORD_SIGNUP } from "./Types";

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
