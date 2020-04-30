import React from 'react';
import PropTypes from 'prop-types';

import './search.css';

const Search = (props) => {
  const { query, onInput } = props;

  return (
    <form className="search" onInput={(event) => onInput(event)}>
      <input placeholder="Search for movie title …" type="search" value={query} />
    </form>
  );
};

Search.propTypes = {
  onInput: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Search;
