import React from 'react'
import propTypes from 'prop-types'
// 孙：在MyButton拿到Context中的color 跨过Message
class MyButton extends React.Component{
    render () {  
        return (
            <div>
                <button style={{backgroundColor:this.context.color}}>
                {this.props.children}
                </button>
            </div>
            
        )
    }
}
MyButton.contextTypes = {
    color:propTypes.string
}
// 子
class Message extends React.Component{
    // 15.x.x的缺点  shouldComponentUpdate  retuen false 之后 会导致 后代不会更新 content 的数据不能同步  (重点) 所以点击切换主题不会改变颜色
    shouldComponentUpdate() {
        return false;
    }
    render () {
    return (
        <div>
                {this.props.text}
                <MyButton>delete</MyButton>
            </div>
        )
    }
}
// 父
class Context extends React.Component{
    state = {
        msgs:['msg1','msg2','msg3'],
        theme: 'purple'
    }
    getChildContext(){
        return {color: this.state.theme}
    }
    handleToggleTheme = () => {
        this.setState({
            theme: 'red'
        })
    }
    render () {
        const msgNodes = this.state.msgs.map((msg,i)=>{
            return (<Message key={i} text={msg} />)
        }) 
        return (
            <div>
                <button onClick={this.handleToggleTheme}>切换主题</button>
                {msgNodes}
                {this.props.children}
            </div>
        )
    }
}
// 给Context的属性设定类型
Context.childContextTypes = {
    color:propTypes.string
}
// raect 提供了一个类型的npm 包
export default Context
