require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visitor__ = __webpack_require__(153);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__visitor__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_visitor_vue__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7467729a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_visitor_vue__ = __webpack_require__(156);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(154)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_visitor_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7467729a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_visitor_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\visitor\\visitor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] visitor.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7467729a", Component.options)
  } else {
    hotAPI.reload("data-v-7467729a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 154:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 155:
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
      values: {
        leixing: '访客临时通行卡'
      },
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
        title: "访问单位:",
        type: "select",
        judge: false, //判断
        titlename: "==访问单位==",
        disabled: true,
        prop: "fwdeptName",
        placeholder: "请选择访问单位",
        required: true,
        color: '#1989fa',
        contact: "wap-home-o",
        showsecect: false,
        activeaction: '',
        show: true,
        message: '请选择访问单位',
        searchvalue: '',
        actions: [],
        secetevent: function secetevent(index) {
          that.formdata[index].showsecect = true;
          that.formdata[0].searchvalue = "";
          that.getCompany();
        },
        //关闭弹框
        Close: function Close(index) {
          this.showsecect = false;
          if (that.values.fwdeptName) {
            this.judge = true;
          } else {
            this.judge = false;
            this.message = "请选择访问单位";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(this.message);
          }
        },

        // 监听输入变化
        onInput: function onInput(value) {
          // console.log(value.mp.detail);
          that.formdata[0].searchvalue = value.mp.detail;
          var listdata = [];
          if (value.mp.detail.length < 1) {
            that.getCompany();
          } else {
            for (var i = 0; i < that.formdata[0].actions.length; i++) {
              if (that.formdata[0].actions[i].deptName.indexOf(value.mp.detail) != -1) {
                listdata.push(that.formdata[0].actions[i]);
              }
            }
            that.formdata[0].actions = listdata;
          }
        },

        //选中
        onSearch: function onSearch(index, ind) {
          this.activeaction = ind;
          that.values.fwdeptName = this.actions[ind].name;
          this.showsecect = false;
          this.judge = true;
        }
      }, {
        title: "临时卡类型:",
        type: "text",
        disabled: true,
        show: true,
        prop: "leixing",
        placeholder: "",
        required: false,
        contact: "credit-pay",
        color: '#1989fa'
      }, {
        title: "预约来访时间:",
        judge: false, //判断
        message: '请选择预约来访时间',
        type: "datetime",
        prop: "begTime",
        disabled: true,
        placeholder: "请选择预约来访时间",
        required: true,
        contact: "underway-o",
        showsecect: false,
        activeaction: '',
        show: true,
        searchvalue: '',
        secetevent: function secetevent(index) {
          that.formdata[index].showsecect = true;
          that.values.endTime = '';
        },
        minDate: new Date().getTime(),
        maxDate: new Date(2060, 10, 1).getTime(),
        currentDate: new Date().getTime(),
        //确定
        confirm: function confirm(e, index) {
          var time = Object(__WEBPACK_IMPORTED_MODULE_1__utils_datetime__["a" /* formatWithSeperator */])(e.mp.detail, "-", ":");
          that.values.begTime = time;
          that.formdata[index].showsecect = false;
          _this.judge = true;
        },
        cancel: function cancel(e, index) {
          console.log(that.formdata[index].showsecect);
          if (that.values.begTime) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请选择预约来访时间";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
          }
          that.formdata[index].showsecect = false;
        }
      }, {
        title: "预约离开时间:",
        judge: false, //判断
        message: '请选择预约离开时间',
        type: "datetime",
        prop: "endTime",
        disabled: true,
        placeholder: "请选择预约离开时间",
        required: true,
        contact: "underway-o",
        showsecect: false,
        show: true,
        activeaction: '',
        color: '#07c160',
        searchvalue: '',
        secetevent: function secetevent(index) {
          if (that.values.begTime) {
            that.formdata[index].showsecect = true;
          } else {
            _this.message = "请先选择预约来访时间";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
          }
        },
        minDate: new Date().getTime(),
        maxDate: new Date(2060, 10, 1).getTime(),
        currentDate: new Date().getTime(),
        //确定
        confirm: function confirm(e, index) {
          var time = Object(__WEBPACK_IMPORTED_MODULE_1__utils_datetime__["a" /* formatWithSeperator */])(e.mp.detail, "-", ":");
          if (time > that.values.begTime) {
            _this.judge = true;
            that.values.endTime = time;
            that.formdata[index].showsecect = false;
          } else {
            _this.judge = false;
            _this.message = "预约离开时间必须大于预约来访时间";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
          }
        },
        cancel: function cancel(e, index) {
          if (that.values.endTime) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请选择预约离开时间";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
          }
        }
      }, {
        title: "所属企业:",
        judge: true, //判断
        show: true,
        type: "text",
        prop: "fromDeptName",
        disabled: false,
        placeholder: "请输入所属企业",
        required: false,
        contact: "wap-home-o",
        color: '#1989fa',
        change: function change(event) {
          that.values.fromDeptName = event.mp.detail.value;
        }
      }, {
        title: "访客姓名:",
        prop: "peopleName",
        judge: false, //判断
        show: true,
        message: '请输入访客姓名',
        type: "text",
        disabled: false,
        placeholder: "请输入访客姓名",
        required: true,
        contact: "user-circle-o",
        color: '#1989fa',
        change: function change(event) {
          that.values.peopleName = event.mp.detail.value;
          if (that.values.peopleName) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入访客姓名";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
          }
        }
      }, {
        title: "访客身份证号:",
        judge: false, //判断
        message: '请输入访客身份证号',
        required: true,
        contact: "idcard",
        color: '#1989fa',
        show: true,
        type: "text",
        prop: "idCard",
        disabled: false,
        placeholder: "请输入访客身份证号",
        change: function change(event) {
          that.values.idCard = event.mp.detail.value;
          if (that.values.idCard) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入访客身份证号";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["a" /* ID */])(that.values.idCard)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入正确的身份证号";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "访客手机号:",
        show: true,
        judge: false, //判断
        message: '请输入访客手机号',
        type: "text",
        prop: "peopleTel",
        disabled: false,
        placeholder: "请输入访客手机号",
        required: true,
        contact: "phone-circle-o",
        color: '#1989fa',
        change: function change(event) {
          that.values.peopleTel = event.mp.detail.value;
          if (that.values.peopleTel) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入访客手机号";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["b" /* isMobile */])(that.values.peopleTel)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入真确的手机号码";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "入园方式:",
        judge: false, //判断
        message: '请选择入园方式',
        required: true,
        titlename: "==入园方式==",
        type: "select",
        disabled: true,
        prop: "isOrnot",
        placeholder: "请选择入园方式",
        showsecect: false,
        contact: "logistics",
        color: '#ee0a24',
        activeaction: '',
        show: false,
        searchvalue: '',
        actions: [{
          name: '步行',
          openType: 'share'
        }, {
          name: '电动车',
          openType: 'share'
        }, {
          name: '自驾车',
          openType: 'share'
        }, {
          name: '货车',
          openType: 'share'
        }, {
          name: '客车',
          openType: 'share'
        }, {
          name: '特种车辆',
          openType: 'share'
        }, {
          name: '农用车',
          openType: 'share'
        }, {
          name: '其他',
          openType: 'share'
        }],
        secetevent: function secetevent(index) {
          that.formdata[index].showsecect = true;
        },
        Close: function Close(index) {
          if (that.values.isOrnot) {
            this.judge = true;
          } else {
            this.judge = false;
            this.message = "请选择选择入园方式";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(this.message);
          }
          this.showsecect = false;
        },
        onSearch: function onSearch(index, ind) {
          this.activeaction = ind;
          that.values.isOrnot = this.actions[ind].name;
          this.judge = true;
          this.showsecect = false;
          if (that.values.isOrnot == "自驾车" || that.values.isOrnot == "特种车辆" || that.values.isOrnot == "农用车" || that.values.isOrnot == "货车" || that.values.isOrnot == "客车") {
            for (var i = 9; i < that.formdata.length; i++) {
              if (i == 10 || i == 11 || i == 12) {
                if (that.values.isOrnot == "货车") {
                  that.formdata[10].show = true;
                  that.formdata[11].show = false;
                  that.formdata[12].show = false;
                } else if (that.values.isOrnot == "客车") {
                  that.formdata[11].show = true;
                  that.formdata[12].show = true;
                  that.formdata[10].show = false;
                } else {
                  that.formdata[i].show = false;
                }
              } else {
                that.formdata[i].show = true;
              }
            }
            return;
          } else {
            for (var i = 9; i < that.formdata.length; i++) {
              if (that.values.isOrnot == "其他") {
                if (i >= 15) {
                  that.formdata[i].show = true;
                } else {
                  that.formdata[i].show = false;
                }
              } else {
                that.formdata[i].show = false;
              }
            }
          }
        }
      }, {
        title: "访客车牌号:",
        judge: false, //判断
        message: '请输入访客车牌号',
        type: "text",
        prop: "load",
        disabled: false,
        placeholder: "请输入访客车牌号",
        required: true,
        show: false,
        contact: "logistics",
        color: '#ff976a',
        change: function change(event, index) {
          that.values.load = event.mp.detail.value;
          if (that.values.load) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入访客车牌号";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["e" /* regxcard */])(that.values.load)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入正确的车牌号";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "载重量:",
        judge: false, //判断
        message: '请输入载重量',
        show: false,
        type: "text",
        prop: "carNum",
        disabled: false,
        placeholder: "请输入载重量",
        required: true,
        contact: "logistics",
        color: '#07c160',
        change: function change(event) {
          that.values.carNum = event.mp.detail.value;
          if (that.values.carNum) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入载重量";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["d" /* regxPlusDecimal2 */])(that.values.carNum)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入数字最多保留2位小数";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "载客人数:",
        judge: false, //判断
        message: '',
        type: "text",
        prop: "carrays",
        show: false,
        disabled: false,
        placeholder: "请输入载客人数",
        required: true,
        contact: "friends-o",
        color: '#07c160',
        change: function change(event) {
          that.values.carrays = event.mp.detail.value;
          if (that.values.carrays) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入载客人数";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["c" /* number */])(that.values.carrays)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入数字";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "限载人数:",
        judge: false, //判断
        message: '',
        type: "text",
        prop: "posting",
        show: false,
        disabled: false,
        placeholder: "请输入限载人数",
        required: true,
        contact: "friends-o",
        color: '#ee0a24',
        change: function change(event) {
          that.values.posting = event.mp.detail.value;
          if (that.values.posting) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入限载人数";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["c" /* number */])(that.values.posting)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入数字";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "司机驾驶证:",
        contact: "idcard",
        color: '#07c160',
        judge: false, //判断
        show: false,
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
            url: 'app!fileUpload', // 仅为示例，非真实的接口地址
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
        contact: "idcard",
        color: '#07c160',
        judge: false, //判断
        maxCount: 1,
        disabled: true,
        multiple: false,
        type: "upload",
        required: true,
        show: false,
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
        contact: "idcard",
        color: '#07c160',
        type: "upload",
        maxCount: 1,
        judge: true, //判断
        multiple: false,
        disabled: true,
        required: false,
        show: false,
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
        contact: "idcard",
        color: '#07c160',
        judge: true, //判断
        multiple: false,
        maxCount: 1,
        type: "upload",
        disabled: true,
        required: false,
        show: false
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
        contact: "idcard",
        color: '#07c160',
        maxCount: 1,
        judge: true, //判断
        multiple: false,
        type: "upload",
        disabled: true,
        show: false,
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
        contact: "idcard",
        color: '#07c160',
        maxCount: 1,
        judge: true, //判断
        multiple: false,
        type: "upload",
        disabled: true,
        show: false,
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
        contact: "idcard",
        color: '#07c160',
        maxCount: 1,
        judge: true, //判断
        multiple: false,
        type: "upload",
        disabled: true,
        show: false,
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
        contact: "idcard",
        color: '#07c160',
        type: "upload",
        disabled: true,
        required: false,
        show: false,
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
        title: "随行人员姓名(逗号分隔):",
        message: "",
        judge: true, //判断
        prop: "followMan",
        color: '#ff976a',
        disabled: false,
        placeholder: "请输入随行人员姓名",
        required: false,
        contact: "user-circle-o",
        change: function change(event, index) {
          that.values.followMan = event.mp.detail.value;
        }
      }, {
        type: "textarea",
        title: "申请说明",
        color: '#ee0a24',
        judge: false, //判断
        message: "请输入申请说明",
        prop: "remark",
        disabled: false,
        placeholder: "请输入申请说明",
        required: true,
        contact: "edit",
        change: function change(event, index) {
          that.values.remark = event.mp.detail.value;
          if (that.values.remark) {
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
    var _this2 = this;

    //访问单位
    this.$http.post({
      url: 'system/department!ajaxAppDepts',
      data: {}
    }).then(function (res) {
      if (res.result == "success") {
        res.data.map(function (item) {
          item.name = item.deptName;
        });
        _this2.formdata[0].actions = res.data;
      }
    });
  },

  methods: {
    //提交app!ajaxCommitTemp
    formSubmit: function formSubmit(event) {
      console.log(event);
    },
    clearImg: function clearImg(e) {
      console.log(e);
    }
  }
});

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "visitor"
  }, [_c('FormComponents', {
    attrs: {
      "formdata": _vm.formdata,
      "value": _vm.values,
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
     require("vue-hot-reload-api").rerender("data-v-7467729a", esExports)
  }
}

/***/ })

},[152]);