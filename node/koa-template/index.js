const Koa = require('koa');

// 应用的实例
const app = new Koa();
// 很多个
const admit = new Koa();
// req res ctx 封装 req res
app.use(async (ctx, next) => {
    console.log(1)
    // 后台koa没有回应  自己处理告诉用户not found
    //  交给下一个中间件
    await next();
    console.log(2)
})
app.use(async (ctx, next) => {
    console.log(4)
    await next();
    console.log(5);
})
app.use(async (ctx) => {
    console.log(3)
    ctx.body = `hello Koa`;
})
// (async (ctx) => {
//     ctx.body = `hello Koa`;
// }) 是一个 async 方法

app.listen(3000, () => {
    console.log('server is running 3000')
});
admit.listen(4000,() => {
    console.log('admin server is running 4000');
})