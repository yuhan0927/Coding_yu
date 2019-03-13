let arr=[];//数据集合
arr.push("{");
// console.log(arr,arr.length);
// console.log(typeof arr);
arr.push("}");
// console.log(arr);
arr.pop(); //在最后删除一个元素
// console.log(arr);
arr.unshift("]");//在头部插入一个元素
console.log(arr);
arr.shift();//移除第一个元素
console.log('----',arr);
arr.forEach(item=>{
    console.log(item);
})

// 如何来做匹配规则

// let obj = {};
// obj["{"]="}";
// obj["("]=")";
// obj["["]="]";
// "()";sta[0]="("  ")"
let sta=["("];
let s=")";
if(obj[sta[sta.length-1]]===s){
    sta.pop();
}
console.log(!sta.length);