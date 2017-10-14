const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    hot: true,
  },
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, 'client/index'),
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'assets/js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
          ],
        }),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('assets/css/styles.css'),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: [
      '.css',
      '.js',
      '.jsx',
    ],
  },
};
