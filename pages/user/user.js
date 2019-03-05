//index.js
//获取应用实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  tapMenuItem: function(event) {
    if (event.currentTarget.dataset.hi == "record") {
      console.log("这是录音授权")
      wx.authorize({
        scope: "scope.record",
        success() {
          // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
          console.log("这是录音授权2")
          wx.startRecord()
        }
      })
    }
    if (event.currentTarget.dataset.hi == "camera") {
      console.log("这是摄像头授权")
      wx.authorize({
        scope: "scope.camera",
        success() {
          // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
          console.log("这是录音授权2")
    
        }
      })
     
    }
    if (event.currentTarget.dataset.hi == "install") {
      wx.openSetting({
        success(res) {
          res.authSetting = {}
        }
      })

    }
  },
  onLoad: function() {
    var that = this;
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              that.setData({
                userInfo: res.userInfo,
              });

            }
          })

        } else {
          wx.reLaunch({
            url: '/pages/login/login',
          })
        }
      }
    })


    that.setData({
      userInfo: app.globalData.userInfo,
      list: [{
        "cn": "钱包",
        "en": "wallet"
      }, {
        "cn": "录音",
        "en": "record"
      }, {
        "cn": "摄像头",
        "en": "camera"
      }, {
        "cn": "设置",
        "en": "install"
      }]
    });

  }
})