//index.js
//获取应用实例
const app = getApp()
const GameManager = require('./game.manager')

Page({
  data: {
    score: 0,
    highscore: 0,
    grids:[]
  },
  gameManager: null,
  onLoad: function () {
    this.gameManager = new GameManager(4);
    this.setData({
      grids: this.gameManager.setup()
    })
  }
})
