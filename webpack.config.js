const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const sharedConfig = {
  entry: './src/index.esm.ts',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'ts-loader',
          options: {
            context: __dirname,
            onlyCompileBundledFiles: true,
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
}

/**
 * UMD
 * ------------------------------------------------------------------------------
 * UMD with dev build, minified production build and sourcemaps
 *
 */
const productionUMD = {
  ...sharedConfig,
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'index.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
}

const developmentUMD = {
  ...sharedConfig,
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
}

/**
 * AMD
 * ------------------------------------------------------------------------------
 * AMD with dev build, minified production build and sourcemaps
 *
 */
const developmentAMD = {
  ...sharedConfig,
  mode: 'development',
  output: {
    filename: 'index.amd.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'amd',
  },
}

const productionAMD = {
  ...sharedConfig,
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'index.amd.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
}

/**
 * CommonJS
 * ------------------------------------------------------------------------------
 * CommonJS with dev build, minified production build and sourcemaps
 *
 */

const developmentCJS = {
  ...sharedConfig,
  mode: 'development',
  output: {
    filename: 'index.common.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
  },
}

const productionCJS = {
  ...sharedConfig,
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'index.common.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
  },
}

module.exports = [
  productionUMD,
  developmentUMD,
  productionAMD,
  developmentAMD,
  productionCJS,
  developmentCJS
];
