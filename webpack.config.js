var HtmlWebpackPlugin = require('html-webpack-plugin');

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

    plugins: [
      new HtmlWebpackPlugin({
         filename: 'public/index.html',
         template: 'client/index.html'
       })
    ]
}
