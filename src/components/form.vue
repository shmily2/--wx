<template>
  <view class="box">
    <form @submit="formSubmit" report-submit='true'>
      <view v-for="(item,index) in formdata" :key="index">
        <!-- input输入框 -->
        <view class="weui-cell__bd" v-if="item.type=='text' && item.show==true">
          <van-icon class="lefticon" :name="item.contact" :color="item.color" />
          <text :class="item.required?'required':''">{{item.title}}</text>
          <input
            class="weui-input"
            placeholder-class="phcolor"
            :value="value[item.prop]"
            :name="item.prop"
            @blur="item.change($event,index)"
            :placeholder="item.placeholder"
            :disabled="item.disabled"
            v-show="item.show ?item.show:true"
          />
        </view>
        <!-- 下拉选择 -->
        <view v-else-if="item.type=='select'" class="weui-cell__bd">
          <van-icon class="lefticon" :name="item.contact" :color="item.color" />
          <text :class="item.required?'required':''">{{item.title}}</text>
          <input
            class="weui-input weui-choose"
            :value="value[item.prop]"
            :name="item.prop"
            :placeholder="item.placeholder"
            :disabled="item.disabled"
            v-show="item.show ?item.show:true"
            @click="item.secetevent(index)"
          />
          <van-action-sheet
            :show="item.showsecect"
            :title="item.titlename"
            @close="item.Close(index)"
            @select="item.onSelect(index)"
          >
            <van-search
              :value="item.searchvalue"
              placeholder="请输入搜索关键词"
              v-if="item.show"
              @change="item.onInput"
            />
            <view
              v-for="(list,ind) in item.actions"
              :key="ind"
              class="actiondata"
              :class="item.activeaction==ind?'activeaction':''"
              @click="item.onSearch(index,ind)"
            >
              <span class="actionsvalue">{{list.name}}</span>
            </view>
          </van-action-sheet>
        </view>
        <!-- 上传文件 -->
        <view v-else-if="item.type=='upload' && item.show==true ">
          <view class="upbox">
            <van-icon class="lefticon" :name="item.contact" :color="item.color" />
            <view :class="item.required?'required':''" class="weui-cell__td">{{item.title}}</view>
          </view>
          <van-uploader
            class="weui-cell__bd"
            :file-list="item.fileList "
            :maxCount="item.maxCount"
            accept="image"
            @afterRead="item.afterRead($event,index)"
            @delete="item.del_img($event,index)"
          />
        </view>
        <!-- 多行文本 -->
        <view v-else-if="item.type=='textarea'" class="rich">
          <van-icon class="lefticon" :name="item.contact" :color="item.color" />
          <text :class="item.required?'required':''">{{item.title}}</text>
          <textarea
            :disabled="item.disabled"
            :placeholder="item.placeholder"
            @blur="item.change($event,index)"
          ></textarea>
        </view>
        <view v-else-if="item.type=='datetime'" class="weui-cell__bd">
          <!--时间 -->
          <van-icon class="lefticon" :name="item.contact" :color="item.color" />
          <text :class="item.required?'required':''">{{item.title}}</text>
          <input
            class="weui-input weui-sele"
            :value="value[item.prop]"
            :name="item.prop"
            :placeholder="item.placeholder"
            :disabled="item.disabled"
            @click="item.secetevent(index)"
          />
          <van-popup :show="item.showsecect" position="bottom">
            <van-datetime-picker
              :value="item.currentDate"
              :type="item.type"
              :min-date="item.minDate"
              :lazy-render="false"
              :max-date="item.maxDate"
              :formatter="formatter"
              @cancel="item.cancel($event,index)"
              @confirm="item.confirm($event,index)"
            />
          </van-popup>
        </view>
      </view>
       <button style="margin: 30rpx" type="primary" form-type="submit">提交信息</button>
    </form>
    <van-toast id="van-toast" />
  </view>
</template>
<script>
export default {
  props: ['formatter',"value","formdata"],
  methods:{
     formSubmit (e) {
       console.log(e.map.value)
        this.$emit("formSubmit",e)
        }
  },
}
</script>

<style scoped>
.weui-cell__bd {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  border-bottom: 1px solid #f1eded;
}
.weui-cell__td {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
}
.weui-cell__bd ._text {
  width: 35%;
}
.weui-input {
  text-align: right;
  width: 65%;
  font-size: 15px;
  color: rgb(94, 92, 92);
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
text:not(:first-child) {
  padding-left: 16px;
}
.phcolor {
  font-size: 14px;
  color: #aab2bd;
  text-align: right;
}
.required::before {
  position: absolute;
  left: 38px;
  color: #ee0a24;
  font-size: 14px;
  content: "*";
}
.upbox {
  display: flex;
  align-items: center;
  padding: 0 15px;
}
button{
  margin-bottom:20px;
} 
</style>

