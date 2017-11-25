module.exports = {
  entry: './src/main.js',
  output: {
    path: '/',
    filename: 'bundle.js'
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
  }
}