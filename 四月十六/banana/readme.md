蜗牛爱吃香蕉

N piles bananas  没把香蕉上 有不同数量的bananas

[3,6,7,11]
[30,11,23,4,20]
每个小时可以吃某一pile里的n只香蕉，规定H小时内一定要吃完，吃没把的时候，要不就是吃m只，要不就吃余下的

koko bananas
- 把香蕉吃完函数 canEatAllBanans
    h 来自于吃法规则 一小时mid，一次只吃一把
    return h <= H ;
- while 去疯狂的试
1，2，3，4，5，6，......Math.max(...piles)
能拿到结果，但是太慢了
二分查找 优化查找的效率

简单查找 时间开销是n
二分查找的写法有规律
在x - y 中查找
找中间 mid = （x+y) >> 1  
小了 x = mid+1
大了 y = mid-1 