数值 字符串 布尔值 null undefined   基本数据类型
其他的都是 Object     Array是可遍历的对象 for()
JSON Object  对象字面量 可枚举的对象
function 也是对象
arr.push()  

- 字符串是字符的数组具有 .length属性 具有使用下标访问的能力 str[0]
- 运算符匹配的问题是，选择数组作为数据结构
   只在顶部做操作（push pop）  栈 Stack
   算法+数据结构"()"
   stra=[]  开始是空的
   1. ( 入栈  sta.push("(")  sta.length=1
   sta[0]="("
   2. ) 栈不为空 跟顶部元素进行比较。如果是一对，就把顶部元素pop() 或者 push 为新的顶
   3. sta 为空 true|false