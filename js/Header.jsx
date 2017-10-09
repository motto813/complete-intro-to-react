// @flow

import React from "react";
import { Link } from "react-router-dom";

const Header = (props: { showSearch?: boolean, searchTerm?: string, handleSearchTermChange?: Function }) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input onChange={props.handleSearchTermChange} value={props.searchTerm} type="text" placeholder="search" />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">Saul&#39;s Video</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false,
  searchTerm: "",
  handleSearchTermChange: function noop() {}
};

export default Header;
