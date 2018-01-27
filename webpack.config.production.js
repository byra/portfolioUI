const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {

    entry: {index:"./src/index.js"},

    output: {
        path:path.join(__dirname,"./dist/"),
        publicPath: "/",
        filename:"bundle.js"
    },

    module: {
        loaders: [
            {test:/\.jsx?$/, exclude:/node_modules/, loader: "babel-loader", query:{presets:["env","react"]}},
            {test:/\.(png|jpg|gif)$/, loader:"file-loader"},
            {test:/\.css$/, loader: ExtractTextPlugin.extract("css-loader, style-loader")},
            {test:/\.svg$/, loader: "svg-loader"}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({filename:"index.html",template:"./src/assets/index.html"}),
        new ExtractTextPlugin("style.css"),
        new webpack.optimize.UglifyJsPlugin({ mangle: false })

    ]
};