import React, { FC } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MoviePage from '../Movie';

const MoviesPage: FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/:movieId`} component={MoviePage} />
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

export default MoviesPage;
