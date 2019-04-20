// 全局变量太多 空间污染  cache只为mult服务
// var cache = {}

// 函数里面的变量运行后消失
var mult = (function(){
    const cache = {};
    return function(...args) {
        var key = Array.prototype.join.call(args,',');
        if (key in cache) {
            console.log('从缓存中取');
            return cache[key];
        }
        let a = 1;
        for ( let i = 0;i<args.length;i++){
            a = a * args[i];
        }
        cache[key] = a;
        return a;
    }
})()

console.log(mult(1,2,3));
console.log(mult(1,2,3));