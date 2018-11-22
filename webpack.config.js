/*
    ./webpack.config.js
*/
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      { test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader" 
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test : /\.js|jsx$/,
        use : [{loader : "babel-loader", query: {
           "presets": ["@babel/preset-env", "@babel/preset-react"]
        }}]
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new CopyWebpackPlugin([
      { "from": "public/resources/test.json", "to": "public/resources/test.json"},
      { "from":  "public/favor.ico", "to": "favor.ico"}]
    )
  ]
}