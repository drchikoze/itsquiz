import express from 'express';
import path from 'path';
import config from '../webpack.config.js';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import configRoutes from './config/routes';
import configExpress from './config/express';

const app = express();

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

// configPassport(passport);
configExpress(app)
configRoutes(app);//config REST API

app.use('*', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});


export default app
