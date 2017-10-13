// @flow

import React, { Component } from "react";
import { createBrowserHistory } from "history";
import queryString from "query-string";
import ShowCard from "./ShowCard";
import Header from "./Header";

const history = createBrowserHistory();

const queryKey = "?term=";

const replaceHistory = (term: string) => {
  history.replace({
    pathname: "/search",
    search: `${queryKey}${term}`
  });
};

class Search extends Component {
  constructor(props: { query: string, shows: Array<Show> }) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.setSearchTermFromQuery();
  }

  state: {
    searchTerm: string
  };

  setSearchTermFromQuery = () => {
    if (this.props.query.indexOf(queryKey) > -1) {
      this.state.searchTerm = queryString.parse(this.props.query).term;
    }
  };

  handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    const term = event.target.value;
    this.setState({ searchTerm: term });
    replaceHistory(term);
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
