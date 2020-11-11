import React, { FC } from 'react';
import Movie, { MovieProps } from '../Movie';
import './movies.css';

export interface MoviesProps {
  movies: MovieProps[];
}

const Movies: FC<MoviesProps> = (props) => {
  const { movies } = props;

  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id}>
          <Movie {...movie} />
        </li>
      ))}
    </ul>
  );
};

export default Movies;
