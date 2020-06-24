Page({
  data: {
    
    radioId: "",
    loves: [
      { id: 1, name: "是", checked: 'true' },
      { id: 2, name: "否" },
    ]
  },
  updataRadio: function (e) {
    var Id = e.value.id
    this.setData({
      radioId: Id
    })
  },
 
})