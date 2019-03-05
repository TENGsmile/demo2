// pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */

  data: {

  },
  onGotUserInfo(e) {
    wx.authorize({
      scope: "scope.userInfo",
      success() {
        wx.getUserInfo({
          success: res => {


            // 可以将 res 发送给后台解码出 unionId
            app.globalData.userInfo = res.userInfo//授权后获得微信号的相关信息如昵称，头像等！
          }
        })
      }
    })
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