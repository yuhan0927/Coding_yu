//2.6
// 4 17 5

// 会计 年终奖
// 绩效
// s   5
// a   3
// b   2
// c   1
// d
// 一个个的策略函数
var performance = function (salary) {
    return salary * 60
}
var performanceS = function (salary) {
    return salary * 5
}
var performanceA = function (salary) {
    return salary * 3
}
var performanceB = function (salary) {
    return salary * 2
}
var performanceC = function (salary) {
    return salary 
}
var calculaBounce = function (performanceLevel,salary) {
    if(performanceLevel === 'X'){
        return performanceX(salary)
    }
    if(performanceLevel === 'S'){
        return performanceS(salary)
    }
    if(performanceLevel === 'A'){
        return performanceS(salary)
    }
    if(performanceLevel === 'B'){
        return performanceA(salary)
    }
    if(performanceLevel === 'C'){
        return performanceC(salary)
    }
}
// 可以如何优化？ 分支太多， 计算策略太简陋
console.log(calculaBounce('X',20000));