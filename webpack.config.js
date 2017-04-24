var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

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
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    context: __dirname,
    plugins: [
      new HtmlWebpackPlugin({
         filename: 'public/index.html',
         template: 'client/index.html'
       }),
        new CopyWebpackPlugin([
           { from: 'client/app.css', to: 'public' },
           {from: 'external/bootstrap', to: 'public/bootstrap'}
        ])
    ]
}
