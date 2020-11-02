// components/models/single-image/single-image.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    linkDetail: function (e) {
      wx.navigateTo({
        url: '/pages/good-detail/detail?name=海尔&id=22',
        success: function (res) {
          res.eventChannel.emit('detail', {id: 2})
        }
      })
    }
  }
})
