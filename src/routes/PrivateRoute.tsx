import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import contextServices from '../services';

type Props = {
  path: string;
  component: React.FC<any>;
};

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        contextServices.authApi.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/auth', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
