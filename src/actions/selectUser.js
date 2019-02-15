import * as actionTypes from "./actionTypes";

export const selectUser = payload => {
  return {
    type: actionTypes.SEARCH_USER,
    payload
  };
};
