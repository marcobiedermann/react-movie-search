import React, { Component } from 'react';

import Movies from '../Movies';
import Search from '../Search';

const API_KEY = 'cfe422613b250f702980a3bbf9e90716';

function getPopularMovies() {
  return new Promise((resolve, reject) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then((data) => {
        resolve(data.results);
      })
      .catch(error => reject(error));
  });
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    getPopularMovies().then((movies) => {
      this.setState({
        movies,
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Search />
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
