devDependencies 开发阶段
Dependencies    所有阶段
webpack 是打包工具 主要用来构建应用

打包之前 devlopment  src/
打包之后 build之后   dist/  不再需要webpack  部署到服务器

- webpack-dev-server
    webpack打包好之后,将打包后的内容,在浏览器8080端口启动,时前端开发的标准
    在一个端口打开web server
    实时编译 watch HMR

网页webpack打包的过程
index.js是入口, 打包成为 main.js
index.html 首页的模板 main.js 会由webpack-dev-server自动放在index.html 的最后面 script 引入