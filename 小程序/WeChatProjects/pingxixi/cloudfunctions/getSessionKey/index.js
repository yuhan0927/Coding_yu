// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // 捕获代码错误
  try {
    const { code } = event;
    const weixinRes = await getSessionKey(code);
    // 保存在服务器的一个信息
    // 返回 session key
    return {
      code
    }
  } catch (error) {
    return {
      error
    }
  }
}