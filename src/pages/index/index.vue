<template>
  <div>
    <div>
      <swiper
        style="width:100%;height:384rpx"
        indidator-dots="true"
        indicator-dots="true"
        interval="2000"
        autoplay="true"
        circular="true"
        duration="500"
      >
      <block v-for="(item, index) in imgUrls" :key="index">
          <swiper-item>
            <image :src="item" mode="scaleToFill" style="width:100%;"/>
          </swiper-item>
        </block>
      </swiper>
      <ul class="log-list">
        <li>
          <a href="/pages/visitorSearch/main" class="counter">
            <img src="../../../static/images/visitor.png" />
            <p>访客预约</p>
          </a>
        </li>
        <li>
          <a href="/pages/transportSearch/main" class="counter">
            <img src="../../../static/images/trans.png" />
            <p>运输申报</p>
          </a>
        </li>
        <li>
          <a href="/pages/moveaplySearch/main" class="counter">
            <img src="../../../static/images/moveaply.png" />
            <p>危废申报</p>
          </a>
        </li>
      </ul>
    </div>
    <div>
    <!--<van-popup :show="show" bind:close="onClose">
      <button  open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信授权一键登录</button>
    </van-popup>-->
    </div>
  </div>
</template>
<script>
import { formatTime } from '@/utils/index'
export default {
  data () {
    return {
      logs: [],
      imgUrls: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598613663147&di=620c5a193bed87caaff8ed7142aaea2d&imgtype=0&src=http%3A%2F%2Fccdn.goodq.top%2Fcaches%2Fde5d2fe4c60bdee7f17d574bfcca95b6%2FaHR0cDovL3d3dy5qdW5zaXNvZnQuY29tLmNuL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMS84YzU3YzU5M2UwMmMzNDBhMzJkYjQyZGU5MDM4NjE5Mi5qcGc_p_p100_p_2FYX',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598613707727&di=8361390802ce2f1859986de7c01cacdd&imgtype=0&src=http%3A%2F%2Fwww.xianjichina.com%2Fdata%2Fediter%2F20180718%2Fimage%2F6ad39d97a69a9cd55c96379b5bfbc5a2.png',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1477228353,3477237665&fm=26&gp=0.jpg'
      ]
    }
  },
  created () {
    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
    } else {
      logs = mpvue.getStorageSync('logs') || []
    }
    this.logs = logs.map(log => formatTime(new Date(log)))
  },
  methods: {
  },
}
</script>

<style>
.log-list {
  display: flex;
  padding: 20rpx;
}
.log-list > li > a {
  width: 100px;
  height: 130px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.log-list > li > a > img {
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
}
button {
  background: #07c160;
  color: #fff;
  border-radius: 5px;
}
</style>
