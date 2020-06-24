// pages/fabu1/fabu1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
        // console.log('这是获取的token',that.data.token)
      },
      fail() {
        that.gettoken()
        // that.access_token()
      }
    })
    that.getxuqiufabudan()
  },

  getxuqiufabudan() {
    const that = this
    wx.request({
      url: 'http://124.71.106.176:8080/ierp/kapi/sys/kded_demand_close/query?access_token=PUPDtkjMydOrJ4kzUejoRrfuUaHLtwlan99pVGQTSioXIOXjK4U1ToPvhIThTRvrvHVue2B3fGQOD3ibU2SMRxLnKdO8bXm6ew91ZS45FYmFA2RyI9JaDtpNOugXXVJi&select=number,name,describeSelect : id,billno,company_name,Contexts,phone_num,parent_id,billstatus,data_status,entry_accept.type_person,entry_accept.person_level,entry_accept.price,entry_accept.person_name,entry_accept.work_hours, org&filter=&orderby=id',
      success(res) {
       
        console.log('这是需求发布单的查询接口', res)
      }
    })
  },
})