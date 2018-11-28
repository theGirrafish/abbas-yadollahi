const path = require('path');
const webpack = require('webpack');
const wpMerge = require('webpack-merge');
const common = require('./webpack.config.common.js');

const parentDir = path.join(__dirname, '../');

module.exports = wpMerge(common, {
  mode: 'development',
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
    })
  ],
  devtool: 'eval-source-map',
  devServer: {
    port: 5000,
    host: 'localhost',
    contentBase: parentDir,
    historyApiFallback: true
  }
});
