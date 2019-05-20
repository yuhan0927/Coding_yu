## 通用首部


## 响应头
Content-Type:告诉浏览器 返回的东西是什么类型
类型；text/plain text/html ... mime 类型 图片时 ... image/jpg  mime

## 请求头
Content-Type  告诉后台 发送数据的格式
post 请求格式1：application/x-www-form-urlencoded  form 默认编码
post 请求格式1：application/json 交换数据
区别:
表单编码的格式
json

## get 请求
?  query=''&type=''&a=''
1. url.parse() query
2. queryString.parse() 

## createServer
http 服务默认 80 listen 指定另一个端口
