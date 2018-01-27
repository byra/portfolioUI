const path  = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry:"./src/index.js",

    output: {
        path:path.join(__dirname,"dist"),
        publicPath: "/",
        filename: "bundle.js",
    },

    module: {
        loaders: [
            {test:/\.jsx?$/, exclude:/node_modules/, loader:"babel-loader", query: {presets:["env","react"]}},
            {test:/\.(png|gif|jpg)$/, loader:"file-loader"},
            {test:/\.css$/, loader: "css-loader!style-loader"},
            {test:/\.svg$/, loader: "svg-loader"}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({filename:"index.html", template:"./src/assets/index.html"}),
    ]
};