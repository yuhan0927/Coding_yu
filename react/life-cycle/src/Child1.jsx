import React from 'react';

class Child1 extends React.Component{
    state = {
        a: 1
    }
    // 挂载时的生命周期
    /**
     * 更新 state
     * 根据返回值  {}
     * return null 表示不跟新
     */
    static getDerivedStateFromProps(props,state) {
        console.log('getDerivedStateFromProps',props);
        return {...props,...state}
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    // 更新
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate');
        return 888;
    }
    // 15.xxx 时候 没有a  aundefined
    // 16.xxx 的时候 a === getSnapshotBeforeUpdate()
    componentDidUpdate(getProps, preState, a) {
        console.log('componentDidUpdate',a)
    }
    handleStateChange=() => {
        this.setState({
            a: 10
        })
    }
    render(){
        console.log('渲染时候的 state',this.state);
        return(
            <div>
                <button onClick={this.handleStateChange}>change state</button>
                Child1 Component
                {this.props.count}<br/>
                {this.state.a}
            </div>
        )
    }
}

export default Child1;