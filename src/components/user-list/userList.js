import React from "react";
import { connect } from "react-redux";

import { selectUser } from "./../../actions/selectUser";
import SearchBar from "./../search-bar/searchBar";
import User from "./../user/user";

class UserList extends React.Component {
  renderUserList = () => {
    return this.props.users.map(user => {
      return (
        <User
          key={user.id}
          user={user}
          onClick={this.props.selectUser(user.login)}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <SearchBar />
        <div className="ui relaxed divided list">{this.renderUserList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.userList.users };
};

export default connect(
  mapStateToProps,
  { selectUser }
)(UserList);
