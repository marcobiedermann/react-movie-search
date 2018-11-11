import React, { Component } from 'react';
import { API_BASE, API_KEY } from '../../constants/themoviedb';
import Movies from '../Movies';
import Search from '../Search';
import './app.css';

function getPopularMovies() {
  return new Promise((resolve, reject) => {
    const url = `${API_BASE}/movie/popular?api_key=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then((data) => {
        resolve(data.results);
      })
      .catch(error => reject(error));
  });
}

function getMovies(query) {
  return new Promise((resolve, reject) => {
    const url = `${API_BASE}/search/movie?query=${query}&api_key=${API_KEY}`;

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
      query: '',
    };
  }

  componentDidMount() {
    getPopularMovies().then((movies) => {
      this.setState({
        movies,
      });
    });
  }

  onInput(event) {
    const query = event.target.value;

    this.setState({
      query,
    });

    getMovies(query).then((movies) => {
      this.setState(prevState => ({
        movies: movies || prevState.movies,
      }));
    });
  }

  render() {
    const { movies, query } = this.state;
    const isSearched = searchQuery => item => !searchQuery
      || item.title.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      <div className="app">
        <Search query={query} onInput={event => this.onInput(event)} />
        <Movies movies={movies.filter(isSearched(query))} />
      </div>
    );
  }
}

export default App;
