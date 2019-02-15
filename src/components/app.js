import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import UserList from "./user-list/userList";
import UserProfile from "./user-profile/userProfile";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <div style={{ marginTop: "10px" }}> Github React App </div>
            <Route path="/" exact component={UserList} />
            <Route path="/users/" component={UserProfile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
