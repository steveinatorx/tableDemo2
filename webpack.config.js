var path = require('path');
var webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'source-map',
  //context: path.join(__dirname, 'src', 'js'),
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './src/app.js'
  ],
  output: {
          path: path.resolve(__dirname, "dist"),
          publicPath: '/dist/',
          filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot','babel'],
        /*query: {
          retainLines: true,
          cacheDirectory: true,
        }*/
      },
      {
        test: /[\/\\]css[\/\\].*\.css$/,
        loaders: ['style', 'css']     
      }
    ]
  },
  //add env specific config versus REACT_ENV 
  resolve: {
      alias: {
          __CONFIG__: path.join(__dirname, 'config', process.env.REACT_ENV)
      }
  }
};
