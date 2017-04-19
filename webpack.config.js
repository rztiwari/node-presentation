var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    page1: "./server",
    page2: "./client"
  },
  output: {
    // Make sure to use [name] or [id] in output.filename
    //  when using multiple entry points
    path: 'dist',
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js"
  },
  plugins:new HtmlWebpackPlugin()
}
