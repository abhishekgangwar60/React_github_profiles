import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  loading: false,
  users: [],
  error: null
};

export const searchUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_USER: {
      return {
        ...state,
        loading: true
      };
    }

    case actionTypes.SEARCH_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    }

    case actionTypes.SEARCH_USER_FAILURE: {
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
