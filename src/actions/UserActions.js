import firebase from "firebase";

import { USER_PROFILE_FETCH_SUCCESS, USER_DESCRIPTION_ADDED } from "./Types";
import { Actions } from "react-native-router-flux";

export const fetchUserProfile = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}`)
      .on("value", snapshot => {
        console.log(snapshot.val());
        dispatch({ type: USER_PROFILE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const addDescription = description => {
  const { currentUser } = firebase.auth();
  console.log(currentUser.uid);
  console.log(description);

  return dispatch => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}`)
      .set({
        fullName: currentUser.displayName,
        description: description
      })
      .then(() => {
        dispatch({ type: USER_DESCRIPTION_ADDED });
        Actions.main();
      });
  };
};
