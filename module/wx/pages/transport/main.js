require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transport__ = __webpack_require__(138);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__transport__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_transport_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_48026110_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_transport_vue__ = __webpack_require__(141);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(139)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_transport_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_48026110_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_transport_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\transport\\transport.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] transport.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48026110", Component.options)
  } else {
    hotAPI.reload("data-v-48026110", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 139:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_datetime__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_validate__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_form__ = __webpack_require__(30);

//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: "visitor",
  components: {
    FormComponents: __WEBPACK_IMPORTED_MODULE_4__components_form__["a" /* default */]
  },
  data: function data() {
    var _this = this,
        _ref;

    var that = this;
    return {
      value: {},
      formatter: function formatter(type, value) {
        if (type === 'year') {
          return value + "\u5E74";
        } else if (type === 'month') {
          return value + "\u6708";
        } else if (type === 'day') {
          return value + "\u65E5";
        } else if (type === 'hour') {
          return value + "\u65F6";
        } else if (type === 'minute') {
          return value + "\u5206";
        } else if (type === 'second') {
          return value + "\u79D2";
        }
        return value;
      },

      formdata: [{
        title: "运输单号:",
        judge: false, //判断
        show: true,
        type: "text",
        prop: "transNo",
        disabled: false,
        placeholder: "请输入运输单号",
        required: true,
        contact: "wap-home-o",
        change: function change(event) {
          that.value.transNo = event.mp.detail.value;
          if (that.value.transNo) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入运输单号";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
          }
        }
      }, {
        title: "前往企业:",
        type: "select",
        judge: false, //判断
        titlename: "==前往企业==",
        disabled: true,
        prop: "dept",
        placeholder: "请选择前往企业",
        required: true,
        contact: "wap-home-o",
        showsecect: false,
        activeaction: '',
        show: true,
        message: '请选择前往企业',
        searchvalue: '',
        actions: [],
        secetevent: function secetevent(index) {
          that.formdata[index].showsecect = true;
          that.formdata[1].searchvalue = "";
          that.getCompany();
        },
        // 监听输入变化
        onInput: function onInput(value) {
          // console.log(value.mp.detail);
          that.formdata[1].searchvalue = value.mp.detail;
          var listdata = [];
          if (value.mp.detail.length < 1) {
            that.getCompany();
          } else {
            for (var i = 0; i < that.formdata[1].actions.length; i++) {
              if (that.formdata[1].actions[i].deptName.indexOf(value.mp.detail) != -1) {
                listdata.push(that.formdata[1].actions[i]);
              }
            }
            that.formdata[1].actions = listdata;
          }
        },

        //关闭弹框
        Close: function Close(index) {
          this.showsecect = false;
          if (that.value.dept) {
            this.judge = true;
          } else {
            this.judge = false;
            this.message = "请选择前往企业";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(this.message);
          }
        },

        //选中
        onSearch: function onSearch(index, ind) {
          this.activeaction = ind;
          that.value.dept = this.actions[ind].name;
          this.showsecect = false;
          this.judge = true;
        }
      }, {
        title: "车辆所属企业:",
        judge: true, //判断
        show: true,
        type: "text",
        prop: "enterprise",
        disabled: false,
        placeholder: "请输入车辆所属企业",
        required: false,
        contact: "wap-home-o",
        change: function change(event) {
          that.value.enterprise = event.mp.detail.value;
        }
      }, {
        title: "车牌号:",
        judge: false, //判断
        message: '请输入车牌号',
        type: "text",
        prop: "carNo",
        disabled: false,
        placeholder: "请输入车牌号",
        required: true,
        show: true,
        contact: "logistics",
        change: function change(event, index) {
          that.value.carNo = event.mp.detail.value;
          if (that.value.carNo) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入车牌号";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["e" /* regxcard */])(that.value.carNo)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入正确的车牌号";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "车辆类型:",
        type: "text",
        disabled: true,
        show: true,
        prop: "driverType",
        placeholder: "",
        required: false,
        contact: "credit-pay"
      }, {
        title: "运输重量:",
        judge: false, //判断
        message: '请输入运输重量',
        show: true,
        type: "text",
        prop: "carETC",
        disabled: false,
        placeholder: "请输入运输重量",
        required: true,
        contact: "logistics",
        change: function change(event) {
          that.value.carETC = event.mp.detail.value;
          if (that.value.carETC) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入运输重量";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["d" /* regxPlusDecimal2 */])(that.value.carETC)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入数字最多保留2位小数";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "危化品名称:",
        type: "select",
        judge: false, //判断
        titlename: "==请选择==",
        disabled: true,
        prop: "dangerGoodName",
        placeholder: "请选择危化品名称",
        required: true,
        contact: "wap-home-o",
        showsecect: false,
        activeaction: '',
        show: true,
        message: '请选择危化品名称',
        searchvalue: '',
        actions: [],
        secetevent: function secetevent(index) {
          that.formdata[index].showsecect = true;
          that.formdata[6].searchvalue = "";
          that.getCompany();
        },
        // 监听输入变化
        onInput: function onInput(value) {
          // console.log(value.mp.detail);
          // console.log(that.formdata[6].actions)
          that.formdata[6].searchvalue = value.mp.detail;
          var listdata = [];
          if (value.mp.detail.length < 1) {
            that.getCompany();
          } else {
            for (var i = 0; i < that.formdata[6].actions.length; i++) {
              if (that.formdata[6].actions[i].name.indexOf(value.mp.detail) != -1) {
                listdata.push(that.formdata[6].actions[i]);
              }
            }
            that.formdata[6].actions = listdata;
          }
        },

        //关闭弹框
        Close: function Close(index) {
          this.showsecect = false;
          if (that.value.dangerGoodName) {
            this.judge = true;
          } else {
            this.judge = false;
            this.message = "请选择危化品名称";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(this.message);
          }
        },

        //选中
        onSearch: function onSearch(index, ind) {
          this.activeaction = ind;
          that.value.dept = this.actions[ind].name;
          this.showsecect = false;
          this.judge = true;
        }
      }, {
        title: "货运状态:",
        judge: false, //判断
        message: '请选择货运状态',
        required: true,
        titlename: "==货运状态==",
        type: "select",
        disabled: true,
        prop: "inOut",
        placeholder: "请选择货运状态",
        contact: "logistics",
        showsecect: false,
        activeaction: '',
        show: true,
        searchvalue: '',
        actions: [{
          name: '拉货',
          openType: 'share'
        }, {
          name: '送货',
          openType: 'share'
        }],
        secetevent: function secetevent(index) {
          that.formdata[index].showsecect = true;
        },
        Close: function Close(index) {
          if (that.value.inOut) {
            this.judge = true;
          } else {
            this.judge = false;
            this.message = "请选择货运状态";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(this.message);
          }
          this.showsecect = false;
        },
        onSearch: function onSearch(index, ind) {
          this.activeaction = ind;
          that.value.inOut = this.actions[ind].name;
          this.judge = true;
          this.showsecect = false;
          change: (function (event) {});
        }
      }, {
        title: "货物来源:",
        judge: true, //判断
        show: true,
        type: "text",
        prop: "goodsSource",
        disabled: false,
        placeholder: "请输入货物来源",
        required: false,
        contact: "wap-home-o",
        change: function change(event) {
          that.value.goodsSource = event.mp.detail.value;
        }
      }, {
        title: "预约开始时间:",
        judge: false, //判断
        message: '请选择预约开始时间',
        type: "datetime",
        prop: "startTime",
        disabled: true,
        placeholder: "请选择预约开始时间",
        required: true,
        contact: "underway-o",
        showsecect: false,
        activeaction: '',
        show: true,
        searchvalue: '',
        secetevent: function secetevent(index) {
          that.formdata[index].showsecect = true;
          that.value.endTime = '';
        },
        minDate: new Date().getTime(),
        maxDate: new Date(2060, 10, 1).getTime(),
        currentDate: new Date().getTime(),
        //确定
        confirm: function confirm(e, index) {
          var time = Object(__WEBPACK_IMPORTED_MODULE_1__utils_datetime__["a" /* formatWithSeperator */])(e.mp.detail, "-", ":");
          that.value.startTime = time;
          that.formdata[index].showsecect = false;
          _this.judge = true;
        },
        cancel: function cancel(e, index) {
          console.log(that.formdata[index].showsecect);
          if (that.value.startTime) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请选择预约开始时间";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
          }
          that.formdata[index].showsecect = false;
        }
      }, {
        title: "预约结束时间:",
        judge: false, //判断
        message: '请选择预约结束时间',
        type: "datetime",
        prop: "endTime",
        disabled: true,
        placeholder: "请选择预约结束时间",
        required: true,
        contact: "underway-o",
        showsecect: false,
        show: true,
        activeaction: '',
        searchvalue: '',
        secetevent: function secetevent(index) {
          if (that.value.startTime) {
            that.formdata[index].showsecect = true;
          } else {
            _this.message = "请先选择预约开始时间";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
          }
        },
        minDate: new Date().getTime(),
        maxDate: new Date(2060, 10, 1).getTime(),
        currentDate: new Date().getTime(),
        //确定
        confirm: function confirm(e, index) {
          var time = Object(__WEBPACK_IMPORTED_MODULE_1__utils_datetime__["a" /* formatWithSeperator */])(e.mp.detail, "-", ":");
          if (time > that.value.startTime) {
            _this.judge = true;
            that.value.endTime = time;
            that.formdata[index].showsecect = false;
          } else {
            _this.judge = false;
            _this.message = "预约结束时间必须大于预约开始时间";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
          }
        },
        cancel: function cancel(e, index) {
          if (that.value.endTime) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请选择预约结束时间";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
          }
        }
      }, {
        title: "驾驶员姓名:",
        prop: "driverName",
        judge: false, //判断
        show: true,
        message: '请输入驾驶员姓名',
        type: "text",
        disabled: false,
        placeholder: "请输入驾驶员姓名",
        required: true,
        contact: "user-circle-o",
        change: function change(event) {
          that.value.driverName = event.mp.detail.value;
          if (that.value.driverName) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入驾驶员姓名";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
          }
        }
      }, {
        title: "驾驶员身份证:",
        judge: false, //判断
        message: '请输入驾驶员身份证',
        required: true,
        show: true,
        type: "text",
        prop: "driverIDNum",
        disabled: false,
        placeholder: "请输入驾驶员身份证",
        contact: "idcard",
        change: function change(event) {
          that.value.driverIDNum = event.mp.detail.value;
          if (that.value.driverIDNum) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入驾驶员身份证";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["a" /* ID */])(that.value.driverIDNum)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入正确的身份证";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "驾驶员手机号:",
        show: true,
        judge: false, //判断
        message: '请输入驾驶员手机号',
        type: "text",
        prop: "driverPhone",
        disabled: false,
        placeholder: "请输入驾驶员手机号",
        required: true,
        contact: "phone-circle-o",
        change: function change(event) {
          that.value.driverPhone = event.mp.detail.value;
          if (that.value.driverPhone) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入驾驶员手机号";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["b" /* isMobile */])(that.value.driverPhone)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入正确的手机号码";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "押运员姓名:",
        prop: "yayunName",
        judge: false, //判断
        show: true,
        message: '请输入押运员姓名',
        type: "text",
        disabled: false,
        placeholder: "请输入押运员姓名",
        required: true,
        contact: "user-circle-o",
        change: function change(event) {
          that.value.yayunName = event.mp.detail.value;
          if (that.value.yayunName) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入押运员姓名";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
          }
        }
      }, {
        title: "押运员身份证:",
        judge: false, //判断
        message: '请输入押运员身份证',
        required: true,
        show: true,
        type: "text",
        prop: "yayunID",
        disabled: false,
        placeholder: "请输入押运员身份证",
        contact: "idcard",
        change: function change(event) {
          that.value.yayunID = event.mp.detail.value;
          if (that.value.yayunID) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入押运员身份证";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["a" /* ID */])(that.value.yayunID)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入正确的身份证";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "押运员手机号:",
        show: true,
        judge: false, //判断
        message: '请输入押运员手机号',
        type: "text",
        prop: "yayunPhone",
        disabled: false,
        placeholder: "请输入驾驶员手机号",
        required: true,
        contact: "phone-circle-o",
        change: function change(event) {
          that.value.yayunPhone = event.mp.detail.value;
          if (that.value.yayunPhone) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入押运员手机号";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["b" /* isMobile */])(that.value.yayunPhone)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入正确的手机号码";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "司机驾驶证:",
        judge: false, //判断
        show: true,
        multiple: false,
        maxCount: 1,
        message: '请上传司机驾驶证',
        type: "upload",
        accept: 'image',
        disabled: true,
        required: true,
        fileList: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg', name: '图片1' }],
        afterRead: function afterRead(event, index) {
          var file = event.mp.detail.file;

          this.fileList.push({
            url: file.path,
            name: file.name,
            isImage: true,
            deletable: true
          });
          this.judge = true;
          // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
          that.$http.post({
            url: 'app!fileUpload', // 仅为示例，非正实的接口地址
            name: 'file',
            data: {
              "imgbese": file.path,
              "uploadFileName": "Tupac"
            },
            success: function success(res) {
              console.log(res);
            }
          });
        },
        del_img: function del_img(event) {
          this.fileList.splice(event.mp.detail.index, 1);
          if (this.fileList.length < 1) {
            this.judge = false;
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(this.message);
          }
        }
      }, {
        title: "车辆行驶证:",
        message: '请上传车辆行驶证',
        judge: false, //判断
        maxCount: 1,
        disabled: true,
        multiple: false,
        type: "upload",
        required: true,
        show: true,
        fileList: [],
        afterRead: function afterRead(event, index) {
          var file = event.mp.detail.file;

          this.fileList.push({
            url: file.path,
            name: file.name,
            isImage: true,
            deletable: true
          });
          this.judge = true;
        },
        del_img: function del_img(event) {
          this.fileList.splice(event.mp.detail.index, 1);
          if (this.fileList.length < 1) {
            this.judge = false;
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(this.message);
          }
        }
      }, {
        title: "审批文件:",
        type: "upload",
        maxCount: 1,
        judge: true, //判断
        multiple: false,
        disabled: true,
        required: false,
        show: true,
        fileList: [],
        afterRead: function afterRead(event, index) {
          var file = event.mp.detail.file;

          this.fileList.push({
            url: file.path,
            name: file.name,
            isImage: true,
            deletable: true
          });
        },
        del_img: function del_img(event) {
          this.fileList.splice(event.mp.detail.index, 1);
        }
      }, (_ref = {
        title: "其他审批文件1:",
        judge: true, //判断
        multiple: false,
        maxCount: 1,
        type: "upload",
        disabled: true,
        required: false,
        show: true
      }, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, "required", false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, "fileList", []), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, "afterRead", function afterRead(event, index) {
        var file = event.mp.detail.file;

        this.fileList.push({
          url: file.path,
          name: file.name,
          isImage: true,
          deletable: true
        });
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, "del_img", function del_img(event) {
        this.fileList.splice(event.mp.detail.index, 1);
      }), _ref), {
        title: "其他审批文件2:",
        maxCount: 1,
        judge: true, //判断
        multiple: false,
        type: "upload",
        disabled: true,
        show: true,
        required: false,
        fileList: [],
        afterRead: function afterRead(event, index) {
          var file = event.mp.detail.file;

          this.fileList.push({
            url: file.path,
            name: file.name,
            isImage: true,
            deletable: true
          });
        },
        del_img: function del_img(event) {
          this.fileList.splice(event.mp.detail.index, 1);
        }
      }, {
        title: "其他审批文件3:",
        maxCount: 1,
        judge: true, //判断
        multiple: false,
        type: "upload",
        disabled: true,
        show: true,
        required: false,
        fileList: [],
        afterRead: function afterRead(event, index) {
          var file = event.mp.detail.file;

          this.fileList.push({
            url: file.path,
            name: file.name,
            isImage: true,
            deletable: true
          });
        },
        del_img: function del_img(event) {
          this.fileList.splice(event.mp.detail.index, 1);
        }
      }, {
        title: "其他审批文件4:",
        maxCount: 1,
        judge: true, //判断
        multiple: false,
        type: "upload",
        disabled: true,
        show: true,
        required: false,
        fileList: [],
        afterRead: function afterRead(event, index) {
          var file = event.mp.detail.file;

          this.fileList.push({
            url: file.path,
            name: file.name,
            isImage: true,
            deletable: true
          });
        },
        del_img: function del_img(event) {
          this.fileList.splice(event.mp.detail.index, 1);
        }
      }, {
        title: "其他审批文件5:",
        judge: true, //判断8608917@qq.com
        multiple: false,
        maxCount: 1,
        type: "upload",
        disabled: true,
        required: false,
        show: true,
        fileList: [],
        afterRead: function afterRead(event, index) {
          var file = event.mp.detail.file;

          this.fileList.push({
            url: file.path,
            name: file.name,
            isImage: true,
            deletable: true
          });
        },
        del_img: function del_img(event) {
          this.fileList.splice(event.mp.detail.index, 1);
        }
      }, {
        type: "textarea",
        title: "应急处理措施（设备）:",
        message: "",
        judge: true, //判断
        prop: "carDeal",
        disabled: false,
        placeholder: "请输入应急处理措施（设备）:",
        required: false,
        contact: "user-circle-o",
        change: function change(event, index) {
          that.value.carDeal = event.mp.detail.value;
        }
      }, {
        type: "textarea",
        title: "备注:",
        judge: false, //判断
        message: "请输入备注:",
        prop: "bz1",
        disabled: false,
        placeholder: "请输入备注:",
        required: true,
        contact: "edit",
        change: function change(event, index) {
          that.value.bz1 = event.mp.detail.value;
          if (that.value.bz1) {
            _this.judge = true;
          } else {
            _this.judge = false;
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(message);
          }
        }
      }]
    };
  },
  mounted: function mounted() {
    this.getCompany();
  },

  methods: {
    //访问单位
    getCompany: function getCompany() {
      var _this2 = this;

      this.$http.post({
        url: 'system/department!ajaxAppDepts',
        data: {}
      }).then(function (res) {
        if (res.result == "success") {
          res.data.map(function (item) {
            item.name = item.deptName;
          });
          _this2.formdata[1].actions = res.data;
        }
      });
      //危化品名称
      this.$http.post({
        url: 'app!Chemicals',
        data: {}
      }).then(function (res) {
        if (res.result == "success") {
          // console.log(res)
          res.data.map(function (item) {
            item.name = item.NAME;
          });
          _this2.formdata[6].actions = res.data;
          _this2.formdata[6].actions.push({ name: "空车" });
        }
      });
    },

    //提交app!ajaxCommitTemp
    formSubmit: function formSubmit(values) {
      console.log(this.vlaue);
    },
    clearImg: function clearImg(e) {
      console.log(e);
    }
  }
});

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "visitor"
  }, [_c('FormComponents', {
    attrs: {
      "formdata": _vm.formdata,
      "value": _vm.value,
      "formatter": _vm.formatter,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "formSubmit": _vm.formSubmit
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-48026110", esExports)
  }
}

/***/ })

},[137]);