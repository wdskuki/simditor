var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var rootPath = path.resolve(__dirname, './')
var _env = process.env.NODE_ENV
module.exports = {
    entry: {
        main: ['./index.js'],
    },
    output: {
        path: rootPath + '/dist',
        filename: '[name].js?[chunkhash]'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'main.html',
            template: './index.html',
            inject: 'body',
            hash: false,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            },
            chunksSortMode: 'dependency'
        }),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: [
                        'transform-es3-property-literals',
                        'transform-es3-member-expression-literals'
                    ]
                }
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: 'url-loader?limit=500000'
        },
        {
            test: /\.ttf$/,
            use: ['file-loader']
        },
        {
            test: /\.coffee$/,
            use: ['coffee-loader']
        }
        ]
    }
}
