import React, { Component } from 'react';
import { API_BASE, API_KEY } from '../../constants/themoviedb';
import Movies from '../Movies';
import Search from '../Search';
import './app.css';

async function getPopularMovies() {
  try {
    const url = `${API_BASE}/movie/popular?api_key=${API_KEY}`;

    const response = await fetch(url);
    const result = await response.json();

    return result.results;
  } catch (error) {
    throw new Error(error);
  }
}

async function getMovies(query) {
  try {
    const url = `${API_BASE}/search/movie?query=${query}&api_key=${API_KEY}`;

    const response = await fetch(url);
    const result = await response.json();

    return result.results;
  } catch (error) {
    throw new Error(error);
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      query: '',
    };
  }

  async componentDidMount() {
    try {
      const movies = await getPopularMovies();

      this.setState({
        movies,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async onInput(event) {
    const query = event.target.value;

    this.setState({
      query,
    });

    try {
      const movies = await getMovies(query);

      this.setState(prevState => ({
        movies: movies || prevState.movies,
      }));
    } catch (error) {
      throw new Error(error);
    }
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
