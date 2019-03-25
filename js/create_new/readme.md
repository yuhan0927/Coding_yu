new 的时候发生了什么？

构造函数的运行方式是以 new的方式被运行
内部的this 运行后指向实例化后的this
开始时空对象 之后拿到了构造函数里的属性
最后又拿到了prototype上定影的属性和方法

对象由属性和方法构成

1. 实例化一个新对象，并且时这个类的实例
2. 构造函数被执行， this指向实例
 construct 运行慢半拍
 在面向对象里构造函数是为this服务的，this由函数的运行方式决定
 this通过new的方式指向它的实例化对象
 this通过call指向任何对象
3. Otaku.prototype 原型对象  值是对象
    任何函数都拥有一个prototype属性 只有拥有这个属性才能构建类
    constructor 构造函数构造了一个空对象 通过prototype 才能构建类