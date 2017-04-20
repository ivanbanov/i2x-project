// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'src/app';

const rootEl = document.querySelector('#root');

ReactDOM.render(<App />, rootEl);

/* eslint-disable */
if (module.hot) {
  module.hot.accept('src/app', () => {
    const NewApp = require('src/app').default;
    ReactDOM.render(<AppContainer><NewApp /></AppContainer>, rootEl);
  });
}
