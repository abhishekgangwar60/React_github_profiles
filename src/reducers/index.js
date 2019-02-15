import { combineReducers } from "redux";
import { searchUserReducer } from "./searchUser.reducer";
import { selectUserReducer } from "./selectUser.reducer";
import { fetchUSerProfileReducer } from "./userProfile.reducer";

const reducer = combineReducers({
  userList: searchUserReducer,
  selectedUser: selectUserReducer,
  userProfile: fetchUSerProfileReducer
});

export default reducer;
