import * as actionType from "./actionTypes";
import { fetchUsers } from "../services/fetchUsers";

/**
 * Action for search user Init
 * @param {*} payload
 */
const searchUserInit = () => {
  return {
    type: actionType.SEARCH_USER
  };
};

/**
 * Action for search user success
 * @param {*} payload
 */
const searchUserSuccess = payload => {
  return {
    type: actionType.SEARCH_USER_SUCCESS,
    payload
  };
};

/**
 * Action For search user failure
 * @param {*} payload
 */
const searchUserFailure = payload => {
  return {
    type: actionType.SEARCH_USER_FAILURE,
    payload
  };
};

/**
 * Action For Fetching User
 * @param {*} payload
 */
export const searchUser = payload => {
  return async dispatch => {
    dispatch(searchUserInit());
    fetchUsers(payload)
      .then(res => {
        dispatch(searchUserSuccess(res.data.items));
      })
      .catch(err => {
        dispatch(searchUserFailure(err));
      });
  };
};
