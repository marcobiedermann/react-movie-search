import React from 'react';
import PropTypes from 'prop-types';

import './movie.css';

const Movie = props => (
  <div className="movie">
    <figure className="movie__poster">
      <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`} alt={props.title} />
    </figure>
    <div className="movie__body">
      <h2 className="movie__title">{props.title}</h2>
    </div>
  </div>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
};

Movie.defaultProps = {
  poster_path: '',
};

export default Movie;
