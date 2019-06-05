## why
http 是无状态的
需要在客户端和服务器上做一些操作，再次请求的时候知道客户端是谁
## 安装中加-S  的作用
--save
在package.json中 的 "description"中多放了依赖
打包给别人时可删除node_modules文件
重新或许取文件时 执行 npm i或者yarn 项目会自动寻找各个依赖并安装。

本地开发安装的 node_modules
服务器上只需要写的代码不需要 上传 node_modules
## cookie
存在客户端
js 操作
document.cookie：name1=value1; path=/; httponly
后端：响应头
Set-Cookie: name1=valu1; path=/;httponly

浏览器检查所有储存的，cookie，把符合当前作用范围的cookie 放在 http 请求头发给服务器
cookie 有可能被用户禁用


内容:
name:
value：
path: 规定 cookie 生效的路径
/           所有的路径
/user       /user 以及 /user/xxx
/user/xxx   /user/xxx/ 以及下面的 /user/xxx/xx
httpOnly: true / false. true 就不能通过 js 获取 cookie。
max-age: 在 几秒 过后过期

作用范围：
path
domain
用途:会话的状态管理,保存用户的个性化设置。

## session
保存在服务器端
靠后台语言实现
有很多个 session
很多个用户 sessionID

~
## koa 第三方中间件
ctx req + res
ctx: {
    req,
    res,
}
koa-view ejs
往 ctx 上扩展 80%
ctx: {
    req,
    res,
    renser: () => {

    }
    调用 提供的 render()
}
~ 
## locationSorage sessionStorage cookie session5 