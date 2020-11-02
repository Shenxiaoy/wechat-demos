// pages/categoryList/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [
      {
        name: '水果',
        key: 'shuigou',
        children: []
      },
      {
        name: '蔬菜',
        key: 'shucai',
        children: []
      },
      {
        name: '干果',
        key: 'ganguo',
        children: []
      },
      {
        name: '蔬菜0',
        key: 'shucai',
        children: []
      },
      {
        name: '蔬菜09',
        key: 'shucai',
        children: []
      },
      {
        name: '蔬菜90',
        key: 'shucai',
        children: []
      },
      {
        name: '蔬菜s',
        key: 'shucai',
        children: []
      },
      {
        name: '蔬菜d',
        key: 'shucai',
        children: []
      },
      {
        name: '蔬菜ff',
        key: 'shucai',
        children: []
      },
      {
        name: '蔬菜vv',
        key: 'shucai',
        children: []
      },
      {
        name: '蔬菜bv',
        key: 'shucai',
        children: []
      },
      {
        name: '蔬菜de',
        key: 'shucai',
        children: []
      },
      {
        name: '蔬菜xz',
        key: 'shucai',
        children: []
      },
      {
        name: '蔬菜5555',
        key: 'shucai',
        children: []
      },
      {
        name: '蔬菜111',
        key: 'shucai',
        children: []
      },
      {
        name: '蔬菜222',
        key: 'shucai',
        children: []
      },
      {
        name: '肉类1',
        key: 'shucai',
        children: []
      },
      {
        name: '肉类2',
        key: 'shucai',
        children: []
      },
      {
        name: '肉类3',
        key: 'shucai',
        children: []
      }
    ],
    menuSeletedId: '',
    itemList: [
      1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1
    ]
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

  },

  chooseCategory (event) {
    const id = event.target.dataset.item.name
    this.setData({
      menuSeletedId: id
    })
  }
})