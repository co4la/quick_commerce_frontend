var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './src'
  ],
  output: { 
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        query: {
          //compile it to es2015, something that all modern browsers can understand
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.s?css$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
