// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  state = {
    searchTerm: ""
  };
  handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: event.target.value });
  };
  // handleSearchTermChange = handleSearchTermChange.bind(this);
  render() {
    return (
      <div className="landing">
        <h1>Saul&#39;s Video</h1>
        <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type="text" placeholder="Search" />
        <Link
          to={{
            pathname: "/search",
            search: `?term=${this.state.searchTerm}`
          }}
        >
          Search
        </Link>
        <Link
          to={{
            pathname: "/search",
            search: "?term="
          }}
        >
          or browse all
        </Link>
      </div>
    );
  }
}

export default Landing;
