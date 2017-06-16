const express = require('express');
const path = require('path');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

// create our app
const app = express();
const noInfo = process.env.NODE_ENV === 'production' || false;

// const port = process.env.PORT || 3000;
app.use(require('webpack-dev-middleware')(compiler, { noInfo, publicPath: webpackConfig.output.publicPath }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


app.listen(process.env.PORT || 8080, () => {
  console.log(' server started on port ' + 8080);
});

module.exports = app;
