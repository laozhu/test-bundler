const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  mode: 'production',
  devtool: 'source-map',

  output: {
    pathinfo: false,
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
          MiniCssExtractPlugin.loader,
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].chunk.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            gitignore: true,
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],

  optimization: {
    minimize: true,
  },
};
