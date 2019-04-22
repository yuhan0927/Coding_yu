// 不用每次都去硬盘里面查找，  会在内存中缓存
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.obj = {};  //key
    this.arr = [];
}

LRUCache.prototype.get = function (key) {
    // 有key  返回key值 删除数组中的key值 再在数组头部添加
    var val = this.obj[key];  //容量不大的内存提供服务于最多的进程
    if(val > 0){
        var index = this.arr.indexOf(key);
        this.arr.splice(index,1)
        this.arr.unshift(key);
    }
    //是否有key  没有就undefined
    else {return -1;}
}
LRUCache.prototype.set = function (key,value) {
    // 如果有key 就返回
    if(this.obj[key]){
        this.obj[key] = value; //更新  最近使用  放在数组开头
        var index = this.arr.indexOf(key);
        this.arr.splice(index,1)
        this.arr.unshift(key);
    }
    // 没有的话 如果内存满了， arr.pop()
    // 内存没满则直接 arr.unshift()
    if(this.capacity === this.arr.length){
        var k = this.arr.pop(); //删除最近最少使用
        this.obj[k] = undefined;  //在字面量中删除
    }
    this.obj[key] = velue;
    this.arr.unshift(key);
}