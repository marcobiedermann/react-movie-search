import React from 'react';

import Movies from '../Movies';

const movies = [
  {
    id: 1,
    title: 'Movie Title',
  },
];

const App = () => (
  <div className="app">
    <Movies movies={movies} />
  </div>
);

export default App;
