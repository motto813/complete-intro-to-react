// @flow

import React, { Component } from "react";
import { createBrowserHistory } from "history";
import queryString from "query-string";
import ShowCard from "./ShowCard";
import Header from "./Header";

const history = createBrowserHistory();

class Search extends Component {
  state = {
    searchTerm: queryString.parse(this.props.query).term
  };
  props: {
    query: string,
    shows: Array<Show>
  };
  handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    const term = event.target.value;
    this.setState({ searchTerm: term });
    history.replace({
      pathname: "/search",
      search: `?term=${term}`
    });
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
