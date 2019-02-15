import React from "react";
import "./searchBar.styles.css";
import { searchUser } from "../../actions/searchUser";
import { connect } from "react-redux";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  onSearchSubmit = e => {
    e.preventDefault();
    this.props.searchUser(this.state.searchTerm);
  };

  onInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSearchSubmit}>
        <div className="ui search margin-top">
          <div className="ui left icon input large">
            <input
              type="text"
              placeholder="Find a Member..."
              onChange={this.onInputChange}
              value={this.state.searchTerm}
            />
            <i className="search icon" />
          </div>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { searchUser }
)(SearchBar);
