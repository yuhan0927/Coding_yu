## 静态资源
不会随着服务运行而改变的内容  html css js 图片
1. 如果有 index.html 打开
2. 否则列出所有文件
3. 请求 路径 和 磁盘路径 一一映射

请求：
/static/*.* 磁盘位置static目录下面 一一映射
1. 拿到请求的路径(req.url)
2. 读取 磁盘下面同一个位置 返回
3. 静态资源通常会放在某一个目录下面  比如static   所以请求都以某个目录（关键词）开头^

## 打开方式
file:// 本地文件读取协议 ./xx.png    双击打开可以显示
http://localhost:8080/   http 协议
html 里面引入的资源 都会发出请求

## 上传图片
### formidabel 
处理请求的第三方包
fields   非input[type='file']的提交项都会放到fields内
file   input[type='file']的提交项
fields 和 file  都是根据input的name属性来获取值