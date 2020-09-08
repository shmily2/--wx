<template>
  <view>
    <view class="box">
      <view v-for="(item,index) in formdata" :key="index">
        <!-- input输入框 -->
        <view class="weui-cell__bd" v-if="item.type=='text' && item.show==true">
          <van-icon :name="item.contact" :color="item.color" />
          <text>{{item.title}}</text>
          <input
            class="weui-input"
            :value="value[item.prop]"
            :disabled="item.disabled"
            v-show="item.show ?item.show:true"
          />
        </view>
        <!-- 上传文件 -->
        <view v-else-if="item.type=='upload' && item.fileList.length>0">
          <view class="weui-cell__up">
            <van-icon :name="item.contact" :color="item.color" />
            <text>{{item.title}}</text>
          </view>
          <van-uploader
            class="weui-cell__bd"
            :file-list="item.fileList "
            :deletable="item.deletable"
            :maxCount="item.maxCount"
          />
        </view>
        <!-- 多行文本 -->
        <view v-else-if="item.type=='textarea'" class="rich">
          <view class="txts">
            <van-icon :name="item.contact" :color="item.color" />
            <text>{{item.title}}</text>
          </view>
          <textarea
            :required="item.required"
            :disabled="item.disabled"
            :placeholder="item.placeholder"
            @blur="item.change($event,index)"
          ></textarea>
        </view>
      </view>
      <van-toast id="van-toast" />
    </view>
  </view>
</template>
<script>
    export default{
        props:["formdata","value"]
    }
</script>
<style scoped>
.box{
  margin-bottom:20px;
}
._van-icon {
  display: flex;
  align-items: center;
  margin-right: 5px;
}
.weui-cell__bd {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #f1eded;
}
.weui-cell__up {
  display: flex;
  padding: 10px 15px;
  align-items: center;
}
.weui-cell__td {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
}
.weui-cell__bd ._text {
  width: 32%;
}
.weui-input {
  text-align: right;
  width: 68%;
  font-size: 15px;
  color: rgb(94, 92, 92);
}
.txts {
  display: flex;
  align-items: center;
}
.rich {
  margin: 10px 15px;
}
.rich ._textarea {
  width: calc(100% - 10px);
  margin-top: 10px;
  border: 1px solid #f1eded;
  border-radius: 5px;
  padding: 5px;
}
.actiondata {
  padding: 10px;
  display: block;
}
.actiondata:not(:last-child) {
  border: 1px solid #f1eded;
}
.phcolor {
  font-size: 14px;
  color: #aab2bd;
  text-align: right;
}
</style>