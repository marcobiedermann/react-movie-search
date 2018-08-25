import React from 'react';
import PropTypes from 'prop-types';

import './search.css';

const Search = props => (
  <form className="search" onInput={event => props.onInput(event)}>
    <input
      placeholder="Search for movie title …"
      type="search"
      value={props.query}
    />
  </form>
);

Search.propTypes = {
  onInput: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Search;
