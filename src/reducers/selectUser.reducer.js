import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  userName: null
};
export const selectUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_USER: {
      return { ...state, userName: action.payload };
    }

    default:
      return state;
  }
};
