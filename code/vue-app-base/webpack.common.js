const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[chunkhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.(less|css)$/,
        use: [
          'vue-style-loader',
          // 'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ]
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'vue-style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: { importLoaders: 1 }
      //       // options: { 
      //       //   // importLoaders: 1,
      //       //   module: true,
      //       //   localIdentName: '[local]_[hash:base64:8]' 
      //       // }
      //     },
      //     'postcss-loader'
      //   ]
      // },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              esModule: false
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ 
      template: './public/index.html',
      title: 'xxx vue',
      // inject: true
    }),
  ],
  resolve: {
    alias: {
      "@": "/src"
    }
  }
}