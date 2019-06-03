- 抽象 ADT 具象来引导
- 解决特写问题
    1. leetcode 数据结构题
    2. githup algorithm oo写法
    3. webpack 可见即可得

    - 有一个链表 服务于各种算法
    1->4->3->2->5->2
    - node(n)->linkedList
        模块化  一个文件一个类
        es6模块化
    - index.js
        业务代码
    
    - node 不支持es6的 模块化,原生支持的是require commonJS
        需要预处理或编译一下

    -ADT
        抽象数据类型 配套方法
        append()
        toString()
        toArry()


head = 1->4->3->2->5->2  x=3
对链表进行分隔,小于x的节点放在左边 大于x的节点放在其后
1->2->2->4->3 左链表在前右链表 之后
链表 head tail append()
两个链表 首尾相连 tail1.next = header2
