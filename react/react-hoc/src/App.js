import React from 'react';
import ShopCart from './ShopCart'
import LoginStatus from './LoginStatus'
import WithLogin from './WithLogin'
import './App.css';


// 对组件进行包装
// const WithLoginStatus = WithLogin(LoginStatus);
// const WithShopCart = WithLogin(ShopCart)
function App() {
  return (
    <>
      <LoginStatus />
      <ShopCart/>
      {/* 包装过后的组件 */}
      {/* <WithLoginStatus />
      <WithShopCart a='1' b='2'/> */}
    </>
  );
}

export default App;
