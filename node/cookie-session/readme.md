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

作用范围
path
domain
## locationSorage sessionStorage cookie session