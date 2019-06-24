import React, { Component } from 'react';

class ShopCart extends Component {
    state = {  }
    render() { 
        const { a, b } =this.props
        return ( 
            <ul>
                <li>{a}</li>
                <li>{b}</li>
                <li>手机</li>
                <li>平板</li>
            </ul>
         );
    }
}
ShopCart.displayNmae = 'ShopCart'
export default ShopCart;