import React, { Component } from 'react';
import WithLogin from './WithLogin'

class LoginStatus extends Component {
    state = {  }
    render() { 
        return ( 
            <button>已经登录</button>
         );
    }
}
 
LoginStatus.displayNmae = 'LoginStatus'
export default LoginStatus;