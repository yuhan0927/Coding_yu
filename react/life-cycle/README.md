# react 生命周期  15.xxx版本   16.xxx版本

## 挂载阶段

## 更新阶段

# ref 使用
## ref是React提供的用来操纵React组件实例或者DOM元素的接口。

# contenxt   可以跨层级传递

- eg: 最外层父组件主题色为红色,一层层传给子组件  state
{
    theme: 'red'
}
将 theme 层层传递
##15.xxx
父组件 -> 子 -> 孙
1. 父组件通过getChildContext 返回提供的 contenxt 内容
2. 父组件 .childContextTypes 定义提供的 content 类型
3. 子组件获取 .contextTypes 定义接受的类型 this.context 获取

问题：
跨层级传递, 假如中间某一组件 shouldComponentUpdate  retuen false 之后 会导致 后代不会更新 content 的数据不能同步  (重点)

##16.xxx
1. 构造 Provider Consumer
2. 父组件 <Provider value={}/> 提供数据
3. 后代组件<Consumer>{ () => {}}</Consumer> 获取数据
4. state = {
    theme: 'puple',
    toggle: this.handleToggletheme
}
静态属性无法获取实例的this

