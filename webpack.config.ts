import Dotenv from 'dotenv-webpack';
import { resolve } from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: {
    main: resolve(__dirname, 'client/assets/js/index'),
  },
  output: {
    path: resolve(__dirname, 'server/public'),
    filename: 'assets/js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [new Dotenv()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

export default config;
