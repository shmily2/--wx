<template>
  <view class="search">
      <view class="add">
        <van-button type="primary" @click="add">新增</van-button>
      </view>
      <view class="header">
        <van-search :value="value[firstprop]" :placeholder="value.firstplaceholder" />
        <van-search :value="value[twoprop]" :placeholder="value.twoplaceholder" />
        <van-button type="primary" @click="search" style="flex-shrink:0;margin-right:5px;">搜索</van-button>
      </view>
    <!---->
    <view scroll-view type="primary" class="lists" v-if="appList.length>0">
      <view class="listbox" @click="details(item)" v-for="(item,index) in appList" :key="index">
        <view class="first between">
          <view class="fitstleft">
            <van-icon :name="item.fcontact" :color="item.fcolor" />
            <text>{{item.ID}}</text>
          </view>
          <van-button type="primary">{{item.PEOPLENAME}}</van-button>
        </view>
        <view class="first">
          <van-icon :name="item.tcontact" :color="item.tcolor" />
          <text>{{item.cardtitle}}</text>
          <text type="primary">{{item.IDENTITYNUMBER}}</text>
        </view>
        <view class="first">
          <van-icon :name="item.scontact" :color="item.scolor" />
          <text>{{item.comptitle}}</text>
          <text type="primary">{{item.DEPTNAME}}</text>
        </view>
        <view class="first">
          <van-icon :name="item.econtact" :color="item.ecolor" />
          <text>{{item.shartTime}}</text>
          <text type="primary">{{item.FROMTIME}}</text>
        </view>
        <view class="first">
          <van-icon :name="item.gcontact" :color="item.gcolor" />
          <text>{{item.endTime}}</text>
          <text type="primary">{{item.TOTIME}}</text>
        </view>
      </view>
    </view>
    <view class="empty" v-else>暂无记录!</view>
  </view>
</template>
<script>
    export default{
        props:["appList","value"],
        methods:{
            add(){
               this.$emit("add")
            },
            search(){
                this.$emit("search")
            },
            details(item){
                this.$emit("details",item)
            }
        }
    }
</script>
<style scoped lang="scss">
.search {
  background: #f6f6f6;
  height: 100vh;
}
.header {
  display: flex;
  background: #fff;
  padding:10px 0;
}
.empty {
  font-size: 18px;
  text-align: center;
  color: rgb(141, 140, 140);
  margin-top: 10px;
}
.add {
  text-align: right;
  padding: 5px;
}
.listbox {
  margin: 5px;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
}
.fitstleft{
  display:flex;
  align-items: center;
}
.lists {
  padding: 5px;
}
.first {
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
  text {
    padding-left: 5px;
  }
}
text:last-child{
  font-size:15px;
  color:rgb(92, 86, 86);
}
.between {
  justify-content: space-between;
}
</style>
<style lang="scss">
.search {
  .van-button--normal {
    padding: 0 8px !important;
    flex-shrink: 0 !important;
  }
  .van-button {
    height: 30px !important;
    line-height: 30px !important;
  }
  .van-search {
    padding: 0 5px;
    align-items: center;
  }
  ._van-icon{
    display:flex;
    align-items: center;
  }
}
</style>