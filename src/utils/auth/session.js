// @flow

const TOKEN_PREFIX = 'i2x';

const STORAGE = {
  token: `${TOKEN_PREFIX}-token`,
};

function _getApiInstance(): Object {
  return require('src/api').default; // eslint-disable-line
}

function getData(name: string): any {
  return window.localStorage.getItem(STORAGE[name]);
}

function setData(name: string, value: ?string | ?Object = null): void {
  const data: mixed = (typeof value === 'object')
    ? JSON.stringify(value)
    : value;

  window.localStorage.setItem(STORAGE[name], data);
}

function removeData(name: string): void {
  window.localStorage.removeItem(STORAGE[name]);
}

function authenticate(data: { token: string }): void {
  const jwtToken = `JWT ${data.token}`;
  setData('token', jwtToken);

  const api: Object = _getApiInstance();

  api.defaults.headers.Authorization = jwtToken;
}

function expire(): void {
  removeData('token');

  const api: Object = _getApiInstance();

  api.defaults.headers.Authorization = null;
}

function isAuthenticated(): boolean {
  return !!getData('token');
}

export default {
  getData,
  setData,
  removeData,
  authenticate,
  isAuthenticated,
  expire,
};
