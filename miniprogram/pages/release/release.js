const db=wx.cloud.database();
var urlArr = [];
var filePath=[];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: ['男生', '女生', '都可'],
    objectArray: [
      {
        id: 0,
        name: '男生'
      },
      {
        id: 1,
        name: '女生'
      },
      {
        id: 2,
        name: '不限制'
      },
    ],
    index: 0,
    time:"现在出发",
    chooseImage:[],
    textVal:""
  },
  chooseImage:[],
  //外网图片路径数组
  UpLoadImgs:[],


  // handFormSubmit(){
  //   const {textVal}=this.data;
  //   // if(!textVal.trim()){
  //   //   wx.showToast({
  //   //     title: '输入不合法',
  //   //     icon:"none",
  //   //     mask: true
  //   //   })
  //   //   return;
  //   // }
  //   wx.uploadFile({
  //     filePath: 'filePath',
  //     name: 'name',
  //     url: 'url',
  //   })
    
  // },
  //更改时间
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },  
  bindPickerChange: function(e) {
      this.setData({
        index: e.detail.value
      })
    },
  bindChooseChange(){
      
  },
  
  //选择图片
  handChooseImg(){
      wx.chooseImage({
        success:(res)=>{
          console.log(res);
          this.setData({
            chooseImage:[...this.data.chooseImage,...res.tempFilePaths]
          })
        }
      })
  },
  //删除图片
  handRemoveImg(e){
    const {index}=e.currentTarget.dataset;
    var {chooseImage}=this.data;
    chooseImage.splice(index,1);
    this.setData({
      chooseImage
    })
  },

    //提交表单
    btnSub(res){
      var resVlu=res.detail.value;
      const {chooseImage}=this.data;
      // console.log(chooseImage);
      chooseImage.forEach((res=>{
        // console.log(res);
          // console.log(urlArr);
        success:res=>{
          urlArr.push(res.fileId)
          this.setData({
            urlArr
          })
        }
      }))
      //绑定数据库
      db.collection("tasklist").add({
        data:{
          resVlu,
          
        }

      }).then(res=>{
        console.log(res);
      })
    },

  //上传图片
  // clickUp(){
  //   wx.chooseImage({
  //     success:res=>{
  //       filePath=res.tempFilePaths
  //       filePath.forEach((item,idx)=>{
  //         var fileName=Date.now()+"_"+idx;
  //         this.cloudFile(fileName,item)  
  //       }) 
  //     }
  //   })
  // },
  // cloudFile(filiname,path){
  //   wx.showLoading({
  //     title: "上传中",
  //     mask:true
  //   })
  //   wx.cloud.uploadFile({
  //     cloudPath:filiname+".jpg",
  //     filePath:path
  //   }).then(res=>{
  //     urlArr.push(res.fileID)
  //     if(filePath.length==urlArr.length){
  //       this.setData({
  //         urlArr
  //       })
  //     }
  //     wx.hideLoading()
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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