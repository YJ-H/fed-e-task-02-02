const path = require('path')
const {merge} = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const common = require('./webpack.common')

const prodConfig = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
  ]
}
module.exports = merge(common,prodConfig)