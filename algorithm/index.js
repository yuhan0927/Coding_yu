let qq_number = "631758924";

// 函数表达式
/**
 * 
 * @param  qq  type String
 * @return type bool
 * @功能 判断qq号是否合格
 * @desc 只能是数字 有长度>5 <13
 */
const is_valid_qq = (qq) => {
    console.log(qq);
    if(!qq){
        return false;
    }
    if(/^[0-9]{5,13}$/.test(qq)){
        return true;
    }else{return false;
    }
};

console.log(is_valid_qq(qq_number));


// 选择了一种数据结构 数组
let enc_qq = [6,3,1,7,5,8,9,2,4];
 qq = [];
head = 0;  // 指针 head是下标的开始
tail = 9; // 指针  尾部指针 

while(head<tail){// 拿到一个正确的数字，操作原来的两个数字
    qq.push(enc_qq[head]);
    head++;
    //  第二个数移动到尾部  hahahhaah
    enc_qq[tail] = enc_qq[head]
    tail++;
    head++;
}
 console.log(qq);