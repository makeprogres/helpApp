let startY = 0;
let moveY = 0;
let moveDistance = 0;

// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverTransform: "translateY(0)",
    coveTransition: "",
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    avatarUrl:"https://636c-cloud1-8g83xef220a33951-1305847147.tcb.qcloud.la/help/missing-face.png?sign=9fc64d183498d6d8a3c8706c2665e285&t=1621577183"
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          avatarUrl:res.userInfo.avatarUrl
        })   
      },
      
    })
  },
  getUserInfo(e) {
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  
  bindtouchstart(event){
    this.setData({
      coveTransition: ""
    })
    startY = event.touches[0].clientY;
  },
  bindtouchmove(event){
    moveY = event.touches[0].clientY;
    moveDistance = moveY - startY;
    if(moveDistance < 0){
      return;
    }
    if(moveDistance >= 80){
      return moveDistance = 80;
    }
    this.setData({
      coverTransform:`translateY(${moveDistance}rpx)`
    })
  },
  bindtouchend(){
    this.setData({
      coverTransform:`translateY(${0}rpx)`,
      coveTransition:"transform 1s linear"
    })
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