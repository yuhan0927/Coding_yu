fullstack 全栈
Front Enginner
Backend  /api

restful api 
浏览器与服务器通信方式的一种设计风格

1. yarn add json-server
2. 在package.json中配置
"scripts": {
    "server":"json-server db.json --port 1234"
  },
3. npm run server

- reatful 的世界里， 一切皆资源
- url 来唯一定位资源的识别符
   /posts/:id/comments
- 加一条comment 怎么办?
{
    id:2,
    body:'好巧，你那边也在下雨',
    postId:1
}
/comments 设计好URL POST
- 设计有意义的URL
   资源  状态改变
   POST /comments 加一条评论： id：2
    修改一下内容
      PUT  /comments/2  body: '啊哈哈哈哈哈哈哈哈哈哈哈哈哈'
        操作     SQL  方法    HTTP 动词
       CREATE     INSERT       POST
       READ       SELECT       GET
       UPDATE     UPDATE     PUT/PATCH PUT要把所有字段和需要修改的字段{body: '',postId:1}:pATCH 只要给修改的那部分
       DELETE      DELETE      DELETE

    状态 切换 , 使用定义的谓语动词