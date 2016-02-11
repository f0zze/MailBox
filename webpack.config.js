'use strict';

let NODE_ENV = "dev";
const webpack = require('webpack');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                exclude: /(node_modules)/,
                loader: 'ng-cache?prefix=[dir]/[dir]'
            }
        ],
        noParse: /angular\/angular.js/
    },
    resolve: {
        moduleDirectories: ['node_modules'],
        extensions: ['', '.js']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader'],
        extensions: ['', '.js']
    }
};

if (NODE_ENV == 'prod') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}

