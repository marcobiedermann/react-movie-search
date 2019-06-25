/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import './movie.css';

const Movie = (props) => {
  const { poster_path, title } = props;

  return (
    <div className="movie">
      <figure className="movie__poster">
        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt={title} />
      </figure>
      <div className="movie__body">
        <h2 className="movie__title">{title}</h2>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
};

Movie.defaultProps = {
  poster_path: '',
};

export default Movie;
