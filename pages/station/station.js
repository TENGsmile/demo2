Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderData: [],

  },
  getOthersList(en) {
    let that = this;
    if (en == "station") {
      var Url = "http://192.168.2.169:8081/ccsactcom/weixinShowStation";


    }
    wx.request({
      url: Url,
      success(res) {
        console.log(res.data);
        that.setData({
          orderData: res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let en = options.en;
    console.log(en);
    this.getOthersList(en);
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