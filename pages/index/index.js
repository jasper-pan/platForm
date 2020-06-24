
// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:'',
    b:'',
    token:'',
    xiangmujieduancx:'',//项目阶段查询
    xuqiufabudan:'',
    fuwufangpinlunxinxisc: '',//服务方评论信息（删除）
    fuwufangpinlunxinxixz: '',//服务方评论信息（基础资料）（新增或修改）
    fuwufangpinglunxinx: '',//服务方评论信息（基础资料）（查询）
    fuwupinlunjigou: '',//服务方评论结构表（基础资料）（查询）
    xuiupinlunxinshanchu: '',//需求方评论信息（删除）
    xuqiupinlunjichuxz: '',//需求方评论信息    （基础资料）（新增或修改
    xuqiupinlunjiegou: '',//需求方评论结构表
    xuqiupinlunjichu:'',//需求评论信息查询
    xuqiuliebiao:'',//需求列表
    xuqiudanchaxun:'',//需求单查询
    waibaofangshi:'',//外包方式
    chanpinleixing:'',//产品类型
    xiangmuleixing:'',//项目类型
    suoshuhangye:'',//所属行业
    chengjiedan:'',//承接单
    isCollected: false,
    currentIndex: 0,
    biaoqian:0,
    select: false,
    quanbu1:'全部',
    lingyu1:'领域',
    hangye1:'行业',
    xiangmujieduan1:'项目阶段',
    gengduo1:'更多',
    tihuoWay: '项目阶段',
    lingyu: '外包方式',
    hangye: '产品类型',
    xiangmu: '项目类型',
    gengduo: '实施地点',
    dialogShow: false,
    showOneButtonDialog: false,
    buttons: [{ text: '取消' }, { text: '确定' }],
    oneButton: [{ text: '确定' }],
    showModal: false
  
  },
  handleCollection() {
    let isCollected = !this.data.isCollected
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected
    })
    //提示用户
    wx.showToast({
      title: isCollected ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
  },
  bbiaoqian1(e) {
    const that = this
   
    that.setData({
      biaoqian1: e.currentTarget.dataset.index,
      select1: !this.data.select1
    })
    console.log(this.data.biaoqian)
  },
  bbiaoqian2(e) {
    const that = this

    that.setData({
      biaoqian2: e.currentTarget.dataset.index,
      select2: !this.data.select2
    })
    console.log(this.data.biaoqian)
  },
  bbiaoqian3(e) {
    const that = this

    that.setData({
      biaoqian3: e.currentTarget.dataset.index,
      select3: !this.data.select3
    })
    console.log(this.data.biaoqian)
  },
  bbiaoqian4(e) {
    const that = this

    that.setData({
      biaoqian4: e.currentTarget.dataset.index,
      select4: !this.data.select4
    })
    console.log(this.data.biaoqian)
  },
  bbiaoqian5(e) {
    const that = this

    that.setData({
      biaoqian5: e.currentTarget.dataset.index,
      select5: !this.data.select5
    })
    console.log(this.data.biaoqian)
  },
  tiaozhuan() {
    wx.navigateTo({
      url: '../sosuo/sosuo',
    })
  },
  tiaozhuan2() {
    wx.navigateTo({
      url: '../qiyexiangqing/qiyexiangqing',
    })
  },
  tiaozhuan3(){
    wx.navigateTo({
      url: '../xuqiu/xuqiu',
    })
  },
  //swiper切换时会调用
  pagechange: function (e) {
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 3
      this.setData({
        currentIndex: currentPageIndex
      })
    }
  },
  //用户点击tab时调用
  titleClick: function (e) {
    let currentPageIndex =
      this.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.idx
      })
  },
  
  bindShowMsg() {
    
  },
  btn: function () {
    this.setData({
      showModal: true
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: 'name',
      lingyu: 'name',
      hangye: 'name',
      xiangmu: 'name',
      gengduo: 'name',
      quanbu1: 'name',
      lingyu1: 'name',
      hangye1: 'name',
      xiangmujieduan1: 'name',
      gengduo1: 'name',
      select: false
    })
  },
 
  openConfirm: function () {
    this.setData({
      dialogShow: true
    })
  },
  tapDialogButton(e) {
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },
  tapOneDialogButton(e) {
    this.setData({
      showOneButtonDialog: true
    })
  },
  // 禁止屏幕滚动
  preventTouchMove: function () {
  },

  // 弹出层里面的弹窗
  ok: function () {
    this.setData({
      showModal: false
    })
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
         console.log('这是获取的token',that.data.token)


         that.getxiangmujieduan()
         that.getchanpinleixing()
         that.getwaibaofangshi()
         that.getxiangmuleixing()
         that.getsuoshuthangye()
         that.getchengjiedanchaxun()
         that.getxuqiufabudan()
         that.getguwenyewu()
         that.getguwenxingming()
         that.getguwenleixing()
         that.gethuobanjigou()
         that.getfuwuchengjiedan()
         that.getxuqiudanchaxun()
         that.getxuqiuliebiao()
         that.getxuqiupinlunjichu()
         that.getxuqiupinlunjiegou()
         that.getxuqiupinlunjichuxz()
         that.getxuiupinlunxinshanchu()
         that.getfuwupinlunjigou()
         that.getfuwufangpinglunxinx()
         that.getfuwufangpinlunxinxixz()
         that.getfuwufangpinlunxinxisc()

       },
       fail() {
          that.gettoken()
        // that.access_token()
       },
     })

    // that.getxiangmujieduan()
    // that.getchanpinleixing()
    // that.getwaibaofangshi()
    // that.getxiangmuleixing()
    // that.getsuoshuthangye()
    // that.getchengjiedanchaxun()
    // that.getxuqiufabudan()
    // that.getguwenyewu()
    // that.getguwenxingming()
    // that.getguwenleixing()
    // that.gethuobanjigou()
    // that.getfuwuchengjiedan()
    // that.getxuqiudanchaxun()
    // that.getxuqiuliebiao()
    // that.getxuqiupinlunjichu()
    // that.getxuqiupinlunjiegou()
    // that.getxuqiupinlunjichuxz()
    // that.getxuiupinlunxinshanchu()
    // that.getfuwupinlunjigou()
    // that.getfuwufangpinglunxinx()
    // that.getfuwufangpinlunxinxixz()
    // that.getfuwufangpinlunxinxisc()
  },



