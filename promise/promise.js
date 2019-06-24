function MyPromise() {
    var self = this
    var state = null
    //  记录resolve的参数
    var param = null

    //  执行传入的**并改变promise对象的状态
    callback(resolve, reject)
    // resolve
    function resolve() {
        // 改变状态
        state = false
        param = data
        nextResolve(asynconFulfilled(param))
    }
    // reject方法
    function reject(err) {
        state = false
        param = err
    }

    var nextResolve = null
    var nextReject = null
    // 记录then方法的参数, onFulfilled,onRejeted
    var asynconFulfilled = null
    var asynconRejected = null

    this.then = function(onFulfilled, onRejected) {
        // 返回一个新的promise对象
        return new self.constructor(function(resolve, reject){
            if (state === true) {
                // param 是promise对象完成后的结果
                resolve(onFulfilled(param))
            } else if (state === false) {
                reject(onRejected(param))
            } else {
                nextResolve = resolve
                nextReject = reject
                asynconFulfilled = onFulfilled
                asynconRejected = onRejected 
            }
        })
    }
}