// @flow

import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
import queryString from "query-string";
import ShowCard from "./ShowCard";
import Header from "./Header";

class Search extends Component {
  state = {
    searchTerm: queryString.parse(this.props.query).term
  };
  props: {
    query: string,
    shows: Array<Show>
  };
  handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <Header showSearch searchTerm={this.state.searchTerm} handleSearchTermChange={this.handleSearchTermChange} />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
