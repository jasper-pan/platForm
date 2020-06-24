Page({


  data: {
    pingjia: '',
    value: 2.5,
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
    that.getpingjia()
  },

  getpingjia() {
    // const that = this
    wx.request({
      url: 'http://124.71.106.176:8080/ierp/kapi/sys/kded_comment_info/save?access_token=PUPDtkjMydOrJ4kzUejoRrfuUaHLtwlan99pVGQTSioXIOXjK4U1ToPvhIThTRvrvHVue2B3fGQOD3ibU2SMRxLnKdO8bXm6ew91ZS45FYmFA2RyI9JaDtpNOugXXVJi&number=DC-200608-0016',
      data: {
        "data": {
          "billno": "DC-200608-0016",
          "billstatus": "C",
          "creator": {
            "id": 870950586781007872,
            "number": "ID-000001",
            "name": {
              "zh_TW": "曾火剛",
              "zh_CN": "曾火刚"
            },
            "masterid": 870950586781007872
          },
          "modifier": {
            "id": 870950586781007872,
            "number": "ID-000001",
            "name": {
              "zh_TW": "曾火剛",
              "zh_CN": "曾火刚"
            },
            "masterid": 870950586781007872
          },
          "auditor": {
            "id": 870950586781007872,
            "number": "ID-000001",
            "name": {
              "zh_TW": "曾火剛",
              "zh_CN": "曾火刚"
            },
            "masterid": 870950586781007872
          },
          "auditdate": "2020-06-08 14:21:24",
          "modifytime": "2020-06-08 14:21:22",
          "createtime": "2020-06-08 14:20:54",
          "org": {
            "id": 100000,
            "number": "cosmic-simple",
            "name": {
              "zh_CN": "cosmic-simple"
            },
            "masterid": 100000
          },
          "company_name": {
            "id": 890525767572652032,
            "number": "PI-0002",
            "name": {
              "zh_TW": "發發科技有限公司",
              "zh_CN": "发发科技有限公司"
            },
            "status": "C",
            "creator": {
              "id": 870950586781007872,
              "number": "ID-000001",
              "name": {
                "zh_TW": "曾火剛",
                "zh_CN": "曾火刚"
              },
              "masterid": 870950586781007872
            },
            "modifier": {
              "id": 870950586781007872,
              "number": "ID-000001",
              "name": {
                "zh_TW": "曾火剛",
                "zh_CN": "曾火刚"
              },
              "masterid": 870950586781007872
            },
            "enable": "1",
            "createtime": "2020-05-13 16:33:26",
            "modifytime": "2020-05-13 16:35:44",
            "masterid": 890525767572652032,
            "level": "C",
            "area": {
              "id": 890500438405678080,
              "number": "IND-0003",
              "name": {
                "zh_TW": "畜牧業",
                "zh_CN": "畜牧业"
              },
              "masterid": 890500438405678080
            },
            "in_time": "2020-05-13 00:00:00",
            "address": "",
            "rep_person": "吴发发",
            "contacts": "小发",
            "bus_license": "569878717581750",
            "phone": "+8613059509842",
            "star_product": "珠穆纳玛峰修电梯",
            "in_compnay": {
              "id": 100000,
              "number": "cosmic-simple",
              "name": {
                "zh_CN": "cosmic-simple"
              },
              "masterid": 100000
            }
          },
          "contexts": "司婆婆",
          "phone_num": "+8613059509842",
          "entry_accept": [
            {
              "id": "0UOC76H7Y3J5",
              "seq": 1,
              "type_person": {
                "id": 890514719851413504,
                "number": "AT-0001",
                "name": {
                  "zh_TW": "開發顧問",
                  "zh_CN": "开发顾问"
                },
                "masterid": 890514719851413504
              },
              "person_level": "B",
              "price": 999.0000000000,
              "person_name": "路痴",
              "work_hours": 77
            },
            {
              "id": "0UOC76H7Y3J6",
              "seq": 2,
              "type_person": {
                "id": 890514798385562624,
                "number": "AT-0002",
                "name": {
                  "zh_TW": "實施顧問",
                  "zh_CN": "实施顾问"
                },
                "masterid": 890514798385562624
              },
              "person_level": "B",
              "price": 8888.0000000000,
              "person_name": "随风",
              "work_hours": 99
            }
          ],
          "parent_id": "0UOC4237ALR4",
          "amount": 20000.0000000000,
          "other_information": "测试",
          "data_status": "B"

        }


      },
      success(res) {
        
        console.log('这是需求发布单的查询接口', res)
      }
    })
  },
})