// components/models/waterfall-list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    distance: Number,
    isFirstPage: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    waterFall: false,
    list: [
      {
        url: '',
        title: '斗志白嫖',
        descri: '你需要的却不能够',
        price: 8,
        remark: '月销售100+'
      },
      {
        url: '',
        title: '溜达溜达',
        descri: '一口脆，一口香味道刚刚好，你看看来来来嗯天ddddddddd天',
        price: 8,
        remark: '月销售100+'
      },
      {
        url: '',
        title: '溜达溜达',
        descri: '一口脆，一口香味道刚刚好，你看看来来来嗯天天',
        price: 8,
        remark: '月销售100+'
      },      {
        url: '',
        title: '斗志白嫖',
        descri: '你需要的却不能够',
        price: 8,
        remark: '月销售100+'
      },
      {
        url: '',
        title: '溜达溜达',
        descri: '一口脆，一口香味道刚刚好，你看看来来来嗯天dddsdfsdfsdfsfdsdddddd天',
        price: 8,
        remark: '月销售100+'
      },
      {
        url: '',
        title: '溜达溜达',
        descri: '一口脆，一口香味道刚刚好，你看看来来来嗯天dddsdfsdfsdfsfdsdddddd天',
        price: 8,
        remark: '月销售100+'
      },      {
        url: '',
        title: '溜达溜达',
        descri: '一口脆，一口香味道刚刚好，你看看来来来嗯天dddsdfsdfsdfsfdsdddddd天',
        price: 8,
        remark: '月销售100+'
      },
      {
        url: '',
        title: '溜达溜达',
        descri: '一口脆，一口香味道',
        price: 8,
        remark: '月销售100+'
      },
      {
        url: '',
        title: '溜达溜达',
        descri: '一口脆，一口香味道刚刚好，你看看来来来嗯天天',
        price: 8,
        remark: '月销售100+'
      },      {
        url: '',
        title: '斗志白嫖',
        descri: '你需要的却不能够开sfsfsfdsdf始看萨克斯，练练手',
        price: 8,
        remark: '月销售100+'
      },
      {
        url: '',
        title: '溜达溜达',
        descri: '一口脆，一口香vvvvvvvvvvvvvvvvvv味道刚',
        price: 8,
        remark: '月销售100+'
      },
      {
        url: '',
        title: '溜达溜达',
        descri: '一口脆，一口香味道刚',
        price: 8,
        remark: '月销售100+'
      },
      {
        url: '',
        title: '溜达溜达',
        descri: '一口脆，一口香vvvv味道刚',
        price: 8,
        remark: '月销售100+'
      },
    ],
    leftList: [
    ],
    rightList: [
    ],
    barStatusHeight: wx.getSystemInfoSync().statusBarHeight,
    toph: 0,
    tabId: '1',
    tabs: [
      {
        name: '饮品',
        id: '1',
        link: ''
      },
      {
        name: '披萨',
        id: '2',
        link: ''
      },
      {
        name: '蔬菜',
        id: '3',
        link: ''
      }
    ]
  },
  attached () {
    this.configWaterFallList(this.data.list)
    if (this.data.distance) {
      this.setData({
        toph: this.data.distance
      })
    } else if (this.data.isFirstPage == true) {
      console.log(111)
      this.setData({
        toph: this.data.barStatusHeight + 44
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 分配瀑布流列表数据
    configWaterFallList (list) {
      let left = []
      let right = []
      list.forEach((item, k) => {
        if (k%2 === 0) {
          right.push(item)
        } else {
          left.push(item)
        }
      })
      this.setData({
        leftList: left,
        rightList: right
      })
    },
    tabsClick: function (event) {
      wx.request({
        url: 'https://api.shenxiaoyu.cn/learn/test/testStr',
      })
      this.setData({
        tabId: event.target.id
      })
    }
  }
})
