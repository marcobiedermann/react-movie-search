const dotenv = require('dotenv');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const env = dotenv.config().parsed;

const envKeys = obj => Object.keys(obj).reduce((accumulator, key) => (
  { ...accumulator, [`process.env.${key}`]: JSON.stringify(obj[key]) }
), {});

module.exports = {
  devServer: {
    contentBase: 'client',
  },
  devtool: 'source-map',
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
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('assets/css/styles.css'),
    new HtmlWebpackPlugin({
      template: 'client/index.html',
    }),
    new webpack.DefinePlugin(envKeys(env)),
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
};
