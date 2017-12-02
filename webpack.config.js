const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {'main': [path.resolve(__dirname, 'src/main.js')]},
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main-[hash].js'
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.(css|less)$/,
        loader:  'style-loader!css-loader!less-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
            chunks: ['main'],
            template: './src/main.ejs',
            hash: false,
            inject: false,
            filename: '../views/index.html'
})]
}