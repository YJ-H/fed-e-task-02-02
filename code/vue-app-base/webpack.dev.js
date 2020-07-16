const path = require('path')
const {merge} = require('webpack-merge')

const common = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: ['./public', './src/assets'],
    // BASE_URL: './',
    // compress: true,
    hot: true,
    port: 9000,
  }
}
module.exports = merge(common,devConfig)