const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'client/index'),
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'assets/js/[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
};
