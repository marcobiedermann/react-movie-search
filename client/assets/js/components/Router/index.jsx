import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as routes from '../../constants/routes';
import IndexPage from '../../pages/Index';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.INDEX} component={IndexPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
