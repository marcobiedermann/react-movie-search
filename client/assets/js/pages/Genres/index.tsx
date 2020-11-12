import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

interface Genre {
  id: number;
  name: string;
}

interface GenresPageData {
  genres: Genre[];
}

const GenresPage: FC = () => {
  const { data, error } = useSWR<GenresPageData>('/genre/movie/list');

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading …</div>;
  }

  const { genres } = data;

  return (
    <div>
      <h1>Genres</h1>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenresPage;
