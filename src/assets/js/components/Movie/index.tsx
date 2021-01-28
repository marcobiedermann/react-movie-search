/* eslint-disable camelcase */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import './movie.css';

export interface MovieProps {
  id: number;
  poster_path: string | null;
  title: string;
}

const Movie: FC<MovieProps> = (props) => {
  const { id, poster_path, title } = props;

  return (
    <div className="movie">
      {poster_path && (
        <figure className="movie__poster">
          <Link to={`${routes.MOVIES.path}/${id}`}>
            <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt={title} />
          </Link>
        </figure>
      )}
      <div className="movie__body">
        <h2 className="movie__title">
          <Link to={`${routes.MOVIES.path}/${id}`}>{title}</Link>
        </h2>
      </div>
    </div>
  );
};

export default Movie;
