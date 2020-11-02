// pages/manage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    long: '',
    lat: '',
    chooseLocationMsg: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this
    wx.getLocation({
      type: 'gcj02',
      altitude: 'true',
      isHighAccuracy: true,
      success (res) {
        console.log(res, '0000')
        _this.setData({
          long: res.longitude,
          lat: res.latitude
        })
      }
    })
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

  },
  openMap: function () {
    const _this = this
    wx.chooseLocation({
      latitude: _this.data.lat,
      longitude: _this.data.long,
      success (res) {
        console.log(res, '====')
        _this.setData({
          chooseLocationMsg: `long:${res.longitude}, lat:${res.latitude}`
        })
      }
    })
  }
})