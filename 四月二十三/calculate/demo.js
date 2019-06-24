var PerformaceS = function(salary) {
}
PerformaceS.prototype.calculate = function (salary) {
    return salary*5
}
var PerformaceA = function(salary) {
}
PerformaceA.prototype.calculate = function (salary) {
    return salary*3
}
var PerformaceB = function(salary) {
}
PerformaceB.prototype.calculate = function (salary) {
    return salary*2
}
var PerformaceC = function(salary) {
}
PerformaceC.prototype.calculate = function (salary) {
    return salary
}
var Bounce = function (salary) {
    this.salary = salary;
}
Bounce.prototype.setStrategy = function(strategy) {
    this.strategy = strategy;
}
Bounce.prototype.getBounce = function() {
    return this.strategy.calculate(this.salary);
}

var bounce = new Bounce(4000);
bounce.setStrategy(new PerformaceS());
console.log(bounce.getBounce());

var bounce2 = new Bounce(5000);
bounce2.setStrategy(new PerformaceB());
console.log(bounce2.getBounce());