var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var rootPath = path.resolve(__dirname, './')
var _env = process.env.NODE_ENV
// var phpHost = ''
// var studioHost = ''
module.exports = {
    entry: {
        main: ['babel-polyfill', 'console-polyfill', './src/main.js'],
        vendor: ['md5'] // 'axios', 'jsonsql', 'keyboardjs', 'lodash.clonedeep', 'lodash.compact', 'lodash.difference', 'lodash.findindex', 'lodash.isequal', 'lodash.pullat', 'lodash.pullat', 'lodash.remove', 'lodash.sortby', 'lodash.sortbyorder', 'md5', 'melanke-watchjs', 'moment', 'move-js', 'nedb', 'qrcode-npm', 'socket.io-client'
    },
    output: {
        path: rootPath + '/dist/inquiry',
        filename: '[name].js?[chunkhash]'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            'globalStyle': path.resolve(rootPath, './src/globalStyle/global.less'),
            'type': path.resolve(rootPath, './src/lib/type.js'),
            'commom': path.resolve(rootPath, './src/lib/commom.js'),
            'dom': path.resolve(rootPath, './src/lib/dom.js'),
            'storage': path.resolve(rootPath, './src/lib/store.js'),
            'act': path.resolve(rootPath, './src/lib/act.js'),
            'httpRequest': path.resolve(rootPath, './src/lib/http.js'),
            'router': path.resolve(rootPath, './src/lib/router.js'),
            'config': path.resolve(rootPath, './src/config/' + _env + '.js'),
            'token': path.resolve(rootPath, './src/lib/token.js'),
            'smsCode': path.resolve(rootPath, './src/components/smsCode/index.js'),
            'routerSetting': path.resolve(rootPath, './src/lib/routerSetting.js'),
            'globalVars': path.resolve(rootPath, './src/lib/globalVars.js'),
            'utils': path.resolve(rootPath, './src/lib/utils.js'),
            // ** components
            'appAlert': path.resolve(rootPath, './src/components/alert/index.js'),
            'doctor': path.resolve(rootPath, './src/components/navBar/doctorInfo.js'),
            'confirmBox': path.resolve(rootPath, './src/components/confirmBox/index.js'),
            'ScrollLoader': path.resolve(rootPath, './src/components/scollLoader/index.js'),
            'ArrowTip': path.resolve(rootPath, './src/components/arrowTip/index.js'),
            'globalToolbar': path.resolve(rootPath, './src/components/globalToolbar/globalToolbar.js'),
            // ** modules
            'login': path.resolve(rootPath, './src/modules/login/index.js'),
            'home': path.resolve(rootPath, './src/modules/home/index.js'),
            'customizeInquiry': path.resolve(rootPath, './src/modules/customizeInquiry/index.js'),
            'tabs': path.resolve(rootPath, './src/modules/customizeInquiry/tabs.js'),
            'question': path.resolve(rootPath, './src/modules/customizeInquiry/question.js'),
            'customizeInqList': path.resolve(rootPath, './src/modules/customizeInqList/index.js'),
            'preview': path.resolve(rootPath, './src/modules/inqPreview/preview.js')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'main.html',
            template: './src/main.html',
            inject: 'body',
            hash: false,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            },
            chunksSortMode: 'dependency'
        }),
        new webpack.DefinePlugin({
            envMode: JSON.stringify(_env)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new webpack.NamedModulesPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         drop_console: true,
        //         properties: false, // 不压缩属性的引号，防止ie8报错
        //         pure_funcs: ['console.log']
        //     },
        //     output: {
        //         beautify: true, // 对象key加引号，防止ie8报错
        //         quote_keys: true
        //     },
        //     mangle: {
        //         screw_ie8: false
        //     },
        //     sourceMap: false
        // }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    'plugins': [
                        'transform-es3-property-literals',
                        'transform-es3-member-expression-literals'
                    ]
                }
            }
        },
        {
            test: /\.js$/,
            use: ['source-map-loader'],
            enforce: 'pre'
        },
        {
            test: /\.ejs$/,
            use: 'ejs-loader'
        },
        {
            test: /\.json$/,
            use: 'json-loader'
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: 'url-loader?limit=500000'
        },
        {
            test: /\.ttf$/,
            use: ['file-loader']
        }
        ]
    }
}
