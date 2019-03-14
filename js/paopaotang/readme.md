class 类 js 现在也有了
es5 没有class 关键字 怎么做面向对象呢？
js 是面向对象的，Function 是一等对象
普通函数 Player()
new Player(); 作为类的构造函数被运行，
function Player(){this }
this 一直都在，函数里的一个常在，是一个指针 指向一个Object{ }  this.name = name

函数运行方式的不同，里面this指向不同  
当它作为一个普通函数被运行的时候，this指针没有使命， 所以this指向全局，在前端中指向window ，node指向global
函数作为构造函数被运行时 也就是 new Player();  这时this会指向 实例化对象，构造函数需要的过程 

- 通过this函数可以用来构造类
- this 是一直在的，是一个指针，指向一个实例化的对象
  函数的运行方式会导致this指向不一样
  作为普通函数 this指向全局
  如果代码启动严格模式， this会显示出undefined
- new 过程中发生了什么
 this => { }  constructor
 this.name=name
- 构造函数 （constructor）
