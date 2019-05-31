## $
x.find()  查找 x 元素下面的内容 $('.box').find('p') 查找box类名下的P标签
\s 空白字符
.replace(/\s/g,""); 去除无用的空白字符

## promise
promise.all([promise组成的数组])
返回一个 promise 所有 promise resolve 的时候 它才resolve.
resolve 时候的值 就是 （所有promise）resolve 组成的数组

## 模板引擎
发html
html 不是静态的 需要数据填充
{{}}
{name} 变量编译进去
模板引擎同理
编译成html

MVC
jsp
node 模板引擎 承载页面 （view）
ejs jade  都是模板引擎
<%= %> 变量
<% %> js执行