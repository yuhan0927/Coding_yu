const app = getApp()

Page({
  data: {
    files: []
  },
  chooseImage() {
    let that = this
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        // success
        console.log(res)
        that.setData({
          files:that.data.files.concat(res.tempFilePaths)
        })

        for(let i = 0; i < res.tempFilePaths.length; i++){
          const filePath = res.tempFilePaths[i]
          let a = filePath.lastIndexOf('.')
          let b = filePath.lastIndexOf('.',a-1)
          let c = filePath.substring(b+1,a)
          const cloudPath = c + filePath.match(/\.[^.]+?$/)
          wx.cloud.uploadFile({
          filePath,
          cloudPath,
          success(res) {
            console.log('上传成功',res)
          },
          fail(err) {
            console.log('上传失败',err)
          }
        })
      }
      
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  previewImage(e) {
    console.log(e)
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: this.data.files,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})