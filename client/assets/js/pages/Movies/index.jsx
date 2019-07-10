import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviePage from '../Movie';

const MoviesPage = props => {
  const { match } = props;

  return (
    <Switch>
      <Route path={`${match.path}/:movieId`} component={MoviePage} />
      <Route
        path="/"
        render={() => (
          <div>
            <h1>Movies</h1>
          </div>
        )}
      />
    </Switch>
  );
};

MoviesPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
};

MoviesPage.defaultProps = {
  match: null,
};

export default MoviesPage;
