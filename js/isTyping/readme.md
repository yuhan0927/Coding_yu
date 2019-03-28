类型检测时js的考点

<!-- new Array()  [] -->
Object
Array  可遍历的对象    for(i)
JSON object 对象字面量 可枚举的对象  for(key in)
function  函数时一等对象

typeof 不靠谱


1. Object.prototype.toString()  用来弥补typeof不能判断某些具体类型的不足
   返回值为字符串"[object object]"
2. 借给Array 用
    Object.prototype.toString.call([])
    函数上就有call,动态修改内部this的指向

3. js 的面向对象
   Type{isString}

4. 立即执行函数 + 嵌套函数定义 = 闭包
   type 就在这些嵌套函数被调用时被引用到