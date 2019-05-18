- wxml  是模板，{{}} 是要被编译的，
用户看到的不是wxml，是wxml被js中的data 填充编译后的页面
我们看到的页面时Page 不是wxml  是 wxml + js + wxss compile

- setData({
    相应数据时
})  触发重新compile

- 我们会在wxml里把算有的逻辑及对数据的渴求都表达出来，在某一刻只会显示当前状态的页面状态 跟数据相关
   状态由数据决定
   改变数据， setData后 界面自动变 数据驱动界面 MVVM
   数据和页面状态一一对应

- todos 
    健身
    表单
    js dom 加 todos []  appendChild

    data{
        todos:[]
    }
    form sumbit  this.setData()

- {{js 运行区域}}