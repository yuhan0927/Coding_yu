const db = wx.cloud.database();
const userInfo = db.collection('userInfo');

Page({
  data: {
    userList:[]
  },
  getUserInfo: function(e) {
    console.log(e);
    // openid 是有安全问题的,这是前端,可以到云端取,安全  openid 是专有 业务
    wx.cloud.callFunction( {
      name: 'getOpenId',
      complete: res => {
        console.log(res);
        userInfo
          .where({
            _openid: res.result.openId
          })
          .count ()
          .then( res => {
            if (res.total == 0) {
              //新用户
              userInfo.add( {
                  data: e.detail.userInfo
                })
                .then( res => {
                  wx.navigateTo({
                    url:'../add/add'
                  })
                })
            } else {
              console.log('已经存在了');
              wx.navigateTo({
                url:'../add/add'
              })
            }
          })
      }
    })
    // userInfo
    //   .where({
    //     _openid: g
    //   })
    // // table === collection
    // userInfo.add( {
    //   data: e.detail.userInfo
    // })
    // 把用户存到数据库中,解决database
    // 用户表,核心表
  },
  onLoad: function() {
    userInfo
      .get()
      .then(res => {
        console.log(res);
        this.setData({
          userList: res.data
        })
      })
  }
})