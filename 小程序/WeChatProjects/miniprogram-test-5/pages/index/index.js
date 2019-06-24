Page({
  data:{
    hasUserInfo:false,
    canIUse:wx.canIUse('button.opentype.getUserInfo')
  },
  getUserInfo: function(e) {
    console.log(e);
  }
})