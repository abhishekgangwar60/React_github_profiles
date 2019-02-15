import React from "react";
import { connect } from "react-redux";

import { fetchUserProfile } from "./../../actions/UserProfile";

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.fetchUserProfile(this.props.selectedUser);
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui grid" style={{ marginTop: "3%" }}>
          <div className="six wide column">
            <img
              alt=""
              height={"50%"}
              src={this.props.userProfile.avatar_url}
            />
            <h3>{this.props.userProfile.login}</h3>
            <div>Followers : {this.props.userProfile.followers}</div>
            <div>type : {this.props.userProfile.type}</div>
            <div>Created On : {this.props.userProfile.created_at}</div>
            <div>Public Repos : {this.props.userProfile.public_repos}</div>
          </div>
          <div className="ten wide column" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    selectedUser: state.selectedUser.userName,
    userProfile: state.userProfile.profileData
  };
};

export default connect(
  mapStateToProps,
  { fetchUserProfile }
)(UserProfile);
