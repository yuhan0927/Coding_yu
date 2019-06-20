import React from 'react'
// 返回一个对象 对象上有两个组件
const ThemContext = React.createContext({
    theme: 'purple',
    toggleTheme: () => {}
})
class MyButton extends React.Component {
    render() {
        return (
            <div>
                {/* 消费者 */}
                <ThemContext.Consumer>
                    {
                        (value) => {
                            return (
                                <button onClick={value.handelToggleBlue}
                                style={{backgroundColor:value.theme}}>
                                    {this.props.children}
                                </button>
                            )
                        }
                    }
                </ThemContext.Consumer>
            </div>
        )
    }
}
class Message extends React.Component{
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
class Context1 extends React.Component {
    constructor() {
        super();
        this.handelToggleBlue = () => {
            this.setState(state => {
                return {
                    theme: 'blue'
                }
            })
        }
        this.state = {
            theme: 'purple',
            handelToggleBlue: this.handelToggleBlue
        }
    }
    // state = {} 为静态属性 不需要实例化 无法获取实例的this
    handelToggleTheme = () => {
        this.setState({
            theme: 'red'
        })
    }
    // handelToggleBlue = () => {
    //     this.setState({
    //         theme: 'blue'
    //     })
    // }
    render() {
        const msgs = ['msg1','msg2','msg3']
        return (
            // 生产者
           <ThemContext.Provider value={this.state}>
               <button onClick={this.handelToggleTheme}>toggleTheme</button>
               {
                   msgs.map((msg,i)=>{
                    return (<Message key={i} text={msg} />)
                }) 
               }
           </ThemContext.Provider>
        )
    }
}

export default Context1