const path = require('path');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',

  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 8000,
  },

  output: {
    pathinfo: true,
  },

  module: {
    rules: [
      {
        test: /.m?[jt]sx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React App',
      filename: './index.html',
      template: path.resolve(process.cwd(), 'public', 'index.html'),
      inject: 'body',
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],

  optimization: {
    minimize: false,
  },
};
