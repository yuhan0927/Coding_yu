// function mult () {
//     // 参数的数量是不定的
//     let a = 1;
//     for (var i=0; i<arguments.length;i++)
//     a = a*arguments[i]
//     return a;
// }

// function mult (...args) {
//     // 参数的数量是不定的
//     let a= 1;
//     for (var i=0; i<args.length;i++)
//     a = a*args[i]
//     return a
// }
// console.log(mult(1,2,3));


// 缓存计算结果 不要重复计算
let cache = {};

function mult () {
    // 参数的数量是不定的
    let a= 1;
    let key = Array.prototype.join.call(arguments,',');
    // args相关， 数组=> string 
    // key 12*3 1*23
    // [1,2,3] '1,2,3'

    if (cache [key]){
        console.log('从缓存中取')
        return cache[key];
    }
    for (var i=0; i<arguments.length;i++){
    a = a*arguments[i]
    }
    cache[key] = a;
    return a
}
console.log(mult(1,2,3));
console.log(mult(1,2,3));
console.log(mult(1,2,3));