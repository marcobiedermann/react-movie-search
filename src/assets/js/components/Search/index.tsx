import PropTypes from 'prop-types';
import React, { ChangeEvent, FC } from 'react';
import './search.css';

export interface SearchProps {
  query: string;
  onInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<SearchProps> = (props) => {
  const { query, onInput } = props;

  return (
    <form className="search">
      <input placeholder="Search for movie title …" type="search" value={query} onChange={onInput} />
    </form>
  );
};

Search.propTypes = {
  onInput: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Search;
