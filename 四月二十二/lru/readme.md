LRU 缓存  最近最少使用原则
Least Recently Used
操作系统

node fs 硬盘，内存
内存精贵
硬盘用不完

内存 是代码的运行空间 是有限的
假设内存空间单位2  往里面存放变量一个变量占一单位内存  可以放两个
第三个？

<!-- 1 put(1)
2 put(2)
3 放不下 -->
1 2 中拿出一个  最近最少使用

1 put(1,1)
2 put(2,2)
3 get(1)  返回1   1最近使用了， 2最近最少使用
4 put(3,3) ,  2就要丢掉
5 get(2)  拿不到
6 put(4,4)  4 3  1丢掉
7 get(1) 找不到
8 get(3) 3
9 get(4) 4

- cache  LRUCache
    get
    set

- 对象字面量有利于get跟set方法的实现
- 最近最少使用， JSON 搞不定
    数组可以 [0][length -1]
    在一头进行操作
    一半的工作交给数组一般的工作交给对象字面量
    让他们成为LRUCache的两个属性

- get set    arr + obj 组织在 LRUCache对象中
    indexof   pop   unshift  splice

