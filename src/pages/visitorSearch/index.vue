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
        cardtitle:"身份证号码:",
        tcontact:"idcard",
        tcolor:'#1989fa',
        comptitle:"到访单位:",
        scolor:'#1989fa',
        scontact:"wap-home-o",
        shartTime:"来访时间:",
        ecolor:'#07c160',
        econtact:"underway-o",
        endTime:"离开时间:",
        gcolor:'#07c160',
        gcontact:"underway-o",
        PEOPLENAME:'待审核',
        IDENTITYNUMBER:"3201236541236598456",
        DEPTNAME:'江苏大范德萨发生的',
        FROMTIME:'20120306 08:32',
        TOTIME:'20120306 09:32',
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
        url:'../visitorDetails/main'
      })
    },
    search(){
      this.page=1;
      this.getList();
      console.log("搜素")
    },
    add(){
      wx.navigateTo({
        url:'../visitor/main'
      })
    }
  }
}
</script>
