// @flow

import React from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import RestrictRoute from 'src/utils/auth/restrict-route';
import session from 'src/utils/auth/session';
import { createBrowserHistory } from 'history';

// Screens
import LoginScreen from 'src/screens/login';
import RecordsScreen from 'src/screens/records';
import NotFoundScreen from 'src/screens/not-found';

export const history = createBrowserHistory();

class AppRouter extends React.Component {
  static displayName = 'AppRouter';

  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Redirect exact path="/" to="/login" />
          <Route path="/login" render={() => (
            session.isAuthenticated()
              ? <Redirect to="/records" />
              : <LoginScreen history={history} />
          )} />
          {<RestrictRoute path="/records" component={RecordsScreen} />}
          <Route component={NotFoundScreen}/>
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default AppRouter;
