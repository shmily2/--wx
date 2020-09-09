<template>
  <div class="authorize-contianer">
    <div class="auth-item" @click="login">请微信授权</div>
    <div class="btn-authorize">
      <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo">确认授权</button>
    </div>
    <div v-if="cancelAuth" class="refuse">请授权，否则无法进入哦~</div>
      <!-- <div v-if="isPone" class="alert" >
      <div class="auth">
        <div class="apply">
          <span class="">需要获取您的手机权限</span>
          <p>(请开启手机权限)</p>
        </div>
        <button class="confirm" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">确认</button>
      </div>
    </div> -->
  </div>
</template>
<script>
// import { getToken } from '@/api/main'
export default {
  data () {
    return {
      cancelAuth: false,//判断用户是否拒绝获取信息
      newType: '',
      shareDetail: {},
      code: '',
      isPone: false  //用于显示获取手机权限窗口

    }
  },
  methods: {
      //获取手机号
    getPhoneNumber(e) {
      console.log(e)
      if (e.mp.detail.errMsg==="getPhoneNumber:ok") {
        this.isPone = false
        this.params.iv = e.mp.detail.iv
        this.params.encryptedData = e.mp.detail.encryptedData
        console.log(this.params)
        this.getTokenAsync(this.params)
      }
    },
      //调用wx.login获取code
    login() {
      let me = this
      let obj = wx.getStorageSync('USER_INFO')
      console.log(obj, 'USER_INFOUSER_INFO')
      if (obj) {
        wx.navigateTo({
            url:'../index/main'
          })
      } else {
        wx.login({
          success (res) {
            if (res.code) {
              me.code = res.code
            }
          }
        })
      }
    },
    // 请求后获取token
    async getTokenAsync(params) {
      // let res = await getToken(params)
      // if (res.success) {
      //   wx.setStorageSync('USER_INFO', JSON.stringify(res.data))
      // 	wx.switchTab({ url: this.path })
      // } else {
      //   console.log("获取失败")
      // }
    },
    //  调用用户信息授权页面
    bindGetUserInfo(e) {
      if (!this.cancelAuth) {
        this.isPone = true
      }
      wx.setStorageSync('USER_MSG', JSON.stringify(e.mp.detail.userInfo))
      console.log(e)
      if (e.mp.detail.userInfo) {
        this.params = {
          code: this.code,
          name: e.mp.detail.userInfo.nickName,
          userIcon: e.mp.detail.userInfo.avatarUrl,
        }
          wx.navigateTo({
            url:'../index/main'
         })
      } else {
        // 用户按了拒绝按钮
        this.cancelAuth = true

      }
    }
  },
  onShow () {
    this.login()
  }
}
</script>
<style lang="scss">
.authorize-contianer {
  height: 100%;
   background: #fff;
  background-size:100% 100%;
  text-align: center;
  .authorize-icon {
    padding-top: 254rpx;
    width: 200rpx;
    height: 200rpx;
    display: block;
    margin: 0 auto;
    padding-bottom: 10rpx;
  }
  .auth-item {
    margin-top:92rpx;
    font-size: 36rpx;
    line-height:40rpx;
    color:rgb(255,145,37);
    font-weight: bold;
  }
  .refuse{
    padding:18rpx 0;
    font-size:24rpx;
    width:80%;
    margin:0rpx auto;
    background:#000000d1;
    color:#fff;
    margin-top:140rpx;
    border-radius:6rpx;
  }
  .btn-authorize {
    margin: 0 auto;
    margin-top:160rpx;
    button{
      width: 80%;
      background:-webkit-linear-gradient(left,rgb(255,152,22),rgb(255,120,17));
      background:-o-linear-gradient(right,rgb(255,152,22),rgb(255,120,17));
      background:-moz-linear-gradient(right,rgb(255,152,22),rgb(255,120,17));
      background:linear-gradient(to right,rgb(255,152,22),rgb(255,120,17));
      border-radius: 40rpx;
      color:rgb(255,255,255);
      font-size: 34rpx;
      font-weight: bold;
    }
  }
  .alert{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    outline: 0;
    -webkit-overflow-scrolling: touch;
    background-color: rgb(0, 0, 0);  
    filter: alpha(opacity=60);  
    background-color: rgba(0, 0, 0, 0.6); 
    z-index: 9999;
    .auth{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80%;
      height: 340rpx;
      border-radius: 20rpx;
      transform:translate(-50%,-50%);
      background: #fff;
      display: flex;
      flex-direction: column;
      .apply{
        margin: 0rpx auto;
        padding: 60rpx 40rpx;
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        font-size: 34rpx;
        color:rgb(34,34,34);
      
        p{
          font-size:30rpx
        }
      }
      .confirm{
        text-align: center;
        height: 100rpx;
        width: 100%;
        line-height: 100rpx;
        font-size: 34rpx;
        color:rgb(255,145,37);
      }
    }
  }
}
</style>