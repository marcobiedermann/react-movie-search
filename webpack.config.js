const dotenv = require('dotenv');
const path = require('path');
const webpack = require('webpack');

const env = dotenv.config().parsed;

const envKeys = (obj) =>
  Object.keys(obj).reduce(
    (accumulator, key) => ({ ...accumulator, [`process.env.${key}`]: JSON.stringify(obj[key]) }),
    {},
  );

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'client/assets/js/index'),
  },
  output: {
    path: path.resolve(__dirname, 'server/public'),
    filename: 'assets/js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [new webpack.DefinePlugin(envKeys(env))],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
