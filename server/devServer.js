import path from 'path';
import express from 'express';
import serveStatic from 'serve-static';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

const app = express();

export default function(webpackConfig, options) {
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: '/assets/',
    index: 'index.html',
    contentBase: 'src/apps/landing'
  }));

  app.use('*', serveStatic(`src/apps/${options.app}`));

  app.listen(options.port, () =>
    console.log(`App "${options.app}" is running on port ${options.port}`)
  );
}
