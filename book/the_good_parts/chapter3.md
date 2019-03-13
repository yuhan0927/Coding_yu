# 对象
- 对象字面量

  1. 对象字面量即object，通过key:value的形式描述出对象，语法的规则是{}
  2. 对象有属性和方法 只要对象上有receiveFlower这个方法对象，都可以收花 接口（Interface）
  3. 对象是可嵌套的 
    var a={
        first-name:'小花',
        number:1615,
        b:{
            day:'sunday',
            time:'2019-03' , 
            city:'NanChang'      
        }
    };
- 检索

    1. 检索对象的值，通过object["key"]来获得对象中key属性名中的值，语法规则是[]
    2. 如果字符串的表达式是合法的JavaScript的标识符且不是保留字可优先使用object.key方法获得属性值 eg: a["first-name"]   a.name
    3. 检索一个不存在的成员元素的值将返回undefine eg: flight.status //undefine
    4. ||运算符用来填充默认值 eg: var flight=flight.status||"unknow";

- 更新
    1. 对象中的值通过属性名赋值来更新  如果属性名不存在则该属性名和值将会扩充到对象中

- 引用

- 原型
    