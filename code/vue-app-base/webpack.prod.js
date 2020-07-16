const path = require('path')
const {merge} = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
console.log(CopyWebpackPlugin)
const common = require('./webpack.common')

const prodConfig = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: 'public' },
      ],
    })
  ]
}
module.exports = merge(common,prodConfig)