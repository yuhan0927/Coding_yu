// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList:false,
    carts:[],
    selectAllStatus:true,
    totalPrice:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    setTimeout( () => {
      this.setData({
        hasList: true,
        carts:[
          { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.8, selected: true },
          { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, selected: true }
        ]
      })
      this.getTotalPrice()
    },1000)
  },

  selectAll() {
    let selectAllStatus = this.data.selectAllStatus
    selectAllStatus = !selectAllStatus
    let carts = this.data.carts
    for (let i=0; i<carts.length;i++) {
      carts[i].selected = selectAllStatus
    }
    this.setData({
      selectAllStatus:selectAllStatus,
      carts:carts
    })
    this.getTotalPrice()
  },

  getTotalPrice() {
    let carts = this.data.carts
    let total = 0
    for (let i=0; i<carts.length;i++) {
      if (carts[i].selected === true){
        total += carts[i].price*carts[i].num
      }
    }
    this.setData({
      totalPrice:total.toFixed(2)
    })
  },
  addCount(e) {
    let carts = this.data.carts
    let index = e.target.dataset.index
    carts[index].num+=1
    this.setData({
      carts:carts
    })
    this.getTotalPrice()
  },
  minusCount(e){
    let index = e.target.dataset.index
    let carts = this.data.carts
    if(carts[index].num > 1){
      carts[index].num-=1
      this.setData({
        carts:carts
      })
      this.getTotalPrice()
    }
  },
  deleteList(e){
    let carts = this.data.carts
    carts.splice(e.target.dataset.index,1)
    this.setData({
      carts:carts
    })
    this.getTotalPrice()
  },
  selectList(e){
    let carts = this.data.carts
    let index = e.target.dataset.index
    carts[index].selected = ! carts[index].selected
    for (let i=0; i<carts.length;i++){
      if(carts[i].selected === false){
        this.setData({
          selectAllStatus:false
        })
      }
    }
    this.setData({
      carts:carts
    })
    this.getTotalPrice()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})