// @flow

import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
  connectRouter,
  routerMiddleware,
} from 'connected-react-router';
import { history } from 'src/router';
import rootReducer from 'src/reducers';
import session from 'src/utils/auth/session';

const appReducer: Function = (state, action) => {
  let newState = state;

  if (action.type === 'LOGOUT') {
    newState = undefined;
  }

  return rootReducer(newState, action);
};

const enhancer: Function = compose(
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history)
  ),
  window.devToolsExtension ? window.devToolsExtension() : fn => fn
);

const state: Object = {
  authReducer: {
    user: JSON.parse(session.getData('user')) || {},
  },
};

export default function store(initialState: Object = {}): Object {
  const storeObj = createStore(
    connectRouter(history)(appReducer),
    {
      ...initialState,
      ...state,
    },
    enhancer,
  );

  /* eslint-disable */
  if (module.hot) {
    module.hot.accept('src/reducers', () => storeObj.replaceReducer(require('src/reducers').default));
  }
  /* eslint-enable */

  return storeObj;
}
