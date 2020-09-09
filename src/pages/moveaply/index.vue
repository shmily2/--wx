<template>
  <view class="visitor">
    <FormComponents
      :formdata="formdata"
      :value="value"
      :formatter="formatter"
      @formSubmit="formSubmit"
    ></FormComponents>
  </view>
</template>
<script>
import {formatWithSeperator,getBase64Image}  from  "../../utils/datetime"
import {ID,isMobile,regxcard,regxPlusDecimal2,number}  from  "../../utils/validate"
import Toast from '../../../static/vant-weapp/dist/toast/toast';
import FormComponents from "../../components/form"
export default { 
    name:"visitor",
    components:{
      FormComponents,
    },
    data() {
       let that=this
        return {
        whSelect:[],
        company:[],
        value:{ },
        formatter (type, value) {
            if (type === 'year') {
              return `${value}年`
            } else if (type === 'month') {
              return `${value}月`
            } else if (type === 'day') {
              return `${value}日`
            } else if (type === 'hour') {
              return `${value}时`
            } else if (type === 'minute') {
              return `${value}分`
            } else if (type === 'second') {
              return `${value}秒`
            }
            return value
          },
      formdata:[
        {
          title:"运输单号:",
          judge:false,//判断
          show:true,
          type:"text",
          prop:"transNo",
          disabled:false,
          placeholder:"请输入运输单号",
          required:true,
          contact:"orders-o",
           color:"#1989fa" ,
          change:(event)=>{
               that.value.transNo=event.mp.detail.value
                if( that.value.transNo){
                  this.judge=true
                }else {
                    this.judge=false
                    this.message="请输入运输单号"
                    Toast(this.message);
                }
          }
        },{
          title:"前往企业:",
          type:"select",
          judge:false,//判断
          titlename:"==前往企业==",
          disabled:true,
          prop:"fwdeptName",
          placeholder:"请选择前往企业",
          required:true,
          color:'#1989fa',
          contact:"wap-home-o",
          showsecect:false,
          activeaction:'',
          show:true,
          message:'请选择前往企业',
          searchvalue:'',
          actions: [],
          secetevent:(index)=>{
             that.formdata[index].showsecect=true;
          },
                  // 监听输入变化
        onInput(value){
            that.formdata[1].searchvalue = value.mp.detail;
            let listdata=[];
            if(value.mp.detail.length < 1){
              that.getCompany();
            }else{
              for(var i=0;i<that.company.length;i++){
                if(that.company[i].deptName.indexOf(value.mp.detail) != -1){
                  listdata.push(that.company[i])
                }
              }
               that.formdata[1].actions = listdata
            }
          },
          //关闭弹框
        Close(index){
          this.showsecect=false
          if(that.value.fwdeptName){
            this.judge=true
          }else{
              this.judge=false
             this.message="请选择前往企业"
             Toast(this.message);
          }
        },
        //选中
        onSearch(index,ind){
            this.activeaction=ind;
            that.value.fwdeptName=this.actions[ind].name
            this.showsecect=false
            this.judge=true;
            },
          },
        {
          title:"车辆所属企业:",
          judge:false,//判断
          show:true,
          type:"text",
          prop:"enterprise",
          disabled:false,
          placeholder:"请输入车辆所属企业",
          required:true,
          contact:"wap-home-o",
          color:"#ee0a24",
          change:(event)=>{
               that.value.enterprise=event.mp.detail.value
                       if(that.value.enterprise){
                  this.judge=true
                }else {
                    this.judge=false
                    this.message="请输入车辆所属企业"
                    Toast(this.message);
                }
          }
        },
        {
          title:"接受单位:",
          judge:false,//判断
          show:true,
          type:"text",
          prop:"acceptunit",
          disabled:false,
          placeholder:"请输入接受单位",
          required:true,
          contact:"bar-chart-o",
          color:"#07c160",
          change:(event)=>{
               that.value.acceptunit=event.mp.detail.value
                 if(that.value.acceptunit){
                  this.judge=true
                }else {
                    this.judge=false
                    this.message="请输入接受单位"
                    Toast(this.message);
                }
          }
        },
         {
          title:"车牌号:",
          judge:false,//判断
          message:'请输入车牌号',
          type:"text",
          prop:"carNo",
          disabled:false,
          placeholder:"请输入车牌号",
          required:true,
         show:true,
          contact:"logistics",
          color:'#ff976a',
          change:(event,index)=>{
               that.value.carNo=event.mp.detail.value
               if(that.value.carNo){
                  this.judge=true
               }else{
                  this.judge=false
                  this.message="请输入车牌号"
                 Toast(this.message);
                  return
               }
               if(regxcard(that.value.carNo)){
                  this.judge=true
               }else{
                 this.judge=false
                  this.message="请输入正确的车牌号"
                 Toast(this.message);
                 return
               }
          }
        },
        {
          title:"车辆类型:",
          type:"text",
          disabled:true,
          show:true,
          prop:"driverType",
          placeholder:"",
          required:true,
          contact:"credit-pay",
          color:'#07c160',
        },
        {
          title:"运输重量(吨):",
          judge:false,//判断
          message:'请输入运输重量',
         show:true,
          type:"text",
          prop:"carETC",
          disabled:false,
          placeholder:"请输入运输重量",
          required:true,
          contact:"logistics",
          color:'#07c160',
          change:(event)=>{
              that.value.carETC=event.mp.detail.value
              if(that.value.carETC){
                  this.judge=true
               }else{
                  this.judge=false
                  this.message="请输入运输重量"
                 Toast(this.message);
                  return
               }
               if(regxPlusDecimal2(that.value.carETC)){
                  this.judge=true
               }else{
                 this.judge=false
                  this.message="请输入数字最多保留2位小数"
                 Toast(this.message);
                 return
               }
          }
        },

        {
          title:"外运目的:",
          judge:false,//判断
          message:'请选择外运目的',
          required:true,
          titlename:"==外运目的==",
          type:"select",
          disabled:true,
          prop:"goodsSource",
          placeholder:"请选择外运目的",
          contact:"flag-o",
          color:"#1989fa",
          showsecect:false,
          activeaction:'',
         show:true,
          searchvalue:'',
          actions:[
            {
                name: '拉货',
                openType: 'share',
            },
            {
                name: '送货',
                openType: 'share',
            },
            ],
          secetevent:(index)=>{
             that.formdata[index].showsecect=true;
            },
          Close(index){
            if(that.value.goodsSource){
              this.judge=true
            }else{
              this.judge=false
              this.message="请选择外运目的"
              Toast(this.message);
            }
            this.showsecect=false
          },
          onSearch(index,ind){
            this.activeaction=ind;
            that.value.goodsSource=this.actions[ind].name;
            this.judge=true
            this.showsecect=false
            change:(event)=>{}
          },
        },
        {
          title:"危废代码:",
          type:"select",
          judge:false,//判断
          titlename:"==危废代码==",
          disabled:true,
          prop:"HWCODE",
          placeholder:"请选择危废代码",
          required:true,
          contact:"desktop-o",
          color:"#ee0a24",
          showsecect:false,
          activeaction:'',
          show:true,
          message:'请选择危废代码',
          searchvalue:'',
          actions: [],
          secetevent:(index)=>{
             that.formdata[index].showsecect=true;
          },
                    // 监听输入变化
        onInput(value){
            that.formdata[8].searchvalue = value.mp.detail;
            let listdata=[];
            if(value.mp.detail.length < 1){
              that.getCompany();
            }else{
              for(var i=0;i<that.company.length;i++){
                if(that.company[i].name.indexOf(value.mp.detail) != -1){
                  listdata.push(that.company[i])
                }
              }
               that.formdata[8].actions = listdata
            }
          },
          //关闭弹框
        Close(index){
          this.showsecect=false
          if(that.value.hwcode){
            this.judge=true
          }else{
              this.judge=false
             this.message="请选择危废代码"
             Toast(this.message);
          }
        },
        //选中
        onSearch(index,ind){
            this.activeaction=ind;
            that.value.hwcode=this.actions[ind].name
            this.showsecect=false
            this.judge=true;
            },
        },
        {
          title:"危废名称:",
          type:"text",
          disabled:true,
          show:true,
          prop:"hwname",
          placeholder:"",
          required:true,
          contact:"warn-o",
          color:"#ee0a24",
        },
        {
          title:"废物特性:",
          judge:true,//判断
          show:true,
          type:"text",
          prop:"texing",
          disabled:false,
          placeholder:"请输入废物特性",
          required:false,
          contact:"setting-o",
          color:"#1989fa",
          change:(event)=>{
               that.value.texing=event.mp.detail.value
          }
        },
            {
          title:"形态:",
          judge:true,//判断
          show:true,
          type:"text",
          prop:"xingtai",
          disabled:false,
          placeholder:"请输入形态",
          required:false,
          contact:"fire-o",
          color:"#ff976a",
          change:(event)=>{
               that.value.xingtai=event.mp.detail.value
          }
        },
          {
          title:"包装方式:",
          judge:true,//判断
          show:true,
          type:"text",
          prop:"baozhuang",
          disabled:false,
          placeholder:"请输入包装方式",
          required:false,
          contact:"cart-circle-o",
          color:"#07c160",
          change:(event)=>{
               that.value.baozhuang=event.mp.detail.value
          }
        },
          {
          title:"驾驶员姓名:",
          prop:"driverName",
          judge:false,//判断
          show:true,
          message:'请输入驾驶员姓名',
          type:"text",
          disabled:false,
          placeholder:"请输入驾驶员姓名",
          required:true,
          contact:"user-circle-o",
          color:"#1989fa",
          change:(event)=>{
               that.value.driverName=event.mp.detail.value
               if(that.value.driverName){
                 this.judge=true
               }else{
                 this.judge=false
                 this.message="请输入驾驶员姓名"
                 Toast(this.message);
               }
          }
        },
        {
          title:"驾驶员身份证:",
          judge:false,//判断
          message:'请输入驾驶员身份证',
          required:true,
          show:true,
          type:"text",
          prop:"driverIDNum",
          disabled:false,
          placeholder:"请输入驾驶员身份证",
           contact:"idcard",
          color:"#1989fa",
          change:(event)=>{
               that.value.driverIDNum=event.mp.detail.value
               if(that.value.driverIDNum){
                  this.judge=true
               }else{
                   this.judge=false
                   this.message="请输入驾驶员身份证"
                    Toast(this.message);
                   return
               }
              if(ID(that.value.driverIDNum)){
                this.judge=true
              }else{
                this.judge=false
                this.message="请输入正确的身份证"
                Toast(this.message);
                return
              }
          }
        },
        {
          title:"驾驶员手机号:",
          show:true,
          judge:false,//判断
          message:'请输入驾驶员手机号',
          type:"text",
          prop:"driverPhone",
          disabled:false,
          placeholder:"请输入驾驶员手机号",
          required:true,
           contact:"phone-circle-o",
           color:'#1989fa',
          change:(event)=>{
               that.value.driverPhone=event.mp.detail.value
               if(that.value.driverPhone){
                 this.judge=true
               }else{
                  this.judge=false
                  this.message="请输入驾驶员手机号"
                 Toast(this.message);
                  return
               }
               if(isMobile(that.value.driverPhone)){
                  this.judge=true
               }else {
                 this.judge=false
                 this.message="请输入正确的手机号码"
                 Toast(this.message);
                  return
               }
          }
        },
        {
          title:"预约开始时间:",
          judge:false,//判断
          message:'请选择预约开始时间',
          type:"datetime",
          prop:"startTime",
          disabled:true,
          placeholder:"请选择预约开始时间",
          required:true,
          contact:"underway-o",
          color:"#07c160",
          showsecect:false,
          activeaction:'',
          show:true,
          searchvalue:'',
          secetevent:(index)=>{
              that.formdata[index].showsecect=true;
              that.value.endTime ='';
          },
        minDate: new Date().getTime(),
        maxDate: new Date(2060, 10, 1).getTime(),
        currentDate: new Date().getTime(),
        //确定
        confirm:(e,index)=>{
              let time= formatWithSeperator(e.mp.detail,"-",":") 
              that.value.startTime = time
              that.formdata[index].showsecect=false;
              this.judge=true
          },
          cancel:(e,index)=>{
            console.log(that.formdata[index].showsecect)
            if(that.value.startTime){
                this.judge=true
              }else{
                this.judge=false
                this.message="请选择预约开始时间"
                Toast(this.message);
            }
            that.formdata[index].showsecect=false;
          }
        },
        {
          title:"预约结束时间:",
           judge:false,//判断
           message:'请选择预约结束时间',
           type:"datetime",
           prop:"endTime",
          disabled:true,
          placeholder:"请选择预约结束时间",
          required:true,
          contact:"underway-o",
           color:"#07c160",
          showsecect:false,
          show:true,
          activeaction:'',
          searchvalue:'',
          secetevent:(index)=>{
             if(that.value.startTime){
               that.formdata[index].showsecect=true;
             }else{
               this.message="请先选择预约开始时间"
               Toast(this.message)
             }
          },
          minDate: new Date().getTime(),
          maxDate: new Date(2060, 10, 1).getTime(),
          currentDate: new Date().getTime(),
            //确定
          confirm:(e,index)=>{
          let time= formatWithSeperator(e.mp.detail,"-",":") 
            if(time>that.value.startTime){
                this.judge=true
                that.value.endTime = time
                that.formdata[index].showsecect=false;
           }else {
              this.judge=false
              this.message="预约结束时间必须大于预约开始时间"
              Toast(this.message);
             }
          },
        cancel:(e,index)=>{
          if(that.value.endTime){
              this.judge=true
           }else {
              this.judge=false
              this.message="请选择预约结束时间"
              Toast(this.message);
           }
          }
        },
      
        {
          title:"司机驾驶证:",
            contact:"idcard",
          color:'#07c160',
          judge:false,//判断
         show:true,
          multiple:false,
          maxCount:1,
          message:'请上传司机驾驶证',
          type:"upload",
          accept:'image',
          disabled:true,
          required:true,
            fileList: [
             { url: 'https://img.yzcdn.cn/vant/leaf.jpg', name: '图片1' },
              // Uploader 根据文件后缀来判断是否为图片文件
              // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
            ],
          afterRead(event,index){
          const { file } = event.mp.detail;
          this.fileList.push({
            url:file.path,
            name: file.name,
            isImage: true,
            deletable: true,
          })
          this.judge=true;
            // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
            that.$http.post({
              url: 'app!fileUpload', // 仅为示例，非正实的接口地址
              name: 'file',
              data:{
                "imgbese":file.path,
                "uploadFileName":"Tupac"
              },
              success(res) {
                console.log(res)
              },
            })
        },
        del_img(event){
            this.fileList.splice(event.mp.detail.index,1); 
            if(this.fileList.length<1){
                this.judge=false;
                Toast(this.message)
            }
          }
        },{
          title:"车辆行驶证:",
          message:'请上传车辆行驶证',
          contact:"idcard",
           color:'#07c160',
          judge:false,//判断
           maxCount:1,
          disabled:true,
          multiple:false,
          type:"upload",
          required:true,
          show:true,
          fileList: [],
          afterRead(event,index){
            const { file } = event.mp.detail;
            this.fileList.push({
              url:file.path,
              name: file.name,
              isImage: true,
              deletable: true,
            })
            this.judge=true;
          },
          del_img(event){
            this.fileList.splice(event.mp.detail.index,1); 
            if(this.fileList.length<1){
                this.judge=false;
                Toast(this.message)
            }
          }
        },{
          title:"审批文件:",
            contact:"idcard",
           color:'#07c160',
           type:"upload",
            maxCount:1,
           judge:true,//判断
           multiple:false,
           disabled:true,
           required:false,
          show:true,
           fileList: [],
           afterRead(event,index){
            const { file } = event.mp.detail;
            this.fileList.push({
              url:file.path,
              name: file.name,
              isImage: true,
              deletable: true,
            })
          },
          del_img(event){
            this.fileList.splice(event.mp.detail.index,1); 
          }
        },{
          title:"其他审批文件1:",
          contact:"idcard",
           color:'#07c160',
           judge:true,//判断
           multiple:false,
            maxCount:1,
           type:"upload",
           disabled:true,
           required:false,
           show:true,
           required:false,
          fileList: [],
          afterRead(event,index){
            const { file } = event.mp.detail;
            this.fileList.push({
              url:file.path,
              name: file.name,
              isImage: true,
              deletable: true,
            })
          },
          del_img(event){
            this.fileList.splice(event.mp.detail.index,1); 
          }
        },{
          title:"其他审批文件2:",
          contact:"idcard",
           color:'#07c160',
           maxCount:1,
           judge:true,//判断
           multiple:false,
           type:"upload",
          disabled:true,
           show:true,
           required:false,
          fileList: [],
          afterRead(event,index){
            const { file } = event.mp.detail;
            this.fileList.push({
              url:file.path,
              name: file.name,
              isImage: true,
              deletable: true,
            })
          },
          del_img(event){
            this.fileList.splice(event.mp.detail.index,1); 
          }
        },{
          title:"其他审批文件3:",
          contact:"idcard",
           color:'#07c160',
           maxCount:1,
           judge:true,//判断
            multiple:false,
           type:"upload",
           disabled:true,
           show:true,
           required:false,
          fileList: [],
          afterRead(event,index){
            const { file } = event.mp.detail;
            this.fileList.push({
              url:file.path,
              name: file.name,
              isImage: true,
              deletable: true,
            })
          },
          del_img(event){
            this.fileList.splice(event.mp.detail.index,1); 
          }
        },{
          title:"其他审批文件4:",
          contact:"idcard",
           color:'#07c160',
           maxCount:1,
           judge:true,//判断
           multiple:false,
           type:"upload",
           disabled:true,
           show:true,
           required:false,
          fileList: [],
          afterRead(event,index){
            const { file } = event.mp.detail;
            this.fileList.push({
              url:file.path,
              name: file.name,
              isImage: true,
              deletable: true,
            })
          },
          del_img(event){
            this.fileList.splice(event.mp.detail.index,1); 
          }
        },{
          title:"其他审批文件5:",
          contact:"idcard",
           color:'#07c160',
          judge:true,//判断8608917@qq.com
          multiple:false,
          maxCount:1,
          type:"upload",
          disabled:true,
          required:false,
          show:true,
          fileList: [],
           afterRead(event,index){
            const { file } = event.mp.detail;
            this.fileList.push({
              url:file.path,
              name: file.name,
              isImage: true,
              deletable: true,
            })
          },
          del_img(event){
            this.fileList.splice(event.mp.detail.index,1); 
          }
        },
        {
          type:"textarea",
          title:"应急处理措施（设备）:",
          message:"",
           prop:"carDeal",
           contact:"user-circle-o",
          color:'#ff976a',
          judge:true,//判断
          disabled:false,
          placeholder:"请输入应急处理措施（设备）:",
          required:false,
          change:(event,index)=>{
             that.value.carDeal=event.mp.detail.value
          }
        },
        {
          type:"textarea",
          title:"备注:",
          judge:false,//判断
          message:"请输入备注:",
          prop:"bz1",
          disabled:false,
          placeholder:"请输入备注:",
          required:true,
          contact:"edit",
          color:'#ee0a24',
          change:(event,index)=>{
              that.value.bz1=event.mp.detail.value
              if(that.value.bz1){
                  this.judge=true
              }else{
                this.judge=false;
                Toast(message)
              }
          }
        },
        ], 
        };
    },
    mounted(){
      this.getCompany()
      this.getwhSelect()
    },
    methods: {
      //提交app!ajaxCommitTemp
        formSubmit(values) {
          console.log(this.vlaue)
        },
        clearImg(e){
          console.log(e)
        },
             //访问单位
      getCompany(){
        this.$http.post({
          url: 'system/department!ajaxAppDepts',
            data : {},
          }).then(res => {
              if(res.result=="success"){
                res.data.map(item=>{
                  item.name =item.deptName
                  
                })
                this.formdata[1].actions= res.data
                this.company =res.data
              }
          })
        },
        //危废代码
      getwhSelect(){
          this.$http.post({
            url: 'app!whSelect',
              data : {},
            }).then(res => {
              if(res.result=="success"){
                console.log(res)
                res.data.map(item=>{
                item.name =item.HWCODE
              })
            this.formdata[8].actions= res.data
            this.whSelect = res.data
            }
          })
        }
      }
}
</script>
