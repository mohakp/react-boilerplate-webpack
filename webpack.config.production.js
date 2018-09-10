const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'static/[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract(
                    {
                        fallback: 'style-loader',

                        use: [{
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                camelCase: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        }]
                    }
                )
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new extractTextPlugin({
            filename:'styles/styles.[hash].css',
            allChunks: true
        })
    ],
    
}