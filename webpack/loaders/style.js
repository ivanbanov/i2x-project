const ENV = process.env.NODE_ENV;
const PATHS = require('../paths').PATHS;

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const isProduction = (ENV === 'production');

const loaders = {
  styleLoader: {
    loader: 'style-loader',
  },
  cssLoader: {
    loader: 'css-loader',
    options: {
      sourceMap: true,
      modules: true,
      localIdentName: '[local]__[hash:base64:3]',
      minimize: isProduction,
    },
  },
  postcssLoader: {
    loader: 'postcss-loader',
    options: {
      plugins: [autoprefixer],
    },
  },
  stylusLoader: {
    loader: 'stylus-loader',
    options: {
      'include css': true,
      preferPathResolver: 'webpack',
      import: ['~styles/setup'],
      paths: [
        `${PATHS.src}/ui`,
        `${PATHS.src}/screens`,
      ],
    },
  },
};

const defaultLoaders = [
  loaders.cssLoader,
  loaders.postcssLoader,
  loaders.stylusLoader,
];

module.exports = {
  test: /\.(css|styl)$/,
  use: (
    isProduction
    ? ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: defaultLoaders,
    })
    : [
      loaders.styleLoader,
      ...defaultLoaders,
    ]
  ),
};
