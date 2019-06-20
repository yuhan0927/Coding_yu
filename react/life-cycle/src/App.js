import React from 'react';
import Child from './Child';
import Child1 from './Child1';
import Context from './Context';
import Context1 from './Context1';
import './App.css';
class App extends React.Component {
  constructor() {
    // 继承原组件属性
    super() ;
    // 添加属性
    this.objRef = React.createRef();
  }
  state = {
    count: 0,
    showChild: true
  }
  handleToggleChild = () => {
    const { showChild } = this.state;
    this.setState({
      showChild: !showChild
    })
  }
  handleChildPropsChange = () => {
    let { count} = this.state;
    // count ++;
    this.setState({
      count
    })
  }
  componentDidMount() {
    this.refs.stringRef.innerHTML = 'new String Ref';
    this.methodRef.innerHTML = ' new method Ref';
    this.objRef.current.innerHTML = 'new object ref'
  }
  render() {
    const { count,showChild } = this.state;
    return (
      <div>
        {/* ref */}
        <span ref="stringRef">react ref</span>
        <span ref={(ref) => this.methodRef = ref}>method ref</span>
        <span ref={this.objRef}>object ref</span>
        {/* innerHTML */}
  
        <div dangerouslySetInnerHTML={{
          __html: `<strong>strong</strong>`
        }}></div>
        {/* 生命周期 */}
        <button onClick={this.handleChildPropsChange}>
          child component props change
        </button>
        <button onClick={this.handleToggleChild}>toggle Child</button>
        {
          !showChild ?
          <Child count={count} /> : <Child1 count={count}/>
        }
        {/* Context */}
        <Context>小华
          <p> 姓名</p>
          小华
          <p>年龄</p>
          19
        </Context>
        <p>react 16.x.x context</p>
        {/* Context1 */}
        <Context1/>

      </div>
    )
  }
}
export default App;
