const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    entry: "./client/index.js",
    output: {
        filename: "public/bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            }
        ]
    },
    devServer: {
       headers: { "Access-Control-Allow-Origin": "*" }
    },
    context: __dirname,
    plugins: [
      new HtmlWebpackPlugin({
         filename: 'public/index.html',
         template: 'client/index.html'
       }),
        new CopyWebpackPlugin([
           { from: 'client/app.css', to: 'public' },
           {from: 'external/bootstrap', to: 'public/bootstrap'},
           {from: 'images', to: 'public/images'}
        ]),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        })
    ]
}
