import React, { ChangeEvent, Component } from 'react';
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

async function getMovies(query: string) {
  try {
    const url = `${API_BASE}/search/movie?query=${query}&api_key=${API_KEY}`;

    const response = await fetch(url);
    const result = await response.json();

    return result.results;
  } catch (error) {
    throw new Error(error);
  }
}

interface Movie {
  id: string;
  poster_path: string;
  title: string;
}

export interface AppProps {}

export interface AppState {
  movies: Movie[];
  query: string;
}

class App extends Component<AppProps, AppState> {
  state: AppState = {
    movies: [],
    query: '',
  };

  async componentDidMount() {
    const movies = await getPopularMovies();

    this.setState({
      movies,
    });
  }

  async onInput(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;

    this.setState({
      query,
    });

    const movies = await getMovies(query);

    this.setState((prevState) => ({
      movies: movies || prevState.movies,
    }));
  }

  render() {
    const { movies, query } = this.state;
    const isSearched = (searchQuery: string) => (item: Movie) =>
      !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      <div className="app">
        <Search query={query} onInput={(event) => this.onInput(event)} />
        <Movies movies={movies.filter(isSearched(query))} />
      </div>
    );
  }
}

export default App;
