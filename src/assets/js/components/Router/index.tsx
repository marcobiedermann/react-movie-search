import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as routes from '../../constants/routes';
import ActorsPage from '../../pages/Actors';
import GenresPage from '../../pages/Genres';
import IndexPage from '../../pages/Index';
import MoviesPage from '../../pages/Movies';

const Router: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.ACTORS.path} component={ActorsPage} />
      <Route path={routes.GENRES.path} component={GenresPage} />
      <Route path={routes.MOVIES.path} component={MoviesPage} />
      <Route path={routes.INDEX.path} component={IndexPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
