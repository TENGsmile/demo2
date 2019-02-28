Page({

  /**
   * 页面的初始数据
   */
  data: {
    //首页导航数据
    navList:[],
    //得点击首页导航菜单的索引
    currentIndexNav:0,
    //轮播图数据
    swiperList: ["../image/lun1.jpg", "../image/lun2.jpg", "../image/lun3.jpg"],
    //视频数据
    videosList: [{ "cn": "订单信息", "en": "order", "count": "" }, { "cn": "网点信息", "en": "branch", "count": "" }, { "cn": "设备信息", "en": "machine", "count": "" }, { "cn": "会员信息", "en": "member", "count": "" }, { "cn": "产品信息", "en": "product", "count": "" }, { "cn": "站点信息", "en": "station", "count": ""}],
    count: [],
    newLists:[]

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
    let that = this;
    wx.request({
      url: "http://192.168.60.7:8081/ccsactcom/weixinShow",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          count: res.data
        })
        var newList=[];
       
          for (var index in that.data.videosList) {
            for (var index in that.data.count) {
            if (index==index){
              that.data.videosList[index].count = that.data.count[index]
            
            }
              newList.push(that.data.videosList[index])           
          }
        }
       
        that.setData({
          newLists: newList
        })
        
        
      
      },
      fail(){
        console.log("访问后台失败")
      }
    })
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