Page({
  data:{
    hasUserInfo:false,
    canIUse:wx.canIUse('button.open-type.getUserInfo'),
    userInfo:{},
    addShow: false,
    addText: '',
    todos:[]
  },
  addTodo:function(e){
    // 输入框是否有内容
    if (!this.data.addText.trim()){
      return
    }
    let todos = this.data.todos;
    todos.push({
      id: new Date().getTime(),
      title:this.data.addText,
      status:'0'
    })
    this.setData({
      todos
    });
    this.removeShow();
  },
  addInput:function(e) {
    this.setData({
      addText:e.detail.value
    })
  },
  getUserInfo: function(e) {
    // console.log(e);
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo:true
    })
  },
  addTodoShow: function (e) {
    this.setData({
      addShow:true
    })
  },
  removeShow: function (e) {
    this.setData({
      addShow: false
    })
  }
})