import React from "react";
import { Link } from "react-router-dom";

class User extends React.Component {
  render() {
    return (
      <div
        className="ui comments"
        style={{ borderTop: "1px solid lightgray", padding: "2% 2% 0" }}
      >
        <div className="comment">
          <Link to={`/users/${this.props.user.login}`} className="avatar">
            <img alt="" src={this.props.user.avatar_url} />
          </Link>
          <div className="content">
            <Link to={`/users/${this.props.user.login}`} className="author">
              {this.props.user.login}
            </Link>
            <div className="text">{this.props.user.type}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default User;
