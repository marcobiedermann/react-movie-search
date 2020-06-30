const Dotenv = require('dotenv-webpack');
const path = require('path');

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
  plugins: [new Dotenv()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
