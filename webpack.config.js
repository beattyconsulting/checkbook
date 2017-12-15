const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

function envAwareConfig(env) {
	const isProduction = env === 'production'

return {
  entry: {'main': [path.resolve(__dirname, 'src/main.js')]},
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: isProduction ? 'js/checkbook-[hash].js' : 'checkbook.js'
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
        use: {
            loader: 'babel-loader',
            options: {cacheDirectory: true}
        }
      },
      {
        test: /\.(css|less)$/,
        loader:  'style-loader!css-loader!less-loader'
      },
      {
        test: /\.(woff|woff2|ttf|svg|png|jpg|jpeg|eot)$/,
        use: {
        	loader: 'url-loader'
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
            chunks: ['main'],
            externalScript: [
                              'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js',
                            	'https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react.min.js',
                            	'https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-dom.min.js',
                            	'https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.5.10/prop-types.min.js',
                            	'https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.5/react-redux.min.js',
                            	'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js',
                            	'https://cdnjs.cloudflare.com/ajax/libs/redux-thunk/2.2.0/redux-thunk.min.js'
                            ],
            template: './src/main.ejs',
            hash: false,
            inject: false,
            filename: '../views/index.dust'
    })
  ]
}
}

module.exports = function (env) {
	return envAwareConfig(env)
}