function binary_search(arr, data) {
    // 1. 计算出mid , 小于wangzuo，大于往右
    // 2. 重复进行
    // 推出条件 只有一个数了
    let min = 0,
    max = arr.length-1,
    mid;
    // 分不出中间数时
    while(min <= max) {
        mid = parseInt((min+max)/2);
        // 位移运算
        // mid = (min+max)>>1

        // 溢出    不加我怎么去取得一半呢？
        // mid = parseInt(min + (max - min)/2) 
        mid = min + ((max - min)>>1)
        if (arr[mid] > data){
            max = mid - 1;
        } else if(arr[mid] < data){
            min = mid + 1
        }else {
            return mid;
        }
    }
    return -1;
}
console.log(binary_search([1,4,7,9,10,12],10));

let arr = [];
for (let i = 0;i < 100000000; i++){
    // 二分查找哪个地方会有问题？
    arr.push(i);
}
console.log(binary_search(arr,2019));