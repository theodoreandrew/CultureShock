import { USER_PROFILE_FETCH_SUCCESS } from "../actions/Types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_PROFILE_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
