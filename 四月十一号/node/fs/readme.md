node 让js来到了后端

服务器端，  安装了 Linux 
文件系统操作 fs
连接数据库  db


后端开发环境中js没有DOM了  因为不用浏览器打开页面
文件读取 要花时间  时间花在  文件定位(参数一)，  打开文件， 将文件内容读在内存中 输出到命令行
文件越大花的时间越多  要花时间在js里用异步来做
异步解决方案
1. callback 回调函数
fs.readFile(path,'utf8',function(err,data){

})
2. promise 
Promise 是类 是用于处理耗时异步问题的类，为了防止回调地狱，看到耗时问题就用出一个Promise实例
resolve 将控制权交给then 将结果通过resolve(data)传递给then
reject  失败后让Promise执行 catch(e) { }