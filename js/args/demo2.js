// 1. userObj 一个参数带来了新的问题,
// 代码的函数编写者,对于user里面的key 要去了解
// 只需要一部分,解构可以帮助,提高代码的可读性
function infomation({name,age,sex}){
    console.log(name,age,sex);
}
const user = {
    name: '羊羊羊',
    age:17,
    height:180,
    sex:'男',
    hobbies:['打游戏']
}
console.log(infomation(user));