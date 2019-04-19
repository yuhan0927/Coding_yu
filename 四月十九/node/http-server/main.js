// require 关键字 引入一个模块  相当于前端<script src="./http"></script>  COMMONJS(引入模块的机制定义)
const http = require('http');

http
    .createServer(function(request,response){
        response.end(`Hello World${++1}`);
    })
    .listen(3000);