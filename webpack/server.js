const express = require('express');

const ENV = process.env.NODE_ENV;
const isProduction = ENV === 'production';
const PORT = isProduction ? process.env.PORT : 3000;
const PATHS = require('./paths').PATHS;

const app = express();

if (isProduction) {
  app.use(express.static(PATHS.dist));
  app.get('*', (req, res) => {
    res.sendFile(`${PATHS.dist}/index.html`);
  });
} else {
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const config = require('./config-dev');
  const compiler = webpack(config);

  const middleware = webpackMiddleware(compiler, {
    path: config.output.path,
    publicPath: config.output.publicPath,
    hot: true,
    contentBase: PATHS.src,
    stats: 'minimal',
  });

  const distIndexFile = `${PATHS.dist}/index.html`;

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', (req, res) => {
    res.write(middleware.fileSystem.readFileSync(distIndexFile));
    res.end();
  });
}

app.listen(PORT, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }

  console.info(`🌎  Listening on port ${PORT}`);
});
