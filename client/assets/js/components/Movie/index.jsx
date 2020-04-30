/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import './movie.css';

const Movie = (props) => {
  const { id, poster_path, title } = props;

  return (
    <div className="movie">
      <figure className="movie__poster">
        <Link to={`${routes.MOVIES.path}/${id}`}>
          <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt={title} />
        </Link>
      </figure>
      <div className="movie__body">
        <h2 className="movie__title">
          <Link to={`${routes.MOVIES.path}/${id}`}>{title}</Link>
        </h2>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
};

Movie.defaultProps = {
  poster_path: '',
};

export default Movie;
