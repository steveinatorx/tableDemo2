const path = require('path');
const webpack = require('webpack');

console.log('using PROD!');

module.exports = {
  debug: false,
  //devtool: 'source-map',
  //context: path.join(__dirname, 'src', 'js'),
  entry:[
    './src/app.js'
    ] 
  ,
  output: {
          path: path.resolve(__dirname, "dist"),
          publicPath: './dist/',
          filename: 'bundle.min.js' 
  },
  plugins:  [
    //compress a prod release
    new webpack.optimize.UglifyJsPlugin({
        debug: true,
        minimize: true,
        sourceMap: false,
        output: {
          comments: false
        },
        compressor: {
          warnings: false 
        }
    })
  ],
  /*externals: {
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },*/
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
        loader: 'style-loader!css-loader'     
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff&name=./[hash].[ext]"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff&name=[hash].[ext]"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream&name=./[hash].[ext]"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file?name=./[hash].[ext]"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml&name=./[hash].[ext]"
      }
    ]
  }
  //add env specific config versus REACT_ENV 
  /*resolve: {
      alias: {
          __CONFIG__: path.join(__dirname, 'config', process.env.REACT_ENV)
      }
  }*/
};
