import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  loading: false,
  profileData: [],
  error: null
};

export const fetchUSerProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_PROFILE: {
      return {
        ...state,
        loading: true
      };
    }

    case actionTypes.FETCH_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        loading: false,
        profileData: action.payload
      };
    }

    case actionTypes.FETCH_USER_PROFILE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }

    default:
      return state;
  }
};
