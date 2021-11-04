const path = require('path');
const webpack = require('webpack');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  entry: {
    app: './src/index.tsx',
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
    clean: true,
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.json', '.js', '.mjs', '.ts', '.jsx', '.tsx', '.wasm'],
  },

  module: {
    rules: [
      {
        test: /.html$/i,
        exclude: /node_modules/,
        loader: 'html-loader',
      },
      {
        test: /.(svg|png|gif|jpe?g|webp|avif|woff2?|mp3|mp4)$/i,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images',
          limit: 1024,
        },
      },
    ],
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          test: /[/\\]node_modules[/\\]/,
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        },
      }),
    ],
  },

  experiments: {
    asyncWebAssembly: true,
    lazyCompilation: {
      imports: true,
      entries: false,
    },
    topLevelAwait: true,
  },
};
