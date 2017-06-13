const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: `${SRC_DIR}/app/index.js`,
  output: {
    path: `${__dirname}/src/dist/app`,
    filename: 'bundle.js',
    publicPath: '/',
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ]
};


module.exports = config;
