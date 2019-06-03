const Koa = require('koa');

// 计算时间间隔=qqqqqqqqqqqqqqqqqqq
const app = new Koa();
app.use(async (ctx ,next) => {
    const start = Date.now();
    await next ();
    const end = Date.now();
    const diff = end - start;
    // 放到响应头里面  原生node写一个响应头用 WriteHead Content-type
    ctx.set('X-Response-Time' , `${diff}ms`);
    console.log(`$spend ${diff}ms`);
})
//  reaponse
app.use(async (ctx) => {
    ctx.body = 'hello koa' ;
})
app.listen(3001);