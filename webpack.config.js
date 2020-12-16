const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = [
  {
    entry: './src/index.ts',
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    mode: 'none',
    devtool: 'inline-source-map',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'shopify-cart-fetch',
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'ts-loader',
            options: {

            }
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ],
  }
];
