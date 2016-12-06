const path = require('path');
const webpack = require('webpack');

var PROD = JSON.parse(process.env.PROD_ENV || '0');

console.log('using PROD?', PROD);


module.exports = {
  debug: true,
  devtool: 'source-map',
  //context: path.join(__dirname, 'src', 'js'),
  entry: PROD ? [
    './src/app.js'
    ] 
    :  [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './src/app.js'
  ],
  output: {
          path: path.resolve(__dirname, "dist"),
          publicPath: '/dist/',
          filename: PROD ? 'bundle.min.js' : 'bundle.js'
  },
  plugins: PROD ? [
    //compress a prod release
    new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
    })
  ] :
    [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  externals: {
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
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
        // test: /[\/\\]css[\/\\].*\.css$/,
        test: /\.css$/,
        loaders: ['style', 'css']     
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  //add env specific config versus REACT_ENV 
  /*resolve: {
      alias: {
          __CONFIG__: path.join(__dirname, 'config', process.env.REACT_ENV)
      }
  }*/
};
