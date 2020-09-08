require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details__ = __webpack_require__(158);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__details__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_details_vue__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5dd6c3ea_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_details_vue__ = __webpack_require__(161);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(159)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_details_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5dd6c3ea_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_details_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\visitorDetails\\details.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] details.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5dd6c3ea", Component.options)
  } else {
    hotAPI.reload("data-v-5dd6c3ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 159:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_details__ = __webpack_require__(31);

//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: "details",
  data: function data() {
    var _ref;

    var that = this;
    return {
      value: {
        leixing: '访客临时通行卡'
      },
      formdata: [{
        title: "访问单位:",
        type: "text",
        disabled: true,
        prop: "fwdeptName",
        color: '#1989fa',
        contact: "wap-home-o",
        show: true
      }, {
        title: "预约来访时间:",
        color: '#07c160',
        contact: "underway-o",
        type: "text",
        prop: "begTime",
        disabled: true,
        show: true
      }, {
        title: "预约离开时间:",
        color: '#07c160',
        contact: "underway-o",
        type: "text",
        prop: "endTime",
        disabled: true,
        show: true
      }, {
        title: "所属企业:",
        show: true,
        type: "text",
        prop: "fromDeptName",
        disabled: true,
        contact: "wap-home-o",
        color: '#1989fa'
      }, {
        title: "访客姓名:",
        prop: "peopleName",
        show: true,
        type: "text",
        disabled: true,
        contact: "user-circle-o",
        color: '#1989fa'
      }, {
        title: "访客身份证号:",
        show: true,
        type: "text",
        prop: "idCard",
        disabled: true,
        contact: "idcard",
        color: '#1989fa'
      }, {
        title: "访客手机号:",
        show: true,
        type: "text",
        prop: "peopleTel",
        disabled: true,
        contact: "phone-circle-o",
        color: '#1989fa'
      }, {
        title: "入园方式:",
        type: "text",
        disabled: true,
        prop: "isOrnot",
        contact: "logistics",
        color: '#ee0a24'
      }, {
        title: "访客车牌号:",
        type: "text",
        prop: "load",
        disabled: true,
        show: false,
        contact: "logistics",
        color: '#ff976a'
      }, {
        title: "载重量:",
        show: false,
        type: "text",
        prop: "carNum",
        disabled: false,
        contact: "logistics",
        color: '#07c160'
      }, {
        title: "载客人数:",
        type: "text",
        prop: "carrays",
        show: false,
        disabled: true,
        contact: "friends-o",
        color: '#07c160'
      }, {
        title: "限载人数:",
        type: "text",
        prop: "posting",
        show: true,
        disabled: false,
        contact: "friends-o",
        color: '#ee0a24'
      }, {
        title: "司机驾驶证:",
        deletable: false,
        type: "upload",
        show: true,
        contact: "idcard",
        color: '#07c160',
        maxCount: 1,
        fileList: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg', name: '图片1' }]
      }, {
        title: "车辆行驶证:",
        contact: "idcard",
        deletable: false,
        type: "upload",
        maxCount: 1,
        fileList: [],
        show: true,
        color: '#07c160'
      }, (_ref = {
        title: "审批文件:",
        type: "upload",
        contact: "idcard",
        color: '#07c160',
        maxCount: 1,
        show: true
      }, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, "color", '#ff976a'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, "fileList", []), _ref), {
        title: "其他审批文件1:",
        color: '#ff976a',
        deletable: false,
        contact: "idcard",
        maxCount: 1,
        type: "upload",
        show: true,
        fileList: []
      }, {
        title: "其他审批文件2:",
        color: '#ff976a',
        deletable: false,
        contact: "idcard",
        maxCount: 1,
        type: "upload",
        show: true,
        fileList: []
      }, {
        title: "其他审批文件3:",
        deletable: false,
        contact: "idcard",
        maxCount: 1,
        type: "upload",
        color: '#1989fa',
        show: true,
        fileList: []
      }, {
        title: "其他审批文件4:",
        color: '#1989fa',
        deletable: false,
        contact: "idcard",
        maxCount: 1,
        type: "upload",
        show: true,
        fileList: []
      }, {
        title: "其他审批文件5:",
        deletable: false,
        contact: "idcard",
        color: '#1989fa',
        maxCount: 1,
        type: "upload",
        show: true,
        fileList: []
      }, {
        type: "textarea",
        title: "随行人员姓名(逗号分隔):",
        prop: "followMan",
        color: '#ff976a',
        disabled: true,
        contact: "user-circle-o"
      }, {
        type: "textarea",
        title: "申请说明",
        prop: "remark",
        color: '#ee0a24',
        disabled: true,
        contact: "edit"
      }]
    };
  },

  components: {
    detailsdom: __WEBPACK_IMPORTED_MODULE_1__components_details__["a" /* default */]
  }
});

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "details"
  }, [_c('detailsdom', {
    attrs: {
      "formdata": _vm.formdata,
      "value": _vm.value,
      "mpcomid": '0'
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
     require("vue-hot-reload-api").rerender("data-v-5dd6c3ea", esExports)
  }
}

/***/ })

},[157]);