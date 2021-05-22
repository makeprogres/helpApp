
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "picUrl":"https://636c-cloud1-8g83xef220a33951-1305847147.tcb.qcloud.la/help/luggage.jpg?sign=c9b925e387bdb970d901b379fbb5ef4f&t=1621577096"
  },
  //获取图片

  getImg(){
    wx.cloud.downloadFile({
      fileID: 'taskPicture', // 文件 ID
      success: res => {
        // 返回临时文件路径
        console.log(res.tempFilePath)
      },
      fail: console.error
    })
  },

  //获取数据库数据
  getData(){
    wx.cloud.callFunction({
      name:"getTaskList",
      data:{
        num:5,
        page:1
      }
    }).then(res=>{
      this.setData({
        dataList:res.result.data,
      })   
    })
  },
  
  //截取文字长度
  getStrLen:function(str,len){
    if(str.length>len){
      return str.substr(0,len)+"..."
    } else{
      return str
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(),
    this.getImg()
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