// components/models/tabsList/tabsList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    distance: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabId: '1',
    barStatusHeight: wx.getSystemInfoSync().statusBarHeight,
    toph: 0,
    tabs: [
      {
        name: '点菜',
        id: '1',
        link: ''
      },
      {
        name: '评价',
        id: '2',
        link: ''
      },
      {
        name: '详情',
        id: '3',
        link: ''
      }
    ],
    itemList: [
      1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabsClick: function (event) {
      wx.request({
        url: 'https://api.shenxiaoyu.cn/learn/test/testStr',
      })
      this.setData({
        tabId: event.target.id
      })
    }
  },
  attached () {
    if (this.data.distance) {
      this.setData({
        toph: this.data.distance
      })
    }
  }
})
