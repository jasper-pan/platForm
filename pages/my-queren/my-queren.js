// pages/fabu1/fabu1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: '',
    b: '',
    xuqiufabudan: '',
    fabuList: [],
    token: '',
  },

  onLoad: function (options) {
    const that = this

    //验证token
    wx.getStorage({
      key: 'token',
      success: function (res) {
        // console.log('这是获取的token',res)
        that.setData({
          'token': res.data
        })
        console.log('这是获取的token', that.data.token)


        that.getxuqiufabudan()


      },
      fail() {
        that.gettoken()
      },
    })

  },
  //获取token1
  gettoken() {
    const that = this
    wx.request({
      url: 'http://124.71.106.176:8080/ierp/api/getAppToken.do',

      data: {
        "appId": "kded_mad",
        "appSecuret": "1234567",
        "tenantid": "cosmic-simple",
        "accountId": "679008189806542848",
        "language": "zh_CN"
      },
      method: "POST",
      success(res) {
        // console.log('这是打印的',res)
        that.setData({
          a: res.data.data.app_token
        })
        console.log('这是打印的a1', that.data.a)
        that.access_token()
      },
    })
  },
  //获取token2
  access_token() {
    const that = this
    console.log('这是打印的a2', that.data.a)
    wx.request({
      url: 'http://124.71.106.176:8080/ierp/api/login.do',
      data: {
        "user": "13059509842",
        "apptoken": that.data.a,
        "tenantid": "cosmic-simple",
        "accountId": "679008189806542848",
        "usertype": "Mobile"
      },
      method: "POST",
      success(res) {
        // console.log('这是打印的2', res)
        that.setData({
          b: res.data.data.access_token
        })
        wx.setStorage({
          key: 'token',
          data: that.data.b,
        })

      },
    })
  },
  getxuqiufabudan() {
    const that = this
    wx.request({
      url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_demanded_public/query?access_token=" + that.data.token + "&select=id,billno,org,org.name,billstatus,data_status,respons_person,phone,project_name,sector,describe,deliver_address,by_way,product,prodcut_modular,project_type,project_status,start_time1,end_time,partner_level,admindivisionfield,belong_sector,advantage_area,successful_cases,finish_time",
      success(res) {
        that.setData({
          xuqiufabudan: res.data.data.rows
        })
        console.log('这是需求发布单的查询接口', res.data.data.rows)
      }
    })
  },
})