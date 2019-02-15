import * as actionType from "./actionTypes";
import { fetchProfile } from "../services/fetchProfile";

/**
 * Action for fetch user profile Init
 * @param {*} payload
 */
const fetchUserProfileInit = () => {
  return {
    type: actionType.FETCH_USER_PROFILE
  };
};

/**
 * Action for fetch user profile success
 * @param {*} payload
 */
const fetchUserProfileSuccess = payload => {
  return {
    type: actionType.FETCH_USER_PROFILE_SUCCESS,
    payload
  };
};

/**
 * Action For fetch user profile failure
 * @param {*} payload
 */
const fetchUserProfileFailure = payload => {
  return {
    type: actionType.FETCH_USER_PROFILE_FAILURE,
    payload
  };
};

/**
 * Action For Fetching User
 * @param {*} payload
 */
export const fetchUserProfile = payload => {
  return async dispatch => {
    dispatch(fetchUserProfileInit());
    fetchProfile(payload)
      .then(res => {
        dispatch(fetchUserProfileSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchUserProfileFailure(err));
      });
  };
};
