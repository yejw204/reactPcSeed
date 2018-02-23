/**
 * @file routes.js
 * @author maoquan(maoquan@htsc.com)
 */

import React from 'react';
import {
  Router,
  Switch,
  Route,
} from 'dva/router';

import Main from './layouts/Main';

const routes = ({ history }) => (// eslint-disable-line
  <Router history={history}>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </Router>
);

export default routes;
