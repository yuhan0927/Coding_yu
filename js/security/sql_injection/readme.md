前端安全

表单
form -> onsumbit -> url
POST data:
{email:'zm163@com',
possword:'123456'}

后端 登录过程 sql 查找的过程
sql 语法报错, 服务器出错

用户的输入不可信任
password' 导致sql 的提前结束或多了一个' 报500语法错误 编码解码

登入账号

SELECT * from users
    WHERE email = 
    'use@email.com'
    AND password =
    'password%27'