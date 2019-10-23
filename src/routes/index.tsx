import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import About from '../features/about/About';
import TodosView from '../features/todos/components/TodosView';
import Login from '../features/auth/components/Login';
import PrivateRoute from './PrivateRoute';
import history from './history';

export const Routes = () => (
  <BrowserRouter>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/auth" component={Login} />
        <PrivateRoute path="/todos" component={TodosView} />
      </Switch>
    </ConnectedRouter>
  </BrowserRouter>
);

export default Routes;
