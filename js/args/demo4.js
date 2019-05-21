const err = (message) => {
    throw new Error(message);
}
function sum(num = err('第一个参数没有定义'),otherNum = err('第二个参数没有定义')){
    sum = num + otherNum
    return sum;
}
console.log(sum(1,10))
// console.log(sum(1,2))   3
//  console.log(sum(undefined,10)) 报错,第一个参数没有定义
//  console.log(sum(10))  报错,第二个参数没有定义