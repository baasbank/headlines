const express = require('express');
const path = require('path');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

const port = 8080;

const app = express();
const noInfo = process.env.NODE_ENV === 'production' || false;

app.use(require('webpack-dev-middleware')(compiler, { noInfo, publicPath: webpackConfig.output.publicPath }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


app.listen(process.env.PORT || 8080, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
