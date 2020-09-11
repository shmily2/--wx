<template>
  <view class="visitor">
    <FormComponents
      :formdata="formdata"
      :value="values"
      :formatter="formatter"
      @formSubmit="formSubmit"
    ></FormComponents>
  </view>
</template>
<script>
import {formatWithSeperator,getBase64Image}  from  "../../utils/datetime"
import {ID,isMobile,regxcard,regxPlusDecimal2,number}  from  "../../utils/validate"
import Toast from '../../../static/vant-weapp/toast/toast';
import FormComponents from "../../components/form"
export default { 
    name:"visitor",
    components:{
      FormComponents,
    },
    data() {
       let that=this
        return {
        values:{
          leixing:'访客临时通行卡'
        },
        company:[],
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
      formdata:[{
          title:"访问单位:",
          type:"select",
          judge:false,//判断
          titlename:"==访问单位==",
          disabled:true,
          prop:"fwdeptName",
          placeholder:"请选择访问单位",
          required:true,
          color:'#1989fa',
          contact:"wap-home-o",
          showsecect:false,
          activeaction:'',
          show:true,
          message:'请选择访问单位',
          searchvalue:'',
          actions: [],
          secetevent:(index)=>{
            that.formdata[index].showsecect=true;
            that.formdata[0].searchvalue = ""
            that.getCompany();
          },
          //关闭弹框
          Close(index){
            this.showsecect=false
            if(that.values.fwdeptName){
              this.judge=true
            }else{
              this.judge=false
              this.message="请选择访问单位"
              Toast(this.message);
            }
          },
        // 监听输入变化
        onInput(value){
            that.formdata[0].searchvalue = value.mp.detail;
            let listdata=[];
            if(value.mp.detail.length < 1){
              that.getCompany();
            }else{
              for(var i=0;i<that.company.length;i++){
                if(that.company[i].deptName.indexOf(value.mp.detail) != -1){
                  listdata.push(that.company[i])
                }
              }
               that.formdata[0].actions = listdata
            }
          },
          //选中
          onSearch(index,ind){
            this.activeaction=ind;
            that.values.fwdeptName=this.actions[ind].name
            this.showsecect=false
            this.judge=true;
            },
          },
        {
          title:"临时卡类型:",
          type:"text",
          disabled:true,
          show:true,
          prop:"leixing",
          placeholder:"",
          required:false,
          contact:"credit-pay",
          color:'#1989fa',
        },
        {
          title:"预约来访时间:",
          judge:false,//判断
          message:'请选择预约来访时间',
          type:"datetime",
          prop:"begTime",
          disabled:true,
          placeholder:"请选择预约来访时间",
          required:true,
          contact:"underway-o",
          showsecect:false,
          activeaction:'',
          show:true,
          searchvalue:'',
          secetevent:(index)=>{
              that.formdata[index].showsecect=true;
              that.values.endTime ='';
          },
        minDate: new Date().getTime(),
        maxDate: new Date(2060, 10, 1).getTime(),
        currentDate: new Date().getTime(),
        //确定
        confirm:(e,index)=>{
              let time= formatWithSeperator(e.mp.detail,"-",":") 
              that.values.begTime = time
              that.formdata[index].showsecect=false;
              this.judge=true
          },
          cancel:(e,index)=>{
            console.log(that.formdata[index].showsecect)
            if(that.values.begTime){
                this.judge=true
              }else{
                this.judge=false
                this.message="请选择预约来访时间"
                Toast(this.message);
            }
            that.formdata[index].showsecect=false;
          }
        },
        {
          title:"预约离开时间:",
           judge:false,//判断
           message:'请选择预约离开时间',
           type:"datetime",
           prop:"endTime",
          disabled:true,
          placeholder:"请选择预约离开时间",
          required:true,
          contact:"underway-o",
          showsecect:false,
          show:true,
          activeaction:'',
          color:'#07c160',
          searchvalue:'',
          secetevent:(index)=>{
             if(that.values.begTime){
               that.formdata[index].showsecect=true;
             }else{
               this.message="请先选择预约来访时间"
               Toast(this.message)
             }
          },
          minDate: new Date().getTime(),
          maxDate: new Date(2060, 10, 1).getTime(),
          currentDate: new Date().getTime(),
            //确定
          confirm:(e,index)=>{
          let time= formatWithSeperator(e.mp.detail,"-",":") 
            if(time>that.values.begTime){
                this.judge=true
                that.values.endTime = time
                that.formdata[index].showsecect=false;
           }else {
              this.judge=false
              this.message="预约离开时间必须大于预约来访时间"
              Toast(this.message);
             }
          },
        cancel:(e,index)=>{
          if(that.values.endTime){
              this.judge=true
           }else {
              this.judge=false
              this.message="请选择预约离开时间"
              Toast(this.message);
           }
          }
        },
        {
          title:"所属企业:",
          judge:true,//判断
          show:true,
          type:"text",
          prop:"fromDeptName",
          disabled:false,
          placeholder:"请输入所属企业",
          required:false,
           contact:"wap-home-o",
          color:'#1989fa',
          change:(event)=>{
               that.values.fromDeptName=event.mp.detail.value
          }
        },
        {
          title:"访客姓名:",
          prop:"peopleName",
          judge:false,//判断
          show:true,
          message:'请输入访客姓名',
          type:"text",
          disabled:false,
          placeholder:"请输入访客姓名",
          required:true,
            contact:"user-circle-o",
           color:'#1989fa',
          change:(event)=>{
               that.values.peopleName=event.mp.detail.value
               if(that.values.peopleName){
                 this.judge=true
               }else{
                 this.judge=false
                 this.message="请输入访客姓名"
                 Toast(this.message);
               }
          }
        },
        {
          title:"访客身份证号:",
          judge:false,//判断
          message:'请输入访客身份证号',
          required:true,
          contact:"idcard",
          color:'#1989fa',
          show:true,
          type:"text",
          prop:"idCard",
          disabled:false,
          placeholder:"请输入访客身份证号",
          change:(event)=>{
               that.values.idCard=event.mp.detail.value
               if(that.values.idCard){
                  this.judge=true
               }else{
                   this.judge=false
                   this.message="请输入访客身份证号"
                    Toast(this.message);
                   return
               }
              if(ID(that.values.idCard)){
                this.judge=true
              }else{
                this.judge=false
                this.message="请输入正确的身份证号"
                Toast(this.message);
                return
              }
          }
        },
        {
          title:"访客手机号:",
          show:true,
          judge:false,//判断
          message:'请输入访客手机号',
          type:"text",
          prop:"peopleTel",
          disabled:false,
          placeholder:"请输入访客手机号",
          required:true,
          contact:"phone-circle-o",
          color:'#1989fa',
          change:(event)=>{
               that.values.peopleTel=event.mp.detail.value
               if(that.values.peopleTel){
                 this.judge=true
               }else{
                  this.judge=false
                  this.message="请输入访客手机号"
                 Toast(this.message);
                  return
               }
               if(isMobile(that.values.peopleTel)){
                  this.judge=true
               }else {
                 this.judge=false
                 this.message="请输入真确的手机号码"
                 Toast(this.message);
                  return
               }
          }
        },
          {
          title:"入园方式:",
          judge:false,//判断
          message:'请选择入园方式',
          required:true,
          titlename:"==入园方式==",
          type:"select",
          disabled:true,
          prop:"isOrnot",
          placeholder:"请选择入园方式",
          showsecect:false,
          contact:"logistics",
          color:'#ee0a24',
          activeaction:'',
          show:false,
          searchvalue:'',
          actions:[
            {
                name: '步行',
                openType: 'share',
            },
            {
                name: '电动车',
                openType: 'share',
            },
            {
                name: '自驾车',
                openType: 'share',
            },
               {
                name: '货车',
                openType: 'share',
            },
            {
                name: '客车',
                openType: 'share',
            },
            {
                name: '特种车辆',
                openType: 'share',
            },
             {
                name: '农用车',
                openType: 'share',
            },
            {
              name: '其他',
               openType: 'share',
            },
            ],
          secetevent:(index)=>{
             that.formdata[index].showsecect=true;
            },
          Close(index){
            if(that.values.isOrnot){
              this.judge=true
            }else{
              this.judge=false
              this.message="请选择选择入园方式"
              Toast(this.message);
            }
            this.showsecect=false
          },
          onSearch(index,ind){
            this.activeaction=ind;
            that.values.isOrnot=this.actions[ind].name;
            this.judge=true
            this.showsecect=false
            if(that.values.isOrnot=="自驾车" || that.values.isOrnot=="特种车辆" ||that.values.isOrnot=="农用车" ||that.values.isOrnot=="货车"||that.values.isOrnot=="客车"){
                for(var i=9;i<that.formdata.length;i++){
                if(i==10 ||i ==11 || i== 12){
                    if(that.values.isOrnot=="货车"){
                      that.formdata[10].show=true;
                      that.formdata[11].show=false;
                      that.formdata[12].show=false;
                    }else if(that.values.isOrnot=="客车" ){
                        that.formdata[11].show=true;
                        that.formdata[12].show=true;
                        that.formdata[10].show=false;
                    }else{
                      that.formdata[i].show=false;
                    }
                  }else{
                     that.formdata[i].show=true;
                  }
                }
                return
             }else{
                for(var i=9;i<that.formdata.length;i++){
                     if(that.values.isOrnot=="其他"){
                        if(i>=15){
                          that.formdata[i].show=true;
                        }else{
                             that.formdata[i].show=false;
                        }
                      }else{
                        that.formdata[i].show=false;
                      }
                        
                  }
                }
          },
        },
        {
          title:"访客车牌号:",
          judge:false,//判断
          message:'请输入访客车牌号',
          type:"text",
          prop:"load",
          disabled:false,
          placeholder:"请输入访客车牌号",
          required:true,
          show:false,
           contact:"logistics",
          color:'#ff976a',
          change:(event,index)=>{
               that.values.load=event.mp.detail.value
               if(that.values.load){
                  this.judge=true
               }else{
                  this.judge=false
                  this.message="请输入访客车牌号"
                 Toast(this.message);
                  return
               }
               if(regxcard(that.values.load)){
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
          title:"载重量:",
          judge:false,//判断
          message:'请输入载重量',
          show:false,
          type:"text",
          prop:"carNum",
          disabled:false,
          placeholder:"请输入载重量",
          required:true,
           contact:"logistics",
          color:'#07c160',
          change:(event)=>{
              that.values.carNum=event.mp.detail.value
              if(that.values.carNum){
                  this.judge=true
               }else{
                  this.judge=false
                  this.message="请输入载重量"
                 Toast(this.message);
                  return
               }
               if(regxPlusDecimal2(that.values.carNum)){
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
          title:"载客人数:",
           judge:false,//判断
           message:'',
          type:"text",
          prop:"carrays",
          show:false,
          disabled:false,
          placeholder:"请输入载客人数",
          required:true,
          contact:"friends-o",
          color:'#07c160',
          change:(event)=>{
               that.values.carrays=event.mp.detail.value
                if(that.values.carrays){
                  this.judge=true
               }else{
                  this.judge=false
                  this.message="请输入载客人数"
                 Toast(this.message);
                  return
               }
               if(number(that.values.carrays)){
                  this.judge=true
               }else{
                 this.judge=false
                  this.message="请输入数字"
                 Toast(this.message);
                 return
               }
          }
        },
         {
          title:"限载人数:",
           judge:false,//判断
           message:'',
          type:"text",
          prop:"posting",
           show:false,
          disabled:false,
          placeholder:"请输入限载人数",
          required:true,
          contact:"friends-o",
          color:'#ee0a24',
          change:(event)=>{
               that.values.posting=event.mp.detail.value
              if(that.values.posting){
                  this.judge=true
               }else{
                  this.judge=false
                  this.message="请输入限载人数"
                 Toast(this.message);
                  return
               }
               if(number(that.values.posting)){
                  this.judge=true
               }else{
                 this.judge=false
                  this.message="请输入数字"
                 Toast(this.message);
                 return
               }
          }
        },
        {
          title:"司机驾驶证:",
          contact:"idcard",
          color:'#07c160',
          judge:false,//判断
          show:false,
          multiple:false,
          maxCount:1,
          message:'请上传司机驾驶证',
          type:"upload",
          accept:'image',
          disabled:true,
          required:true,
            fileList: [
             { url: 'data:image/png;base64,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',isImage:true },
              // Uploader 根据文件后缀来判断是否为图片文件
              // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
            ],
          afterRead(event,index){
          const { file } = event.mp.detail;
             console.log(file.path)
          this.fileList.push({
            url:file.path,
            name: file.name,
            isImage: true,
            deletable: true,
          })
          this.judge=true;
            // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
            that.$http.post({
              url: 'app!fileUpload', // 仅为示例，非真实的接口地址
   
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
          show:false,
          fileList: [],
          afterRead(event,index){
            const { file } = event.mp.detail;
            console.log(file)
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
           show:false,
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
           show:false,
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
           show:false,
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
           show:false,
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
           show:false,
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
          judge:true,//判断8608917@qq.com
           multiple:false,
              maxCount:1,
                  contact:"idcard",
           color:'#07c160',
          type:"upload",
          disabled:true,
          required:false,
            show:false,
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
          title:"随行人员姓名(逗号分隔):",
          message:"",
          judge:true,//判断
          prop:"followMan",
          color:'#ff976a',
          disabled:false,
          placeholder:"请输入随行人员姓名",
          required:false,
          contact:"user-circle-o",
          change:(event,index)=>{
             that.values.followMan=event.mp.detail.value
          }
        },
        {
          type:"textarea",
          title:"申请说明",
           color:'#ee0a24',
          judge:false,//判断
          message:"请输入申请说明",
          prop:"remark",
          disabled:false,
          placeholder:"请输入申请说明",
          required:true,
          contact:"edit",
          change:(event,index)=>{
              that.values.remark=event.mp.detail.value
              if(that.values.remark){
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
    },
    methods: {
      //提交app!ajaxCommitTemp
        formSubmit(event) {
           console.log(event)
        },
        clearImg(e){
          console.log(e)
        },
      getCompany(){
              //访问单位
        this.$http.post({
        url: 'system/department!ajaxAppDepts',
          data : {},
        }).then(res => {
            if(res.result=="success"){
              res.data.map(item=>{
                item.name =item.deptName
              })
              this.formdata[0].actions= res.data
              this.company =res.data
            }
        })
      }
   }
}
</script>
<style>
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
  width: 30%;
}
.weui-input {
  text-align: right;
  width: 70%;
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
.phcolor {
  font-size: 14px;
  color: #aab2bd;
  text-align: right;
}
</style>