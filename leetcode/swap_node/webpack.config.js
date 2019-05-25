const HtmlWebpackPlugin = require('html-webpack-plugin'); //引入
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:'./src/index',//入口
    output:{  //出口
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        'css-loader'
                    ]
                })
            },
            {
                test:/\.js$/,
                include: [
                    path.resolve(__dirname,'src')  //只处理src目录下的js
                ],
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {
            log$: path.resolve(__dirname,'src/utils/log.js') //log$以log结尾  __dirname超级变量
        },
        extensions: ['.js','.css']  //自动补全后缀
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'//模板
        }),
        new ExtractTextPlugin('[name].css')
    ]
}