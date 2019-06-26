import React, { Component } from 'react';
import { connect } from 'react-redux'

let generateID = -1
class AddTo extends Component {
    state = {  }
    render() { 
        const { dispatch } = this.props
        console.log(this.props)
        return ( 
            <div>
                <form action="" onSubmit={e => {
                    e.preventDefault();
                    if (this.inputNode.value.trim()){
                        // 添加
                        generateID ++
                        dispatch({
                            type: 'ADD_TODO',
                            id: generateID,
                            text: this.inputNode.value.trim()
                        })
                    }
                }}>
                    <input type="text" ref={node => this.inputNode = node}/>
                    <button type="submit">
                        addToDo
                    </button>
                </form>
            </div>
         );
    }
}
 
// 第一函数叫mapStatetoProps  map(映射)  将状态映射为props
// 2. mapDispatchToProps   将dispatch映射为 props
// export default connect(() => { 
//     return { a: 1}
// }, (dispatch) => {
//     return {
//         b: () => {console.log('b')}
//     }
// })(AddTo);

export default connect()(AddTo)