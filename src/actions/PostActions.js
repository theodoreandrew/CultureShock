import firebase from "firebase";

import { POST_ADD } from "./Types";
import { Actions } from "react-native-router-flux";

export const addPost = post => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/posts`)
      .push({ post })
      .then(() => {
        dispatch({ type: POST_ADD });
        Actions.pop();
      });
  };
};
