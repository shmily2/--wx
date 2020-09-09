<template>
  <view class="search">
      <searchdom 
        :appList="appList" 
        :value="value"
        @add="add"
        @search="search"
        @details="details"
        ></searchdom>
  </view>
</template>
<script>
import searchdom from "../../components/search";
export default {
  data () {
    return {
      value:{
          firstprop:"dept",
          twoprop:"car",
          firstplaceholder:"请输入到访单位",
          twoplaceholder:"请输入姓名"
      },
      appList: [{
        ID:'lime',
        fcontact:"user-circle-o",
        fcolor:'#1989fa',
        cardtitle:"驾驶员联系方式:",
        tcontact:"phone-circle-o",
        tcolor:"#ee0a24",
        comptitle:"车牌号:",
        scolor:'#ff976a',
        scontact:"logistics",
        shartTime:"车辆类型:",
        ecolor:'#07c160',
        econtact:"logistics",
        endTime:"运输单号:",
        gcolor:'#1989fa',
        gcontact:"orders-o",
        PEOPLENAME:'待审核',
        IDENTITYNUMBER:"137776661247",
        DEPTNAME:'苏c1234',
        FROMTIME:'临时',
        TOTIME:'tesr002',
      }], // 列表数据
      page: 1,      // 当前页数
      total_page: 0,// 总页数
    }
  },
  components:{
    searchdom
  },
  // 实例创建完成后调用数据
  mounted() {
    this.getList()
  },
  // 上拉触底事件
  onReachBottom () {
    if (this.page > this.total_page) {
      console.log('数据加载完了')
    } else {
      // 下一页
      this.page = this.page + 1
      this.getList()
    }
  },
  // 下拉刷新事件
  onPullDownRefresh () {
    // 初始化页码
    this.page = 1
    this.getList()
  },
  methods: {
    // 获取数据方法
    getList () {
      const that = this
           //访问单位
      that.$http.post({
      url: 'app!ajaxGetTempListCount',
      data : {
            page: that.page,// 传递页码
            toDeptId:"",
						driverCode:"",
						userId:"",
						count:15,
						audit: that.page,
        },
      }).then(res => {
          if(res.result=="success"){
                  console.log(res)
                   wx.stopPullDownRefresh()
                // 返回的数据
                const data = res.data
                // 数据追加  data.list为返回的数据列表
                if (that.page > 1) {
                  // 数据追加
                  that.appList.push(...data)

                } else {
                  // 数据
                  that.appList = data
                }
                // 总页数
                that.total_page = data.total_page
          }
      })
    },
    details(){
      wx.navigateTo({
        url:'../transportDetails/main'
      })
    },
    search(){
      this.page=1;
      this.getList();
      console.log("搜素")
    },
    add(){
      wx.navigateTo({
        url:'../transport/main'
      })
    }
  }
}
</script>