//获取token1
  gettoken() {
    const that = this
    wx.request({
      url: 'http://124.71.106.176:8080/ierp/api/getAppToken.do',
      
      data:{
        "appId": "kded_mad",
        "appSecuret": "1234567",
        "tenantid": "cosmic-simple",
        "accountId": "679008189806542848",
        "language": "zh_CN"
      },
      method:"POST",
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
    const that =this
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
  
//项目阶段查询接口  ok
getxiangmujieduan ()  {
  
  const that = this
  console.log('这个是啊啊啊啊啊啊',that.data.token)
  wx.request({
    url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_project_stage/query?access_token=" + that.data.token + "&select=number,name,describe&filter=&orderby=id",
    success(res) {
      that.setData({
        xiangmujieduan: res.data.data.rows
      })
      console.log('这个是项目阶段', res.data.data.rows)

    }
  })
},
//外包方式接口查询  ok
getwaibaofangshi() {
  const that =this
  wx.request({
    url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_outsource_mode/query?access_token=" + that.data.token  + "&select=number,name,description&filter=&orderby=id",
  success(res) {
    that.setData({
      waibaofangshi:res.data.data.rows
    })
    // console.log('这是外包方式接口返回',that.data.waibaofangshi);
  }
  })
},
//产品类型接口返回  ok
getchanpinleixing() {
  const that = this
    wx.request({
      url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_product_type/query?access_token=" + that.data.token  + "&select=number,    name,description&filter=&orderby=id",
      success(res) {
        that.setData({
          chanpinleixing: res.data.data.rows
        })
        // console.log('这是产品类型接口返回', that.data.chanpinleixing)
      }
    })
},
//项目类型接口返回  ok
getxiangmuleixing() {
    const that = this
    wx.request({
      url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_project_type/query?access_token=" + that.data.token  + "&select=number,name,description&filter=&orderby=id",
      success(res) {
        that.setData({
          xiangmuleixing: res.data.data.rows
        })
        // console.log('这是项目类型接口返回', that.data.xiangmuleixing)
      }
    })
},
//所属行业接口返回  ok
getsuoshuthangye () {
  const that = this
  wx.request({
    url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_industry/query?access_token=" + that.data.token  + "&select=number,name,description&filter=&orderby=id",
    success(res) {
      that.setData({
        suoshuhangye: res.data.data.rows
      })
      // console.log('这是所属行业接口返回',  res.data.data.rows)
    }
  })
},
//承接单查询接口返回   存疑
getchengjiedanchaxun() {
  const that = this
  wx.request({
    url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_service_undertake/query?access_token=" + that.data.token  + "&select=number,name,description&filter=&orderby=id",
  success(res) {
    // console.log('这是承接单查询接口返回',res)
  }
  })

},
//需求发布单查询接口  
getxuqiufabudan() {
  const that = this
  wx.request({
    url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_demanded_public/query?access_token=" + that.data.token+"&select=id,billno,org,org.name,billstatus,data_status,respons_person,phone,project_name,sector,describe,deliver_address,by_way,product,prodcut_modular,project_type,project_status,start_time1,end_time,partner_level,admindivisionfield,belong_sector,advantage_area,successful_cases,finish_time",
    success(res) {
      that.setData({
        xuqiufabudan: res.data.data.rows
      })
      // console.log('这是需求发布单的查询接口', res.data.data.rows)
    }
  })
},
//顾问业务领域接口
getguwenyewu() {
  const that = this
  wx.request({
    url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_adviser_bus_area/query?access_token=" + that.data.token + "&select=number,name,description&filter=&orderby=id",
    success(res) {
  // console.log('这是顾问业务领域接口返回',res)
    }
  })
},
//顾问姓名接口
getguwenxingming() {
  const that = this
  wx.request({
    url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_adviser_name/query?access_token=" + that.data.token + "&select=number,name,description&filter=&orderby=id",
  success(res) {
    // console.log('这是获取顾问姓名',res)
  }
  })
},
//顾问类型接口
getguwenleixing() {
  const that = this
  wx.request({
    url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_adviser_type/query?access_token=" + that.data.token + "&select=number,name,description&filter=&orderby=id",
    success(res) {
      // console.log('这是获取的顾问类型',res)
    }
  })
},
//伙伴机构接口 存疑
gethuobanjigou(){
  const that = this
  wx.request({
    url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_partner_institut/query?access_token=" + that.data.token + "&select=number,name,description&filter=&orderby=id",
    success(res){
      // console.log('这时获取的伙伴机构',res)
    }
  })
},
//服务承接单接口 存疑
getfuwuchengjiedan() {
  const that = this
  wx.request({
    url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_service_undertake/query?access_token=" + that.data.token + "&select=number,name,description&filter=&orderby=id",
    success(res) {
      // console.log('这是服务承接单获取的数据',res)
    }
  })
},
//需求单查询接口  存疑
getxuqiudanchaxun() {
  const that = this
    wx.request({
      url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_demand_close/query?access_token=" + that.data.token + "&select=number,name,description&filter=&orderby=id",
      method: "GET",
      success(res) {
        // console.log('这是需求单查询接口返回',res)
      }
    })
},
  
//需求列表接口  存疑
getxuqiuliebiao() {
  const that = this
    wx.request({
      url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_demand_close/save?access_token=" + that.data.token + "&number=DC-200608-0016",
      data: {
        "data": {
          "billno": "DC-200608-0016",
          "billstatus": "C",
          "creator": {
            "id": 870950586781007872,
            "masterid": 870950586781007872
          },
          "modifier": {
            "id": 870950586781007872,
            "masterid": 870950586781007872
          },
          "auditor": {
            "id": 870950586781007872,
            "masterid": 870950586781007872
          },
          "auditdate": "2020-06-08 14:21:24",
          "modifytime": "2020-06-08 14:21:22",
          "createtime": "2020-06-08 14:20:54",
          "org": {
            "id": 100000,
          },
          "company_name": {
            "id": 890525767572652032,
            "status": "C",
            "creator": {
              "id": 870950586781007872,
              "masterid": 870950586781007872
            },
            "modifier": {
              "id": 870950586781007872,
              "masterid": 870950586781007872
            },
            "enable": "1",
            "createtime": "2020-05-13 16:33:26",
            "modifytime": "2020-05-13 16:35:44",
            "masterid": 890525767572652032,
            "level": "C",
            "area": {
              "id": 890500438405678080,
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
                "masterid": 890514798385562624
              },
              "person_level": "B",
              "price": 8888.0000000000,
              "person_name": "随风",
              "work_hours": 99
            }
          ],
          "parent_id": "0UOC4237ALR4",//关联承接单id
          "amount": 20000.0000000000,
          "other_information": "测试",
          "data_status": "B"

        },
        "success": true,
        "errorCode": "success",
        "message": null
      },
      success(res) {
         console.log('这是需列表查询接口返回', res)
      }
    })
},
//需求方评论   不行
getxuqiuliebiao() {
  const that = this
    wx.request({
      url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_comment_struct_req/query?access_token=" + that.data.token+ "&select=number,name,description" + "&filter=&orderby=id",
      method:"GET",
      data:{
        


      },
      success(res) {
        // console.log('这是需列表查询接口返回', res)
      }
    })
},
//需求评论信息基础资料查询   未经授权的访问
getxuqiupinlunjichu() {
  const that = this
    wx.request({
      url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_comment_info/query?access_token=" + that.data.token + "Select: id, number,req_name,service_name,project_name,account,start_time,end_time,status,enable,answer_entry.comment_code,answer_entry.comment_name,answer_entry.text_answer, answer_entry.score",
      success(res) {
        // console.log('需求评论信息',res)
      }
    })
},
//需求方评论结构表    未经授权的访问
getxuqiupinlunjiegou() {
  const that = this
    wx.request({
      url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_comment_info/query?access_token=" + that.data.token + "Select: id, number,req_name,service_name,project_name,account,start_time,end_time,status,enable,answer_entry.comment_code,answer_entry.comment_name,answer_entry.text_answer, answer_entry.score",
      success(res) {
        // console.log('需求方评论结构表', res)
      }
    })
},
//需求方评论信息    （基础资料）（新增或修改） 未经授权的访问
getxuqiupinlunjichuxz() {
  const that = this
    wx.request({
      url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_comment_info/save?access_token=" + that.data.token + "number=DC-200608-0016",
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
        // console.log('需求方评论信息新增或修改 ',res)
      }
    })
},
//需求方评论信息（删除）    不行
getxuiupinlunxinshanchu() {
  const that = this
  wx.request({
    url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_comment_info/delete?access_token=" + that.data.token ,
    data: {
      "ids": ["870950586781007872"]
    },
    success(res) {
      // console.log('需求方评论信息（删除）', res)
    }
  })
},
//服务方评论结构表（基础资料）（查询） 不存在的属性
getfuwupinlunjigou(){
  const that = this
  wx.request({
    url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_comment_struct_ser/query?access_token=" + that.data.token + "&select=number,name,description&filter=&orderby=id",
    method:"GET",
    success(res){
      // console.log('服务方评论结构表（基础资料）（查询）',res)
    }
  })
},
//服务方评论信息（基础资料）（查询）  不存在的属性
getfuwufangpinglunxinx(){
  const that = this
  wx.request({
    url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_ser_comment_info/query?access_token=" + that.data.token + "&d,number,req_name,service_name,project_name,account,start_time,end_time,total_comment_score,status,enable,answer_entry.comment_code,answer_entry.comment_name,answer_entry.text_answer,answer_entry.score",
    success(res){
      // console.log('服务方评论信息（基础资料）（查询）',res)
    }
  })
},
//服务方评论信息（基础资料）（新增或修改） 不行
getfuwufangpinlunxinxixz(){
  const that = this
  wx.request({
    url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_ser_comment_info/save?access_token=" + that.data.token,
    data: {
      "data": {
        "id": 900659381257895936,
        "number": "SCI-200527-0014",
        "name": {},
        "status": "A",
        "creator": null,
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
        "createtime": null,
        "modifytime": "2020-05-27 16:09:25",
        "masterid": 900659381257895936,
        "req_code": "900652244012105728",
        "service_code": "900657091310518272",
        "account": 999999,
        "start_time": "2020-05-01 00:00:00",
        "end_time": "2020-05-31 00:00:00",
        "answer_entry": [
          {
            "FEntryID": 901348405178009600,
            "seq": 0,
            "comment_code": "CSS-0001",
            "comment_name": {
              "id": 890516622387707904,
              "number": "CSS-0001",
              "name": {
                "zh_TW": "收到客戶的需求是否已經清晰，請為需求的清晰度評分，5分為非常清晰。",
                "zh_CN": "收到客户的需求是否已经清晰，请为需求的清晰度评分，5分为非常清晰。"
              },
              "masterid": 890516622387707904
            },
            "score": 4,
            "text_answer": ""
          },
          {
            "FEntryID": 901348405178009601,
            "seq": 0,
            "comment_code": "CSS-0002",
            "comment_name": {
              "id": 890517988061479936,
              "number": "CSS-0002",
              "name": {
                "zh_TW": "項目交付過程中，過程管理是否嚴格按照要求執行？",
                "zh_CN": "项目交付过程中，过程管理是否严格按照要求执行？"
              },
              "masterid": 890517988061479936
            },
            "score": 1,
            "text_answer": ""
          },
          {
            "FEntryID": 901348405178009602,
            "seq": 0,
            "comment_code": "CSS-0003",
            "comment_name": {
              "id": 890518590824907776,
              "number": "CSS-0003",
              "name": {
                "zh_TW": "項目執行過程中。對項目的管理是否進行監控並分析？",
                "zh_CN": "项目执行过程中。对项目的管理是否进行监控并分析？"
              },
              "masterid": 890518590824907776
            },
            "score": 1,
            "text_answer": ""
          },
          {
            "FEntryID": 901348405178009603,
            "seq": 0,
            "comment_code": "CSS-0004",
            "comment_name": {
              "id": 890519159790632960,
              "number": "CSS-0004",
              "name": {
                "zh_TW": "雙方的合作流程是否按照公司的規定進行？",
                "zh_CN": "双方的合作流程是否按照公司的规定进行？"
              },
              "masterid": 890519159790632960
            },
            "score": 1,
            "text_answer": ""
          },
          {
            "FEntryID": 901348405178009604,
            "seq": 0,
            "comment_code": "CSS-0005",
            "comment_name": {
              "id": 890519704605556736,
              "number": "CSS-0005",
              "name": {
                "zh_TW": "是否嚴格按照公司的合作合同進行付款？",
                "zh_CN": "是否严格按照公司的合作合同进行付款？"
              },
              "masterid": 890519704605556736
            },
            "score": 1,
            "text_answer": ""
          },
          {
            "FEntryID": 901348405178009605,
            "seq": 0,
            "comment_code": "CSS-0006",
            "comment_name": {
              "id": 890520712152875008,
              "number": "CSS-0006",
              "name": {
                "zh_TW": "下次是否還有意願與需求方合作交付項目？",
                "zh_CN": "下次是否还有意愿与需求方合作交付项目？"
              },
              "masterid": 890520712152875008
            },
            "score": 1,
            "text_answer": ""
          },
          {
            "FEntryID": 901348405178009606,
            "seq": 0,
            "comment_code": "CSS-0007",
            "comment_name": {
              "id": 890521768639333376,
              "number": "CSS-0007",
              "name": {
                "zh_TW": "請為需求方在本項目中的合作進行評分，5分為最滿意，依次降低。",
                "zh_CN": "请为需求方在本项目中的合作进行评分，5分为最满意，依次降低。"
              },
              "masterid": 890521768639333376
            },
            "score": 5,
            "text_answer": ""
          }
        ],
        "req_name": "cosmic-simple",
        "service_name": "微思科技有限公司",
        "project_name": "幸福西饼供应链二次开发",
        "parent_id": "900657671273709568",
        "total_comment_score": 14,
        "_attachments": []
      }
    },
    success(res){
      // console.log('服务方评论信息（基础资料）（新增或修改',res)
    }
  })
},
//服务方评论信息（删除） 不行
getfuwufangpinlunxinxisc(){
  const that = this
  wx.request({
    url: "http://124.71.106.176:8080/ierp/kapi/sys/kded_ser_comment_info/delete?access_token=" + that.data.token,
    data:{

    },
    success(res){
      // console.log('服务方评论信息（删除）',res)
    }
  })
}



































})


