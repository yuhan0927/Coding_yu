//index.js
//获取应用实例
var WxParse = require('../../wxParse/wxParse.js')
const app = getApp()

Page({
  data: {
  },
  //事件处理函数

  onLoad: function () {
    var article = '<div class="langs_en">They can also cause your imagination to do some funny things at times. </div><div class="langs_cn">我一直秉持着读书能够开阔视野、直抵内心、丰满灵魂这一观点。</div><div class="langs_en">They can also cause your imagination to do some funny things at times. </div><div class="langs_cn">在书中有些描写有趣的事情还会激发你的想象力。</div><div class="langs_en">At that moment in my imagination I leapt into the story, grabbed him by the arm and told him: “It’s everywhere! It’s everywhere!”</div><div class="langs_cn">看到此处，我仿佛也纵身如故事中，抓着他的手臂，对他说，“到处都是！无处不在！”</div><p><img src="https://n1image.hjfile.cn/mh/2019/05/25/2d29d324a55c10a976432fb80f04b7e2.jpg" style="height: 515px; width: 700px;"></p><p class="langs_cn ><span style="color:#d3d3d3;">图片来源：视觉中国</span></p><div class="langs_en">“[The bill] does not say you can’t talk on the phone,” the bill’s sponsor, New York state senator John Liu, told the Guardian. “We’re talking about handheld devices … you can wait the five seconds to get to the other side.”</div><div class="langs_cn">“法案的发起人纽约州的议员John Liu在接受《卫报》采访时称，你不可以边走路边使用手机，当我们使用手持设备进行通话时，你可以等上5秒钟到路对面再说。</div><tbody><tr><td>2018年12月</td><td>作文真题</td><td>作文答案</td><td>阅读答案 </td></tr><tr><td>2018年12月</td><td>作文真题</td><td>作文答案</td><td>阅读答案 </td></tr><tr><td>2018年12月</td><td>作文真题</td><td>作文答案</td><td>阅读答案 </td></tr><tr><td>2018年12月</td><td>作文真题</td><td>作文答案</td><td>阅读答案 </td></tr></tbody>';
    var that = this;
    WxParse.wxParse('article', 'html', article, that, 5);

  }
})
