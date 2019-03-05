
App({
  onLaunch: function () {
    // 展示本地存储能力
   // var logs = wx.getStorageSync('logs') || []
    // 登录
    var that = this
    wx.login({
      success: function (res) {
        if (res.code) {
          var d = that.globalData;//这里存储了appid、secret、token串  
          var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
          wx.request({
            url: l,
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
            // header: {}, // 设置请求的 header  
            success: function (res) {
              console.log("这是openId+++++" + res.data.openid);//用户在小程序的唯一标识可用于后台存储
              console.log("这是session_key+++++" + res.data.session_key);//可与其他参数解码得到用户更隐私的信息如手机号
              wx.setStorageSync('user', res.data.openid);//缓存openid  
            }
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
   
    //检查是否已授权
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              
              wx.reLaunch({
                url: '/pages/canvas/canvas',
              })
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo//授权后获得微信号的相关信息如昵称，头像等！
            }
          })
        
        } else {
          console.log("这是授权页")
        
        }
      }
    })
  },
  //全局变量
  globalData: {
    userInfo: null,
    urlPath: "https://www.baidu.com/",
    openid: '',
    appid: "wxd5dadfcadee6b34a",//小程序的标识
    secret: "2a27ad48ec471a44f17665f264042d49",//小程序密钥（小程序管理后台获得）
    map:"VACBZ-OXXCO-E2YWW-S4ZF4-J7KS5-MOBOK"//微信小程序获取地理位置需要的密钥
  }
}) 

