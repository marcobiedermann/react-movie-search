import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import baseConfig, { paths } from './webpack.config';

const config: Configuration = {
  devServer: {
    contentBase: paths.public,
    historyApiFallback: true,
  },
  devtool: 'cheap-module-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${paths.src}/index.html`,
    }),
  ],
};

export default merge(baseConfig, config);
