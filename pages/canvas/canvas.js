const app = getApp();
var QQMapWX = require('../utils/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({  
  data: {
    userInfo: {},
    province: '',
    city: '',
    latitude: '',
    longitude: '',
    addRess:''
  },
  onLoad: function(e) {

    qqmapsdk = new QQMapWX({
      key: 'VACBZ-OXXCO-E2YWW-S4ZF4-J7KS5-MOBOK' //这里自己的key秘钥进行填充
    });
    this.getLocation(); //获取地理位置信息
    //获取头像昵称
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                userInfo: res.userInfo,
              });
              console.log(this.data.userInfo.avatarUrl)
              var u = this.data.userInfo.avatarUrl;
              var s = this.data.userInfo.nickName;
              var m = this.data.province +" "+ this.data.city
              var allM=this.data.addRess
              const ctx = wx.createCanvasContext('myCanvas')
              ctx.save()
              ctx.beginPath()
              ctx.drawImage("222.jpg", 0, 0, 375, 500)
              ctx.arc(195, 40, 25, 0, 2 * Math.PI)
              ctx.clip()
              ctx.drawImage(u, 170, 15, 50, 50)             
              ctx.restore()
              ctx.save()
              ctx.rect(280, 410, 85, 80)
              ctx.clip()
              ctx.drawImage("erweima.jpg", 275, 400, 100, 100)
              ctx.restore()
              ctx.setFontSize(20)
              ctx.setTextAlign('center')   // 文字居中       
              ctx.setFillStyle('pink')  // 文字颜色：黑色    
              ctx.fillText(s, 190, 90)
              // ctx.setFontSize(20)
              // ctx.setTextAlign('center')   // 文字居中       
              // ctx.setFillStyle('pink')  // 文字颜色：黑色    
              // ctx.fillText(m, 120, 450)
              ctx.setFontSize(20)
              ctx.setTextAlign('center')   // 文字居中       
              ctx.setFillStyle('pink')  // 文字颜色：黑色    
              ctx.fillText(allM, 80, 450,120)
              ctx.setFontSize(20)
              ctx.setTextAlign('center')   // 文字居中       
              ctx.setFillStyle('pink')  // 文字颜色：黑色    
              ctx.fillText("电话:17688736152", 80, 480, 120)
              ctx.stroke() 
              ctx.draw()
            }
          })
        }
      }
    })
  },
  //图片保存
  savetup: function() {
    wx.canvasToTempFilePath({  //把当前画布指定区域的内容导出生成指定大小的图片。在 draw() 回调里调用该方法才能保证图片导出成功。     
      x: 0, //指定的画布区域的左上角横坐标
      y: 0,
      width: this.data.widWidth, //指定的画布区域的宽度
      height: this.data.widHeight,
      destWidth: 750, //输出的图片的宽度
      destHeight: 1354,
      canvasId: 'myCanvas',
      success: function(res) {         //调取小程序当中获取图片                
        //console.log(res.tempFilePath);
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            wx.showModal({
              title: '存图成功',
              content: '图片成功保存到相册了，去发圈噻~',
              showCancel: false,
              confirmText: '好哒',
              confirmColor: '#72B9C3',
              success: function(res) {
                if (res.confirm) {
                  console.log('用户点击确定');
                }
              }
            })
          }
        })
      },
      fail: function(res) {
        console.log(res)
      }
    })
  },
  //获取经纬度
  getLocation: function() {
    let vm = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy;
        vm.getLocal(latitude, longitude)
      },
      fail: function(res) {
        console.log('fail' + JSON.stringify(res))
      }
    })
  },
  // 获取当前地理位置
  getLocal: function(latitude, longitude) {
    let vm = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function(res) {
        console.log(JSON.stringify(res));
        let province = res.result.ad_info.province
        let city = res.result.ad_info.city
        vm.setData({
          addRess: res.result.address,
          province: province,
          city: city,
          latitude: latitude,
          longitude: longitude
        })

      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res) {
        // console.log(res);
      }
    });
  }


})