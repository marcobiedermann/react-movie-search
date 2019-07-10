import React from 'react';
import PropTypes from 'prop-types';

import Movie from '../Movie';
import './movies.css';

const Movies = props => {
  const { movies } = props;

  return (
    <ul className="movies">
      {movies.map(movie => (
        <li key={movie.id}>
          <Movie {...movie} />
        </li>
      ))}
    </ul>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Movies;
