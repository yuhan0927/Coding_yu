let path = require('path');
const HtmlWebpackPlugin = 
    require('html-webpack-plugin');  //安装 
const basePath = __dirname;
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //安装
module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions:['.js', '.ts', '.tsx']
    },
    entry: {
        app: './index.tsx',
        appStyles: './css/site.css',
        vendor: [
            'react',
            'react-dom'
        ],
        vendorStyles: [
            '../node_modules/bootstrap/dist/bootstrap.css'
        ]
    },
    output: {
        path: path.join(basePath, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    devServer: {
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css',
            chunkFilename:'[id].css'
        })
    ]
}
