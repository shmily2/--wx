<template>
  <view class="details">
    <detailsdom :formdata="formdata" :value="value"></detailsdom>
  </view>
</template>
<script>
import detailsdom from "../../components/details";
export default { 
    name:"details",
    data() {
       let that=this
        return {
        value:{
          leixing:'访客临时通行卡'
        },
      formdata:[
        {
          title:"运输单号:",
          type:"text",
          disabled:true,
          prop:"fwdeptName",
          contact:"orders-o",
          color:"#1989fa" ,
          show:true,
        },
        {
          title:"前往企业:",
           color:'#1989fa',
          contact:"wap-home-o",
          type:"text",
          prop:"begTime",
          disabled:true,
          show:true,
        },
        {
          title:"车辆所属企业:",
          contact:"wap-home-o",
          color:"#ee0a24",
          type:"text",
          prop:"endTime",
          disabled:true,
          show:true,
        },
        {
          title:"接受单位:",
          show:true,
          type:"text",
          prop:"fromDeptName",
          disabled:true,
         contact:"bar-chart-o",
          color:"#07c160",
        },
        {
          title:"车牌号:",
          prop:"peopleName",
          show:true,
          type:"text",
          disabled:true,
          contact:"logistics",
          color:'#ff976a'
        },
        {
          title:"车辆类型:",
          show:true,
          type:"text",
          prop:"idCard",
          disabled:true,
          contact:"credit-pay",
          color:'#07c160',
        },
        {
          title:"运输重量(吨):",
          show:true,
          type:"text",
          prop:"peopleTel",
          disabled:true,
          contact:"logistics",
          color:'#07c160',
        },
          {
          title:"外运目的:",
          type:"text",
          disabled:true,
          prop:"isOrnot",
          contact:"flag-o",
          color:"#1989fa",
        },
        {
          title:"危废代码:",
          type:"text",
          prop:"load",
          disabled:true,
          show:false,
         contact:"desktop-o",
          color:"#ee0a24",
        },
        {
          title:"危废名称:",
          show:false,
          type:"text",
          prop:"carNum",
          disabled:false,
          contact:"warn-o",
          color:"#ee0a24",
        },
        {
          title:"废物特性:",
          type:"text",
          prop:"carrays",
          show:false,
          disabled:true,
         contact:"setting-o",
         color:"#1989fa",
        },
         {
          title:"形态:",
          type:"text",
          prop:"posting",
          show:true,
          disabled:false,
          contact:"fire-o",
          color:"#ff976a",
        },
           {
          title:"包装方式:",
          type:"text",
          prop:"baozhuang",
          show:true,
          disabled:false,
          contact:"cart-circle-o",
          color:"#07c160",
        },
        {
          title:"预约开始时间:",
          type:"text",
          prop:"startTime",
          show:true,
          disabled:false,
          contact:"underway-o",
          color:"#07c160",
        },
              {
          title:"预约结束时间:",
          type:"text",
          prop:"endTime",
          show:true,
          disabled:false,
          contact:"underway-o",
           color:"#07c160",
        },
         {
          title:"驾驶员姓名:",
          type:"text",
          prop:"driverName",
          show:true,
          disabled:false,
          contact:"user-circle-o",
          color:"#1989fa",
        },
               {
          title:"驾驶员身份证:",
          type:"text",
          prop:"driverIDNum",
          show:true,
          disabled:false,
            contact:"idcard",
          color:"#1989fa",
        },
                       {
          title:"驾驶员手机号:",
          type:"text",
          prop:"driverPhone",
          show:true,
          disabled:false,
          contact:"phone-circle-o",
           color:'#1989fa',
        },
        {
          title:"司机驾驶证:",
          deletable:false,
          type:"upload",
          show:true,
          contact:"idcard",
          color:'#07c160',
          maxCount:1,
            fileList: [
             { url: 'https://img.yzcdn.cn/vant/leaf.jpg', name: '图片1' },
              // Uploader 根据文件后缀来判断是否为图片文件
              // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
            ],
        },{
          title:"车辆行驶证:",
          contact:"idcard",
          deletable:false,
          type:"upload",
          maxCount:1,
          fileList: [],
          show:true,
           color:'#07c160',
        },{
          title:"审批文件:",
          type:"upload",
          contact:"idcard",
           color:'#07c160',
          maxCount:1,
          show:true,
          color:'#ff976a',
           fileList: [],
        },{
          title:"其他审批文件1:",
           color:'#ff976a',
           deletable:false,
           contact:"idcard",
          maxCount:1,
          type:"upload",
          show:true,
          fileList: [],
        },{
          title:"其他审批文件2:",
           color:'#ff976a',
           deletable:false,
           contact:"idcard",
            maxCount:1,
          type:"upload",
          show:true,
          fileList: [],
        },{
          title:"其他审批文件3:",
           deletable:false,
           contact:"idcard",
            maxCount:1,
           type:"upload",
           color:'#1989fa',
           show:true,
          fileList: [],
        },{
          title:"其他审批文件4:",
             color:'#1989fa',
           deletable:false,
           contact:"idcard",
            maxCount:1,
           type:"upload",
           show:true,
          fileList: [],
        },{
          title:"其他审批文件5:",
           deletable:false,
           contact:"idcard",
              color:'#1989fa',
            maxCount:1,
          type:"upload",
          show:true,
          fileList: [],
        },
        {
          type:"textarea",
          title:"应急处理措施（设备）:",
          contact:"user-circle-o",
          color:'#ff976a',
          disabled:true,
          contact:"user-circle-o",
        },
        {
          type:"textarea",
          title:"备注",
          contact:"edit",
          color:'#ee0a24',
          disabled:true,
          contact:"edit",
        },
        ], 
        };
    },
   components:{
    detailsdom
  },
}
</script>
