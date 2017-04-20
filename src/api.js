// @flow

import axios from 'axios';
import session from 'src/utils/auth/session';

const api = axios.create({
  baseURL: 'https://i2x-challenge.herokuapp.com/',
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    Authorization: session.getData('token'),
  },
});

export default api;
