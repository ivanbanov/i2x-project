const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = require('./paths').PATHS;
const defaults = require('./defaults');

module.exports = Object.assign(defaults, {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?http://localhost:3000/',
    `${PATHS.src}/index.js`,
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
    }),
  ],
});
