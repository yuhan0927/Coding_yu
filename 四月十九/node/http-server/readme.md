- MVVM  前端新贵
Model 数据 Page({data:{
    legends:[]
}})
View 试图  wxml
VM    {{}}   wx:for ...

- MVC  经典的web开发模式
Model => SQL
View  => 静态页面
Controller  => 路由


- webServer 软件程序
Web服务器硬件运行WebServer程序
ip http协议
http://127.0.0.1:300
端口不止一个服务
3306 MYSQL
80 web服务
 http
    .createServer(function(request,response){
        response.end('Hello World);
    })
    .listen(3000)

request 用户 N Web Server 一直在 3000端口上
request 就能找到  ， 每位用户到达，会触发事件，调用createServer 回调函数， 通过request可以得到用户身份，
response web服务最重要的是响应请求 http 响应之后就断开