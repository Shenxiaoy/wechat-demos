// pages/shopCart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [
      {
        skuCode: '939485',
        name: '红富士苹果',
        desc: '抠搜的受到了粉丝的',
        price: 45
      },
      {
        skuCode: '9394893',
        name: '香蕉巴拉',
        desc: '又大又甜邮递',
        price: 567
      },
      {
        skuCode: '93948339',
        name: '香蕉巴拉',
        desc: '又大又甜邮递',
        price: 567
      },
      {
        skuCode: '9395489',
        name: '香蕉巴拉',
        desc: '又大又甜邮递',
        price: 567
      },
      {
        skuCode: '9394789',
        name: '香蕉巴拉',
        desc: '又大又甜邮递',
        price: 567
      }
    ],
    goodsChecked: [],
    allChecked: false
  },
  handleShopCheck: function (e) {
    console.log(e, 'test')
    const skuCode = e.target.dataset.item.skuCode
    if (this.data.goodsChecked.includes(skuCode)) {
      const index = this.data.goodsChecked.indexOf(skuCode)
      this.data.goodsChecked.splice(index, 1)
    } else {
      this.data.goodsChecked.push(skuCode)
    }
    this.setData({
      goodsChecked: this.data.goodsChecked,
      allChecked: this.data.goodsChecked.length === this.data.goods.length ? true : false
    })
  },
  // 全选 // 全不选
  handleAllChecked () {
    let status = this.data.allChecked
    if (status) {
      this.setData({
        goodsChecked: []
      })
    } else {
      const list = this.data.goods.map(item => item.skuCode)
      this.setData({
        goodsChecked: list
      })
    }
    status = !status
    this.setData({
      allChecked: status
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