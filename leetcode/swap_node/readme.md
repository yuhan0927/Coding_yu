- 无编译 不代码
    webpack 已经成为工作流程的霸主
    vue-cli
    编译过程和js 的 promise 一样 是异步的
    1. 代码写在 dev（development）过程中  在 src/ 目录
    2. 上线在   build 过程中       在dist/ 中
    3. 启动web 服务器 webpack-dev-server

- webpack html template
    plugin html-webpack-plugin

- log 不在根目录下, 怎么找到它呢,多写点地址 ./utils/log.js
    alias

    resolve resolve中找.js文件 -> module 中通过rules去匹配.js文件然后交给babel-loader处理

babel-core babel-cli babel-preset-env
babel-loader 有点兼容性问题
rules是一个模块 module
rules:[
    {
        text:/\.js$/,
        use:'babel-loader'
    }
]
resolve:{
    extentions: ['.js']
}

8080端口由 webpack-dev-server 启动了 html-webpack-plugin带来的temlate .src/index.html

为什么js运行了
html + js

- webpack 一切皆可打包,打包到 js 里
    css对于js来说就是一个文本
    img 对于js来说可以打包成base64
    但是css应该独立打包，这是性能优化的需要
    如果全放在一个文件中会让页面加载最慢