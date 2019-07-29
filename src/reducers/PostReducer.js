import { POST_ADD } from "../actions/Types";

const INITIAL_STATE = { post: "" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_ADD:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
