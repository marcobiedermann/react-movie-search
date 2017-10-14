import React from 'react';

import Movies from '../Movies';
import Search from '../Search';

const movies = [
  {
    id: 1,
    title: 'Movie Title',
  },
];

const App = () => (
  <div className="app">
    <Search />
    <Movies movies={movies} />
  </div>
);

export default App;
