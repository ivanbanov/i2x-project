const PATHS = require('./paths').PATHS;
const PUBLIC_PATH = require('./paths').PUBLIC_PATH;

const imageLoader = require('./loaders/image');
const scriptLoader = require('./loaders/script');
const styleLoader = require('./loaders/style');

module.exports = {
  devtool: 'source-map',

  output: {
    path: PATHS.dist,
    publicPath: PUBLIC_PATH,
    filename: '[name].js',
  },

  resolve: {
    alias: {
      src: PATHS.src,
    },
    modules: [
      `${PATHS.src}/ui`,
      `${PATHS.root}/node_modules`,
    ],
  },

  module: {
    rules: [
      imageLoader,
      scriptLoader,
      styleLoader,
    ],
  },
};
