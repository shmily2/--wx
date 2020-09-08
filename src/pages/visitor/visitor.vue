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
import Toast from '../../../dist/wx/vant-weapp/dist/toast/toast';
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
            // console.log(value.mp.detail);
            that.formdata[0].searchvalue = value.mp.detail;
            let listdata=[];
            if(value.mp.detail.length < 1){
              that.getCompany();
            }else{
              for(var i=0;i<that.formdata[0].actions.length;i++){
                if(that.formdata[0].actions[i].deptName.indexOf(value.mp.detail) != -1){
                  listdata.push(that.formdata[0].actions[i])
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
          }
      })
    },
    methods: {
      //提交app!ajaxCommitTemp
        formSubmit(event) {
           console.log(event)
        },
        clearImg(e){
          console.log(e)
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